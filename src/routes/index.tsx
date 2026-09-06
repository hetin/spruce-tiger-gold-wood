import { createFileRoute } from "@tanstack/react-router";
import { Workbench } from "@/components/workbench";
import { Overview } from "@/components/overview";
import { SelectionScreen } from "@/components/selection-screen";
import { AlvGrid } from "@/components/alv-grid";
import { SourceBrowser } from "@/components/source-browser";
import { InstallGuide } from "@/components/install-guide";
import { useReport } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const tab = useReport((s) => s.tab);
  return (
    <Workbench>
      {tab === "overview" && <Overview />}
      {tab === "selection" && <SelectionScreen />}
      {tab === "alv" && <AlvGrid />}
      {tab === "source" && <SourceBrowser />}
      {tab === "install" && <InstallGuide />}
    </Workbench>
  );
}
