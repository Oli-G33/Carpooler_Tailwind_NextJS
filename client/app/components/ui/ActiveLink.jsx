'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  console.log(router.asPath);

  return (
    <Link href={href} passHref className={` ${isActive ? 'isActive' : ''}`}>
      {children}
    </Link>
  );
};

export default ActiveLink;
