const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-l from-[#6190e8] to-[#a7bfe8]">
      {children}
    </div>
  );
};

export default AuthLayout;
