import headerNavLinks from '@/data/headerNavLinks';
import Logo from '@/data/logo.svg';
import siteMetadata from '@/data/siteMetadata';

import Footer from './Footer';
import Link from './Link';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className='flex flex-col justify-between h-screen'>
        <header className='flex items-center justify-between py-10'>
          <div>
            <Link href='/' aria-label='Tailwind CSS Blog'>
              <div className='flex items-center justify-between'>
                <div className='w-12 h-12 mr-3 rounded-full'>
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className='hidden h-6 ml-1 text-2xl font-semibold sm:block'>
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className='flex items-center text-base leading-5'>
            <div className='hidden sm:block'>
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100'
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
