interface HeadingProps {
  children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className="inline-flex items-center font-heading text-3xl font-semibold bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent">
      {children}
    </h1>
  );
};
