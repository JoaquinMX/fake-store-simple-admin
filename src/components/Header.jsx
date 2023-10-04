import { useAuth } from '@/hooks/useAuth';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

const navigation = [
  { name: 'Users', href: '/users', current: false },
  { name: 'Products', href: '/products', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const auth = useAuth();

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 mb-8">
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link
                          onClick={() => auth.logout()}
                          
                          key="Logout"
                          href="/"
                          className={'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'}
                        >
                          Logout
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
      </Disclosure>
    </>
  );
}
