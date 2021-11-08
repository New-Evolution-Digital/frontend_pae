import React from 'react'

interface InputInterface {
  label?: {
    props?: React.DetailedHTMLProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >
    labelText?: string
  }
  input?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  error?: boolean
}

const LabeledInput: React.FC<InputInterface> = ({
  label,
  input,
  error = false
}) => {
  const inputProps = { ...input }

  delete inputProps.className

  return (
    <>
      {!!label && (
        <label
          {...label.props}
          className={
            label.props?.className ||
            `block text-sm font-medium ${
              error ? 'text-red-600' : 'text-gray-700'
            }`
          }
        >
          {label.labelText}
        </label>
      )}
      <div className="mt-1">
        <input
          {...inputProps}
          className={
            input?.className ||
            `appearance-none block w-full px-3 py-2 border ${
              error ? 'border-red-300 text-red-600' : 'border-gray-300'
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-700 sm:text-sm`
          }
        />
      </div>
    </>
  )
}

export default LabeledInput
