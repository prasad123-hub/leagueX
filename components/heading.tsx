interface HeadingProps {
  children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className="inline-flex items-center bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text font-heading text-3xl font-semibold text-transparent">
      {children}
    </h1>
  );
};
