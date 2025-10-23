import React from 'react';
import { SearchProvider } from '@/context/search-context';

export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  toolbar: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({
  children,
  header,
  toolbar,
  modal,
}: LayoutProps) {
  return (
    <>
      <SearchProvider>
        {modal}
        {header}
        <main>
          {toolbar}
          {children}
        </main>
      </SearchProvider>
    </>
  );
}
