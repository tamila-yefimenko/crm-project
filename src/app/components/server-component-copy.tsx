export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentProps) {
  console.log('Server component copy');
  return (
    <div>
      <span>Server component copy</span>
      {children}
    </div>
  );
}
