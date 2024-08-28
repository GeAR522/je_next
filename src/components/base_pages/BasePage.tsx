import TopNavBar from '@/components/navbar/TopNavBar';
import CenteredContentContainer from '@/components/containers/CenteredContentContainer';
import { LoggedInProvider } from '@/app/contexts/loggedIn';

export default function BasePage({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-slate-900 min-h-screen">
      <LoggedInProvider>
        <div id="nav-container" className="sm:block hidden w-full">
          <TopNavBar />
        </div>
        <CenteredContentContainer>{children}</CenteredContentContainer>
      </LoggedInProvider>
    </main>
  );
}
