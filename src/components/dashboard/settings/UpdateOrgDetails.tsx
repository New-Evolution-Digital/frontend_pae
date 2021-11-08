import React, { FC, useEffect, useState } from 'react'

import {
  CheckCircleIcon,
  ExclamationIcon,
  XIcon
} from '@heroicons/react/outline'
import { Formik, FormikHelpers } from 'formik'
import { useSelector } from 'react-redux'

import {
  useUpdateOrganizationMutation,
  DealershipOrgInputs,
  Maybe
} from '../../../generated/types'
import { RootState, useAppDispatch } from '../../../redux'
import { setOrgState } from '../../../redux/reducers/org.reducer'
import LabeledInput from '../../common/Input'

interface IUpdateOrgDetails {}

const iv: DealershipOrgInputs & {
  [key: string]: Maybe<string> | Maybe<number> | undefined
} = {
  city: '',
  name: '',
  state: '',
  street_address: '',
  zip: undefined,
  default_dealer_number: undefined
}

const InputWrapper: FC = ({ children }) => {
  return (
    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
          {children}
        </div>
      </div>
    </div>
  )
}

const UpdateOrgDetails: FC<IUpdateOrgDetails> = () => {
  const [updateOrg] = useUpdateOrganizationMutation()
  const orgId = useSelector(({ org }: RootState) => org.org?.id || 0)
  const orgState: DealershipOrgInputs = useSelector(({ org }: RootState) => ({
    city: org.org?.city || '',
    default_dealer_number: org.org?.default_dealer_number || undefined,
    name: org.org?.name || '',
    state: org.org?.state || '',
    street_address: org.org?.street_address || '',
    zip: org.org?.zip || undefined
  }))
  const [initialValues] = useState(orgState || iv)
  const dispatch = useAppDispatch()
  const [orgError, setOrgError] = useState('')
  const [uploadSuccess, setUploadSuccess] = useState(false)

  useEffect(() => {
    if (orgId < 1) {
      setOrgError('No organization has been assigned to this Administrator')
    }
  }, [orgId])

  useEffect(() => {
    if (uploadSuccess) {
      setTimeout(() => setUploadSuccess(false), 1000 * 3)
    }
  }, [uploadSuccess])

  const submitFlow: (
    values: DealershipOrgInputs,
    formikHelpers: FormikHelpers<DealershipOrgInputs>
  ) => void | Promise<any> = async (values) => {
    if (orgState) {
      const updatedInfo = values
      if (updatedInfo.zip) updatedInfo.zip = parseInt(`${values.zip}`, 10)
      if (updatedInfo.zip)
        updatedInfo.default_dealer_number = parseInt(
          `${values.default_dealer_number}`,
          10
        )
      const res = await updateOrg({
        variables: { orgId, updatedInfo }
      })
      if (res.data) {
        // console.log(res.data)
        await dispatch(setOrgState(res.data.updateOrg))
        setUploadSuccess(true)
      }
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={submitFlow}>
      {({ handleSubmit, values, handleChange }) => (
        <form
          onSubmit={handleSubmit}
          className="space-y-8 divide-y divide-gray-200"
        >
          {orgError && (
            <div className="rounded-md bg-yellow-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    System Error
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>{orgError}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {uploadSuccess && (
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircleIcon
                    className="h-5 w-5 text-green-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Successfully uploaded
                  </p>
                </div>
                <div className="ml-auto pl-3">
                  <div className="-mx-1.5 -my-1.5">
                    <button
                      type="button"
                      className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                    >
                      <span className="sr-only">Dismiss</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <InputWrapper>
            <LabeledInput
              label={{
                labelText: 'Name',
                props: {
                  htmlFor: 'name',
                  className:
                    'block text-medium font-medium text-gray-700 sm:mt-px sm:pt-2'
                }
              }}
              input={{
                id: 'name',
                value: values.name as string,
                placeholder: 'Organization Name',
                onChange: handleChange
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <LabeledInput
              label={{
                labelText: 'Street Address',
                props: {
                  htmlFor: 'street_address',
                  className:
                    'block text-medium font-medium text-gray-700 sm:mt-px sm:pt-2'
                }
              }}
              input={{
                id: 'street_address',
                value: values.street_address as string,
                placeholder: 'Street Address',
                onChange: handleChange
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <LabeledInput
              label={{
                labelText: 'City',
                props: {
                  htmlFor: 'city',
                  className:
                    'block text-medium font-medium text-gray-700 sm:mt-px sm:pt-2'
                }
              }}
              input={{
                id: 'city',
                value: values.city as string,
                placeholder: 'City',
                onChange: handleChange
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <LabeledInput
              label={{
                labelText: 'State / Providence',
                props: {
                  htmlFor: 'state',
                  className:
                    'block text-medium font-medium text-gray-700 sm:mt-px sm:pt-2'
                }
              }}
              input={{
                id: 'state',
                value: values.state as string,
                placeholder: 'State',
                onChange: handleChange
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <LabeledInput
              label={{
                labelText: 'Zip / Postal Code',
                props: {
                  htmlFor: 'zip',
                  className:
                    'block text-medium font-medium text-gray-700 sm:mt-px sm:pt-2'
                }
              }}
              input={{
                id: 'zip',
                name: 'zip',
                value: values.zip as number,
                placeholder: 'Zip',
                onChange: handleChange
              }}
            />
          </InputWrapper>
          <InputWrapper>
            <LabeledInput
              label={{
                labelText: 'Default Dealer Number',
                props: {
                  htmlFor: 'default_dealer_number',
                  className:
                    'block text-medium font-medium text-gray-700 sm:mt-px sm:pt-2'
                }
              }}
              input={{
                id: 'default_dealer_number',
                value: values.default_dealer_number as number,
                placeholder: 'default_dealer_number',
                onChange: handleChange
              }}
            />
          </InputWrapper>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default UpdateOrgDetails
