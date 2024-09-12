interface MainLayoutProps {
  children: React.ReactNode;
}
function MainLayout({ children }: MainLayoutProps) {
  return <div className="h-auto w-full font-display">{children}</div>;
}

export default MainLayout;
