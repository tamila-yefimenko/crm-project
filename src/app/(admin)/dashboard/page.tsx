import MagicButton from '@/app/components/magic-button';

export interface PageProps {}

export default function Page() {
  return (
    <main>
      <h1 className="text-xl">Dashboard page</h1>
      <MagicButton />
    </main>
  );
}
