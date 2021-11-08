import React, { useEffect, useState } from 'react'

import { Formik, FormikHelpers } from 'formik'
import router from 'next/router'
import * as Yup from 'yup'

import {
  GetMeDocument,
  GetMeQuery,
  useGetOrgByAdminIdLazyQuery,
  useLoginMutation
} from '../generated/types'
import { useAppDispatch } from '../redux'
import { setOrgState } from '../redux/reducers/org.reducer'
import { setUser } from '../redux/reducers/user.reducer'
import { toErrorMap } from '../utils/toErrorMap'
import Input from './common/Input'

const LoginForm = () => {
  const [orgSearch, setOrgSearch] = useState(0)
  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()
  const [getOrg, { called, loading }] = useGetOrgByAdminIdLazyQuery({
    variables: { rootId: orgSearch },
    onCompleted: async ({ getOrgByAdminID }) => {
      if (getOrgByAdminID) {
        dispatch(setOrgState(getOrgByAdminID))
      }
    }
  })

  useEffect(() => {
    if (called && !loading) {
      if (typeof router.query.next === 'string') {
        router.push(router.query.next)
      } else {
        router.push('/dashboard')
      }
    }
  }, [called, loading])

  const schema = Yup.object({
    email: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .email('Must be a valid email')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .required('Required')
  })

  const submitLogin: (
    values: {
      email: string
      password: string
    },
    formikHelpers: FormikHelpers<{
      email: string
      password: string
    }>
  ) => void | Promise<any> = async (variables, { setErrors }) => {
    const response = await login({
      variables,
      update: (cache, { data }) => {
        cache.writeQuery<GetMeQuery>({
          query: GetMeDocument,
          data: {
            __typename: 'Query',
            me: data?.login.user
          }
        })
      }
    })

    const errors = response.data?.login.errors
    const user = response.data?.login.user
    if (errors) {
      setErrors(toErrorMap(errors))
    } else if (user) {
      await dispatch(setUser(user))
      setOrgSearch(parseInt(user.id, 10))
      getOrg()
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={submitLogin}
      validationSchema={schema}
    >
      {({
        handleSubmit,
        touched,
        errors,
        values,
        handleChange,
        handleBlur,
        isSubmitting
      }) => (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label={{
              labelText: 'Email',
              props: { htmlFor: 'email' }
            }}
            input={{
              id: 'email',
              name: 'email',
              type: 'email',
              autoComplete: 'email',
              required: true,
              value: values.email,
              onChange: handleChange,
              onBlur: handleBlur
            }}
            error={!!errors.email}
          />
          {touched.email && errors.email && (
            <small className="text-red-600">{errors.email.toUpperCase()}</small>
          )}
          <Input
            label={{
              labelText: 'Password',
              props: { htmlFor: 'password' }
            }}
            input={{
              id: 'password',
              name: 'password',
              type: 'password',
              autoComplete: 'current-password',
              required: true,
              value: values.password,
              onChange: handleChange,
              onBlur: handleBlur
            }}
            error={!!errors.password}
          />
          {touched.password && errors.password && (
            <small className="text-red-600">
              {errors.password.toUpperCase()}
            </small>
          )}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="disabled:bg-blue-400 w-full flex justify-center py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default LoginForm
