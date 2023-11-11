import MainNavbar from '@/app/(root)/_components/MainNavbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <MainNavbar />
      {children}
    </div>
  );
};

export default MainLayout;
