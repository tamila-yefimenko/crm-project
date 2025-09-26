'use client';

import Header from '@/app/components/header';
import { useEffect } from 'react';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Company ({String(params.id)})</Header>
    </>
  );
}
