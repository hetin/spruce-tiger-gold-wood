import { useMemo } from "react";
import { FileSpreadsheet, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReport } from "@/lib/store";
import type { MaterialRow } from "@/lib/sample-data";

type Col = {
  key: keyof MaterialRow | "status";
  label: string;
  show: boolean;
  align?: "right" | "left";
  mono?: boolean;
  fmt?: (r: MaterialRow) => string;
};

function money(n: number, ccy: string) {
  return `${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${ccy}`;
}

export function AlvGrid() {
  const rows = useReport((s) => s.rows);
  const cols = useReport((s) => s.cols);
  const grain = useReport((s) => s.grain);
  const ran = useReport((s) => s.ran);
  const selected = useReport((s) => s.selected);
  const setSelected = useReport((s) => s.setSelected);
  const setTab = useReport((s) => s.setTab);

  const showPlt = grain !== "basic";
  const showSal = cols.sls || grain === "sales" || grain === "full" || cols.sotxt;
  const showVal = cols.acct || grain === "valu" || grain === "full";

  const columns = useMemo<Col[]>(
    () => [
      { key: "status", label: "Sts", show: true },
      { key: "matnr", label: "Material", show: true, mono: true },
      { key: "maktx", label: "Description", show: true },
      { key: "werks", label: "Plant", show: showPlt, mono: true },
      { key: "name1", label: "Plant name", show: showPlt },
      { key: "lgort", label: "SLoc", show: grain === "stor", mono: true },
      { key: "vkorg", label: "SOrg", show: showSal, mono: true },
      { key: "vtweg", label: "DChl", show: showSal, mono: true },
      { key: "mtart", label: "Type", show: true, mono: true },
      { key: "matkl", label: "Group", show: true, mono: true },
      { key: "meins", label: "UoM", show: true },
      { key: "bwtty", label: "ValCat", show: showVal, mono: true },
      { key: "prctr", label: "Profit ctr", show: true, mono: true },
      { key: "ktext", label: "PrCtr name", show: true },
      { key: "dismm", label: "MRP ty", show: cols.mrp, mono: true },
      { key: "dispo", label: "MRP ctl", show: cols.mrp, mono: true },
      { key: "beskz", label: "Proc", show: cols.mrp, mono: true },
      { key: "disls", label: "Lot", show: cols.mrp, mono: true },
      { key: "maabc", label: "ABC", show: cols.mrp },
      { key: "minbe", label: "Reorder", show: cols.mrp, align: "right", fmt: (r) => String(r.minbe) },
      { key: "eisbe", label: "Safety", show: cols.mrp, align: "right", fmt: (r) => String(r.eisbe) },
      { key: "bklas", label: "Val. class", show: showVal, mono: true },
      { key: "bkbez", label: "VC text", show: showVal },
      { key: "vprsv", label: "Prc ctl", show: showVal },
      {
        key: "stprs",
        label: "Std price",
        show: showVal,
        align: "right",
        fmt: (r) => (r.vprsv === "S" ? money(r.stprs, r.waers) : ""),
      },
      {
        key: "verpr",
        label: "MAP",
        show: showVal,
        align: "right",
        fmt: (r) => (r.vprsv === "V" ? money(r.verpr, r.waers) : ""),
      },
      { key: "ekgrp", label: "PGrp", show: cols.pur, mono: true },
      { key: "ktgrm", label: "Acct grp", show: showSal, mono: true },
      { key: "vmsta", label: "Sls sts", show: showSal, mono: true },
      { key: "labst", label: "Unrestr.", show: cols.stk, align: "right", fmt: (r) => r.labst.toLocaleString() },
      { key: "insme", label: "QI", show: cols.stk, align: "right", fmt: (r) => r.insme.toLocaleString() },
      { key: "speme", label: "Blocked", show: cols.stk, align: "right", fmt: (r) => r.speme.toLocaleString() },
      { key: "poText", label: "PO text (BEST)", show: cols.potxt },
      { key: "soText", label: "SO text (0001)", show: cols.sotxt },
      { key: "basicText", label: "Basic text", show: cols.bstxt },
      { key: "ersda", label: "Created", show: true, mono: true },
    ],
    [cols, grain, showPlt, showSal, showVal],
  );

  const visible = columns.filter((c) => c.show);

  const totals = useMemo(() => {
    return rows.reduce(
      (a, r) => {
        a.labst += r.labst;
        a.insme += r.insme;
        a.speme += r.speme;
        a.salk3 += r.salk3;
        return a;
      },
      { labst: 0, insme: 0, speme: 0, salk3: 0 },
    );
  }, [rows]);

  function cell(col: Col, r: MaterialRow) {
    if (col.key === "status") {
      const color =
        r.status === "ok" ? "bg-ok" : r.status === "warn" ? "bg-warn" : "bg-err";
      return <span className={cn("inline-block size-2.5 rounded-full", color)} />;
    }
    if (col.fmt) return col.fmt(r);
    const v = r[col.key];
    if (typeof v === "boolean") return v ? "X" : "";
    return String(v ?? "");
  }

  function exportCsv() {
    const header = visible.map((c) => c.label).join(";");
    const body = rows.map((r) =>
      visible
        .map((c) => {
          const raw = cell(c, r);
          const text = typeof raw === "string" ? raw : r.status;
          return `"${String(text).replaceAll('"', '""')}"`;
        })
        .join(";"),
    );
    const blob = new Blob([[header, ...body].join("\n")], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ZMM_MAT_MASTER_DEMO.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-sm text-muted">
          {ran ? (
            <>
              <span className="font-semibold text-fg">{rows.length}</span> rows · grain{" "}
              <span className="font-mono text-fg">{grain}</span>
            </>
          ) : (
            <>Demo data · press Execute (F8) on the selection screen to apply filters</>
          )}
        </p>
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={() => setTab("selection")}
            className="inline-flex h-9 items-center gap-2 rounded-sm border border-border-strong px-3 text-sm hover:bg-surface-2"
          >
            <Filter className="size-3.5" />
            Selection
          </button>
          <button
            type="button"
            onClick={exportCsv}
            className="inline-flex h-9 items-center gap-2 rounded-sm border border-border-strong px-3 text-sm hover:bg-surface-2"
          >
            <FileSpreadsheet className="size-3.5" />
            CSV
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border border-border bg-surface">
        <div className="overflow-auto">
          <table className="min-w-max text-left text-[13px]">
            <thead>
              <tr className="bg-alv-head text-on-head">
                {visible.map((c) => (
                  <th
                    key={c.key}
                    className={cn(
                      "sticky top-0 whitespace-nowrap border-r border-on-head/10 px-2.5 py-2 font-medium",
                      c.align === "right" && "text-right",
                    )}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={visible.length} className="px-4 py-12 text-center text-muted">
                    No data for the current selection. Widen the filter or include deletion flags.
                  </td>
                </tr>
              )}
              {rows.map((r, i) => {
                const id = `${r.matnr}-${r.werks}-${r.lgort}-${r.vkorg}-${i}`;
                const on = selected === r;
                return (
                  <tr
                    key={id}
                    onClick={() => setSelected(on ? null : r)}
                    className={cn(
                      "cursor-pointer border-b border-border/80",
                      on ? "bg-accent/15" : i % 2 === 0 ? "bg-surface" : "bg-surface-2",
                      "hover:bg-accent/10",
                    )}
                  >
                    {visible.map((c) => (
                      <td
                        key={c.key}
                        className={cn(
                          "max-w-[22rem] truncate whitespace-nowrap px-2.5 py-1.5",
                          c.mono && "font-mono text-[12px]",
                          c.align === "right" && "text-right tabular-nums",
                          c.key === "matnr" && "font-medium text-accent-2 underline-offset-2 hover:underline",
                        )}
                      >
                        {cell(c, r)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
            {rows.length > 0 && cols.stk && (
              <tfoot>
                <tr className="bg-surface-3 font-medium">
                  {visible.map((c) => (
                    <td
                      key={c.key}
                      className={cn(
                        "px-2.5 py-2 tabular-nums",
                        c.align === "right" && "text-right",
                      )}
                    >
                      {c.key === "matnr"
                        ? "Σ"
                        : c.key === "labst"
                          ? totals.labst.toLocaleString()
                          : c.key === "insme"
                            ? totals.insme.toLocaleString()
                            : c.key === "speme"
                              ? totals.speme.toLocaleString()
                              : ""}
                    </td>
                  ))}
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>

      {selected && (
        <aside className="rounded-md border border-border bg-surface p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs text-accent-2">MM03 · double-click target</p>
              <h3 className="text-lg font-semibold tracking-tight">
                {selected.matnr}
                <span className="ml-2 text-base font-normal text-muted">{selected.maktx}</span>
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="flex size-9 items-center justify-center rounded-sm hover:bg-surface-2"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>
          <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Plant", `${selected.werks} ${selected.name1}`],
              ["Type / group", `${selected.mtart} · ${selected.matkl} ${selected.wgbez}`],
              ["MRP", `${selected.dismm} / ${selected.dispo} / lot ${selected.disls}`],
              ["Valuation", `${selected.bklas} ${selected.bkbez} · ${selected.vprsv}`],
              ["Profit center", `${selected.prctr} ${selected.ktext}`],
              ["Sales", selected.vkorg ? `${selected.vkorg} / ${selected.vtweg}` : "—"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs text-muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          {cols.potxt && selected.poText && (
            <p className="mt-3 border-t border-border pt-3 text-sm">
              <span className="text-xs font-medium uppercase tracking-wide text-muted">PO text</span>
              <br />
              {selected.poText}
            </p>
          )}
          {cols.sotxt && selected.soText && (
            <p className="mt-2 text-sm">
              <span className="text-xs font-medium uppercase tracking-wide text-muted">SO text</span>
              <br />
              {selected.soText}
            </p>
          )}
        </aside>
      )}
    </div>
  );
}
