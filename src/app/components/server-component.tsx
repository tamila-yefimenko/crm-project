export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponent({ children }: ServerComponentProps) {
  console.log('Server component');
  return (
    <div>
      <span>Server component</span>
      {children}
    </div>
  );
}
