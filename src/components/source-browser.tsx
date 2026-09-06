import { useEffect, useMemo, useState } from "react";
import { Check, Copy, Download, Loader2 } from "lucide-react";
import { highlightLine, parseSections } from "@/lib/abap-highlight";
import { cn } from "@/lib/utils";

export function SourceBrowser() {
  const [src, setSrc] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let alive = true;
    fetch("/abap/zmm_mat_master_rpt.abap")
      .then((r) => {
        if (!r.ok) throw new Error("Could not load source");
        return r.text();
      })
      .then((t) => {
        if (alive) setSrc(t);
      })
      .catch((e: Error) => {
        if (alive) setErr(e.message);
      });
    return () => {
      alive = false;
    };
  }, []);

  const lines = useMemo(() => src.split("\n"), [src]);
  const sections = useMemo(() => (src ? parseSections(src) : []), [src]);

  async function copyAll() {
    await navigator.clipboard.writeText(src);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  function jump(start: number) {
    setActive(start);
    requestAnimationFrame(() => {
      const el = document.getElementById(`ln-${start + 1}`);
      const scroller = document.getElementById("abap-source");
      if (el && scroller) {
        const top = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop;
        scroller.scrollTo({ top: Math.max(0, top - 12) });
      }
    });
  }

  return (
    <div className="flex min-h-[70vh] flex-col gap-3 lg:flex-row">
      <aside className="lg:w-56 shrink-0 rounded-md border border-border bg-surface p-3">
        <p className="px-1 text-xs font-medium uppercase tracking-wide text-muted">Includes</p>
        <nav className="mt-2 flex max-h-[28vh] flex-col gap-0.5 overflow-auto lg:max-h-[70vh]">
          {sections.map((s) => (
            <button
              key={s.id + s.start}
              type="button"
              onClick={() => jump(s.start)}
              className={cn(
                "truncate rounded-xs px-2 py-1.5 text-left font-mono text-[11px] hover:bg-surface-2",
                active === s.start ? "bg-surface-3 text-fg" : "text-muted",
              )}
            >
              {s.title}
            </button>
          ))}
        </nav>
      </aside>

      <div className="min-w-0 flex-1 overflow-hidden rounded-md border border-border bg-editor">
        <div className="flex flex-wrap items-center gap-2 border-b border-border-strong px-3 py-2">
          <span className="font-mono text-xs text-muted">zmm_mat_master_rpt.abap</span>
          <span className="font-mono text-[11px] text-subtle">
            {src ? `${lines.length} lines` : ""}
          </span>
          <div className="ml-auto flex gap-2">
            <a
              href="/abap/zmm_mat_master_rpt.abap"
              download
              className="inline-flex h-8 items-center gap-1.5 rounded-xs bg-surface-3 px-2.5 text-xs text-fg hover:bg-border-strong"
            >
              <Download className="size-3.5" />
              Download
            </a>
            <button
              type="button"
              onClick={copyAll}
              disabled={!src}
              className="inline-flex h-8 items-center gap-1.5 rounded-xs bg-accent px-2.5 text-xs font-medium text-accent-fg disabled:opacity-40"
            >
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              {copied ? "Copied" : "Copy program"}
            </button>
          </div>
        </div>

        {!src && !err && (
          <div className="flex items-center gap-2 px-4 py-10 text-sm text-muted">
            <Loader2 className="size-4 animate-spin" />
            Loading source…
          </div>
        )}
        {err && <p className="px-4 py-8 text-sm text-err">{err}</p>}

        {src && (
          <pre id="abap-source" className="max-h-[72vh] overflow-auto p-0 text-[12px] leading-[1.55]">
            <code className="block font-mono">
              {lines.map((ln, i) => {
                const segs = highlightLine(ln);
                return (
                  <div
                    id={`ln-${i + 1}`}
                    key={i}
                    className="flex hover:bg-surface/40"
                  >
                    <span className="sticky left-0 w-12 shrink-0 select-none bg-editor pr-3 text-right text-[11px] text-subtle">
                      {i + 1}
                    </span>
                    <span className="whitespace-pre pr-6 text-editor-fg">
                      {segs.map((s, j) => (
                        <span
                          key={j}
                          className={
                            s.k === "cmt"
                              ? "text-code-cmt italic"
                              : s.k === "kw"
                                ? "text-code-kw"
                                : s.k === "str"
                                  ? "text-code-str"
                                  : s.k === "fn"
                                    ? "text-code-fn"
                                    : s.k === "num"
                                      ? "text-code-num"
                                      : "text-editor-fg"
                          }
                        >
                          {s.t}
                        </span>
                      ))}
                    </span>
                  </div>
                );
              })}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
}
