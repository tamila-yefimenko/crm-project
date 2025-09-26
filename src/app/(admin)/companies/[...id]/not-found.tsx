import Link from 'next/link';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>Could not found company</p>
      <Link className="text-blue-500" href="/companies">
        Back to companies
      </Link>
    </div>
  );
}
