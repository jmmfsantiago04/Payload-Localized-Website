import React from 'react'

type ErrorProps = {
  locale?: string
}

export const Error: React.FC<ErrorProps> = ({ locale = 'en' }) => {
  const message = locale === 'ko' ? '이 필드는 필수입니다' : 'This field is required'

  return (
    <div className="text-red-500 text-sm mt-1">
      {message}
    </div>
  )
}
