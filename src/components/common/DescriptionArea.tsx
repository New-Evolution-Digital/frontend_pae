import { FC } from 'react'

interface IDescriptionArea {
  title?: string
  subtitle?: string
}

const DescriptionArea: FC<IDescriptionArea> = ({
  children,
  subtitle,
  title
}) => {
  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="pb-5 border-b border-gray-400">
          {title && (
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-2 max-w-4xl text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
      )}
      <div>{children}</div>
    </div>
  )
}

export default DescriptionArea
