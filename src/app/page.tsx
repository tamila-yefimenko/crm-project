import { headers } from 'next/headers';
import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  headers();
  return (
    <main>
      <AddCompanyButton />
    </main>
  );
}
