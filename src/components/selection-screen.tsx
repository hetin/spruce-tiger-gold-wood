import { useState } from "react";
import { Play, RotateCcw, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReport } from "@/lib/store";
import type { ColFlags, Grain } from "@/lib/sample-data";

type SelTab = "mat" | "plt" | "val" | "sls" | "txt" | "out";

const TABS: { id: SelTab; label: string }[] = [
  { id: "mat", label: "Material" },
  { id: "plt", label: "Plant / MRP" },
  { id: "val", label: "Valuation" },
  { id: "sls", label: "Sales" },
  { id: "txt", label: "Texts" },
  { id: "out", label: "Output" },
];

const GRAINS: { id: Grain; label: string; hint: string }[] = [
  { id: "plant", label: "Plant level", hint: "1 row = material + plant  (default)" },
  { id: "basic", label: "Material level", hint: "1 row = MARA only" },
  { id: "stor", label: "Storage loc. level", hint: "1 row = material + plant + SLoc" },
  { id: "valu", label: "Valuation level", hint: "1 row = material + val. area + type" },
  { id: "sales", label: "Sales area level", hint: "1 row = material + SOrg + DChl" },
  { id: "full", label: "Plant + Acct + Sales", hint: "Plant grain, extra columns joined" },
];

const COLS: { id: keyof ColFlags; label: string }[] = [
  { id: "mrp", label: "MRP / Planning" },
  { id: "acct", label: "Accounting" },
  { id: "pur", label: "Purchasing" },
  { id: "sls", label: "Sales columns" },
  { id: "wh", label: "Warehouse" },
  { id: "qm", label: "Quality" },
  { id: "stk", label: "Stock (MB52-like)" },
  { id: "del", label: "Include deletion flags" },
];

function So({
  label,
  value,
  onChange,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid grid-cols-[minmax(7.5rem,9.5rem)_1fr] items-center gap-2 text-[13px] text-gui-fg">
      <span className="truncate font-medium">{label}</span>
      <span className="flex items-center gap-1">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="h-8 min-w-0 flex-1 rounded-xs border border-gui-line bg-paper px-2 font-mono text-[13px] text-gui-fg outline-none focus:border-alv-head"
        />
        <span className="flex size-8 items-center justify-center border border-gui-line bg-gui-panel font-mono text-xs text-subtle">
          →
        </span>
        <input
          readOnly
          className="h-8 w-[28%] min-w-16 rounded-xs border border-gui-line bg-paper px-2 font-mono text-[13px] text-subtle"
          placeholder="to"
        />
        <span
          title="Multiple selection (SAP)"
          className="flex size-8 items-center justify-center border border-gui-line bg-gui-panel text-[11px] text-alv-head"
        >
          ▤
        </span>
      </span>
    </label>
  );
}

function Check({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-[13px] text-gui-fg">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="size-3.5 accent-alv-head"
      />
      {label}
    </label>
  );
}

