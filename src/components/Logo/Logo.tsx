import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="AceTour Logo"
      width={107}
      height={55}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[273pix]  h-[34px]', className)}
      src="https://irw541u1m0.ufs.sh/f/7pKBgPGy17Qdrff9L0z1pLWMICrnvojOQHkGVz1UhRg2EwJc"
    />
  )
}