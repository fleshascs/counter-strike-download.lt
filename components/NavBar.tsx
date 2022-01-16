import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import clsx from 'clsx';
import Image from './Image';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: (
      <>
        Add a Server <span className='text-amber-300'>FREE</span>
      </>
    ),
    href: '/add'
  },
  {
    name: <span className='text-amber-300'>CS 1.6 Download</span>,
    href: '/counter-strike-download'
  },
  { name: 'Contact', href: '/contact' }
];

export default function NavBar() {
  const router = useRouter();
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <span
                    className='block text-white'
                    style={{ fontFamily: 'bauerg', fontSize: '1.4em' }}
                  >
                    FL
                  </span>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div
                    className='flex space-x-4'
                    itemScope
                    itemType='https://schema.org/SiteNavigationElement'
                  >
                    {navigation.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <a
                          itemProp='url'
                          className={clsx(
                            item.href === router.pathname
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 text-xs uppercase '
                          )}
                          aria-current={item.href === router.pathname ? 'page' : undefined}
                        >
                          <span itemProp='name'>{item.name}</span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.href}
                  as='a'
                  href={item.href}
                  className={clsx(
                    item.href === router.pathname
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.href === router.pathname ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
