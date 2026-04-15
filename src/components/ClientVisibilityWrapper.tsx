'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

interface ClientVisibilityWrapperProps {
  children: React.ReactNode;
}

export default function ClientVisibilityWrapper({ children }: ClientVisibilityWrapperProps) {
  const pathname = usePathname();
  
  // Do not render anything inside this wrapper if we are on an admin route
  if (pathname?.includes('/admin')) {
    return null;
  }

  return <>{children}</>;
}
