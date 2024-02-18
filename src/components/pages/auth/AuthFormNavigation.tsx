import Link from 'next/link'

export const AuthFormNavigation = () => (
  <div className='mb-10 text-fs-18-lh-normal-fw-500'>
    <Link
      href='/signup'
      className='mr-[14px] text-white/30 aria-[current=page]:text-white'>
      Sign Up
    </Link>
    <Link
      href='/signin'
      className='text-white/30 aria-[current=page]:text-white'>
      Sign In
    </Link>
  </div>
)
