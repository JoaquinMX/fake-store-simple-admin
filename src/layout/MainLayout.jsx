import Header from "@/components/Header";
import { useAuth } from '@/hooks/useAuth';
export default function MainLayout({ children }) {
  const auth = useAuth();
  return (
    <>
      <div className="min-h-full">
        {auth.token && <Header />}
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
