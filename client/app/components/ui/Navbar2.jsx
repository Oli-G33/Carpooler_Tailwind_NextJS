'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar
} from '@nextui-org/react';
import { AcmeLogo } from './AcmeLogo.jsx';
import DarkModeToggle from './DarkModeToggle.jsx';
import { useUser } from '@/app/state/UserContext.js';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import Image from 'next/image.js';

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { user, handleSignOut } = useUser();
  const { theme } = useTheme();
  const pathname = usePathname();

  console.log(pathname);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      shouldHideOnScroll
      className={`${
        theme === 'dark'
          ? 'bg-gray-900 border-gray-700'
          : 'bg-white border-gray-200'
      }`}
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary'
        ]
      }}
    >
      <NavbarBrand>
        <Image
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
          width={50}
          height={50}
        />
        <span
          className={`self-center text-xl lg:text-2xl mr-5 font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-blue-900'
          }  whitespace-nowrap `}
        >
          Carpooler™
        </span>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem isActive={pathname == '/'}>
          <Link color="foreground" href="/">
            Book
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == '/myRides'}>
          <Link color="foreground" href="/myRides">
            My Rides
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == '/dashboard'}>
          <Link href="dashboard" aria-current="page" color="foreground">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == '/terms'}>
          <Link color="foreground" href="/terms">
            Terms
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == '/contact'}>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <DarkModeToggle />
        <Dropdown placement="bottom-end">
          {user && (
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="Jason Hughes"
                size="sm"
                src={user.picture}
              />
            </DropdownTrigger>
          )}
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="profile"
              textValue="Avatar"
              className="gap-2 h-14"
            >
              {user && (
                <>
                  {' '}
                  <p className="font-semibold">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="font-semibold">{user.email}</p>{' '}
                </>
              )}
            </DropdownItem>
            <DropdownItem key="book" textValue="Book">
              <Link color="foreground" href="/">
                Book
              </Link>
            </DropdownItem>
            {/* {user &&
              user.isAdmin( */}
            <DropdownItem key="dashboard" textValue="dashboard">
              <Link href="dashboard" aria-current="page" color="foreground">
                Dashboard
              </Link>
            </DropdownItem>
            {/* )}*/}
            <DropdownItem key="MyRides" textValue="MyRides">
              <Link color="foreground" href="/myRides">
                My Rides
              </Link>
            </DropdownItem>
            <DropdownItem key="Terms" textValue="Terms">
              <Link color="foreground" href="/terms">
                Terms
              </Link>
            </DropdownItem>
            <DropdownItem key="Contact" textValue="Contact">
              <Link color="foreground" href="/contact">
                Contact
              </Link>
            </DropdownItem>
            <DropdownItem key="Logout" textValue="Logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default Navbar2;
