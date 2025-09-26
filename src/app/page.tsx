import { headers } from 'next/headers';
import AddCompanyButton from '@/app/components/add-company-button';
import MagicButton from '@/app/components/magic-button';

export default function Home() {
  headers();
  return (
    <main>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
