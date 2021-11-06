import React from 'react'

import { Formik, FormikHelpers } from 'formik'
import router from 'next/router'
import * as Yup from 'yup'

import {
  GetMeDocument,
  GetMeQuery,
  useInitOrgMutation,
  useRegisterDealerAdminMutation
} from '../generated/types'
import { toErrorMap } from '../utils/toErrorMap'
import Input from './common/Input'

type RegisterInputType = {
  email: string
  username: string
  password: string
  confirmPassword: string
}

const RegisterForm: React.FC = () => {
  const [register] = useRegisterDealerAdminMutation()
  const [initOrg] = useInitOrgMutation()

  const schema = Yup.object({
    email: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .email('Must be a valid email')
      .required('Required'),
    username: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .required('Required'),
    confirmPassword: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const submitRegister: (
    values: RegisterInputType,
    formikHelpers: FormikHelpers<RegisterInputType>
  ) => void | Promise<any> = async (
    { username, email, password, confirmPassword },
    { setErrors }
  ) => {
    if (password === confirmPassword) {
      const response = await register({
        variables: { username, email, password },
        update: (cache, { data }) => {
          cache.writeQuery<GetMeQuery>({
            query: GetMeDocument,
            data: {
              __typename: 'Query',
              me: data?.registerDealerAdmin.user
            }
          })
        }
      })

      const errors = response.data?.registerDealerAdmin.errors
      if (errors) {
        setErrors(toErrorMap(errors))
      } else if (response.data?.registerDealerAdmin.user) {
        await initOrg({
          variables: {
            rootId: parseInt(response.data.registerDealerAdmin.user.id, 10)
          }
        })
        if (typeof router.query.next === 'string') {
          router.push(router.query.next)
        } else {
          router.push('/dashboard')
        }
      }
    } else {
      const message = "Passwords didn't match"
      setErrors(
        toErrorMap([
          { field: 'password', message },
          { field: 'confirmPassword', message }
        ])
      )
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={schema}
      onSubmit={submitRegister}
    >
      {({
        values,
        handleBlur,
        handleChange,
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        isValid
      }) => (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {console.log(errors)}
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
              labelText: 'Username',
              props: { htmlFor: 'username' }
            }}
            input={{
              id: 'username',
              name: 'username',
              autoComplete: 'username',
              required: true,
              value: values.username,
              onChange: handleChange,
              onBlur: handleBlur
            }}
            error={!!errors.username}
          />
          {touched.username && errors.username && (
            <small className="text-red-600">
              {errors.username.toUpperCase()}
            </small>
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
              autoComplete: 'new-password',
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
          <Input
            label={{
              labelText: 'Confirm Password',
              props: { htmlFor: 'cpassword' }
            }}
            input={{
              id: 'cpassword',
              name: 'confirmPassword',
              type: 'password',
              autoComplete: 'new-password',
              required: true,
              value: values.confirmPassword,
              onChange: handleChange,
              onBlur: handleBlur
            }}
            error={!!errors.confirmPassword}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <small className="text-red-600">
              {errors.confirmPassword.toUpperCase()}
            </small>
          )}
          <div>
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="disabled:bg-blue-400 w-full flex justify-center py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Join Now
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default RegisterForm
