import { create } from "zustand";
import {
  DEFAULT_COLS,
  SAMPLE,
  filterRows,
  uniqueGrain,
  type ColFlags,
  type Grain,
  type MaterialRow,
} from "./sample-data";

export type TabId = "overview" | "selection" | "alv" | "source" | "install";

type Query = {
  matnr: string;
  werks: string;
  mtart: string;
  matkl: string;
  dismm: string;
  dispo: string;
  bklas: string;
  prctr: string;
  vkorg: string;
  vtweg: string;
};

type State = {
  tab: TabId;
  setTab: (t: TabId) => void;
  query: Query;
  setQuery: (p: Partial<Query>) => void;
  grain: Grain;
  setGrain: (g: Grain) => void;
  cols: ColFlags;
  setCol: (k: keyof ColFlags, v: boolean) => void;
  maxHits: number;
  setMaxHits: (n: number) => void;
  langu: string;
  setLangu: (s: string) => void;
  ran: boolean;
  rows: MaterialRow[];
  selected: MaterialRow | null;
  setSelected: (r: MaterialRow | null) => void;
  execute: () => void;
  reset: () => void;
};

const emptyQuery: Query = {
  matnr: "",
  werks: "",
  mtart: "",
  matkl: "",
  dismm: "",
  dispo: "",
  bklas: "",
  prctr: "",
  vkorg: "",
  vtweg: "",
};

export const useReport = create<State>((set, get) => ({
  tab: "overview",
  setTab: (tab) => set({ tab }),
  query: { ...emptyQuery },
  setQuery: (p) => set({ query: { ...get().query, ...p } }),
  grain: "plant",
  setGrain: (grain) => set({ grain }),
  cols: { ...DEFAULT_COLS },
  setCol: (k, v) => set({ cols: { ...get().cols, [k]: v } }),
  maxHits: 10000,
  setMaxHits: (maxHits) => set({ maxHits }),
  langu: "EN",
  setLangu: (langu) => set({ langu }),
  ran: false,
  rows: SAMPLE,
  selected: null,
  setSelected: (selected) => set({ selected }),
  execute: () => {
    const { query, grain, cols, maxHits } = get();
    const filtered = uniqueGrain(
      filterRows(SAMPLE, { ...query, includeDel: cols.del }),
      grain,
    ).slice(0, Math.max(1, maxHits));
    set({ rows: filtered, ran: true, tab: "alv", selected: null });
  },
  reset: () =>
    set({
      query: { ...emptyQuery },
      grain: "plant",
      cols: { ...DEFAULT_COLS },
      maxHits: 10000,
      langu: "EN",
      rows: SAMPLE,
      ran: false,
      selected: null,
    }),
}));
