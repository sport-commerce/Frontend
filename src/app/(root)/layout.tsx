import MainNavbar from '@/components/layout/MainNavbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <MainNavbar />
      {children}
    </div>
  );
};

export default MainLayout;
