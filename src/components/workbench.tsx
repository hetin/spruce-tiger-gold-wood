import {
  BookOpen,
  ClipboardList,
  Code2,
  LayoutGrid,
  Play,
  Table2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useReport, type TabId } from "@/lib/store";

const TABS: { id: TabId; label: string; icon: typeof Code2 }[] = [
  { id: "overview", label: "Overview", icon: LayoutGrid },
  { id: "selection", label: "Selection", icon: ClipboardList },
  { id: "alv", label: "ALV", icon: Table2 },
  { id: "source", label: "Source", icon: Code2 },
  { id: "install", label: "Install", icon: BookOpen },
];

export function Workbench({ children }: { children: React.ReactNode }) {
  const tab = useReport((s) => s.tab);
  const setTab = useReport((s) => s.setTab);
  const execute = useReport((s) => s.execute);
  const ran = useReport((s) => s.ran);
  const rows = useReport((s) => s.rows);

  return (
    <div className="min-h-dvh bg-bg text-fg flex flex-col">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6">
          <div className="flex size-9 items-center justify-center rounded-sm bg-accent text-accent-fg font-mono text-xs font-semibold tracking-tight">
            ZMM
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <h1 className="truncate text-base font-semibold tracking-tight">
                Material Master Report
              </h1>
              <span className="hidden font-mono text-xs text-muted sm:inline">
                ZMM_MAT_MASTER_RPT
              </span>
            </div>
            <p className="truncate text-xs text-muted">
              Comprehensive MM60 replacement · ECC 6.0 EHP7 / S/4HANA
            </p>
          </div>
          <button
            type="button"
            onClick={execute}
            className="inline-flex h-10 items-center gap-2 rounded-sm bg-ok px-3 text-sm font-semibold text-ok-fg hover:brightness-110"
          >
            <Play className="size-4" strokeWidth={2.2} />
            <span className="hidden sm:inline">Execute</span>
            <span className="font-mono text-[11px] opacity-80">F8</span>
          </button>
        </div>
        <nav className="mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-4 sm:px-6">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "relative flex shrink-0 items-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                <Icon className="size-4" />
                {t.label}
                {t.id === "alv" && ran && (
                  <span className="rounded-full bg-surface-3 px-1.5 font-mono text-[10px] text-accent-2">
                    {rows.length}
                  </span>
                )}
                {active && (
                  <span className="absolute inset-x-2 -bottom-px h-0.5 bg-accent" />
                )}
              </button>
            );
          })}
        </nav>
      </header>
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-5 sm:px-6 sm:py-6">
        {children}
      </main>
    </div>
  );
}
