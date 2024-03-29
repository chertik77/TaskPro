import Link from 'next/link'

const HomePage = () => (
  <div className='flex h-dvh flex-col items-center justify-center bg-welcome-page-gradient adaptive:px-5'>
    <picture>
      <source
        media='(min-width: 768px)'
        srcSet='/images/Welcome_tab_desktop.avif 1x, /images/Welcome_tab_desktop@2x.avif 2x'
      />
      <source
        media='(max-width: 767px)'
        srcSet='/images/Welcome_phone.avif 1x, /images/Welcome_phone@2x.avif 2x'
      />
      <img
        src='images/Welcome_tab_desktop.avif'
        alt='user-with-notebook'
        loading='lazy'
      />
    </picture>
    <div className='mt-6 flex items-center gap-[14px]'>
      <svg className='size-10 tablet:size-12'>
        <use xlinkHref='/assets/icons.svg#icon-logo' />
      </svg>
      <h1 className='text-fs-28-lh-normal-fw-600 text-black tablet:text-fs-40-lh-normal-fw-600'>
        Task Pro
      </h1>
    </div>
    <p className='mt-6 w-[335px] text-center text-fs-14-lh-1.28-fw-400 text-black adaptive:w-full tablet:w-[473px]'>
      Supercharge your productivity and take control of your tasks with Task Pro
      - Don't wait, start achieving your goals now!
    </p>
    <Link
      href='/signup'
      className='mt-12 inline-block h-[49px] w-[335px] rounded-lg bg-black py-[14px] text-center text-fs-14-lh-normal-fw-500 text-white adaptive:w-full'>
      Registration
    </Link>
    <Link href='/signin' className='mt-[14px] text-black'>
      Log In
    </Link>
  </div>
)

export default HomePage
