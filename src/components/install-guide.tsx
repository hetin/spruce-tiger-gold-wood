import { Check } from "lucide-react";

const STEPS = [
  {
    n: "1",
    title: "Create the program",
    body: "SE38 or SE80 → Executable program ZMM_MAT_MASTER_RPT. Unicode, status SAP Standard Production. Package $TMP (or ZMM if you transport).",
  },
  {
    n: "2",
    title: "Paste the source",
    body: "Open the Source tab, Copy program, paste over the template, Save. Do not keep the default REPORT z… line twice — the file already starts with REPORT zmm_mat_master_rpt.",
  },
  {
    n: "3",
    title: "Text elements (optional)",
    body: "Goto → Text Elements → Selection Texts. Runtime already fills labels via %_S_MATNR_%_APP_%-TEXT, so the report runs without this. Compare text symbols if you want them persisted.",
  },
  {
    n: "4",
    title: "Activate",
    body: "Ctrl+F3. If a MARC field is missing on a very old EHP, comment that column in the SELECT list and in FORM col. CL_SALV_TABLE needs NetWeaver 7.0+.",
  },
  {
    n: "5",
    title: "Authorize",
    body: "Users need M_MATE_WRK ACTVT=03 for each plant they run. The report skips unauthorized plants and shows the count in the ALV header. S_TCODE if you wrap it in a role.",
  },
  {
    n: "6",
    title: "Run",
    body: "F8. Enter at least Material, Plant, Type, Group, Sales org or Val. area. Default grain is Plant. Tick PO text (on) / SO text as needed. Save an ALV layout.",
  },
];

export function InstallGuide() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <ol className="grid gap-3">
        {STEPS.map((s) => (
          <li key={s.n} className="flex gap-4 rounded-md border border-border bg-surface p-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-surface-3 font-mono text-sm text-accent-2">
              {s.n}
            </span>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="grid gap-3 self-start">
        <section className="rounded-md border border-border bg-surface p-5">
          <h3 className="font-semibold">PO / SO text mapping</h3>
          <table className="mt-3 w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="py-1 pr-2">Text</th>
                <th className="py-1 pr-2">Object</th>
                <th className="py-1 pr-2">ID</th>
                <th className="py-1">TDNAME</th>
              </tr>
            </thead>
            <tbody className="font-mono text-[12px]">
              <tr className="border-t border-border">
                <td className="py-2 pr-2 font-sans">PO</td>
                <td>MATERIAL</td>
                <td>BEST</td>
                <td>MATNR (internal)</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-2 pr-2 font-sans">SO</td>
                <td>MVKE</td>
                <td>0001</td>
                <td>MATNR+VKORG+VTWEG</td>
              </tr>
              <tr className="border-t border-border">
                <td className="py-2 pr-2 font-sans">Basic</td>
                <td>MATERIAL</td>
                <td>GRUN</td>
                <td>MATNR</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm text-muted">
            SO name uses CONCATENATE … RESPECTING BLANKS so the 18- vs 40-character MATNR
            offset stays correct. If logon language misses the sales text, language D is tried.
          </p>
        </section>

        <section className="rounded-md border border-border bg-surface p-5">
          <h3 className="font-semibold">Assumptions baked in</h3>
          <ul className="mt-2 grid gap-1.5 text-sm text-muted">
            {[
              "ECC 6.0 EHP7 (7.40) or S/4HANA",
              "Valuation area = plant for accounting columns",
              "Empty valuation type = header MBEW record",
              "Deletion-flagged materials excluded unless ticked",
              "String templates / inline DATA / CL_SALV_TABLE",
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-ok" />
                {x}
              </li>
            ))}
          </ul>
        </section>

        <a
          href="/abap/TEXT_ELEMENTS.txt"
          download
          className="rounded-md border border-border bg-surface px-5 py-4 text-sm hover:bg-surface-2"
        >
          <span className="font-semibold text-fg">Download TEXT_ELEMENTS.txt</span>
          <span className="mt-1 block text-muted">
            Selection texts and text symbols if you want them in the program object.
          </span>
        </a>
      </div>
    </div>
  );
}
