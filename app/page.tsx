import { PageShell } from "./_shared/layout/page-shell";
import { HomeExperience } from "./_components/home-experience";

export default function HomeRoute() {
  return (
    <PageShell>
      <HomeExperience />
    </PageShell>
  );
}