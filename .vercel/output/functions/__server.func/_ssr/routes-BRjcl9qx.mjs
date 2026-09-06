import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ClipboardList, a as ShieldCheck, b as ArrowRight, c as LoaderCircle, d as FileText, f as FileSpreadsheet, g as CodeXml, h as Copy, i as Square, l as LayoutGrid, m as Database, o as RotateCcw, p as Download, r as Table2, s as Play, t as X, u as Funnel, v as Check, y as BookOpen } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BRjcl9qx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var PLANTS = {
	"1000": "Manufacturing Plant",
	"1100": "Assembly Plant",
	"2000": "Distribution Center"
};
var SAMPLE = [
	{
		status: "ok",
		matnr: "100-1000",
		maktx: "Hot rolled steel plate 12mm",
		werks: "1000",
		name1: PLANTS["1000"],
		lgort: "0001",
		lgobe: "Main warehouse",
		bwkey: "1000",
		bwtar: "",
		vkorg: "1000",
		vtweg: "10",
		mtart: "ROH",
		mtbez: "Raw material",
		matkl: "00101",
		wgbez: "Steel plates",
		meins: "KG",
		ean11: "8901234560001",
		spart: "00",
		mstae: "",
		bwtty: "",
		xchpf: false,
		ersda: "2024-03-12",
		ernam: "MM_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "A01",
		dismm: "PD",
		dispo: "001",
		disls: "EX",
		beskz: "F",
		sobsl: "",
		minbe: 2500,
		eisbe: 800,
		maabc: "A",
		plifz: 21,
		prctr: "P1000",
		ktext: "Steel operations",
		strgr: "40",
		fevor: "001",
		bklas: "3000",
		bkbez: "Raw materials",
		vprsv: "V",
		peinh: 1,
		waers: "USD",
		stprs: 0,
		verpr: .86,
		salk3: 18420,
		labst: 21418.6,
		insme: 0,
		speme: 120,
		vmsta: "",
		vrkme: "KG",
		dwerk: "1000",
		ktgrm: "01",
		mtpos: "NORM",
		poText: "HR plate IS 2062 E250, mill cert 3.1 required. Thickness 12mm ±0.3.",
		soText: "Sold by kg. Surface oil allowed. Packing: wooden pallets, max 2.5 t.",
		basicText: "Structural steel plate for fabrication of frames and bases."
	},
	{
		status: "ok",
		matnr: "100-1000",
		maktx: "Hot rolled steel plate 12mm",
		werks: "1100",
		name1: PLANTS["1100"],
		lgort: "0001",
		lgobe: "Raw store",
		bwkey: "1100",
		bwtar: "",
		vkorg: "1000",
		vtweg: "10",
		mtart: "ROH",
		mtbez: "Raw material",
		matkl: "00101",
		wgbez: "Steel plates",
		meins: "KG",
		ean11: "8901234560001",
		spart: "00",
		mstae: "",
		bwtty: "",
		xchpf: false,
		ersda: "2024-03-12",
		ernam: "MM_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "A01",
		dismm: "VB",
		dispo: "002",
		disls: "HB",
		beskz: "F",
		sobsl: "",
		minbe: 900,
		eisbe: 200,
		maabc: "B",
		plifz: 18,
		prctr: "P1100",
		ktext: "Assembly ops",
		strgr: "40",
		fevor: "002",
		bklas: "3000",
		bkbez: "Raw materials",
		vprsv: "V",
		peinh: 1,
		waers: "USD",
		stprs: 0,
		verpr: .88,
		salk3: 4224,
		labst: 4800,
		insme: 0,
		speme: 0,
		vmsta: "",
		vrkme: "KG",
		dwerk: "1100",
		ktgrm: "01",
		mtpos: "NORM",
		poText: "HR plate IS 2062 E250, mill cert 3.1 required. Thickness 12mm ±0.3.",
		soText: "Sold by kg. Surface oil allowed.",
		basicText: "Structural steel plate for fabrication of frames and bases."
	},
	{
		status: "ok",
		matnr: "100-2410",
		maktx: "Electrolytic copper cathode 99.99%",
		werks: "1000",
		name1: PLANTS["1000"],
		lgort: "0002",
		lgobe: "Non-ferrous",
		bwkey: "1000",
		bwtar: "",
		vkorg: "1000",
		vtweg: "10",
		mtart: "ROH",
		mtbez: "Raw material",
		matkl: "00120",
		wgbez: "Non-ferrous",
		meins: "KG",
		ean11: "8901234560018",
		spart: "00",
		mstae: "",
		bwtty: "",
		xchpf: true,
		ersda: "2023-11-02",
		ernam: "MM_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "A02",
		dismm: "PD",
		dispo: "001",
		disls: "EX",
		beskz: "F",
		sobsl: "",
		minbe: 400,
		eisbe: 80,
		maabc: "A",
		plifz: 35,
		prctr: "P1000",
		ktext: "Steel operations",
		strgr: "10",
		fevor: "001",
		bklas: "3001",
		bkbez: "Non-ferrous RM",
		vprsv: "V",
		peinh: 1,
		waers: "USD",
		stprs: 0,
		verpr: 9.42,
		salk3: 18840,
		labst: 2e3,
		insme: 250,
		speme: 0,
		vmsta: "",
		vrkme: "KG",
		dwerk: "1000",
		ktgrm: "01",
		mtpos: "NORM",
		poText: "LME Grade A cathode. Origin to be declared on COA. Palletized, shrink-wrapped.",
		soText: "Not for resale. Internal consumption only.",
		basicText: "Copper cathode for winding and busbar production."
	},
	{
		status: "ok",
		matnr: "200-3100",
		maktx: "Machined drive shaft Ø45 x 380",
		werks: "1000",
		name1: PLANTS["1000"],
		lgort: "0010",
		lgobe: "WIP store",
		bwkey: "1000",
		bwtar: "",
		vkorg: "1000",
		vtweg: "10",
		mtart: "HALB",
		mtbez: "Semifinished",
		matkl: "00210",
		wgbez: "Shafts",
		meins: "PC",
		ean11: "",
		spart: "01",
		mstae: "",
		bwtty: "",
		xchpf: false,
		ersda: "2024-01-18",
		ernam: "PP_PLANNER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "B10",
		dismm: "PD",
		dispo: "010",
		disls: "EX",
		beskz: "E",
		sobsl: "",
		minbe: 40,
		eisbe: 10,
		maabc: "A",
		plifz: 0,
		prctr: "P1000",
		ktext: "Steel operations",
		strgr: "40",
		fevor: "010",
		bklas: "7900",
		bkbez: "Semifinished",
		vprsv: "S",
		peinh: 1,
		waers: "USD",
		stprs: 48.5,
		verpr: 0,
		salk3: 4850,
		labst: 100,
		insme: 8,
		speme: 0,
		vmsta: "",
		vrkme: "PC",
		dwerk: "1000",
		ktgrm: "02",
		mtpos: "NORM",
		poText: "Subcontract allowed. Drawing DS-3100 rev C. Ra 1.6 on bearing seats.",
		soText: "Not sold standalone. Component of FG 300-5100.",
		basicText: "EN8 shaft, induction hardened journals."
	},
	{
		status: "ok",
		matnr: "200-3100",
		maktx: "Machined drive shaft Ø45 x 380",
		werks: "1100",
		name1: PLANTS["1100"],
		lgort: "0010",
		lgobe: "Line stock",
		bwkey: "1100",
		bwtar: "",
		vkorg: "1000",
		vtweg: "10",
		mtart: "HALB",
		mtbez: "Semifinished",
		matkl: "00210",
		wgbez: "Shafts",
		meins: "PC",
		ean11: "",
		spart: "01",
		mstae: "",
		bwtty: "",
		xchpf: false,
		ersda: "2024-01-18",
		ernam: "PP_PLANNER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "B10",
		dismm: "PD",
		dispo: "011",
		disls: "EX",
		beskz: "F",
		sobsl: "40",
		minbe: 20,
		eisbe: 5,
		maabc: "B",
		plifz: 5,
		prctr: "P1100",
		ktext: "Assembly ops",
		strgr: "40",
		fevor: "011",
		bklas: "7900",
		bkbez: "Semifinished",
		vprsv: "S",
		peinh: 1,
		waers: "USD",
		stprs: 49.1,
		verpr: 0,
		salk3: 1473,
		labst: 30,
		insme: 0,
		speme: 0,
		vmsta: "",
		vrkme: "PC",
		dwerk: "1100",
		ktgrm: "02",
		mtpos: "NORM",
		poText: "Stock transfer from plant 1000. Do not purchase externally.",
		soText: "Not sold standalone.",
		basicText: "EN8 shaft, induction hardened journals."
	},
	{
		status: "ok",
		matnr: "300-5100",
		maktx: "3.0 kW IE3 induction motor 4P B3",
		werks: "1100",
		name1: PLANTS["1100"],
		lgort: "0001",
		lgobe: "FG warehouse",
		bwkey: "1100",
		bwtar: "",
		vkorg: "1000",
		vtweg: "10",
		mtart: "FERT",
		mtbez: "Finished product",
		matkl: "00301",
		wgbez: "Motors",
		meins: "PC",
		ean11: "8901234560512",
		spart: "01",
		mstae: "",
		bwtty: "",
		xchpf: true,
		ersda: "2022-06-01",
		ernam: "SD_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "",
		dismm: "PD",
		dispo: "020",
		disls: "EX",
		beskz: "E",
		sobsl: "",
		minbe: 15,
		eisbe: 5,
		maabc: "A",
		plifz: 0,
		prctr: "P1100",
		ktext: "Assembly ops",
		strgr: "40",
		fevor: "020",
		bklas: "7920",
		bkbez: "Finished goods",
		vprsv: "S",
		peinh: 1,
		waers: "USD",
		stprs: 312,
		verpr: 0,
		salk3: 18720,
		labst: 60,
		insme: 2,
		speme: 0,
		vmsta: "",
		vrkme: "PC",
		dwerk: "1100",
		ktgrm: "03",
		mtpos: "NORM",
		poText: "",
		soText: "IE3, 400V 50Hz, IP55, IC411. Nameplate language: EN. Warranty 18 months.",
		basicText: "Cast iron frame motor. Terminal box top. Paint RAL 5010."
	},
	{
		status: "ok",
		matnr: "300-5100",
		maktx: "3.0 kW IE3 induction motor 4P B3",
		werks: "2000",
		name1: PLANTS["2000"],
		lgort: "0001",
		lgobe: "DC bin",
		bwkey: "2000",
		bwtar: "",
		vkorg: "2000",
		vtweg: "10",
		mtart: "FERT",
		mtbez: "Finished product",
		matkl: "00301",
		wgbez: "Motors",
		meins: "PC",
		ean11: "8901234560512",
		spart: "01",
		mstae: "",
		bwtty: "",
		xchpf: true,
		ersda: "2022-06-01",
		ernam: "SD_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "",
		dismm: "ND",
		dispo: "030",
		disls: "",
		beskz: "F",
		sobsl: "40",
		minbe: 0,
		eisbe: 0,
		maabc: "A",
		plifz: 3,
		prctr: "P2000",
		ktext: "Distribution",
		strgr: "",
		fevor: "",
		bklas: "7920",
		bkbez: "Finished goods",
		vprsv: "S",
		peinh: 1,
		waers: "USD",
		stprs: 312,
		verpr: 0,
		salk3: 9360,
		labst: 30,
		insme: 0,
		speme: 0,
		vmsta: "",
		vrkme: "PC",
		dwerk: "2000",
		ktgrm: "03",
		mtpos: "NORM",
		poText: "",
		soText: "IE3, 400V 50Hz, IP55. DC 2000 ships within 48 hrs if unrestricted > 0.",
		basicText: "Cast iron frame motor. Terminal box top. Paint RAL 5010."
	},
	{
		status: "warn",
		matnr: "300-5220",
		maktx: "7.5 kW IE3 induction motor 4P B5",
		werks: "1100",
		name1: PLANTS["1100"],
		lgort: "0001",
		lgobe: "FG warehouse",
		bwkey: "1100",
		bwtar: "",
		vkorg: "1000",
		vtweg: "10",
		mtart: "FERT",
		mtbez: "Finished product",
		matkl: "00301",
		wgbez: "Motors",
		meins: "PC",
		ean11: "8901234560529",
		spart: "01",
		mstae: "01",
		bwtty: "",
		xchpf: true,
		ersda: "2021-09-14",
		ernam: "SD_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "01",
		ekgrp: "",
		dismm: "PD",
		dispo: "020",
		disls: "EX",
		beskz: "E",
		sobsl: "",
		minbe: 8,
		eisbe: 2,
		maabc: "B",
		plifz: 0,
		prctr: "P1100",
		ktext: "Assembly ops",
		strgr: "40",
		fevor: "020",
		bklas: "7920",
		bkbez: "Finished goods",
		vprsv: "S",
		peinh: 1,
		waers: "USD",
		stprs: 540,
		verpr: 0,
		salk3: 5400,
		labst: 10,
		insme: 0,
		speme: 1,
		vmsta: "01",
		vrkme: "PC",
		dwerk: "1100",
		ktgrm: "03",
		mtpos: "NORM",
		poText: "",
		soText: "Successor 300-5221. Do not quote after 31.12.2026. Remaining stock only.",
		basicText: "Flange mount B5. Being replaced by IE4 variant."
	},
	{
		status: "ok",
		matnr: "400-1100",
		maktx: "Deep groove ball bearing 6308-2RS",
		werks: "1000",
		name1: PLANTS["1000"],
		lgort: "0001",
		lgobe: "Main warehouse",
		bwkey: "1000",
		bwtar: "",
		vkorg: "1000",
		vtweg: "20",
		mtart: "HAWA",
		mtbez: "Trading goods",
		matkl: "00402",
		wgbez: "Bearings",
		meins: "PC",
		ean11: "7316570013089",
		spart: "02",
		mstae: "",
		bwtty: "",
		xchpf: false,
		ersda: "2020-04-09",
		ernam: "MM_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "C20",
		dismm: "VB",
		dispo: "040",
		disls: "HB",
		beskz: "F",
		sobsl: "",
		minbe: 80,
		eisbe: 20,
		maabc: "C",
		plifz: 14,
		prctr: "P1000",
		ktext: "Steel operations",
		strgr: "10",
		fevor: "",
		bklas: "3100",
		bkbez: "Trading goods",
		vprsv: "V",
		peinh: 1,
		waers: "USD",
		stprs: 0,
		verpr: 6.4,
		salk3: 1920,
		labst: 300,
		insme: 0,
		speme: 0,
		vmsta: "",
		vrkme: "PC",
		dwerk: "1000",
		ktgrm: "04",
		mtpos: "NORM",
		poText: "Preferred mfr SKF / FAG / NSK. C3 clearance. Rubber seal both sides.",
		soText: "Sold in box of 10. No mix of brands on one delivery.",
		basicText: "ISO 15:2017 6308, 40x90x23 mm."
	},
	{
		status: "ok",
		matnr: "400-1100",
		maktx: "Deep groove ball bearing 6308-2RS",
		werks: "2000",
		name1: PLANTS["2000"],
		lgort: "0001",
		lgobe: "DC bin",
		bwkey: "2000",
		bwtar: "",
		vkorg: "2000",
		vtweg: "20",
		mtart: "HAWA",
		mtbez: "Trading goods",
		matkl: "00402",
		wgbez: "Bearings",
		meins: "PC",
		ean11: "7316570013089",
		spart: "02",
		mstae: "",
		bwtty: "",
		xchpf: false,
		ersda: "2020-04-09",
		ernam: "MM_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "C20",
		dismm: "VB",
		dispo: "041",
		disls: "HB",
		beskz: "F",
		sobsl: "",
		minbe: 120,
		eisbe: 30,
		maabc: "B",
		plifz: 7,
		prctr: "P2000",
		ktext: "Distribution",
		strgr: "10",
		fevor: "",
		bklas: "3100",
		bkbez: "Trading goods",
		vprsv: "V",
		peinh: 1,
		waers: "USD",
		stprs: 0,
		verpr: 6.55,
		salk3: 2620,
		labst: 400,
		insme: 0,
		speme: 12,
		vmsta: "",
		vrkme: "PC",
		dwerk: "2000",
		ktgrm: "04",
		mtpos: "NORM",
		poText: "Preferred mfr SKF / FAG / NSK. C3 clearance.",
		soText: "Retail pack. Barcode on inner box.",
		basicText: "ISO 15:2017 6308, 40x90x23 mm."
	},
	{
		status: "ok",
		matnr: "500-0100",
		maktx: "Corrugated carton 400x300x250 5-ply",
		werks: "1100",
		name1: PLANTS["1100"],
		lgort: "0050",
		lgobe: "Packing",
		bwkey: "1100",
		bwtar: "",
		vkorg: "1000",
		vtweg: "10",
		mtart: "VERP",
		mtbez: "Packaging",
		matkl: "00500",
		wgbez: "Cartons",
		meins: "PC",
		ean11: "",
		spart: "00",
		mstae: "",
		bwtty: "",
		xchpf: false,
		ersda: "2023-02-20",
		ernam: "MM_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "D01",
		dismm: "VB",
		dispo: "050",
		disls: "HB",
		beskz: "F",
		sobsl: "",
		minbe: 500,
		eisbe: 100,
		maabc: "C",
		plifz: 10,
		prctr: "P1100",
		ktext: "Assembly ops",
		strgr: "",
		fevor: "",
		bklas: "3050",
		bkbez: "Packaging",
		vprsv: "V",
		peinh: 1,
		waers: "USD",
		stprs: 0,
		verpr: .42,
		salk3: 840,
		labst: 2e3,
		insme: 0,
		speme: 0,
		vmsta: "",
		vrkme: "PC",
		dwerk: "1100",
		ktgrm: "05",
		mtpos: "LEER",
		poText: "Bursting strength ≥ 12 kg/cm². Print: company logo 1-color.",
		soText: "",
		basicText: "Export carton for motor 3.0 kW."
	},
	{
		status: "ok",
		matnr: "100-3300",
		maktx: "Hydraulic oil ISO VG 46 (bulk)",
		werks: "1000",
		name1: PLANTS["1000"],
		lgort: "0003",
		lgobe: "Fluids",
		bwkey: "1000",
		bwtar: "",
		vkorg: "",
		vtweg: "",
		mtart: "ROH",
		mtbez: "Raw material",
		matkl: "00180",
		wgbez: "Lubricants",
		meins: "L",
		ean11: "",
		spart: "00",
		mstae: "",
		bwtty: "",
		xchpf: false,
		ersda: "2024-07-01",
		ernam: "MM_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "A03",
		dismm: "VB",
		dispo: "001",
		disls: "HB",
		beskz: "F",
		sobsl: "",
		minbe: 800,
		eisbe: 200,
		maabc: "B",
		plifz: 12,
		prctr: "P1000",
		ktext: "Steel operations",
		strgr: "",
		fevor: "",
		bklas: "3000",
		bkbez: "Raw materials",
		vprsv: "V",
		peinh: 1,
		waers: "USD",
		stprs: 0,
		verpr: 1.15,
		salk3: 2300,
		labst: 2e3,
		insme: 0,
		speme: 0,
		vmsta: "",
		vrkme: "L",
		dwerk: "",
		ktgrm: "",
		mtpos: "",
		poText: "ISO VG 46, zinc-free. COA per tanker. UN 3082 — environmentally hazardous.",
		soText: "",
		basicText: "Bulk hydraulic oil for press shop."
	},
	{
		status: "del",
		matnr: "300-4000",
		maktx: "Legacy 2.2 kW IE1 motor (obsolete)",
		werks: "1100",
		name1: PLANTS["1100"],
		lgort: "0001",
		lgobe: "FG warehouse",
		bwkey: "1100",
		bwtar: "",
		vkorg: "1000",
		vtweg: "10",
		mtart: "FERT",
		mtbez: "Finished product",
		matkl: "00301",
		wgbez: "Motors",
		meins: "PC",
		ean11: "",
		spart: "01",
		mstae: "02",
		bwtty: "",
		xchpf: false,
		ersda: "2016-01-11",
		ernam: "LEGACY",
		lvorm: true,
		dlplt: true,
		mmsta: "02",
		ekgrp: "",
		dismm: "ND",
		dispo: "020",
		disls: "",
		beskz: "E",
		sobsl: "",
		minbe: 0,
		eisbe: 0,
		maabc: "",
		plifz: 0,
		prctr: "P1100",
		ktext: "Assembly ops",
		strgr: "",
		fevor: "",
		bklas: "7920",
		bkbez: "Finished goods",
		vprsv: "S",
		peinh: 1,
		waers: "USD",
		stprs: 180,
		verpr: 0,
		salk3: 0,
		labst: 0,
		insme: 0,
		speme: 0,
		vmsta: "02",
		vrkme: "PC",
		dwerk: "1100",
		ktgrm: "03",
		mtpos: "NORM",
		poText: "",
		soText: "Obsolete. Do not sell. Successor 300-5100.",
		basicText: "Flagged for deletion at client and plant."
	},
	{
		status: "ok",
		matnr: "200-8800",
		maktx: "Stator winding kit 3.0 kW copper",
		werks: "1100",
		name1: PLANTS["1100"],
		lgort: "0011",
		lgobe: "Electrical WIP",
		bwkey: "1100",
		bwtar: "",
		vkorg: "",
		vtweg: "",
		mtart: "HALB",
		mtbez: "Semifinished",
		matkl: "00240",
		wgbez: "Windings",
		meins: "PC",
		ean11: "",
		spart: "01",
		mstae: "",
		bwtty: "X",
		xchpf: true,
		ersda: "2024-05-22",
		ernam: "PP_PLANNER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "B11",
		dismm: "PD",
		dispo: "012",
		disls: "EX",
		beskz: "E",
		sobsl: "",
		minbe: 12,
		eisbe: 4,
		maabc: "A",
		plifz: 0,
		prctr: "P1100",
		ktext: "Assembly ops",
		strgr: "40",
		fevor: "012",
		bklas: "7900",
		bkbez: "Semifinished",
		vprsv: "S",
		peinh: 1,
		waers: "USD",
		stprs: 76,
		verpr: 0,
		salk3: 1520,
		labst: 20,
		insme: 0,
		speme: 0,
		vmsta: "",
		vrkme: "",
		dwerk: "",
		ktgrm: "",
		mtpos: "",
		poText: "Split valuated (category X). Copper grade per drawing SW-8800.",
		soText: "",
		basicText: "In-house wound stator. Class F insulation."
	},
	{
		status: "ok",
		matnr: "400-2200",
		maktx: "VFD 3.0 kW 400V IP20",
		werks: "2000",
		name1: PLANTS["2000"],
		lgort: "0001",
		lgobe: "DC bin",
		bwkey: "2000",
		bwtar: "",
		vkorg: "2000",
		vtweg: "10",
		mtart: "HAWA",
		mtbez: "Trading goods",
		matkl: "00410",
		wgbez: "Drives",
		meins: "PC",
		ean11: "8901234562201",
		spart: "02",
		mstae: "",
		bwtty: "",
		xchpf: false,
		ersda: "2025-01-08",
		ernam: "MM_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "",
		ekgrp: "C21",
		dismm: "PD",
		dispo: "041",
		disls: "EX",
		beskz: "F",
		sobsl: "",
		minbe: 6,
		eisbe: 2,
		maabc: "A",
		plifz: 28,
		prctr: "P2000",
		ktext: "Distribution",
		strgr: "10",
		fevor: "",
		bklas: "3100",
		bkbez: "Trading goods",
		vprsv: "V",
		peinh: 1,
		waers: "USD",
		stprs: 0,
		verpr: 215,
		salk3: 2580,
		labst: 12,
		insme: 1,
		speme: 0,
		vmsta: "",
		vrkme: "PC",
		dwerk: "2000",
		ktgrm: "04",
		mtpos: "NORM",
		poText: "Brand: ABB ACS580 or Siemens G120C equivalent. EMC filter onboard.",
		soText: "Sold with motor 300-5100 as kit. Parameter set P-3100 on request.",
		basicText: "3-phase VFD for 3.0 kW IE3 motor."
	},
	{
		status: "warn",
		matnr: "100-1000",
		maktx: "Hot rolled steel plate 12mm",
		werks: "2000",
		name1: PLANTS["2000"],
		lgort: "0001",
		lgobe: "DC bin",
		bwkey: "2000",
		bwtar: "",
		vkorg: "2000",
		vtweg: "10",
		mtart: "ROH",
		mtbez: "Raw material",
		matkl: "00101",
		wgbez: "Steel plates",
		meins: "KG",
		ean11: "8901234560001",
		spart: "00",
		mstae: "",
		bwtty: "",
		xchpf: false,
		ersda: "2024-03-12",
		ernam: "MM_MASTER",
		lvorm: false,
		dlplt: false,
		mmsta: "Z1",
		ekgrp: "A01",
		dismm: "ND",
		dispo: "030",
		disls: "",
		beskz: "F",
		sobsl: "",
		minbe: 0,
		eisbe: 0,
		maabc: "C",
		plifz: 0,
		prctr: "P2000",
		ktext: "Distribution",
		strgr: "",
		fevor: "",
		bklas: "3000",
		bkbez: "Raw materials",
		vprsv: "V",
		peinh: 1,
		waers: "USD",
		stprs: 0,
		verpr: .86,
		salk3: 86,
		labst: 100,
		insme: 0,
		speme: 0,
		vmsta: "",
		vrkme: "KG",
		dwerk: "2000",
		ktgrm: "01",
		mtpos: "NORM",
		poText: "Do not replenish at DC. Residual stock only.",
		soText: "Not sold from DC 2000.",
		basicText: "Structural steel plate for fabrication of frames and bases."
	}
];
var DEFAULT_COLS = {
	mrp: true,
	acct: true,
	pur: false,
	sls: false,
	wh: false,
	qm: false,
	stk: true,
	potxt: true,
	sotxt: false,
	bstxt: false,
	del: false
};
function filterRows(rows, q) {
	const m = q.matnr.trim().toLowerCase();
	const w = q.werks.trim();
	const t = q.mtart.trim().toUpperCase();
	const g = q.matkl.trim();
	const d = q.dismm.trim().toUpperCase();
	const c = q.dispo.trim();
	const v = q.bklas.trim();
	const p = q.prctr.trim().toUpperCase();
	const s = q.vkorg.trim();
	return rows.filter((r) => {
		if (!q.includeDel && (r.lvorm || r.dlplt)) return false;
		if (m && !r.matnr.toLowerCase().includes(m) && !r.maktx.toLowerCase().includes(m)) return false;
		if (w && r.werks !== w) return false;
		if (t && r.mtart !== t) return false;
		if (g && !r.matkl.includes(g)) return false;
		if (d && r.dismm !== d) return false;
		if (c && r.dispo !== c) return false;
		if (v && r.bklas !== v) return false;
		if (p && r.prctr !== p) return false;
		if (s && r.vkorg !== s) return false;
		return true;
	});
}
function uniqueGrain(rows, grain) {
	if (grain === "plant" || grain === "full" || grain === "stor") return rows;
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const r of rows) {
		const key = grain === "basic" ? r.matnr : grain === "valu" ? `${r.matnr}|${r.bwkey}|${r.bwtar}` : `${r.matnr}|${r.vkorg}|${r.vtweg}`;
		if (seen.has(key)) continue;
		seen.add(key);
		out.push(r);
	}
	return out;
}
var emptyQuery = {
	matnr: "",
	werks: "",
	mtart: "",
	matkl: "",
	dismm: "",
	dispo: "",
	bklas: "",
	prctr: "",
	vkorg: "",
	vtweg: ""
};
var useReport = create((set, get) => ({
	tab: "overview",
	setTab: (tab) => set({ tab }),
	query: { ...emptyQuery },
	setQuery: (p) => set({ query: {
		...get().query,
		...p
	} }),
	grain: "plant",
	setGrain: (grain) => set({ grain }),
	cols: { ...DEFAULT_COLS },
	setCol: (k, v) => set({ cols: {
		...get().cols,
		[k]: v
	} }),
	maxHits: 1e4,
	setMaxHits: (maxHits) => set({ maxHits }),
	langu: "EN",
	setLangu: (langu) => set({ langu }),
	ran: false,
	rows: SAMPLE,
	selected: null,
	setSelected: (selected) => set({ selected }),
	execute: () => {
		const { query, grain, cols, maxHits } = get();
		set({
			rows: uniqueGrain(filterRows(SAMPLE, {
				...query,
				includeDel: cols.del
			}), grain).slice(0, Math.max(1, maxHits)),
			ran: true,
			tab: "alv",
			selected: null
		});
	},
	reset: () => set({
		query: { ...emptyQuery },
		grain: "plant",
		cols: { ...DEFAULT_COLS },
		maxHits: 1e4,
		langu: "EN",
		rows: SAMPLE,
		ran: false,
		selected: null
	})
}));
var TABS$1 = [
	{
		id: "overview",
		label: "Overview",
		icon: LayoutGrid
	},
	{
		id: "selection",
		label: "Selection",
		icon: ClipboardList
	},
	{
		id: "alv",
		label: "ALV",
		icon: Table2
	},
	{
		id: "source",
		label: "Source",
		icon: CodeXml
	},
	{
		id: "install",
		label: "Install",
		icon: BookOpen
	}
];
function Workbench({ children }) {
	const tab = useReport((s) => s.tab);
	const setTab = useReport((s) => s.setTab);
	const execute = useReport((s) => s.execute);
	const ran = useReport((s) => s.ran);
	const rows = useReport((s) => s.rows);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "border-b border-border bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-9 items-center justify-center rounded-sm bg-accent text-accent-fg font-mono text-xs font-semibold tracking-tight",
						children: "ZMM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "truncate text-base font-semibold tracking-tight",
								children: "Material Master Report"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden font-mono text-xs text-muted sm:inline",
								children: "ZMM_MAT_MASTER_RPT"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted",
							children: "Comprehensive MM60 replacement · ECC 6.0 EHP7 / S/4HANA"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: execute,
						className: "inline-flex h-10 items-center gap-2 rounded-sm bg-ok px-3 text-sm font-semibold text-ok-fg hover:brightness-110",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "size-4",
								strokeWidth: 2.2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Execute"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] opacity-80",
								children: "F8"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-4 sm:px-6",
				children: TABS$1.map((t) => {
					const Icon = t.icon;
					const active = tab === t.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTab(t.id),
						className: cn("relative flex shrink-0 items-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors", active ? "text-fg" : "text-muted hover:text-fg"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }),
							t.label,
							t.id === "alv" && ran && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-surface-3 px-1.5 font-mono text-[10px] text-accent-2",
								children: rows.length
							}),
							active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-2 -bottom-px h-0.5 bg-accent" })
						]
					}, t.id);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-[1440px] flex-1 px-4 py-5 sm:px-6 sm:py-6",
			children
		})]
	});
}
var CARDS = [
	{
		icon: Funnel,
		title: "MB51-style selection",
		body: "Six tabs: Material, Plant/MRP, Valuation, Sales, Texts, Output. Select-options on 40+ fields, not a single material box like MM60."
	},
	{
		icon: Table2,
		title: "You pick the grain",
		body: "Radio buttons for Material, Plant (default), Storage location, Valuation, Sales area, or Plant+Acct+Sales. Column groups switch independently."
	},
	{
		icon: FileText,
		title: "PO & SO texts",
		body: "MATERIAL/BEST for PO text. MVKE/0001 with CONCATENATE MATNR+VKORG+VTWEG RESPECTING BLANKS for SO text, plus language D fallback — your includes."
	},
	{
		icon: Database,
		title: "The real tables",
		body: "MARA, MAKT, MARC, MARD, MBEW, MVKE, STXH plus texts T001W T134T T023T T025T CEPCT. Stock columns like MB52. Hotspot to MM03."
	},
	{
		icon: ShieldCheck,
		title: "Safe to run wide",
		body: "Requires Material, Plant, Type, Group, Sales org or Val. area. Plant auth M_MATE_WRK. Max hits. Deletion flags off by default."
	}
];
function Overview() {
	const setTab = useReport((s) => s.setTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1.15fr_0.85fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-lg border border-border bg-surface p-6 shadow-panel sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-wide text-accent-2",
					children: "SE38 · Executable"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-semibold tracking-tight sm:text-3xl",
					children: "One report instead of MM60 + MMBE + a text dump"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-prose text-muted",
					children: [
						"Paste ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-fg",
							children: "ZMM_MAT_MASTER_RPT"
						}),
						" into SE38, activate, run. Selection screen is tabbed like MB51. Output is CL_SALV_TABLE with layout variants, Excel, filter, and double-click into MM03."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-2 text-sm text-fg",
					children: [
						"Default grain: Material + Plant (MARA ⋈ MARC)",
						"Valuation class, category, price control, MAP / std price, profit center",
						"MRP type, controller, lot size, procurement, safety / reorder",
						"Optional stock (unrestricted, QI, blocked) and sales view",
						"PO text BEST, SO text 0001, basic text GRUN"
					].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x })]
					}, x))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTab("selection"),
						className: "inline-flex h-10 items-center gap-2 rounded-sm bg-accent px-4 text-sm font-semibold text-accent-fg",
						children: ["Open selection screen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab("source"),
						className: "inline-flex h-10 items-center gap-2 rounded-sm border border-border-strong px-4 text-sm font-medium hover:bg-surface-2",
						children: "Copy ABAP"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "grid gap-3",
			children: CARDS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md border border-border bg-surface p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-4 text-accent-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: c.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-muted",
					children: c.body
				})]
			}, c.title))
		})]
	});
}
var TABS = [
	{
		id: "mat",
		label: "Material"
	},
	{
		id: "plt",
		label: "Plant / MRP"
	},
	{
		id: "val",
		label: "Valuation"
	},
	{
		id: "sls",
		label: "Sales"
	},
	{
		id: "txt",
		label: "Texts"
	},
	{
		id: "out",
		label: "Output"
	}
];
var GRAINS = [
	{
		id: "plant",
		label: "Plant level",
		hint: "1 row = material + plant  (default)"
	},
	{
		id: "basic",
		label: "Material level",
		hint: "1 row = MARA only"
	},
	{
		id: "stor",
		label: "Storage loc. level",
		hint: "1 row = material + plant + SLoc"
	},
	{
		id: "valu",
		label: "Valuation level",
		hint: "1 row = material + val. area + type"
	},
	{
		id: "sales",
		label: "Sales area level",
		hint: "1 row = material + SOrg + DChl"
	},
	{
		id: "full",
		label: "Plant + Acct + Sales",
		hint: "Plant grain, extra columns joined"
	}
];
var COLS = [
	{
		id: "mrp",
		label: "MRP / Planning"
	},
	{
		id: "acct",
		label: "Accounting"
	},
	{
		id: "pur",
		label: "Purchasing"
	},
	{
		id: "sls",
		label: "Sales columns"
	},
	{
		id: "wh",
		label: "Warehouse"
	},
	{
		id: "qm",
		label: "Quality"
	},
	{
		id: "stk",
		label: "Stock (MB52-like)"
	},
	{
		id: "del",
		label: "Include deletion flags"
	}
];
function So({ label, value, onChange, placeholder = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid grid-cols-[minmax(7.5rem,9.5rem)_1fr] items-center gap-2 text-[13px] text-gui-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value,
					onChange: (e) => onChange(e.target.value),
					placeholder,
					className: "h-8 min-w-0 flex-1 rounded-xs border border-gui-line bg-paper px-2 font-mono text-[13px] text-gui-fg outline-none focus:border-alv-head"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-8 items-center justify-center border border-gui-line bg-gui-panel font-mono text-xs text-subtle",
					children: "→"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					readOnly: true,
					className: "h-8 w-[28%] min-w-16 rounded-xs border border-gui-line bg-paper px-2 font-mono text-[13px] text-subtle",
					placeholder: "to"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					title: "Multiple selection (SAP)",
					className: "flex size-8 items-center justify-center border border-gui-line bg-gui-panel text-[11px] text-alv-head",
					children: "▤"
				})
			]
		})]
	});
}
function Check$1({ checked, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex cursor-pointer items-center gap-2 text-[13px] text-gui-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked,
			onChange: (e) => onChange(e.target.checked),
			className: "size-3.5 accent-alv-head"
		}), label]
	});
}
function SelectionScreen() {
	const [stab, setStab] = (0, import_react.useState)("mat");
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-lg border border-border shadow-panel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 bg-gui-head px-3 py-1.5 text-[13px] text-on-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-3.5 fill-on-head/90" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold tracking-wide",
						children: "Comprehensive Material Master Report"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto font-mono text-[11px] text-on-head/70",
						children: "ZMM_MAT_MASTER_RPT"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-1 border-b border-gui-line bg-gui-bar px-2 py-1 text-[12px] text-gui-fg",
				children: [[
					"Program",
					"Edit",
					"Goto",
					"Selection screen",
					"System",
					"Help"
				].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-2 py-1",
					children: m
				}, m)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-auto flex gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: reset,
						className: "inline-flex h-7 items-center gap-1 rounded-xs border border-gui-line bg-gui-panel px-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3" }), " Reset"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: execute,
						className: "inline-flex h-7 items-center gap-1 rounded-xs bg-ok px-2 font-semibold text-ok-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3" }), " Execute (F8)"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-gui-panel p-3 sm:p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-0 overflow-x-auto border-b border-gui-line",
						children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStab(t.id),
							className: cn("shrink-0 border border-b-0 px-3 py-1.5 text-[13px]", stab === t.id ? "border-gui-line bg-gui-panel font-semibold text-gui-fg" : "border-transparent bg-gui-tab text-gui-fg/80"),
							children: t.label
						}, t.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "border border-gui-line p-3 sm:p-4",
						children: [
							stab === "mat" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Material",
										value: q.matnr,
										onChange: (v) => setQuery({ matnr: v }),
										placeholder: "100-5100"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Material Type",
										value: q.mtart,
										onChange: (v) => setQuery({ mtart: v }),
										placeholder: "ROH, FERT…"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Material Group",
										value: q.matkl,
										onChange: (v) => setQuery({ matkl: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Industry Sector",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Division",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Prod. Hierarchy",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "EAN/UPC",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "X-Plant Status",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Val. Category",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Created On",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Created By",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Last Change",
										value: "",
										onChange: () => {}
									})
								]
							}),
							stab === "plt" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Plant",
										value: q.werks,
										onChange: (v) => setQuery({ werks: v }),
										placeholder: "1000"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Storage Loc.",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Plant Status",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Purch. Group",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "MRP Controller",
										value: q.dispo,
										onChange: (v) => setQuery({ dispo: v }),
										placeholder: "001"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "MRP Type",
										value: q.dismm,
										onChange: (v) => setQuery({ dismm: v }),
										placeholder: "PD / VB / ND"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Procurement",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Spec. Proc.",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Lot Size Key",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "ABC Indicator",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Profit Center",
										value: q.prctr,
										onChange: (v) => setQuery({ prctr: v }),
										placeholder: "P1000"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Strategy Group",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Supervisor",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Issue SLoc",
										value: "",
										onChange: () => {}
									})
								]
							}),
							stab === "val" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Val. Area",
										value: "",
										onChange: () => {},
										placeholder: "= plant in most orgs"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Val. Class",
										value: q.bklas,
										onChange: (v) => setQuery({ bklas: v }),
										placeholder: "3000"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Val. Type",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Price Control",
										value: "",
										onChange: () => {},
										placeholder: "S / V"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "md:col-span-2 text-[12px] text-gui-fg/70",
										children: "Valuation area is usually the plant. Empty valuation type = standard header record (not split-valuation batches)."
									})
								]
							}),
							stab === "sls" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Sales Org.",
										value: q.vkorg,
										onChange: (v) => setQuery({ vkorg: v }),
										placeholder: "1000"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Dist. Channel",
										value: q.vtweg,
										onChange: (v) => setQuery({ vtweg: v }),
										placeholder: "10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Acct Assn Grp",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Sales Status",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Dlv. Plant",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(So, {
										label: "Sales Unit",
										value: "",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "md:col-span-2 text-[12px] text-gui-fg/70",
										children: "Required for Sales columns and SO text (object MVKE, ID 0001). Name = MATNR + VKORG + VTWEG, RESPECTING BLANKS."
									})
								]
							}),
							stab === "txt" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
										checked: cols.potxt,
										onChange: (v) => setCol("potxt", v),
										label: "PO text (MATERIAL / BEST)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
										checked: cols.sotxt,
										onChange: (v) => setCol("sotxt", v),
										label: "SO text (MVKE / 0001)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
										checked: cols.bstxt,
										onChange: (v) => setCol("bstxt", v),
										label: "Basic text (MATERIAL / GRUN)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
										checked: true,
										label: "SO fallback language D (German)",
										onChange: () => {}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2 text-[13px] text-gui-fg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-28 font-medium",
											children: "Language"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: langu,
											onChange: (e) => setLangu(e.target.value),
											className: "h-8 w-20 rounded-xs border border-gui-line bg-paper px-2 font-mono text-[13px]"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12px] text-gui-fg/70",
										children: "Same READ_TEXT mapping as ZMD_R_MATERIAL_F01 and ZMD_R_SMATERIAL_F01. Lines table and buffer are cleared per material so texts never bleed across rows."
									})
								]
							}),
							stab === "out" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-[12px] font-semibold uppercase tracking-wide text-gui-fg/70",
									children: "Output grain (row key)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-1.5",
									children: GRAINS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex cursor-pointer items-start gap-2 text-[13px] text-gui-fg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "grain",
											checked: grain === g.id,
											onChange: () => setGrain(g.id),
											className: "mt-0.5 accent-alv-head"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: g.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[12px] text-gui-fg/65",
											children: g.hint
										})] })]
									}, g.id))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-2 text-[12px] font-semibold uppercase tracking-wide text-gui-fg/70",
										children: "Column groups"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-1.5",
										children: COLS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
											checked: cols[c.id],
											onChange: (v) => setCol(c.id, v),
											label: c.label
										}, c.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-4 flex items-center gap-2 text-[13px] text-gui-fg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-28 font-medium",
											children: "Maximum hits"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											value: maxHits,
											onChange: (e) => setMaxHits(Number(e.target.value) || 0),
											className: "h-8 w-28 rounded-xs border border-gui-line bg-paper px-2 font-mono text-[13px]"
										})]
									})
								] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-[11px] text-gui-fg/60",
						children: "Ln 1  Col 1 \xA0|\xA0 ABAP \xA0|\xA0 Client 100 \xA0|\xA0 Ready"
					})
				]
			})
		]
	});
}
function money(n, ccy) {
	return `${n.toLocaleString(void 0, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})} ${ccy}`;
}
function AlvGrid() {
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
	const visible = (0, import_react.useMemo)(() => [
		{
			key: "status",
			label: "Sts",
			show: true
		},
		{
			key: "matnr",
			label: "Material",
			show: true,
			mono: true
		},
		{
			key: "maktx",
			label: "Description",
			show: true
		},
		{
			key: "werks",
			label: "Plant",
			show: showPlt,
			mono: true
		},
		{
			key: "name1",
			label: "Plant name",
			show: showPlt
		},
		{
			key: "lgort",
			label: "SLoc",
			show: grain === "stor",
			mono: true
		},
		{
			key: "vkorg",
			label: "SOrg",
			show: showSal,
			mono: true
		},
		{
			key: "vtweg",
			label: "DChl",
			show: showSal,
			mono: true
		},
		{
			key: "mtart",
			label: "Type",
			show: true,
			mono: true
		},
		{
			key: "matkl",
			label: "Group",
			show: true,
			mono: true
		},
		{
			key: "meins",
			label: "UoM",
			show: true
		},
		{
			key: "bwtty",
			label: "ValCat",
			show: showVal,
			mono: true
		},
		{
			key: "prctr",
			label: "Profit ctr",
			show: true,
			mono: true
		},
		{
			key: "ktext",
			label: "PrCtr name",
			show: true
		},
		{
			key: "dismm",
			label: "MRP ty",
			show: cols.mrp,
			mono: true
		},
		{
			key: "dispo",
			label: "MRP ctl",
			show: cols.mrp,
			mono: true
		},
		{
			key: "beskz",
			label: "Proc",
			show: cols.mrp,
			mono: true
		},
		{
			key: "disls",
			label: "Lot",
			show: cols.mrp,
			mono: true
		},
		{
			key: "maabc",
			label: "ABC",
			show: cols.mrp
		},
		{
			key: "minbe",
			label: "Reorder",
			show: cols.mrp,
			align: "right",
			fmt: (r) => String(r.minbe)
		},
		{
			key: "eisbe",
			label: "Safety",
			show: cols.mrp,
			align: "right",
			fmt: (r) => String(r.eisbe)
		},
		{
			key: "bklas",
			label: "Val. class",
			show: showVal,
			mono: true
		},
		{
			key: "bkbez",
			label: "VC text",
			show: showVal
		},
		{
			key: "vprsv",
			label: "Prc ctl",
			show: showVal
		},
		{
			key: "stprs",
			label: "Std price",
			show: showVal,
			align: "right",
			fmt: (r) => r.vprsv === "S" ? money(r.stprs, r.waers) : ""
		},
		{
			key: "verpr",
			label: "MAP",
			show: showVal,
			align: "right",
			fmt: (r) => r.vprsv === "V" ? money(r.verpr, r.waers) : ""
		},
		{
			key: "ekgrp",
			label: "PGrp",
			show: cols.pur,
			mono: true
		},
		{
			key: "ktgrm",
			label: "Acct grp",
			show: showSal,
			mono: true
		},
		{
			key: "vmsta",
			label: "Sls sts",
			show: showSal,
			mono: true
		},
		{
			key: "labst",
			label: "Unrestr.",
			show: cols.stk,
			align: "right",
			fmt: (r) => r.labst.toLocaleString()
		},
		{
			key: "insme",
			label: "QI",
			show: cols.stk,
			align: "right",
			fmt: (r) => r.insme.toLocaleString()
		},
		{
			key: "speme",
			label: "Blocked",
			show: cols.stk,
			align: "right",
			fmt: (r) => r.speme.toLocaleString()
		},
		{
			key: "poText",
			label: "PO text (BEST)",
			show: cols.potxt
		},
		{
			key: "soText",
			label: "SO text (0001)",
			show: cols.sotxt
		},
		{
			key: "basicText",
			label: "Basic text",
			show: cols.bstxt
		},
		{
			key: "ersda",
			label: "Created",
			show: true,
			mono: true
		}
	], [
		cols,
		grain,
		showPlt,
		showSal,
		showVal
	]).filter((c) => c.show);
	const totals = (0, import_react.useMemo)(() => {
		return rows.reduce((a, r) => {
			a.labst += r.labst;
			a.insme += r.insme;
			a.speme += r.speme;
			a.salk3 += r.salk3;
			return a;
		}, {
			labst: 0,
			insme: 0,
			speme: 0,
			salk3: 0
		});
	}, [rows]);
	function cell(col, r) {
		if (col.key === "status") {
			const color = r.status === "ok" ? "bg-ok" : r.status === "warn" ? "bg-warn" : "bg-err";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("inline-block size-2.5 rounded-full", color) });
		}
		if (col.fmt) return col.fmt(r);
		const v = r[col.key];
		if (typeof v === "boolean") return v ? "X" : "";
		return String(v ?? "");
	}
	function exportCsv() {
		const header = visible.map((c) => c.label).join(";");
		const body = rows.map((r) => visible.map((c) => {
			const raw = cell(c, r);
			const text = typeof raw === "string" ? raw : r.status;
			return `"${String(text).replaceAll("\"", "\"\"")}"`;
		}).join(";"));
		const blob = new Blob([[header, ...body].join("\n")], { type: "text/csv" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = "ZMM_MAT_MASTER_DEMO.csv";
		a.click();
		URL.revokeObjectURL(a.href);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: ran ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-fg",
							children: rows.length
						}),
						" rows · grain",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-fg",
							children: grain
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Demo data · press Execute (F8) on the selection screen to apply filters" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTab("selection"),
						className: "inline-flex h-9 items-center gap-2 rounded-sm border border-border-strong px-3 text-sm hover:bg-surface-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5" }), "Selection"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: exportCsv,
						className: "inline-flex h-9 items-center gap-2 rounded-sm border border-border-strong px-3 text-sm hover:bg-surface-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-3.5" }), "CSV"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-md border border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "min-w-max text-left text-[13px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
								className: "bg-alv-head text-on-head",
								children: visible.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: cn("sticky top-0 whitespace-nowrap border-r border-on-head/10 px-2.5 py-2 font-medium", c.align === "right" && "text-right"),
									children: c.label
								}, c.key))
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: visible.length,
								className: "px-4 py-12 text-center text-muted",
								children: "No data for the current selection. Widen the filter or include deletion flags."
							}) }), rows.map((r, i) => {
								const id = `${r.matnr}-${r.werks}-${r.lgort}-${r.vkorg}-${i}`;
								const on = selected === r;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
									onClick: () => setSelected(on ? null : r),
									className: cn("cursor-pointer border-b border-border/80", on ? "bg-accent/15" : i % 2 === 0 ? "bg-surface" : "bg-surface-2", "hover:bg-accent/10"),
									children: visible.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: cn("max-w-[22rem] truncate whitespace-nowrap px-2.5 py-1.5", c.mono && "font-mono text-[12px]", c.align === "right" && "text-right tabular-nums", c.key === "matnr" && "font-medium text-accent-2 underline-offset-2 hover:underline"),
										children: cell(c, r)
									}, c.key))
								}, id);
							})] }),
							rows.length > 0 && cols.stk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
								className: "bg-surface-3 font-medium",
								children: visible.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: cn("px-2.5 py-2 tabular-nums", c.align === "right" && "text-right"),
									children: c.key === "matnr" ? "Σ" : c.key === "labst" ? totals.labst.toLocaleString() : c.key === "insme" ? totals.insme.toLocaleString() : c.key === "speme" ? totals.speme.toLocaleString() : ""
								}, c.key))
							}) })
						]
					})
				})
			}),
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-md border border-border bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-accent-2",
							children: "MM03 · double-click target"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-lg font-semibold tracking-tight",
							children: [selected.matnr, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-base font-normal text-muted",
								children: selected.maktx
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSelected(null),
							className: "flex size-9 items-center justify-center rounded-sm hover:bg-surface-2",
							"aria-label": "Close",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3",
						children: [
							["Plant", `${selected.werks} ${selected.name1}`],
							["Type / group", `${selected.mtart} · ${selected.matkl} ${selected.wgbez}`],
							["MRP", `${selected.dismm} / ${selected.dispo} / lot ${selected.disls}`],
							["Valuation", `${selected.bklas} ${selected.bkbez} · ${selected.vprsv}`],
							["Profit center", `${selected.prctr} ${selected.ktext}`],
							["Sales", selected.vkorg ? `${selected.vkorg} / ${selected.vtweg}` : "—"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-muted",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: v })] }, k))
					}),
					cols.potxt && selected.poText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 border-t border-border pt-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium uppercase tracking-wide text-muted",
								children: "PO text"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							selected.poText
						]
					}),
					cols.sotxt && selected.soText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium uppercase tracking-wide text-muted",
								children: "SO text"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							selected.soText
						]
					})
				]
			})
		]
	});
}
var KEYWORDS = new Set([
	"REPORT",
	"TABLES",
	"TYPE-POOLS",
	"TYPES",
	"TYPE",
	"DATA",
	"CONSTANTS",
	"FIELD-SYMBOLS",
	"PARAMETERS",
	"SELECT-OPTIONS",
	"SELECTION-SCREEN",
	"BEGIN",
	"END",
	"OF",
	"BLOCK",
	"SCREEN",
	"TABBED",
	"TAB",
	"SUBSCREEN",
	"FRAME",
	"TITLE",
	"WITH",
	"COMMENT",
	"FUNCTION",
	"KEY",
	"AS",
	"CHECKBOX",
	"RADIOBUTTON",
	"GROUP",
	"USER-COMMAND",
	"DEFAULT",
	"OBLIGATORY",
	"MATCHCODE",
	"OBJECT",
	"MODIF",
	"ID",
	"NO-DISPLAY",
	"LIKE",
	"REF",
	"TO",
	"STANDARD",
	"SORTED",
	"HASHED",
	"TABLE",
	"EMPTY",
	"UNIQUE",
	"NON-UNIQUE",
	"KEY",
	"INDEX",
	"RANGE",
	"CLASS",
	"DEFINITION",
	"IMPLEMENTATION",
	"ENDCLASS",
	"PUBLIC",
	"PRIVATE",
	"PROTECTED",
	"SECTION",
	"FINAL",
	"METHODS",
	"CLASS-METHODS",
	"METHOD",
	"ENDMETHOD",
	"FOR",
	"EVENT",
	"IMPORTING",
	"EXPORTING",
	"CHANGING",
	"RETURNING",
	"RAISING",
	"EXCEPTIONS",
	"OTHERS",
	"VALUE",
	"OPTIONAL",
	"FORM",
	"ENDFORM",
	"PERFORM",
	"USING",
	"IF",
	"ELSEIF",
	"ELSE",
	"ENDIF",
	"CASE",
	"WHEN",
	"ENDCASE",
	"LOOP",
	"AT",
	"INTO",
	"ASSIGNING",
	"WHERE",
	"ENDLOOP",
	"DO",
	"ENDDO",
	"WHILE",
	"ENDWHILE",
	"CHECK",
	"EXIT",
	"CONTINUE",
	"RETURN",
	"SELECT",
	"FROM",
	"INNER",
	"LEFT",
	"OUTER",
	"JOIN",
	"ON",
	"AND",
	"OR",
	"NOT",
	"IN",
	"EQ",
	"NE",
	"GT",
	"LT",
	"GE",
	"LE",
	"IS",
	"INITIAL",
	"ASSIGNED",
	"BOUND",
	"REQUESTED",
	"ALL",
	"ENTRIES",
	"UP",
	"ROWS",
	"DISTINCT",
	"ORDER",
	"BY",
	"CORRESPONDING",
	"FIELDS",
	"APPEND",
	"INSERT",
	"MODIFY",
	"DELETE",
	"READ",
	"SORT",
	"CLEAR",
	"REFRESH",
	"FREE",
	"MOVE-CORRESPONDING",
	"ADD",
	"CALL",
	"TRANSACTION",
	"MESSAGE",
	"DISPLAY",
	"AUTHORITY-CHECK",
	"SET",
	"HANDLER",
	"PARAMETER",
	"FIELD",
	"TRY",
	"CATCH",
	"ENDTRY",
	"RAISE",
	"NEW",
	"CREATE",
	"CONDENSE",
	"REPLACE",
	"OCCURRENCES",
	"CONCATENATE",
	"RESPECTING",
	"BLANKS",
	"SHIFT",
	"COND",
	"CONV",
	"BOOLC",
	"LINES",
	"SPACE",
	"ABAP_TRUE",
	"ABAP_FALSE",
	"INITIALIZATION",
	"START-OF-SELECTION",
	"END-OF-SELECTION",
	"AT",
	"SELECTION-SCREEN",
	"OUTPUT",
	"VALUE-REQUEST",
	"LOAD-OF-PROGRAM",
	"INCLUDE",
	"WRITE",
	"SKIP",
	"ULINE",
	"FORMAT",
	"CONSTANTS",
	"STATICS",
	"RISK"
].map((k) => k.toUpperCase()));
function highlightLine(line) {
	const trimmed = line.trimStart();
	if (trimmed.startsWith("*") || trimmed.startsWith("\"")) return [{
		t: line,
		k: "cmt"
	}];
	const segs = [];
	const re = /('(?:''|[^'])*')|("[^"]*")|(\b\d+\b)|(\b[A-Za-z_][A-Za-z0-9_]*(-[A-Za-z0-9_]+)*\b)|(\S+)|(\s+)/g;
	let m;
	while (m = re.exec(line)) {
		const [raw, str1, str2, num, ident] = m;
		if (str1 || str2) segs.push({
			t: raw,
			k: "str"
		});
		else if (num) segs.push({
			t: raw,
			k: "num"
		});
		else if (ident) {
			const u = ident.toUpperCase();
			if (KEYWORDS.has(u)) segs.push({
				t: raw,
				k: "kw"
			});
			else if (line.slice(m.index + ident.length).match(/^\s*\(/)) segs.push({
				t: raw,
				k: "fn"
			});
			else segs.push({
				t: raw,
				k: "plain"
			});
		} else segs.push({
			t: raw,
			k: "plain"
		});
	}
	return segs.length ? segs : [{
		t: line,
		k: "plain"
	}];
}
function parseSections(src) {
	const lines = src.split("\n");
	const out = [{
		id: "top",
		title: "Header / types",
		start: 0
	}];
	lines.forEach((ln, i) => {
		const form = ln.match(/^\s*FORM\s+(\S+)/i);
		const sel = ln.match(/^\*--- Tab\s+\d+:\s*(.+?)\s*-+/);
		const ev = ln.match(/^\*-\{0,}\s{0,}(\*.*)?(Initialization|Main|F4)/i);
		if (form) out.push({
			id: `f-${form[1]}`,
			title: `FORM ${form[1]}`,
			start: i
		});
		else if (sel) out.push({
			id: `t-${i}`,
			title: sel[1].trim(),
			start: i
		});
		else if (/SELECTION-SCREEN BEGIN OF TABBED/i.test(ln)) out.push({
			id: "sel",
			title: "Selection screen",
			start: i
		});
		else if (ev) out.push({
			id: `e-${i}`,
			title: ev[2],
			start: i
		});
	});
	return out;
}
function SourceBrowser() {
	const [src, setSrc] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let alive = true;
		fetch("/abap/zmm_mat_master_rpt.abap").then((r) => {
			if (!r.ok) throw new Error("Could not load source");
			return r.text();
		}).then((t) => {
			if (alive) setSrc(t);
		}).catch((e) => {
			if (alive) setErr(e.message);
		});
		return () => {
			alive = false;
		};
	}, []);
	const lines = (0, import_react.useMemo)(() => src.split("\n"), [src]);
	const sections = (0, import_react.useMemo)(() => src ? parseSections(src) : [], [src]);
	async function copyAll() {
		await navigator.clipboard.writeText(src);
		setCopied(true);
		setTimeout(() => setCopied(false), 1600);
	}
	function jump(start) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[70vh] flex-col gap-3 lg:flex-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:w-56 shrink-0 rounded-md border border-border bg-surface p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-1 text-xs font-medium uppercase tracking-wide text-muted",
				children: "Includes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-2 flex max-h-[28vh] flex-col gap-0.5 overflow-auto lg:max-h-[70vh]",
				children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => jump(s.start),
					className: cn("truncate rounded-xs px-2 py-1.5 text-left font-mono text-[11px] hover:bg-surface-2", active === s.start ? "bg-surface-3 text-fg" : "text-muted"),
					children: s.title
				}, s.id + s.start))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1 overflow-hidden rounded-md border border-border bg-editor",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 border-b border-border-strong px-3 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted",
							children: "zmm_mat_master_rpt.abap"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-subtle",
							children: src ? `${lines.length} lines` : ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/abap/zmm_mat_master_rpt.abap",
								download: true,
								className: "inline-flex h-8 items-center gap-1.5 rounded-xs bg-surface-3 px-2.5 text-xs text-fg hover:bg-border-strong",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "Download"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: copyAll,
								disabled: !src,
								className: "inline-flex h-8 items-center gap-1.5 rounded-xs bg-accent px-2.5 text-xs font-medium text-accent-fg disabled:opacity-40",
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied ? "Copied" : "Copy program"]
							})]
						})
					]
				}),
				!src && !err && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-4 py-10 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Loading source…"]
				}),
				err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-8 text-sm text-err",
					children: err
				}),
				src && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					id: "abap-source",
					className: "max-h-[72vh] overflow-auto p-0 text-[12px] leading-[1.55]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "block font-mono",
						children: lines.map((ln, i) => {
							const segs = highlightLine(ln);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: `ln-${i + 1}`,
								className: "flex hover:bg-surface/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sticky left-0 w-12 shrink-0 select-none bg-editor pr-3 text-right text-[11px] text-subtle",
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-pre pr-6 text-editor-fg",
									children: segs.map((s, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: s.k === "cmt" ? "text-code-cmt italic" : s.k === "kw" ? "text-code-kw" : s.k === "str" ? "text-code-str" : s.k === "fn" ? "text-code-fn" : s.k === "num" ? "text-code-num" : "text-editor-fg",
										children: s.t
									}, j))
								})]
							}, i);
						})
					})
				})
			]
		})]
	});
}
var STEPS = [
	{
		n: "1",
		title: "Create the program",
		body: "SE38 or SE80 → Executable program ZMM_MAT_MASTER_RPT. Unicode, status SAP Standard Production. Package $TMP (or ZMM if you transport)."
	},
	{
		n: "2",
		title: "Paste the source",
		body: "Open the Source tab, Copy program, paste over the template, Save. Do not keep the default REPORT z… line twice — the file already starts with REPORT zmm_mat_master_rpt."
	},
	{
		n: "3",
		title: "Text elements (optional)",
		body: "Goto → Text Elements → Selection Texts. Runtime already fills labels via %_S_MATNR_%_APP_%-TEXT, so the report runs without this. Compare text symbols if you want them persisted."
	},
	{
		n: "4",
		title: "Activate",
		body: "Ctrl+F3. If a MARC field is missing on a very old EHP, comment that column in the SELECT list and in FORM col. CL_SALV_TABLE needs NetWeaver 7.0+."
	},
	{
		n: "5",
		title: "Authorize",
		body: "Users need M_MATE_WRK ACTVT=03 for each plant they run. The report skips unauthorized plants and shows the count in the ALV header. S_TCODE if you wrap it in a role."
	},
	{
		n: "6",
		title: "Run",
		body: "F8. Enter at least Material, Plant, Type, Group, Sales org or Val. area. Default grain is Plant. Tick PO text (on) / SO text as needed. Save an ALV layout."
	}
];
function InstallGuide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-3",
			children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-4 rounded-md border border-border bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-8 shrink-0 items-center justify-center rounded-sm bg-surface-3 font-mono text-sm text-accent-2",
					children: s.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold",
					children: s.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: s.body
				})] })]
			}, s.n))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 self-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-md border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: "PO / SO text mapping"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "mt-3 w-full text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-xs uppercase tracking-wide text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-1 pr-2",
										children: "Text"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-1 pr-2",
										children: "Object"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-1 pr-2",
										children: "ID"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-1",
										children: "TDNAME"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
								className: "font-mono text-[12px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2 pr-2 font-sans",
												children: "PO"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "MATERIAL" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "BEST" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "MATNR (internal)" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2 pr-2 font-sans",
												children: "SO"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "MVKE" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "0001" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "MATNR+VKORG+VTWEG" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2 pr-2 font-sans",
												children: "Basic"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "MATERIAL" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "GRUN" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "MATNR" })
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "SO name uses CONCATENATE … RESPECTING BLANKS so the 18- vs 40-character MATNR offset stays correct. If logon language misses the sales text, language D is tried."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-md border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: "Assumptions baked in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 grid gap-1.5 text-sm text-muted",
						children: [
							"ECC 6.0 EHP7 (7.40) or S/4HANA",
							"Valuation area = plant for accounting columns",
							"Empty valuation type = header MBEW record",
							"Deletion-flagged materials excluded unless ticked",
							"String templates / inline DATA / CL_SALV_TABLE"
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-ok" }), x]
						}, x))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/abap/TEXT_ELEMENTS.txt",
					download: true,
					className: "rounded-md border border-border bg-surface px-5 py-4 text-sm hover:bg-surface-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-fg",
						children: "Download TEXT_ELEMENTS.txt"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-muted",
						children: "Selection texts and text symbols if you want them in the program object."
					})]
				})
			]
		})]
	});
}
function Home() {
	const tab = useReport((s) => s.tab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Workbench, { children: [
		tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {}),
		tab === "selection" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectionScreen, {}),
		tab === "alv" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlvGrid, {}),
		tab === "source" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceBrowser, {}),
		tab === "install" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallGuide, {})
	] });
}
//#endregion
export { Home as component };
