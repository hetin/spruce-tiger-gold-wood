import {
  ArrowRight,
  Database,
  FileText,
  Filter,
  ShieldCheck,
  Table2,
} from "lucide-react";
import { useReport } from "@/lib/store";

const CARDS = [
  {
    icon: Filter,
    title: "MB51-style selection",
    body: "Six tabs: Material, Plant/MRP, Valuation, Sales, Texts, Output. Select-options on 40+ fields, not a single material box like MM60.",
  },
  {
    icon: Table2,
    title: "You pick the grain",
    body: "Radio buttons for Material, Plant (default), Storage location, Valuation, Sales area, or Plant+Acct+Sales. Column groups switch independently.",
  },
  {
    icon: FileText,
    title: "PO & SO texts",
    body: "MATERIAL/BEST for PO text. MVKE/0001 with CONCATENATE MATNR+VKORG+VTWEG RESPECTING BLANKS for SO text, plus language D fallback — your includes.",
  },
  {
    icon: Database,
    title: "The real tables",
    body: "MARA, MAKT, MARC, MARD, MBEW, MVKE, STXH plus texts T001W T134T T023T T025T CEPCT. Stock columns like MB52. Hotspot to MM03.",
  },
  {
    icon: ShieldCheck,
    title: "Safe to run wide",
    body: "Requires Material, Plant, Type, Group, Sales org or Val. area. Plant auth M_MATE_WRK. Max hits. Deletion flags off by default.",
  },
];

export function Overview() {
  const setTab = useReport((s) => s.setTab);
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-lg border border-border bg-surface p-6 shadow-panel sm:p-8">
        <p className="font-mono text-xs tracking-wide text-accent-2">SE38 · Executable</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          One report instead of MM60 + MMBE + a text dump
        </h2>
        <p className="mt-3 max-w-prose text-muted">
          Paste <span className="font-mono text-fg">ZMM_MAT_MASTER_RPT</span> into SE38,
          activate, run. Selection screen is tabbed like MB51. Output is CL_SALV_TABLE
          with layout variants, Excel, filter, and double-click into MM03.
        </p>
        <ul className="mt-5 grid gap-2 text-sm text-fg">
          {[
            "Default grain: Material + Plant (MARA ⋈ MARC)",
            "Valuation class, category, price control, MAP / std price, profit center",
            "MRP type, controller, lot size, procurement, safety / reorder",
            "Optional stock (unrestricted, QI, blocked) and sales view",
            "PO text BEST, SO text 0001, basic text GRUN",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setTab("selection")}
            className="inline-flex h-10 items-center gap-2 rounded-sm bg-accent px-4 text-sm font-semibold text-accent-fg"
          >
            Open selection screen
            <ArrowRight className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setTab("source")}
            className="inline-flex h-10 items-center gap-2 rounded-sm border border-border-strong px-4 text-sm font-medium hover:bg-surface-2"
          >
            Copy ABAP
          </button>
        </div>
      </section>

      <aside className="grid gap-3">
        {CARDS.map((c) => (
          <article
            key={c.title}
            className="rounded-md border border-border bg-surface p-4 sm:p-5"
          >
            <div className="flex items-center gap-2">
              <c.icon className="size-4 text-accent-2" />
              <h3 className="text-sm font-semibold">{c.title}</h3>
            </div>
            <p className="mt-1.5 text-sm text-muted">{c.body}</p>
          </article>
        ))}
      </aside>
    </div>
  );
}