export function SelectionScreen() {
  const [stab, setStab] = useState<SelTab>("mat");
  const q = useReport((s) => s.query);
  const setQuery = useReport((s) => s.setQuery);
  const grain = useReport((s) => s.grain);
  const setGrain = useReport((s) => s.setGrain);
  const cols = useReport((s) => s.cols);
  const setCol = useReport((s) => s.setCol);
  const execute = useReport((s) => s.execute);
  const reset = useReport((s) => s.reset);
  const maxHits = useReport((s) => s.maxHits);
  const setMaxHits = useReport((s) => s.setMaxHits);
  const langu = useReport((s) => s.langu);
  const setLangu = useReport((s) => s.setLangu);

  return (
    <div className="overflow-hidden rounded-lg border border-border shadow-panel">
      <div className="flex items-center gap-2 bg-gui-head px-3 py-1.5 text-[13px] text-on-head">
        <Square className="size-3.5 fill-on-head/90" />
        <span className="font-semibold tracking-wide">
          Comprehensive Material Master Report
        </span>
        <span className="ml-auto font-mono text-[11px] text-on-head/70">
          ZMM_MAT_MASTER_RPT
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-1 border-b border-gui-line bg-gui-bar px-2 py-1 text-[12px] text-gui-fg">
        {["Program", "Edit", "Goto", "Selection screen", "System", "Help"].map((m) => (
          <span key={m} className="px-2 py-1">
            {m}
          </span>
        ))}
        <span className="ml-auto flex gap-1">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-7 items-center gap-1 rounded-xs border border-gui-line bg-gui-panel px-2"
          >
            <RotateCcw className="size-3" /> Reset
          </button>
          <button
            type="button"
            onClick={execute}
            className="inline-flex h-7 items-center gap-1 rounded-xs bg-ok px-2 font-semibold text-ok-fg"
          >
            <Play className="size-3" /> Execute (F8)
          </button>
        </span>
      </div>

      <div className="bg-gui-panel p-3 sm:p-4">
        <div className="flex gap-0 overflow-x-auto border-b border-gui-line">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setStab(t.id)}
              className={cn(
                "shrink-0 border border-b-0 px-3 py-1.5 text-[13px]",
                stab === t.id
                  ? "border-gui-line bg-gui-panel font-semibold text-gui-fg"
                  : "border-transparent bg-gui-tab text-gui-fg/80",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <fieldset className="border border-gui-line p-3 sm:p-4">
          {stab === "mat" && (
            <div className="grid gap-2 md:grid-cols-2">
              <So label="Material" value={q.matnr} onChange={(v) => setQuery({ matnr: v })} placeholder="100-5100" />
              <So label="Material Type" value={q.mtart} onChange={(v) => setQuery({ mtart: v })} placeholder="ROH, FERT…" />
              <So label="Material Group" value={q.matkl} onChange={(v) => setQuery({ matkl: v })} />
              <So label="Industry Sector" value="" onChange={() => {}} />
              <So label="Division" value="" onChange={() => {}} />
              <So label="Prod. Hierarchy" value="" onChange={() => {}} />
              <So label="EAN/UPC" value="" onChange={() => {}} />
              <So label="X-Plant Status" value="" onChange={() => {}} />
              <So label="Val. Category" value="" onChange={() => {}} />
              <So label="Created On" value="" onChange={() => {}} />
              <So label="Created By" value="" onChange={() => {}} />
              <So label="Last Change" value="" onChange={() => {}} />
            </div>
          )}
          {stab === "plt" && (
            <div className="grid gap-2 md:grid-cols-2">
              <So label="Plant" value={q.werks} onChange={(v) => setQuery({ werks: v })} placeholder="1000" />
              <So label="Storage Loc." value="" onChange={() => {}} />
              <So label="Plant Status" value="" onChange={() => {}} />
              <So label="Purch. Group" value="" onChange={() => {}} />
              <So label="MRP Controller" value={q.dispo} onChange={(v) => setQuery({ dispo: v })} placeholder="001" />
              <So label="MRP Type" value={q.dismm} onChange={(v) => setQuery({ dismm: v })} placeholder="PD / VB / ND" />
              <So label="Procurement" value="" onChange={() => {}} />
              <So label="Spec. Proc." value="" onChange={() => {}} />
              <So label="Lot Size Key" value="" onChange={() => {}} />
              <So label="ABC Indicator" value="" onChange={() => {}} />
              <So label="Profit Center" value={q.prctr} onChange={(v) => setQuery({ prctr: v })} placeholder="P1000" />
              <So label="Strategy Group" value="" onChange={() => {}} />
              <So label="Supervisor" value="" onChange={() => {}} />
              <So label="Issue SLoc" value="" onChange={() => {}} />
            </div>
          )}
          {stab === "val" && (
            <div className="grid gap-2 md:grid-cols-2">
              <So label="Val. Area" value="" onChange={() => {}} placeholder="= plant in most orgs" />
              <So label="Val. Class" value={q.bklas} onChange={(v) => setQuery({ bklas: v })} placeholder="3000" />
              <So label="Val. Type" value="" onChange={() => {}} />
              <So label="Price Control" value="" onChange={() => {}} placeholder="S / V" />
              <p className="md:col-span-2 text-[12px] text-gui-fg/70">
                Valuation area is usually the plant. Empty valuation type = standard header record
                (not split-valuation batches).
              </p>
            </div>
          )}
          {stab === "sls" && (
            <div className="grid gap-2 md:grid-cols-2">
              <So label="Sales Org." value={q.vkorg} onChange={(v) => setQuery({ vkorg: v })} placeholder="1000" />
              <So label="Dist. Channel" value={q.vtweg} onChange={(v) => setQuery({ vtweg: v })} placeholder="10" />
              <So label="Acct Assn Grp" value="" onChange={() => {}} />
              <So label="Sales Status" value="" onChange={() => {}} />
              <So label="Dlv. Plant" value="" onChange={() => {}} />
              <So label="Sales Unit" value="" onChange={() => {}} />
              <p className="md:col-span-2 text-[12px] text-gui-fg/70">
                Required for Sales columns and SO text (object MVKE, ID 0001). Name =
                MATNR + VKORG + VTWEG, RESPECTING BLANKS.
              </p>
            </div>
          )}
          {stab === "txt" && (
            <div className="grid gap-3">
              <Check checked={cols.potxt} onChange={(v) => setCol("potxt", v)} label="PO text (MATERIAL / BEST)" />
              <Check checked={cols.sotxt} onChange={(v) => setCol("sotxt", v)} label="SO text (MVKE / 0001)" />
              <Check checked={cols.bstxt} onChange={(v) => setCol("bstxt", v)} label="Basic text (MATERIAL / GRUN)" />
              <Check checked label="SO fallback language D (German)" onChange={() => {}} />
              <label className="flex items-center gap-2 text-[13px] text-gui-fg">
                <span className="w-28 font-medium">Language</span>
                <input
                  value={langu}
                  onChange={(e) => setLangu(e.target.value)}
                  className="h-8 w-20 rounded-xs border border-gui-line bg-paper px-2 font-mono text-[13px]"
                />
              </label>
              <p className="text-[12px] text-gui-fg/70">
                Same READ_TEXT mapping as ZMD_R_MATERIAL_F01 and ZMD_R_SMATERIAL_F01. Lines
                table and buffer are cleared per material so texts never bleed across rows.
              </p>
            </div>
          )}
          {stab === "out" && (
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <p className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-gui-fg/70">
                  Output grain (row key)
                </p>
                <div className="grid gap-1.5">
                  {GRAINS.map((g) => (
                    <label key={g.id} className="flex cursor-pointer items-start gap-2 text-[13px] text-gui-fg">
                      <input
                        type="radio"
                        name="grain"
                        checked={grain === g.id}
                        onChange={() => setGrain(g.id)}
                        className="mt-0.5 accent-alv-head"
                      />
                      <span>
                        <span className="font-medium">{g.label}</span>
                        <span className="block text-[12px] text-gui-fg/65">{g.hint}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-gui-fg/70">
                  Column groups
                </p>
                <div className="grid gap-1.5">
                  {COLS.map((c) => (
                    <Check
                      key={c.id}
                      checked={cols[c.id]}
                      onChange={(v) => setCol(c.id, v)}
                      label={c.label}
                    />
                  ))}
                </div>
                <label className="mt-4 flex items-center gap-2 text-[13px] text-gui-fg">
                  <span className="w-28 font-medium">Maximum hits</span>
                  <input
                    type="number"
                    value={maxHits}
                    onChange={(e) => setMaxHits(Number(e.target.value) || 0)}
                    className="h-8 w-28 rounded-xs border border-gui-line bg-paper px-2 font-mono text-[13px]"
                  />
                </label>
              </div>
            </div>
          )}
        </fieldset>
        <p className="mt-3 font-mono text-[11px] text-gui-fg/60">
          Ln 1  Col 1 &nbsp;|&nbsp; ABAP &nbsp;|&nbsp; Client 100 &nbsp;|&nbsp; Ready
        </p>
      </div>
    </div>
  );
}
