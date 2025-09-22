'use client';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log('Client component');
  return (
    <div>
      <span>Client component</span>
      {children}
    </div>
  );
}
