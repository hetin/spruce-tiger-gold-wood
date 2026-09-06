*&---------------------------------------------------------------------*
*& Report  ZMM_MAT_MASTER_RPT
*&---------------------------------------------------------------------*
*& Comprehensive Material Master Report
*& Replaces / extends MM60 with plant, MRP, valuation, sales, stock
*& and long texts. Selection modelled after MB51 / MB52 / MMBE.
*&
*& Compatible with: ECC 6.0 EHP7 (7.40) and S/4HANA (MATNR 18 or 40)
*& Package:         $TMP  (or ZMM)
*& Author:          ZMM Master
*& Version:         1.0
*&
*& Tables: MARA MAKT MARC MARD MBEW MVKE STXH
*&         T001W T001L T134T T023T T025T CEPCT T001K T001
*& Texts:  PO  = OBJECT MATERIAL / ID BEST   (Purchase Order text)
*&         SO  = OBJECT MVKE     / ID 0001   (Sales text)
*&         Basic = OBJECT MATERIAL / ID GRUN
*& Auth:   M_MATE_WRK (plant, display)
*&
*& Double-click / hotspot on Material -> MM03
*& Toolbar: sort, filter, subtotal, Excel, layout variants
*&---------------------------------------------------------------------*
REPORT zmm_mat_master_rpt.

TABLES: mara, marc, mard, mbew, mvke, makt, sscrfields.

TYPE-POOLS: icon, abap.

*----------------------------------------------------------------------*
* Types
*----------------------------------------------------------------------*
TYPES: BEGIN OF ty_out,
         status     TYPE icon-id,
         matnr      TYPE mara-matnr,
         maktx      TYPE makt-maktx,
         werks      TYPE marc-werks,
         name1      TYPE t001w-name1,
         lgort      TYPE mard-lgort,
         lgobe      TYPE t001l-lgobe,
         bwkey      TYPE mbew-bwkey,
         bwtar      TYPE mbew-bwtar,
         vkorg      TYPE mvke-vkorg,
         vtweg      TYPE mvke-vtweg,
         mtart      TYPE mara-mtart,
         mtbez      TYPE t134t-mtbez,
         matkl      TYPE mara-matkl,
         wgbez      TYPE t023t-wgbez,
         mbrsh      TYPE mara-mbrsh,
         meins      TYPE mara-meins,
         bstme      TYPE mara-bstme,
         gewei      TYPE mara-gewei,
         brgew      TYPE mara-brgew,
         ntgew      TYPE mara-ntgew,
         volum      TYPE mara-volum,
         voleh      TYPE mara-voleh,
         groes      TYPE mara-groes,
         ean11      TYPE mara-ean11,
         spart      TYPE mara-spart,
         prdha      TYPE mara-prdha,
         extwg      TYPE mara-extwg,
         mstae      TYPE mara-mstae,
         mstav      TYPE mara-mstav,
         labor      TYPE mara-labor,
         tragr      TYPE mara-tragr,
         xchpf      TYPE mara-xchpf,
         vhart      TYPE mara-vhart,
         magrv      TYPE mara-magrv,
         ekwsl      TYPE mara-ekwsl,
         kautb      TYPE mara-kautb,
         qmpur      TYPE mara-qmpur,
         mhdrz      TYPE mara-mhdrz,
         mhdhb      TYPE mara-mhdhb,
         mfrnr      TYPE mara-mfrnr,
         mfrpn      TYPE mara-mfrpn,
         normt      TYPE mara-normt,
         wrkst      TYPE mara-wrkst,
         ferth      TYPE mara-ferth,
         zeinr      TYPE mara-zeinr,
         profl      TYPE mara-profl,
         kzumw      TYPE mara-kzumw,
         ersda      TYPE mara-ersda,
         ernam      TYPE mara-ernam,
         laeda      TYPE mara-laeda,
         aenam      TYPE mara-aenam,
         lvorm      TYPE mara-lvorm,
         bwtty      TYPE mara-bwtty,
         pstat      TYPE marc-pstat,
         dlplt      TYPE marc-lvorm,
         mmsta      TYPE marc-mmsta,
         ekgrp      TYPE marc-ekgrp,
         dismm      TYPE marc-dismm,
         dispo      TYPE marc-dispo,
         disls      TYPE marc-disls,
         beskz      TYPE marc-beskz,
         sobsl      TYPE marc-sobsl,
         minbe      TYPE marc-minbe,
         eisbe      TYPE marc-eisbe,
         mabst      TYPE marc-mabst,
         bstmi      TYPE marc-bstmi,
         bstma      TYPE marc-bstma,
         bstfe      TYPE marc-bstfe,
         bstrf      TYPE marc-bstrf,
         maabc      TYPE marc-maabc,
         plifz      TYPE marc-plifz,
         webaz      TYPE marc-webaz,
         prctr      TYPE marc-prctr,
         ktext      TYPE cepct-ktext,
         strgr      TYPE marc-strgr,
         sfcpf      TYPE marc-sfcpf,
         fevor      TYPE marc-fevor,
         lgpro      TYPE marc-lgpro,
         lgfsb      TYPE marc-lgfsb,
         rgekz      TYPE marc-rgekz,
         kzkri      TYPE marc-kzkri,
         xchar      TYPE marc-xchar,
         herkl      TYPE marc-herkl,
         herkr      TYPE marc-herkr,
         steuc      TYPE marc-steuc,
         ncost      TYPE marc-ncost,
         awsls      TYPE marc-awsls,
         losgr      TYPE marc-losgr,
         dzeit      TYPE marc-dzeit,
         disgr      TYPE marc-disgr,
         ausss      TYPE marc-ausss,
         sauft      TYPE marc-sauft,
         kzaus      TYPE marc-kzaus,
         miskz      TYPE marc-miskz,
         wzeit      TYPE marc-wzeit,
         ueeto      TYPE marc-ueeto,
         ueetk      TYPE marc-ueetk,
         uneto      TYPE marc-uneto,
         ssqss      TYPE marc-ssqss,
         qzgtp      TYPE marc-qzgtp,
         bklas      TYPE mbew-bklas,
         bkbez      TYPE t025t-bkbez,
         vprsv      TYPE mbew-vprsv,
         peinh      TYPE mbew-peinh,
         waers      TYPE t001-waers,
         stprs      TYPE mbew-stprs,
         verpr      TYPE mbew-verpr,
         salk3      TYPE mbew-salk3,
         lbkum      TYPE mbew-lbkum,
         mlmaa      TYPE mbew-mlmaa,
         hkmat      TYPE mbew-hkmat,
         eklas      TYPE mbew-eklas,
         qklas      TYPE mbew-qklas,
         zplpr      TYPE mbew-zplpr,
         vmsta      TYPE mvke-vmsta,
         vrkme      TYPE mvke-vrkme,
         dwerk      TYPE mvke-dwerk,
         ktgrm      TYPE mvke-ktgrm,
         mtpos      TYPE mvke-mtpos,
         provg      TYPE mvke-provg,
         aumng      TYPE mvke-aumng,
         lfmng      TYPE mvke-lfmng,
         mvgr1      TYPE mvke-mvgr1,
         mvgr2      TYPE mvke-mvgr2,
         sktof      TYPE mvke-sktof,
         dlsos      TYPE mvke-lvorm,
         labst      TYPE mard-labst,
         insme      TYPE mard-insme,
         speme      TYPE mard-speme,
         umlme      TYPE mard-umlme,
         einme      TYPE mard-einme,
         retme      TYPE mard-retme,
         po_text    TYPE char1024,
         so_text    TYPE char1024,
         basic_text TYPE char1024,
       END OF ty_out.

TYPES: ty_out_tab TYPE STANDARD TABLE OF ty_out WITH EMPTY KEY.

TYPES: BEGIN OF ty_stxh_key,
         tdobject TYPE stxh-tdobject,
         tdname   TYPE stxh-tdname,
         tdid     TYPE stxh-tdid,
         tdspras  TYPE stxh-tdspras,
       END OF ty_stxh_key.

*----------------------------------------------------------------------*
* Global data
*----------------------------------------------------------------------*
DATA: gt_out   TYPE ty_out_tab,
      go_alv   TYPE REF TO cl_salv_table,
      gv_skip  TYPE i,
      gv_txt_e TYPE i.

*----------------------------------------------------------------------*
* Local event handler
*----------------------------------------------------------------------*
CLASS lcl_handle DEFINITION FINAL.
  PUBLIC SECTION.
    CLASS-METHODS on_link_click
      FOR EVENT link_click OF cl_salv_events_table
      IMPORTING row column.
    CLASS-METHODS on_double_click
      FOR EVENT double_click OF cl_salv_events_table
      IMPORTING row column.
ENDCLASS.

*----------------------------------------------------------------------*
* Selection screen — tabbed, MB51-style
*----------------------------------------------------------------------*
SELECTION-SCREEN FUNCTION KEY 1.
SELECTION-SCREEN FUNCTION KEY 2.
SELECTION-SCREEN FUNCTION KEY 3.

SELECTION-SCREEN BEGIN OF TABBED BLOCK tabb FOR 22 LINES.
  SELECTION-SCREEN TAB (22) tab1 USER-COMMAND tmat DEFAULT SCREEN 1101.
  SELECTION-SCREEN TAB (22) tab2 USER-COMMAND tplt DEFAULT SCREEN 1102.
  SELECTION-SCREEN TAB (22) tab3 USER-COMMAND tval DEFAULT SCREEN 1103.
  SELECTION-SCREEN TAB (22) tab4 USER-COMMAND tsls DEFAULT SCREEN 1104.
  SELECTION-SCREEN TAB (22) tab5 USER-COMMAND ttxt DEFAULT SCREEN 1105.
  SELECTION-SCREEN TAB (22) tab6 USER-COMMAND tout DEFAULT SCREEN 1106.
SELECTION-SCREEN END OF BLOCK tabb.

*--- Tab 1: Material ---------------------------------------------------*
SELECTION-SCREEN BEGIN OF SCREEN 1101 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME TITLE t_b1.
SELECT-OPTIONS:
  s_matnr FOR mara-matnr MATCHCODE OBJECT mat1,
  s_mtart FOR mara-mtart,
  s_matkl FOR mara-matkl,
  s_mbrsh FOR mara-mbrsh,
  s_spart FOR mara-spart,
  s_prdha FOR mara-prdha,
  s_extwg FOR mara-extwg,
  s_meins FOR mara-meins,
  s_ean11 FOR mara-ean11,
  s_mstae FOR mara-mstae,
  s_bwtty FOR mara-bwtty,
  s_ersda FOR mara-ersda,
  s_ernam FOR mara-ernam,
  s_laeda FOR mara-laeda,
  s_aenam FOR mara-aenam.
SELECTION-SCREEN END OF BLOCK b1.
SELECTION-SCREEN END OF SCREEN 1101.

*--- Tab 2: Plant / MRP ------------------------------------------------*
SELECTION-SCREEN BEGIN OF SCREEN 1102 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME TITLE t_b2.
SELECT-OPTIONS:
  s_werks FOR marc-werks MATCHCODE OBJECT h_t001w,
  s_lgort FOR mard-lgort,
  s_mmsta FOR marc-mmsta,
  s_ekgrp FOR marc-ekgrp,
  s_dispo FOR marc-dispo,
  s_dismm FOR marc-dismm,
  s_beskz FOR marc-beskz,
  s_sobsl FOR marc-sobsl,
  s_disls FOR marc-disls,
  s_maabc FOR marc-maabc,
  s_prctr FOR marc-prctr,
  s_strgr FOR marc-strgr,
  s_fevor FOR marc-fevor,
  s_lgpro FOR marc-lgpro.
SELECTION-SCREEN END OF BLOCK b2.
SELECTION-SCREEN END OF SCREEN 1102.

*--- Tab 3: Valuation / Accounting ------------------------------------*
SELECTION-SCREEN BEGIN OF SCREEN 1103 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b3 WITH FRAME TITLE t_b3.
SELECT-OPTIONS:
  s_bwkey FOR mbew-bwkey,
  s_bklas FOR mbew-bklas,
  s_bwtar FOR mbew-bwtar,
  s_vprsv FOR mbew-vprsv.
SELECTION-SCREEN COMMENT /1(72) c_vhint.
SELECTION-SCREEN END OF BLOCK b3.
SELECTION-SCREEN END OF SCREEN 1103.

*--- Tab 4: Sales ------------------------------------------------------*
SELECTION-SCREEN BEGIN OF SCREEN 1104 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b4 WITH FRAME TITLE t_b4.
SELECT-OPTIONS:
  s_vkorg FOR mvke-vkorg,
  s_vtweg FOR mvke-vtweg,
  s_ktgrm FOR mvke-ktgrm,
  s_vmsta FOR mvke-vmsta,
  s_dwerk FOR mvke-dwerk,
  s_vrkme FOR mvke-vrkme.
SELECTION-SCREEN COMMENT /1(72) c_shint.
SELECTION-SCREEN END OF BLOCK b4.
SELECTION-SCREEN END OF SCREEN 1104.

*--- Tab 5: Texts ------------------------------------------------------*
SELECTION-SCREEN BEGIN OF SCREEN 1105 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b5 WITH FRAME TITLE t_b5.
PARAMETERS: p_potxt AS CHECKBOX DEFAULT 'X' MODIF ID txt,
            p_sotxt AS CHECKBOX MODIF ID txt,
            p_bstxt AS CHECKBOX MODIF ID txt,
            p_deflg AS CHECKBOX DEFAULT 'X' MODIF ID txt.
PARAMETERS: p_langu TYPE sylangu DEFAULT sy-langu OBLIGATORY.
SELECTION-SCREEN COMMENT /1(72) c_thint.
SELECTION-SCREEN END OF BLOCK b5.
SELECTION-SCREEN END OF SCREEN 1105.

*--- Tab 6: Output / Layout -------------------------------------------*
SELECTION-SCREEN BEGIN OF SCREEN 1106 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b6 WITH FRAME TITLE t_b6.
SELECTION-SCREEN COMMENT /1(60) c_lvl.
PARAMETERS: p_plant RADIOBUTTON GROUP lvl DEFAULT 'X' USER-COMMAND lvl,
            p_basic RADIOBUTTON GROUP lvl,
            p_stor  RADIOBUTTON GROUP lvl,
            p_valu  RADIOBUTTON GROUP lvl,
            p_sales RADIOBUTTON GROUP lvl,
            p_full  RADIOBUTTON GROUP lvl.
SELECTION-SCREEN END OF BLOCK b6.

SELECTION-SCREEN BEGIN OF BLOCK b7 WITH FRAME TITLE t_b7.
PARAMETERS: p_mrp  AS CHECKBOX DEFAULT 'X',
            p_acct AS CHECKBOX DEFAULT 'X',
            p_pur  AS CHECKBOX,
            p_sls  AS CHECKBOX,
            p_wh   AS CHECKBOX,
            p_qm   AS CHECKBOX,
            p_stk  AS CHECKBOX DEFAULT 'X'.
SELECTION-SCREEN END OF BLOCK b7.

SELECTION-SCREEN BEGIN OF BLOCK b8 WITH FRAME TITLE t_b8.
PARAMETERS: p_max  TYPE i DEFAULT 10000,
            p_vari TYPE disvariant-variant,
            p_del  AS CHECKBOX,
            p_auth AS CHECKBOX DEFAULT 'X'.
SELECTION-SCREEN END OF BLOCK b8.

SELECTION-SCREEN BEGIN OF BLOCK b9 WITH FRAME TITLE t_b9.
PARAMETERS: p_alv RADIOBUTTON GROUP fmt DEFAULT 'X',
            p_csv RADIOBUTTON GROUP fmt.
SELECTION-SCREEN END OF BLOCK b9.
SELECTION-SCREEN END OF SCREEN 1106.

*----------------------------------------------------------------------*
* Event handler implementation
*----------------------------------------------------------------------*
CLASS lcl_handle IMPLEMENTATION.
  METHOD on_link_click.
    PERFORM call_mm03 USING row.
  ENDMETHOD.
  METHOD on_double_click.
    PERFORM call_mm03 USING row.
  ENDMETHOD.
ENDCLASS.

*----------------------------------------------------------------------*
* Initialization
*----------------------------------------------------------------------*
INITIALIZATION.
  PERFORM init_screen.

*----------------------------------------------------------------------*
* F4 / PAI
*----------------------------------------------------------------------*
AT SELECTION-SCREEN ON VALUE-REQUEST FOR p_vari.
  PERFORM f4_variant.

AT SELECTION-SCREEN OUTPUT.
  PERFORM modify_screen.

AT SELECTION-SCREEN.
  PERFORM handle_ucomm.
  PERFORM validate_sel.

*----------------------------------------------------------------------*
* Main
*----------------------------------------------------------------------*
START-OF-SELECTION.
  PERFORM main.

*&---------------------------------------------------------------------*
*&      Form  INIT_SCREEN
*&---------------------------------------------------------------------*
FORM init_screen.
  DATA lv_fun TYPE smp_dyntxt.

  tab1 = 'Material'.
  tab2 = 'Plant / MRP'.
  tab3 = 'Valuation'.
  tab4 = 'Sales'.
  tab5 = 'Texts'.
  tab6 = 'Output'.

  t_b1 = 'Material master (MARA)'.
  t_b2 = 'Plant / MRP / Storage (MARC, MARD)'.
  t_b3 = 'Valuation / Accounting (MBEW)'.
  t_b4 = 'Sales area (MVKE)'.
  t_b5 = 'Long texts (READ_TEXT)'.
  t_b6 = 'Output grain (row key)'.
  t_b7 = 'Column groups'.
  t_b8 = 'Runtime'.
  t_b9 = 'Format'.

  c_vhint = 'Valuation area is usually the plant. Empty val. type = standard record.'.
  c_shint = 'Required for Sales columns and SO text (MVKE / ID 0001).'.
  c_thint = 'PO text = MATERIAL/BEST. SO text = MVKE/0001 (MATNR+VKORG+VTWEG).'.
  c_lvl   = 'One row per:'.

  lv_fun-icon_id   = icon_list.
  lv_fun-icon_text = 'MM60'.
  lv_fun-quickinfo = 'Material list (MM60)'.
  sscrfields-functxt_01 = lv_fun.

  lv_fun-icon_id   = icon_display.
  lv_fun-icon_text = 'MM03'.
  lv_fun-quickinfo = 'Display material'.
  sscrfields-functxt_02 = lv_fun.

  lv_fun-icon_id   = icon_overview.
  lv_fun-icon_text = 'MMBE'.
  lv_fun-quickinfo = 'Stock overview'.
  sscrfields-functxt_03 = lv_fun.

  PERFORM init_sel_texts.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  INIT_SEL_TEXTS
*& Labels work even if text elements were not maintained
*&---------------------------------------------------------------------*
FORM init_sel_texts.
  %_s_matnr_%_app_%-text = 'Material'.
  %_s_mtart_%_app_%-text = 'Material Type'.
  %_s_matkl_%_app_%-text = 'Material Group'.
  %_s_mbrsh_%_app_%-text = 'Industry Sector'.
  %_s_spart_%_app_%-text = 'Division'.
  %_s_prdha_%_app_%-text = 'Prod. Hierarchy'.
  %_s_extwg_%_app_%-text = 'Ext. Mat. Group'.
  %_s_meins_%_app_%-text = 'Base UoM'.
  %_s_ean11_%_app_%-text = 'EAN/UPC'.
  %_s_mstae_%_app_%-text = 'X-Plant Status'.
  %_s_bwtty_%_app_%-text = 'Val. Category'.
  %_s_ersda_%_app_%-text = 'Created On'.
  %_s_ernam_%_app_%-text = 'Created By'.
  %_s_laeda_%_app_%-text = 'Last Change'.
  %_s_aenam_%_app_%-text = 'Changed By'.
  %_s_werks_%_app_%-text = 'Plant'.
  %_s_lgort_%_app_%-text = 'Storage Loc.'.
  %_s_mmsta_%_app_%-text = 'Plant Status'.
  %_s_ekgrp_%_app_%-text = 'Purch. Group'.
  %_s_dispo_%_app_%-text = 'MRP Controller'.
  %_s_dismm_%_app_%-text = 'MRP Type'.
  %_s_beskz_%_app_%-text = 'Procurement'.
  %_s_sobsl_%_app_%-text = 'Spec. Proc.'.
  %_s_disls_%_app_%-text = 'Lot Size Key'.
  %_s_maabc_%_app_%-text = 'ABC Indicator'.
  %_s_prctr_%_app_%-text = 'Profit Center'.
  %_s_strgr_%_app_%-text = 'Strategy Group'.
  %_s_fevor_%_app_%-text = 'Supervisor'.
  %_s_lgpro_%_app_%-text = 'Issue SLoc'.
  %_s_bwkey_%_app_%-text = 'Val. Area'.
  %_s_bklas_%_app_%-text = 'Val. Class'.
  %_s_bwtar_%_app_%-text = 'Val. Type'.
  %_s_vprsv_%_app_%-text = 'Price Control'.
  %_s_vkorg_%_app_%-text = 'Sales Org.'.
  %_s_vtweg_%_app_%-text = 'Dist. Channel'.
  %_s_ktgrm_%_app_%-text = 'Acct Assn Grp'.
  %_s_vmsta_%_app_%-text = 'Sales Status'.
  %_s_dwerk_%_app_%-text = 'Dlv. Plant'.
  %_s_vrkme_%_app_%-text = 'Sales Unit'.
  %_p_potxt_%_app_%-text = 'PO text (BEST)'.
  %_p_sotxt_%_app_%-text = 'SO text (0001)'.
  %_p_bstxt_%_app_%-text = 'Basic text (GRUN)'.
  %_p_deflg_%_app_%-text = 'SO fallback lang. D'.
  %_p_langu_%_app_%-text = 'Language'.
  %_p_plant_%_app_%-text = 'Plant level'.
  %_p_basic_%_app_%-text = 'Material level'.
  %_p_stor_%_app_%-text  = 'Storage loc. level'.
  %_p_valu_%_app_%-text  = 'Valuation level'.
  %_p_sales_%_app_%-text = 'Sales area level'.
  %_p_full_%_app_%-text  = 'Plant + Acct + Sales'.
  %_p_mrp_%_app_%-text   = 'MRP / Planning'.
  %_p_acct_%_app_%-text  = 'Accounting'.
  %_p_pur_%_app_%-text   = 'Purchasing'.
  %_p_sls_%_app_%-text   = 'Sales columns'.
  %_p_wh_%_app_%-text    = 'Warehouse'.
  %_p_qm_%_app_%-text    = 'Quality'.
  %_p_stk_%_app_%-text   = 'Stock (MB52-like)'.
  %_p_max_%_app_%-text   = 'Maximum hits'.
  %_p_vari_%_app_%-text  = 'Layout variant'.
  %_p_del_%_app_%-text   = 'Include flagged for deletion'.
  %_p_auth_%_app_%-text  = 'Check plant authorization'.
  %_p_alv_%_app_%-text   = 'ALV grid'.
  %_p_csv_%_app_%-text   = 'Download CSV'.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  MODIFY_SCREEN
*&---------------------------------------------------------------------*
FORM modify_screen.
  LOOP AT SCREEN.
    IF screen-group1 = 'TXT'.
      screen-input = '1'.
      MODIFY SCREEN.
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  HANDLE_UCOMM
*&---------------------------------------------------------------------*
FORM handle_ucomm.
  CASE sy-ucomm.
    WHEN 'FC01'.
      CALL TRANSACTION 'MM60'.
    WHEN 'FC02'.
      CALL TRANSACTION 'MM03'.
    WHEN 'FC03'.
      CALL TRANSACTION 'MMBE'.
  ENDCASE.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  VALIDATE_SEL
*&---------------------------------------------------------------------*
FORM validate_sel.
  IF sy-ucomm <> 'ONLI' AND sy-ucomm <> 'PRIN' AND sy-ucomm <> 'SJOB'.
    RETURN.
  ENDIF.

  IF s_matnr[] IS INITIAL
     AND s_werks[] IS INITIAL
     AND s_mtart[] IS INITIAL
     AND s_matkl[] IS INITIAL
     AND s_vkorg[] IS INITIAL
     AND s_bwkey[] IS INITIAL.
    MESSAGE 'Enter at least Material, Plant, Type, Group, Sales Org or Val. Area'
            TYPE 'E'.
  ENDIF.

  IF p_max IS INITIAL OR p_max < 1.
    p_max = 10000.
  ENDIF.

  IF p_max > 200000.
    MESSAGE 'Maximum hits capped at 200,000' TYPE 'W'.
    p_max = 200000.
  ENDIF.

  IF p_sotxt = 'X' AND p_sales IS INITIAL AND p_full IS INITIAL
     AND s_vkorg[] IS INITIAL.
    MESSAGE 'SO text is more complete if you fill Sales Org / Dist. Channel'
            TYPE 'W'.
  ENDIF.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  F4_VARIANT
*&---------------------------------------------------------------------*
FORM f4_variant.
  DATA: ls_var  TYPE disvariant,
        lv_exit TYPE char1.

  ls_var-report = sy-repid.

  CALL FUNCTION 'REUSE_ALV_VARIANT_F4'
    EXPORTING
      is_variant = ls_var
      i_save     = 'A'
    IMPORTING
      e_exit     = lv_exit
      es_variant = ls_var
    EXCEPTIONS
      not_found  = 1
      OTHERS     = 2.

  IF sy-subrc = 0 AND lv_exit IS INITIAL.
    p_vari = ls_var-variant.
  ENDIF.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  MAIN
*&---------------------------------------------------------------------*
FORM main.
  PERFORM select_data.
  PERFORM apply_authority.
  PERFORM enrich_mara.
  PERFORM enrich_texts_and_desc.
  PERFORM set_status_icon.

  IF gt_out IS INITIAL.
    MESSAGE 'No data for the current selection' TYPE 'S' DISPLAY LIKE 'W'.
    RETURN.
  ENDIF.

  IF p_csv = 'X'.
    PERFORM download_csv.
  ELSE.
    PERFORM display_alv.
  ENDIF.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  SELECT_DATA
*&---------------------------------------------------------------------*
FORM select_data.
  DATA lv_lvorm_m TYPE RANGE OF mara-lvorm.
  DATA lv_lvorm_p TYPE RANGE OF marc-lvorm.

  IF p_del IS INITIAL.
    APPEND VALUE #( sign = 'I' option = 'EQ' low = space ) TO lv_lvorm_m.
    APPEND VALUE #( sign = 'I' option = 'EQ' low = space ) TO lv_lvorm_p.
  ENDIF.

  CASE 'X'.
    WHEN p_basic.
      PERFORM sel_basic USING lv_lvorm_m.
    WHEN p_stor.
      PERFORM sel_storage USING lv_lvorm_m lv_lvorm_p.
    WHEN p_valu.
      PERFORM sel_valu USING lv_lvorm_m.
    WHEN p_sales.
      PERFORM sel_sales USING lv_lvorm_m.
    WHEN p_full.
      PERFORM sel_plant USING lv_lvorm_m lv_lvorm_p.
    WHEN OTHERS.
      PERFORM sel_plant USING lv_lvorm_m lv_lvorm_p.
  ENDCASE.

  IF p_full = 'X' OR p_acct = 'X' OR p_valu = 'X'.
    PERFORM enrich_mbew.
  ENDIF.

  IF p_full = 'X' OR p_sls = 'X' OR p_sales = 'X' OR p_sotxt = 'X'.
    PERFORM enrich_mvke.
  ENDIF.

  IF p_stk = 'X' OR p_stor = 'X' OR p_wh = 'X'.
    PERFORM enrich_stock.
  ENDIF.

  PERFORM enrich_del_flags.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  SEL_BASIC
*&---------------------------------------------------------------------*
FORM sel_basic USING it_lvorm TYPE STANDARD TABLE.
  SELECT mara~matnr mara~mtart mara~matkl mara~mbrsh mara~meins
         mara~bstme mara~gewei mara~brgew mara~ntgew mara~volum
         mara~voleh mara~groes mara~ean11 mara~spart mara~prdha
         mara~extwg mara~mstae mara~mstav mara~labor mara~tragr
         mara~xchpf mara~vhart mara~magrv mara~ekwsl mara~kautb
         mara~qmpur mara~mhdrz mara~mhdhb mara~mfrnr mara~mfrpn
         mara~normt mara~wrkst mara~ferth mara~zeinr mara~profl
         mara~kzumw mara~ersda mara~ernam mara~laeda mara~aenam
         mara~lvorm mara~bwtty
    FROM mara
    INTO CORRESPONDING FIELDS OF TABLE gt_out
    UP TO p_max ROWS
    WHERE matnr IN s_matnr
      AND mtart IN s_mtart
      AND matkl IN s_matkl
      AND mbrsh IN s_mbrsh
      AND spart IN s_spart
      AND prdha IN s_prdha
      AND extwg IN s_extwg
      AND meins IN s_meins
      AND ean11 IN s_ean11
      AND mstae IN s_mstae
      AND bwtty IN s_bwtty
      AND ersda IN s_ersda
      AND ernam IN s_ernam
      AND laeda IN s_laeda
      AND aenam IN s_aenam
      AND lvorm IN it_lvorm.

  IF s_werks[] IS NOT INITIAL AND gt_out IS NOT INITIAL.
    PERFORM filter_exists_marc.
  ENDIF.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  SEL_PLANT
*&---------------------------------------------------------------------*
FORM sel_plant USING it_lvorm_m TYPE STANDARD TABLE
                     it_lvorm_p TYPE STANDARD TABLE.
  SELECT mara~matnr mara~mtart mara~matkl mara~mbrsh mara~meins
         mara~bstme mara~gewei mara~brgew mara~ntgew mara~volum
         mara~voleh mara~groes mara~ean11 mara~spart mara~prdha
         mara~extwg mara~mstae mara~mstav mara~labor mara~tragr
         mara~xchpf mara~vhart mara~magrv mara~ekwsl mara~kautb
         mara~qmpur mara~mhdrz mara~mhdhb mara~mfrnr mara~mfrpn
         mara~normt mara~wrkst mara~ferth mara~zeinr mara~profl
         mara~kzumw mara~ersda mara~ernam mara~laeda mara~aenam
         mara~lvorm mara~bwtty
         marc~werks marc~pstat marc~mmsta marc~ekgrp marc~dismm
         marc~dispo marc~disls marc~beskz marc~sobsl marc~minbe
         marc~eisbe marc~mabst marc~bstmi marc~bstma marc~bstfe
         marc~bstrf marc~maabc marc~plifz marc~webaz marc~prctr
         marc~strgr marc~sfcpf marc~fevor marc~lgpro marc~lgfsb
         marc~rgekz marc~kzkri marc~xchar marc~herkl marc~herkr
         marc~steuc marc~ncost marc~awsls marc~losgr marc~dzeit
         marc~disgr marc~ausss marc~sauft marc~kzaus marc~miskz
         marc~wzeit marc~ueeto marc~ueetk marc~uneto marc~ssqss
         marc~qzgtp
    FROM mara
    INNER JOIN marc ON marc~matnr = mara~matnr
    INTO CORRESPONDING FIELDS OF TABLE gt_out
    UP TO p_max ROWS
    WHERE mara~matnr IN s_matnr
      AND mara~mtart IN s_mtart
      AND mara~matkl IN s_matkl
      AND mara~mbrsh IN s_mbrsh
      AND mara~spart IN s_spart
      AND mara~prdha IN s_prdha
      AND mara~extwg IN s_extwg
      AND mara~meins IN s_meins
      AND mara~ean11 IN s_ean11
      AND mara~mstae IN s_mstae
      AND mara~bwtty IN s_bwtty
      AND mara~ersda IN s_ersda
      AND mara~ernam IN s_ernam
      AND mara~laeda IN s_laeda
      AND mara~aenam IN s_aenam
      AND mara~lvorm IN it_lvorm_m
      AND marc~werks IN s_werks
      AND marc~mmsta IN s_mmsta
      AND marc~ekgrp IN s_ekgrp
      AND marc~dispo IN s_dispo
      AND marc~dismm IN s_dismm
      AND marc~beskz IN s_beskz
      AND marc~sobsl IN s_sobsl
      AND marc~disls IN s_disls
      AND marc~maabc IN s_maabc
      AND marc~prctr IN s_prctr
      AND marc~strgr IN s_strgr
      AND marc~fevor IN s_fevor
      AND marc~lgpro IN s_lgpro
      AND marc~lvorm IN it_lvorm_p.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  SEL_STORAGE
*&---------------------------------------------------------------------*
FORM sel_storage USING it_lvorm_m TYPE STANDARD TABLE
                       it_lvorm_p TYPE STANDARD TABLE.
  SELECT mara~matnr mara~mtart mara~matkl mara~mbrsh mara~meins
         mara~bstme mara~gewei mara~ean11 mara~spart mara~prdha
         mara~mstae mara~bwtty mara~ersda mara~ernam mara~laeda
         mara~aenam mara~lvorm mara~xchpf mara~ekwsl
         marc~werks marc~pstat marc~mmsta marc~ekgrp marc~dismm
         marc~dispo marc~disls marc~beskz marc~sobsl marc~maabc
         marc~prctr marc~lgpro marc~lgfsb
         mard~lgort mard~labst mard~insme mard~speme mard~umlme
         mard~einme mard~retme
    FROM mara
    INNER JOIN marc ON marc~matnr = mara~matnr
    INNER JOIN mard ON mard~matnr = marc~matnr
                   AND mard~werks = marc~werks
    INTO CORRESPONDING FIELDS OF TABLE gt_out
    UP TO p_max ROWS
    WHERE mara~matnr IN s_matnr
      AND mara~mtart IN s_mtart
      AND mara~matkl IN s_matkl
      AND mara~mbrsh IN s_mbrsh
      AND mara~lvorm IN it_lvorm_m
      AND marc~werks IN s_werks
      AND marc~mmsta IN s_mmsta
      AND marc~ekgrp IN s_ekgrp
      AND marc~dispo IN s_dispo
      AND marc~dismm IN s_dismm
      AND marc~prctr IN s_prctr
      AND marc~lvorm IN it_lvorm_p
      AND mard~lgort IN s_lgort.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  SEL_VALU
*&---------------------------------------------------------------------*
FORM sel_valu USING it_lvorm_m TYPE STANDARD TABLE.
  SELECT mara~matnr mara~mtart mara~matkl mara~mbrsh mara~meins
         mara~ean11 mara~spart mara~mstae mara~bwtty mara~ersda
         mara~ernam mara~laeda mara~aenam mara~lvorm mara~ekwsl
         mbew~bwkey mbew~bwtar mbew~bklas mbew~vprsv mbew~peinh
         mbew~stprs mbew~verpr mbew~salk3 mbew~lbkum mbew~mlmaa
         mbew~hkmat mbew~eklas mbew~qklas mbew~zplpr
    FROM mara
    INNER JOIN mbew ON mbew~matnr = mara~matnr
    INTO CORRESPONDING FIELDS OF TABLE gt_out
    UP TO p_max ROWS
    WHERE mara~matnr IN s_matnr
      AND mara~mtart IN s_mtart
      AND mara~matkl IN s_matkl
      AND mara~lvorm IN it_lvorm_m
      AND mbew~bwkey IN s_bwkey
      AND mbew~bklas IN s_bklas
      AND mbew~bwtar IN s_bwtar
      AND mbew~vprsv IN s_vprsv.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<v>).
    IF <v>-werks IS INITIAL.
      <v>-werks = <v>-bwkey.
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  SEL_SALES
*&---------------------------------------------------------------------*
FORM sel_sales USING it_lvorm_m TYPE STANDARD TABLE.
  SELECT mara~matnr mara~mtart mara~matkl mara~mbrsh mara~meins
         mara~ean11 mara~spart mara~mstae mara~bwtty mara~ersda
         mara~ernam mara~laeda mara~aenam mara~lvorm
         mvke~vkorg mvke~vtweg mvke~vmsta mvke~vrkme mvke~dwerk
         mvke~ktgrm mvke~mtpos mvke~provg mvke~aumng mvke~lfmng
         mvke~mvgr1 mvke~mvgr2 mvke~sktof
    FROM mara
    INNER JOIN mvke ON mvke~matnr = mara~matnr
    INTO CORRESPONDING FIELDS OF TABLE gt_out
    UP TO p_max ROWS
    WHERE mara~matnr IN s_matnr
      AND mara~mtart IN s_mtart
      AND mara~matkl IN s_matkl
      AND mara~spart IN s_spart
      AND mara~lvorm IN it_lvorm_m
      AND mvke~vkorg IN s_vkorg
      AND mvke~vtweg IN s_vtweg
      AND mvke~ktgrm IN s_ktgrm
      AND mvke~vmsta IN s_vmsta
      AND mvke~dwerk IN s_dwerk
      AND mvke~vrkme IN s_vrkme.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<s>).
    IF <s>-werks IS INITIAL AND <s>-dwerk IS NOT INITIAL.
      <s>-werks = <s>-dwerk.
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  FILTER_EXISTS_MARC
*&---------------------------------------------------------------------*
FORM filter_exists_marc.
  TYPES: BEGIN OF ty_k,
           matnr TYPE mara-matnr,
         END OF ty_k.
  DATA lt_ok TYPE SORTED TABLE OF ty_k WITH UNIQUE KEY matnr.
  DATA ls_k  TYPE ty_k.

  SELECT DISTINCT matnr
    FROM marc
    INTO TABLE lt_ok
    FOR ALL ENTRIES IN gt_out
    WHERE matnr = gt_out-matnr
      AND werks IN s_werks.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<o>).
    ls_k-matnr = <o>-matnr.
    READ TABLE lt_ok WITH TABLE KEY matnr = ls_k-matnr TRANSPORTING NO FIELDS.
    IF sy-subrc <> 0.
      DELETE gt_out.
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  APPLY_AUTHORITY
*&---------------------------------------------------------------------*
FORM apply_authority.
  DATA lv_actvt TYPE activ_auth VALUE '03'.
  DATA lv_werks TYPE werks_d.
  DATA lt_ok    TYPE HASHED TABLE OF werks_d WITH UNIQUE KEY table_line.
  DATA lt_bad   TYPE HASHED TABLE OF werks_d WITH UNIQUE KEY table_line.

  IF p_auth IS INITIAL.
    RETURN.
  ENDIF.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<o>).
    lv_werks = <o>-werks.
    IF lv_werks IS INITIAL.
      CONTINUE.
    ENDIF.
    READ TABLE lt_ok WITH TABLE KEY table_line = lv_werks TRANSPORTING NO FIELDS.
    IF sy-subrc = 0.
      CONTINUE.
    ENDIF.
    READ TABLE lt_bad WITH TABLE KEY table_line = lv_werks TRANSPORTING NO FIELDS.
    IF sy-subrc = 0.
      DELETE gt_out.
      ADD 1 TO gv_skip.
      CONTINUE.
    ENDIF.

    AUTHORITY-CHECK OBJECT 'M_MATE_WRK'
      ID 'ACTVT' FIELD lv_actvt
      ID 'WERKS' FIELD lv_werks.
    IF sy-subrc = 0.
      INSERT lv_werks INTO TABLE lt_ok.
    ELSE.
      INSERT lv_werks INTO TABLE lt_bad.
      DELETE gt_out.
      ADD 1 TO gv_skip.
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  ENRICH_MARA
*&  Descriptions + plant name + profit center text + currency
*&---------------------------------------------------------------------*
FORM enrich_mara.
  DATA: BEGIN OF ls_makt,
          matnr TYPE makt-matnr,
          maktx TYPE makt-maktx,
        END OF ls_makt.
  DATA lt_makt LIKE HASHED TABLE OF ls_makt WITH UNIQUE KEY matnr.

  DATA: BEGIN OF ls_t001w,
          werks TYPE t001w-werks,
          name1 TYPE t001w-name1,
        END OF ls_t001w.
  DATA lt_t001w LIKE HASHED TABLE OF ls_t001w WITH UNIQUE KEY werks.

  DATA: BEGIN OF ls_t001l,
          werks TYPE t001l-werks,
          lgort TYPE t001l-lgort,
          lgobe TYPE t001l-lgobe,
        END OF ls_t001l.
  DATA lt_t001l LIKE HASHED TABLE OF ls_t001l WITH UNIQUE KEY werks lgort.

  DATA: BEGIN OF ls_t134t,
          mtart TYPE t134t-mtart,
          mtbez TYPE t134t-mtbez,
        END OF ls_t134t.
  DATA lt_t134t LIKE HASHED TABLE OF ls_t134t WITH UNIQUE KEY mtart.

  DATA: BEGIN OF ls_t023t,
          matkl TYPE t023t-matkl,
          wgbez TYPE t023t-wgbez,
        END OF ls_t023t.
  DATA lt_t023t LIKE HASHED TABLE OF ls_t023t WITH UNIQUE KEY matkl.

  DATA: BEGIN OF ls_cepc,
          prctr TYPE cepct-prctr,
          ktext TYPE cepct-ktext,
        END OF ls_cepc.
  DATA lt_cepc LIKE SORTED TABLE OF ls_cepc WITH NON-UNIQUE KEY prctr.

  IF gt_out IS INITIAL.
    RETURN.
  ENDIF.

  SELECT matnr maktx FROM makt INTO TABLE lt_makt
    FOR ALL ENTRIES IN gt_out
    WHERE matnr = gt_out-matnr
      AND spras = p_langu.
  IF sy-subrc <> 0 AND p_langu <> 'E'.
    SELECT matnr maktx FROM makt INTO TABLE lt_makt
      FOR ALL ENTRIES IN gt_out
      WHERE matnr = gt_out-matnr
        AND spras = 'E'.
  ENDIF.

  SELECT werks name1 FROM t001w INTO TABLE lt_t001w
    FOR ALL ENTRIES IN gt_out
    WHERE werks = gt_out-werks.

  SELECT werks lgort lgobe FROM t001l INTO TABLE lt_t001l
    FOR ALL ENTRIES IN gt_out
    WHERE werks = gt_out-werks
      AND lgort = gt_out-lgort.

  SELECT mtart mtbez FROM t134t INTO TABLE lt_t134t
    FOR ALL ENTRIES IN gt_out
    WHERE mtart = gt_out-mtart
      AND spras = p_langu.

  SELECT matkl wgbez FROM t023t INTO TABLE lt_t023t
    FOR ALL ENTRIES IN gt_out
    WHERE matkl = gt_out-matkl
      AND spras = p_langu.

  SELECT prctr ktext FROM cepct INTO TABLE lt_cepc
    FOR ALL ENTRIES IN gt_out
    WHERE prctr = gt_out-prctr
      AND spras = p_langu
      AND datbi >= sy-datum.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<o>).
    READ TABLE lt_makt INTO ls_makt WITH TABLE KEY matnr = <o>-matnr.
    IF sy-subrc = 0.
      <o>-maktx = ls_makt-maktx.
    ENDIF.
    READ TABLE lt_t001w INTO ls_t001w WITH TABLE KEY werks = <o>-werks.
    IF sy-subrc = 0.
      <o>-name1 = ls_t001w-name1.
    ENDIF.
    IF <o>-lgort IS NOT INITIAL.
      READ TABLE lt_t001l INTO ls_t001l
        WITH TABLE KEY werks = <o>-werks lgort = <o>-lgort.
      IF sy-subrc = 0.
        <o>-lgobe = ls_t001l-lgobe.
      ENDIF.
    ENDIF.
    READ TABLE lt_t134t INTO ls_t134t WITH TABLE KEY mtart = <o>-mtart.
    IF sy-subrc = 0.
      <o>-mtbez = ls_t134t-mtbez.
    ENDIF.
    READ TABLE lt_t023t INTO ls_t023t WITH TABLE KEY matkl = <o>-matkl.
    IF sy-subrc = 0.
      <o>-wgbez = ls_t023t-wgbez.
    ENDIF.
    IF <o>-prctr IS NOT INITIAL.
      READ TABLE lt_cepc INTO ls_cepc WITH KEY prctr = <o>-prctr.
      IF sy-subrc = 0.
        <o>-ktext = ls_cepc-ktext.
      ENDIF.
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  ENRICH_MBEW
*&---------------------------------------------------------------------*
FORM enrich_mbew.
  TYPES: BEGIN OF ty_mbew,
           matnr TYPE mbew-matnr,
           bwkey TYPE mbew-bwkey,
           bwtar TYPE mbew-bwtar,
           bklas TYPE mbew-bklas,
           vprsv TYPE mbew-vprsv,
           peinh TYPE mbew-peinh,
           stprs TYPE mbew-stprs,
           verpr TYPE mbew-verpr,
           salk3 TYPE mbew-salk3,
           lbkum TYPE mbew-lbkum,
           mlmaa TYPE mbew-mlmaa,
           hkmat TYPE mbew-hkmat,
           eklas TYPE mbew-eklas,
           qklas TYPE mbew-qklas,
           zplpr TYPE mbew-zplpr,
         END OF ty_mbew.

  DATA lt_mbew TYPE HASHED TABLE OF ty_mbew
               WITH UNIQUE KEY matnr bwkey bwtar.
  DATA ls_mbew TYPE ty_mbew.

  DATA: BEGIN OF ls_t025,
          bklas TYPE t025t-bklas,
          bkbez TYPE t025t-bkbez,
        END OF ls_t025.
  DATA lt_t025 LIKE HASHED TABLE OF ls_t025 WITH UNIQUE KEY bklas.

  DATA: BEGIN OF ls_t001k,
          bwkey TYPE t001k-bwkey,
          bukrs TYPE t001k-bukrs,
        END OF ls_t001k.
  DATA lt_t001k LIKE HASHED TABLE OF ls_t001k WITH UNIQUE KEY bwkey.

  DATA: BEGIN OF ls_t001,
          bukrs TYPE t001-bukrs,
          waers TYPE t001-waers,
        END OF ls_t001.
  DATA lt_t001 LIKE HASHED TABLE OF ls_t001 WITH UNIQUE KEY bukrs.

  DATA lv_bwkey TYPE mbew-bwkey.

  IF gt_out IS INITIAL.
    RETURN.
  ENDIF.

  SELECT matnr bwkey bwtar bklas vprsv peinh stprs verpr salk3
         lbkum mlmaa hkmat eklas qklas zplpr
    FROM mbew INTO TABLE lt_mbew
    FOR ALL ENTRIES IN gt_out
    WHERE matnr = gt_out-matnr
      AND bwkey IN s_bwkey
      AND bklas IN s_bklas
      AND bwtar IN s_bwtar
      AND vprsv IN s_vprsv.

  IF lt_mbew IS NOT INITIAL.
    SELECT bklas bkbez FROM t025t INTO TABLE lt_t025
      FOR ALL ENTRIES IN lt_mbew
      WHERE bklas = lt_mbew-bklas
        AND spras = p_langu.

    SELECT bwkey bukrs FROM t001k INTO TABLE lt_t001k
      FOR ALL ENTRIES IN lt_mbew
      WHERE bwkey = lt_mbew-bwkey.

    IF lt_t001k IS NOT INITIAL.
      SELECT bukrs waers FROM t001 INTO TABLE lt_t001
        FOR ALL ENTRIES IN lt_t001k
        WHERE bukrs = lt_t001k-bukrs.
    ENDIF.
  ENDIF.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<o>).
    IF <o>-bklas IS NOT INITIAL AND p_valu = 'X'.
      " already filled by valuation-grain SELECT
    ELSE.
      lv_bwkey = <o>-bwkey.
      IF lv_bwkey IS INITIAL.
        lv_bwkey = <o>-werks.
      ENDIF.
      READ TABLE lt_mbew INTO ls_mbew
        WITH TABLE KEY matnr = <o>-matnr
                       bwkey = lv_bwkey
                       bwtar = <o>-bwtar.
      IF sy-subrc <> 0.
        READ TABLE lt_mbew INTO ls_mbew
          WITH TABLE KEY matnr = <o>-matnr
                         bwkey = lv_bwkey
                         bwtar = space.
      ENDIF.
      IF sy-subrc = 0.
        <o>-bwkey = ls_mbew-bwkey.
        <o>-bwtar = ls_mbew-bwtar.
        <o>-bklas = ls_mbew-bklas.
        <o>-vprsv = ls_mbew-vprsv.
        <o>-peinh = ls_mbew-peinh.
        <o>-stprs = ls_mbew-stprs.
        <o>-verpr = ls_mbew-verpr.
        <o>-salk3 = ls_mbew-salk3.
        <o>-lbkum = ls_mbew-lbkum.
        <o>-mlmaa = ls_mbew-mlmaa.
        <o>-hkmat = ls_mbew-hkmat.
        <o>-eklas = ls_mbew-eklas.
        <o>-qklas = ls_mbew-qklas.
        <o>-zplpr = ls_mbew-zplpr.
      ENDIF.
    ENDIF.

    IF <o>-bklas IS NOT INITIAL.
      READ TABLE lt_t025 INTO ls_t025 WITH TABLE KEY bklas = <o>-bklas.
      IF sy-subrc = 0.
        <o>-bkbez = ls_t025-bkbez.
      ENDIF.
    ENDIF.

    lv_bwkey = <o>-bwkey.
    IF lv_bwkey IS INITIAL.
      lv_bwkey = <o>-werks.
    ENDIF.
    READ TABLE lt_t001k INTO ls_t001k WITH TABLE KEY bwkey = lv_bwkey.
    IF sy-subrc = 0.
      READ TABLE lt_t001 INTO ls_t001 WITH TABLE KEY bukrs = ls_t001k-bukrs.
      IF sy-subrc = 0.
        <o>-waers = ls_t001-waers.
      ENDIF.
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  ENRICH_MVKE
*&---------------------------------------------------------------------*
FORM enrich_mvke.
  TYPES: BEGIN OF ty_mvke,
           matnr TYPE mvke-matnr,
           vkorg TYPE mvke-vkorg,
           vtweg TYPE mvke-vtweg,
           vmsta TYPE mvke-vmsta,
           vrkme TYPE mvke-vrkme,
           dwerk TYPE mvke-dwerk,
           ktgrm TYPE mvke-ktgrm,
           mtpos TYPE mvke-mtpos,
           provg TYPE mvke-provg,
           aumng TYPE mvke-aumng,
           lfmng TYPE mvke-lfmng,
           mvgr1 TYPE mvke-mvgr1,
           mvgr2 TYPE mvke-mvgr2,
           sktof TYPE mvke-sktof,
           lvorm TYPE mvke-lvorm,
         END OF ty_mvke.

  DATA lt_mvke TYPE SORTED TABLE OF ty_mvke WITH NON-UNIQUE KEY matnr vkorg vtweg.
  DATA ls_mvke TYPE ty_mvke.

  IF gt_out IS INITIAL.
    RETURN.
  ENDIF.

  SELECT matnr vkorg vtweg vmsta vrkme dwerk ktgrm mtpos
         provg aumng lfmng mvgr1 mvgr2 sktof lvorm
    FROM mvke INTO TABLE lt_mvke
    FOR ALL ENTRIES IN gt_out
    WHERE matnr = gt_out-matnr
      AND vkorg IN s_vkorg
      AND vtweg IN s_vtweg
      AND ktgrm IN s_ktgrm
      AND vmsta IN s_vmsta
      AND dwerk IN s_dwerk
      AND vrkme IN s_vrkme.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<o>).
    IF <o>-vkorg IS NOT INITIAL AND p_sales = 'X'.
      CONTINUE.
    ENDIF.
    IF <o>-vkorg IS NOT INITIAL.
      READ TABLE lt_mvke INTO ls_mvke
        WITH KEY matnr = <o>-matnr vkorg = <o>-vkorg vtweg = <o>-vtweg.
    ELSE.
      READ TABLE lt_mvke INTO ls_mvke WITH KEY matnr = <o>-matnr.
    ENDIF.
    IF sy-subrc = 0.
      <o>-vkorg = ls_mvke-vkorg.
      <o>-vtweg = ls_mvke-vtweg.
      <o>-vmsta = ls_mvke-vmsta.
      <o>-vrkme = ls_mvke-vrkme.
      <o>-dwerk = ls_mvke-dwerk.
      <o>-ktgrm = ls_mvke-ktgrm.
      <o>-mtpos = ls_mvke-mtpos.
      <o>-provg = ls_mvke-provg.
      <o>-aumng = ls_mvke-aumng.
      <o>-lfmng = ls_mvke-lfmng.
      <o>-mvgr1 = ls_mvke-mvgr1.
      <o>-mvgr2 = ls_mvke-mvgr2.
      <o>-sktof = ls_mvke-sktof.
      <o>-dlsos = ls_mvke-lvorm.
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  ENRICH_STOCK
*&---------------------------------------------------------------------*
FORM enrich_stock.
  TYPES: BEGIN OF ty_mard,
           matnr TYPE mard-matnr,
           werks TYPE mard-werks,
           lgort TYPE mard-lgort,
           labst TYPE mard-labst,
           insme TYPE mard-insme,
           speme TYPE mard-speme,
           umlme TYPE mard-umlme,
           einme TYPE mard-einme,
           retme TYPE mard-retme,
         END OF ty_mard.

  DATA lt_mard TYPE SORTED TABLE OF ty_mard WITH NON-UNIQUE KEY matnr werks lgort.
  DATA ls_mard TYPE ty_mard.

  IF gt_out IS INITIAL.
    RETURN.
  ENDIF.

  SELECT matnr werks lgort labst insme speme umlme einme retme
    FROM mard INTO TABLE lt_mard
    FOR ALL ENTRIES IN gt_out
    WHERE matnr = gt_out-matnr
      AND werks = gt_out-werks
      AND lgort IN s_lgort.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<o>).
    IF p_stor = 'X' AND <o>-lgort IS NOT INITIAL.
      CONTINUE. " already on the row
    ENDIF.
    CLEAR: <o>-labst, <o>-insme, <o>-speme, <o>-umlme, <o>-einme, <o>-retme.
    LOOP AT lt_mard INTO ls_mard WHERE matnr = <o>-matnr
                                   AND werks = <o>-werks.
      IF <o>-lgort IS NOT INITIAL AND ls_mard-lgort <> <o>-lgort.
        CONTINUE.
      ENDIF.
      ADD ls_mard-labst TO <o>-labst.
      ADD ls_mard-insme TO <o>-insme.
      ADD ls_mard-speme TO <o>-speme.
      ADD ls_mard-umlme TO <o>-umlme.
      ADD ls_mard-einme TO <o>-einme.
      ADD ls_mard-retme TO <o>-retme.
    ENDLOOP.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  ENRICH_DEL_FLAGS
*&  Plant / sales deletion flags (kept out of the JOIN to avoid AS alias)
*&---------------------------------------------------------------------*
FORM enrich_del_flags.
  TYPES: BEGIN OF ty_pl,
           matnr TYPE marc-matnr,
           werks TYPE marc-werks,
           lvorm TYPE marc-lvorm,
         END OF ty_pl.
  TYPES: BEGIN OF ty_sl,
           matnr TYPE mvke-matnr,
           vkorg TYPE mvke-vkorg,
           vtweg TYPE mvke-vtweg,
           lvorm TYPE mvke-lvorm,
         END OF ty_sl.

  DATA lt_pl TYPE HASHED TABLE OF ty_pl WITH UNIQUE KEY matnr werks.
  DATA lt_sl TYPE HASHED TABLE OF ty_sl WITH UNIQUE KEY matnr vkorg vtweg.
  DATA ls_pl TYPE ty_pl.
  DATA ls_sl TYPE ty_sl.

  IF gt_out IS INITIAL.
    RETURN.
  ENDIF.

  SELECT matnr werks lvorm FROM marc INTO TABLE lt_pl
    FOR ALL ENTRIES IN gt_out
    WHERE matnr = gt_out-matnr
      AND werks = gt_out-werks.

  SELECT matnr vkorg vtweg lvorm FROM mvke INTO TABLE lt_sl
    FOR ALL ENTRIES IN gt_out
    WHERE matnr = gt_out-matnr
      AND vkorg = gt_out-vkorg
      AND vtweg = gt_out-vtweg.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<o>).
    IF <o>-werks IS NOT INITIAL.
      READ TABLE lt_pl INTO ls_pl
        WITH TABLE KEY matnr = <o>-matnr werks = <o>-werks.
      IF sy-subrc = 0.
        <o>-dlplt = ls_pl-lvorm.
      ENDIF.
    ENDIF.
    IF <o>-vkorg IS NOT INITIAL.
      READ TABLE lt_sl INTO ls_sl
        WITH TABLE KEY matnr = <o>-matnr vkorg = <o>-vkorg vtweg = <o>-vtweg.
      IF sy-subrc = 0.
        <o>-dlsos = ls_sl-lvorm.
      ENDIF.
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  ENRICH_TEXTS_AND_DESC
*&---------------------------------------------------------------------*
FORM enrich_texts_and_desc.
  IF p_potxt = 'X' OR p_sotxt = 'X' OR p_bstxt = 'X'.
    PERFORM read_long_texts.
  ENDIF.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  READ_LONG_TEXTS
*&  PO text  : MATERIAL / BEST / name = MATNR          (your F01)
*&  SO text  : MVKE     / 0001 / name = MATNR+VKORG+VTWEG
*&             RESPECTING BLANKS, fallback language D  (your SMATERIAL F01)
*&  Basic    : MATERIAL / GRUN / name = MATNR
*&
*&  Fixes vs. original:
*&    - CLEAR text name, lines table and buffer per material
*&    - Pre-check STXH so READ_TEXT is not called when no text exists
*&---------------------------------------------------------------------*
FORM read_long_texts.
  DATA: lt_stxh  TYPE HASHED TABLE OF ty_stxh_key
                 WITH UNIQUE KEY tdobject tdname tdid tdspras,
        ls_key   TYPE ty_stxh_key,
        lv_name  TYPE thead-tdname,
        lv_spras TYPE thead-tdspras,
        lv_str   TYPE string,
        lt_line  TYPE TABLE OF tline,
        ls_line  TYPE tline,
        lv_n     TYPE i,
        lv_tot   TYPE i.

  IF gt_out IS INITIAL.
    RETURN.
  ENDIF.

  lv_spras = p_langu.
  lv_tot = lines( gt_out ).

  " Existence map — MATERIAL texts (TDNAME is CHAR70; convert MATNR)
  IF p_potxt = 'X' OR p_bstxt = 'X'.
    DATA lt_names TYPE HASHED TABLE OF thead-tdname WITH UNIQUE KEY table_line.
    DATA lv_nm    TYPE thead-tdname.
    LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<n>).
      lv_nm = <n>-matnr.
      INSERT lv_nm INTO TABLE lt_names.
    ENDLOOP.
    IF lt_names IS NOT INITIAL.
      SELECT tdobject tdname tdid tdspras
        FROM stxh INTO TABLE lt_stxh
        FOR ALL ENTRIES IN lt_names
        WHERE tdobject = 'MATERIAL'
          AND tdname   = lt_names-table_line
          AND tdid    IN ('BEST', 'GRUN')
          AND tdspras  = lv_spras.
    ENDIF.
  ENDIF.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<o>).
    lv_n = sy-tabix.
    IF lv_n MOD 200 = 0.
      CALL FUNCTION 'SAPGUI_PROGRESS_INDICATOR'
        EXPORTING
          percentage = lv_n * 100 / lv_tot
          text       = |Reading long texts ({ lv_n }/{ lv_tot })|.
    ENDIF.

    "----- PO text : MATERIAL / BEST -----------------------------------
    IF p_potxt = 'X'.
      CLEAR lv_name.
      lv_name = <o>-matnr.
      ls_key-tdobject = 'MATERIAL'.
      ls_key-tdname   = lv_name.
      ls_key-tdid     = 'BEST'.
      ls_key-tdspras  = lv_spras.
      READ TABLE lt_stxh WITH TABLE KEY tdobject = ls_key-tdobject
                                        tdname   = ls_key-tdname
                                        tdid     = ls_key-tdid
                                        tdspras  = ls_key-tdspras
           TRANSPORTING NO FIELDS.
      IF sy-subrc = 0.
        PERFORM read_one_text USING 'BEST' lv_spras lv_name 'MATERIAL'
                             CHANGING lv_str.
        <o>-po_text = lv_str.
      ENDIF.
    ENDIF.

    "----- Basic text : MATERIAL / GRUN --------------------------------
    IF p_bstxt = 'X'.
      CLEAR lv_name.
      lv_name = <o>-matnr.
      PERFORM read_one_text USING 'GRUN' lv_spras lv_name 'MATERIAL'
                           CHANGING lv_str.
      <o>-basic_text = lv_str.
    ENDIF.

    "----- SO text : MVKE / 0001  (MATNR + VKORG + VTWEG) --------------
    IF p_sotxt = 'X'.
      CLEAR lv_name.
      " RESPECTING BLANKS keeps MATNR width (18 or 40) so VKORG/VTWEG
      " sit at the correct offset — identical to ZMD_R_SMATERIAL_F01
      CONCATENATE <o>-matnr <o>-vkorg <o>-vtweg
             INTO lv_name RESPECTING BLANKS.
      PERFORM read_one_text USING '0001' lv_spras lv_name 'MVKE'
                           CHANGING lv_str.
      IF lv_str IS INITIAL AND p_deflg = 'X' AND lv_spras <> 'D'.
        " German fallback, same as the second READ_TEXT in your include
        PERFORM read_one_text USING '0001' 'D' lv_name 'MVKE'
                             CHANGING lv_str.
      ENDIF.
      <o>-so_text = lv_str.
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  READ_ONE_TEXT
*&  Same concatenation rules as ZMD_R_MATERIAL_F01:
*&    TDFORMAT = '*'  -> newline then line
*&    else            -> append line
*&---------------------------------------------------------------------*
FORM read_one_text USING    iv_id     TYPE thead-tdid
                            iv_spras  TYPE thead-tdspras
                            iv_name   TYPE thead-tdname
                            iv_object TYPE thead-tdobject
                   CHANGING cv_str    TYPE string.

  DATA: lt_line TYPE TABLE OF tline,
        ls_line TYPE tline.

  CLEAR cv_str.
  REFRESH lt_line.

  CALL FUNCTION 'READ_TEXT'
    EXPORTING
      id                      = iv_id
      language                = iv_spras
      name                    = iv_name
      object                  = iv_object
    TABLES
      lines                   = lt_line
    EXCEPTIONS
      id                      = 1
      language                = 2
      name                    = 3
      not_found               = 4
      object                  = 5
      reference_check         = 6
      wrong_access_to_archive = 7
      OTHERS                  = 8.

  IF sy-subrc <> 0.
    ADD 1 TO gv_txt_e.
    RETURN.
  ENDIF.

  LOOP AT lt_line INTO ls_line.
    IF ls_line-tdformat = '*'.
      cv_str = |{ cv_str }{ cl_abap_char_utilities=>newline }{ ls_line-tdline }|.
    ELSE.
      cv_str = |{ cv_str }{ ls_line-tdline }|.
    ENDIF.
  ENDLOOP.

  " ALV / CSV: collapse newlines to a readable separator
  REPLACE ALL OCCURRENCES OF cl_abap_char_utilities=>newline
    IN cv_str WITH ` | `.
  CONDENSE cv_str.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  SET_STATUS_ICON
*&---------------------------------------------------------------------*
FORM set_status_icon.
  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<o>).
    IF <o>-lvorm = 'X' OR <o>-dlplt = 'X' OR <o>-dlsos = 'X'.
      <o>-status = '@0A@'. " red
    ELSEIF <o>-mstae IS NOT INITIAL OR <o>-mmsta IS NOT INITIAL
        OR <o>-vmsta IS NOT INITIAL.
      <o>-status = '@09@'. " yellow
    ELSE.
      <o>-status = '@08@'. " green
    ENDIF.
  ENDLOOP.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  DISPLAY_ALV
*&---------------------------------------------------------------------*
FORM display_alv.
  DATA: lo_cols  TYPE REF TO cl_salv_columns_table,
        lo_col   TYPE REF TO cl_salv_column_table,
        lo_evt   TYPE REF TO cl_salv_events_table,
        lo_func  TYPE REF TO cl_salv_functions_list,
        lo_lay   TYPE REF TO cl_salv_layout,
        lo_dsp   TYPE REF TO cl_salv_display_settings,
        lo_key   TYPE salv_s_layout_key,
        lo_aggr  TYPE REF TO cl_salv_aggregations,
        lv_title TYPE lvc_title.

  TRY.
      cl_salv_table=>factory(
        IMPORTING r_salv_table = go_alv
        CHANGING  t_table      = gt_out ).
    CATCH cx_salv_msg INTO DATA(lx).
      MESSAGE lx TYPE 'E'.
      RETURN.
  ENDTRY.

  lo_func = go_alv->get_functions( ).
  lo_func->set_all( abap_true ).

  lo_dsp = go_alv->get_display_settings( ).
  lo_dsp->set_striped_pattern( abap_true ).
  lv_title = |Material Master  | &&
             |{ lines( gt_out ) } rows|.
  IF gv_skip > 0.
    lv_title = |{ lv_title }  ({ gv_skip } plants skipped — no auth)|.
  ENDIF.
  lo_dsp->set_list_header( lv_title ).

  lo_lay = go_alv->get_layout( ).
  lo_key-report = sy-repid.
  lo_lay->set_key( lo_key ).
  lo_lay->set_save_restriction( if_salv_c_layout=>restrict_none ).
  lo_lay->set_default( abap_true ).
  IF p_vari IS NOT INITIAL.
    lo_lay->set_initial_layout( p_vari ).
  ENDIF.

  lo_cols = go_alv->get_columns( ).
  lo_cols->set_optimize( abap_true ).

  PERFORM set_field_catalog.

  TRY.
      lo_col ?= lo_cols->get_column( 'MATNR' ).
      lo_col->set_cell_type( if_salv_c_cell_type=>hotspot ).
      lo_col ?= lo_cols->get_column( 'STATUS' ).
      lo_col->set_icon( abap_true ).
      lo_col->set_short_text( 'Sts' ).
      lo_col->set_medium_text( 'Status' ).
    CATCH cx_salv_not_found ##NO_HANDLER.
  ENDTRY.

  TRY.
      lo_aggr = go_alv->get_aggregations( ).
      lo_aggr->add_aggregation( columnname = 'LABST' ).
      lo_aggr->add_aggregation( columnname = 'INSME' ).
      lo_aggr->add_aggregation( columnname = 'SPEME' ).
      lo_aggr->add_aggregation( columnname = 'SALK3' ).
      lo_aggr->add_aggregation( columnname = 'LBKUM' ).
    CATCH cx_salv_not_found cx_salv_data_error cx_salv_existing ##NO_HANDLER.
  ENDTRY.

  lo_evt = go_alv->get_event( ).
  SET HANDLER lcl_handle=>on_link_click FOR lo_evt.
  SET HANDLER lcl_handle=>on_double_click FOR lo_evt.

  go_alv->display( ).
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  SET_FIELD_CATALOG
*&---------------------------------------------------------------------*
FORM set_field_catalog.
  DATA lv_mrp  TYPE abap_bool.
  DATA lv_acct TYPE abap_bool.
  DATA lv_pur  TYPE abap_bool.
  DATA lv_sls  TYPE abap_bool.
  DATA lv_wh   TYPE abap_bool.
  DATA lv_qm   TYPE abap_bool.
  DATA lv_stk  TYPE abap_bool.
  DATA lv_plt  TYPE abap_bool.
  DATA lv_slc  TYPE abap_bool.
  DATA lv_val  TYPE abap_bool.
  DATA lv_sal  TYPE abap_bool.

  lv_mrp  = p_mrp.
  lv_acct = boolc( p_acct = 'X' OR p_valu = 'X' OR p_full = 'X' ).
  lv_pur  = p_pur.
  lv_sls  = boolc( p_sls = 'X' OR p_sales = 'X' OR p_full = 'X' ).
  lv_wh   = boolc( p_wh = 'X' OR p_stor = 'X' ).
  lv_qm   = p_qm.
  lv_stk  = boolc( p_stk = 'X' OR p_stor = 'X' ).
  lv_plt  = boolc( p_plant = 'X' OR p_stor = 'X' OR p_full = 'X' OR p_valu = 'X' ).
  lv_slc  = p_stor.
  lv_val  = boolc( p_valu = 'X' OR p_acct = 'X' OR p_full = 'X' ).
  lv_sal  = boolc( p_sales = 'X' OR p_sls = 'X' OR p_full = 'X' OR p_sotxt = 'X' ).

  " Key
  PERFORM col USING 'STATUS'     'Sts'      'Status'           'Status'                  'X'.
  PERFORM col USING 'MATNR'      'Material' 'Material'         'Material'                'X'.
  PERFORM col USING 'MAKTX'      'Descript' 'Description'      'Material Description'    'X'.
  PERFORM col USING 'WERKS'      'Plant'    'Plant'            'Plant'                   lv_plt.
  PERFORM col USING 'NAME1'      'Pl.Name'  'Plant Name'       'Plant Name'              lv_plt.
  PERFORM col USING 'LGORT'      'SLoc'     'Stor. Loc.'       'Storage Location'        lv_slc.
  PERFORM col USING 'LGOBE'      'SLoc Nm'  'SLoc Name'        'Storage Location Name'   lv_slc.
  PERFORM col USING 'BWKEY'      'ValArea'  'Val. Area'        'Valuation Area'          lv_val.
  PERFORM col USING 'BWTAR'      'ValType'  'Val. Type'        'Valuation Type'          lv_val.
  PERFORM col USING 'VKORG'      'SOrg'     'Sales Org.'       'Sales Organization'      lv_sal.
  PERFORM col USING 'VTWEG'      'DChl'     'Dist. Chl'        'Distribution Channel'    lv_sal.

  " Basic — always on
  PERFORM col USING 'MTART'  'MTyp'     'Mat. Type'        'Material Type'            'X'.
  PERFORM col USING 'MTBEZ'  'TypeTxt'  'Type Text'        'Material Type Text'       'X'.
  PERFORM col USING 'MATKL'  'MGrp'     'Mat. Group'       'Material Group'           'X'.
  PERFORM col USING 'WGBEZ'  'GrpTxt'   'Group Text'       'Material Group Text'      'X'.
  PERFORM col USING 'MBRSH'  'Ind'      'Industry'         'Industry Sector'          'X'.
  PERFORM col USING 'MEINS'  'BUoM'     'Base UoM'         'Base Unit of Measure'     'X'.
  PERFORM col USING 'EAN11'  'EAN'      'EAN/UPC'          'EAN/UPC'                  'X'.
  PERFORM col USING 'SPART'  'Div'      'Division'         'Division'                 'X'.
  PERFORM col USING 'PRDHA'  'PrdHier'  'Prod. Hier.'      'Product Hierarchy'        'X'.
  PERFORM col USING 'EXTWG'  'ExtGrp'   'Ext. Group'       'Ext. Material Group'      'X'.
  PERFORM col USING 'MSTAE'  'XPlSts'   'X-Plant Sts'      'Cross-Plant Status'       'X'.
  PERFORM col USING 'MSTAV'  'XDistSt'  'X-Distr. Sts'     'Cross-Distribution Status' ''.
  PERFORM col USING 'XCHPF'  'Batch'    'Batch Mgmt'       'Batch Management'         'X'.
  PERFORM col USING 'BWTTY'  'ValCat'   'Val. Category'    'Valuation Category'       lv_acct.
  PERFORM col USING 'GROES'  'Size'     'Size/Dim.'        'Size / Dimension'         ''.
  PERFORM col USING 'BRGEW'  'GrsWgt'   'Gross Weight'     'Gross Weight'             ''.
  PERFORM col USING 'NTGEW'  'NetWgt'   'Net Weight'       'Net Weight'               ''.
  PERFORM col USING 'GEWEI'  'WgtUom'   'Weight UoM'       'Weight Unit'              ''.
  PERFORM col USING 'VOLUM'  'Volume'   'Volume'           'Volume'                   ''.
  PERFORM col USING 'VOLEH'  'VolUom'   'Volume UoM'       'Volume Unit'              ''.
  PERFORM col USING 'ERSDA'  'Created'  'Created On'       'Created On'               'X'.
  PERFORM col USING 'ERNAM'  'CrtBy'    'Created By'       'Created By'               'X'.
  PERFORM col USING 'LAEDA'  'Changed'  'Last Change'      'Last Change'              ''.
  PERFORM col USING 'AENAM'  'ChgBy'    'Changed By'       'Changed By'               ''.
  PERFORM col USING 'LVORM'  'DelClnt'  'Del. Flag'        'DF at Client'             p_del.
  PERFORM col USING 'DLPLT'  'DelPlnt'  'Del. Plant'       'DF at Plant'              p_del.
  PERFORM col USING 'DLSOS'  'DelSls'   'Del. Sales'       'DF at Sales'              p_del.

  " MRP
  PERFORM col USING 'MMSTA'  'PlSts'    'Plant Sts'        'Plant-Specific Status'    lv_mrp.
  PERFORM col USING 'DISMM'  'MRPTyp'   'MRP Type'         'MRP Type'                 lv_mrp.
  PERFORM col USING 'DISPO'  'MRPCtl'   'MRP Ctrlr'        'MRP Controller'           lv_mrp.
  PERFORM col USING 'DISLS'  'LotSz'    'Lot Size'         'Lot Size Key'             lv_mrp.
  PERFORM col USING 'DISGR'  'MRPGrp'   'MRP Group'        'MRP Group'                lv_mrp.
  PERFORM col USING 'BESKZ'  'Proc'     'Proc. Type'       'Procurement Type'         lv_mrp.
  PERFORM col USING 'SOBSL'  'SpProc'   'Spec. Proc.'      'Special Procurement'      lv_mrp.
  PERFORM col USING 'MINBE'  'Reord'    'Reorder Pt'       'Reorder Point'            lv_mrp.
  PERFORM col USING 'EISBE'  'Safety'   'Safety Stk'       'Safety Stock'             lv_mrp.
  PERFORM col USING 'MABST'  'MaxStk'   'Max. Stock'       'Maximum Stock'            lv_mrp.
  PERFORM col USING 'BSTMI'  'MinLot'   'Min. Lot'         'Minimum Lot Size'         lv_mrp.
  PERFORM col USING 'BSTMA'  'MaxLot'   'Max. Lot'         'Maximum Lot Size'         lv_mrp.
  PERFORM col USING 'BSTFE'  'FixLot'   'Fixed Lot'        'Fixed Lot Size'           lv_mrp.
  PERFORM col USING 'BSTRF'  'RndLot'   'Rounding'         'Rounding Value'           lv_mrp.
  PERFORM col USING 'LOSGR'  'CostLot'  'Costing Lot'      'Costing Lot Size'         lv_mrp.
  PERFORM col USING 'MAABC'  'ABC'      'ABC Ind.'         'ABC Indicator'            lv_mrp.
  PERFORM col USING 'PLIFZ'  'PlDlv'    'Pl. Del. Tm'      'Planned Delivery Time'    lv_mrp.
  PERFORM col USING 'WEBAZ'  'GRPrc'    'GR Proc. Tm'      'GR Processing Time'       lv_mrp.
  PERFORM col USING 'DZEIT'  'InhPrd'   'In-house Prd'     'In-house Production Time' lv_mrp.
  PERFORM col USING 'WZEIT'  'TotRpl'   'Tot. Repl.'       'Total Replenishment Lead' lv_mrp.
  PERFORM col USING 'PRCTR'  'PrCtr'    'Profit Ctr'       'Profit Center'            'X'.
  PERFORM col USING 'KTEXT'  'PrCtrNm'  'PrCtr Name'       'Profit Center Name'       'X'.
  PERFORM col USING 'STRGR'  'Strat'    'Strategy'         'Planning Strategy Group'  lv_mrp.
  PERFORM col USING 'SFCPF'  'PSProf'   'ProdSchProf'      'Production Scheduling Prf' lv_mrp.
  PERFORM col USING 'FEVOR'  'Super'    'Supervisor'       'Production Supervisor'    lv_mrp.
  PERFORM col USING 'AUSSS'  'AssySc'   'Assy Scrap'       'Assembly Scrap %'         lv_mrp.
  PERFORM col USING 'KZAUS'  'Discon'   'Discont. Ind'     'Discontinuation Ind.'     lv_mrp.
  PERFORM col USING 'MISKZ'  'Mixed'    'Mixed MRP'        'Mixed MRP'                lv_mrp.
  PERFORM col USING 'SAUFT'  'RepMfg'   'Repetitive'       'Repetitive Mfg'           lv_mrp.
  PERFORM col USING 'PSTAT'  'MaintSt'  'Maint. Sts'       'Maintenance Status'       ''.

  " Accounting
  PERFORM col USING 'BKLAS'  'ValCls'   'Val. Class'       'Valuation Class'          lv_acct.
  PERFORM col USING 'BKBEZ'  'VCText'   'ValCls Text'      'Valuation Class Text'     lv_acct.
  PERFORM col USING 'VPRSV'  'PrcCtl'   'Price Ctrl'       'Price Control'            lv_acct.
  PERFORM col USING 'PEINH'  'PrcUnit'  'Price Unit'       'Price Unit'               lv_acct.
  PERFORM col USING 'WAERS'  'Curr'     'Currency'         'Currency'                 lv_acct.
  PERFORM col USING 'STPRS'  'StdPrc'   'Std Price'        'Standard Price'           lv_acct.
  PERFORM col USING 'VERPR'  'MAPrc'    'MAP'              'Moving Average Price'     lv_acct.
  PERFORM col USING 'SALK3'  'ValStk'   'Value'            'Value of Total Valuated'  lv_acct.
  PERFORM col USING 'LBKUM'  'ValQty'   'Val. Qty'         'Total Valuated Stock'     lv_acct.
  PERFORM col USING 'MLMAA'  'ML'       'ML Active'        'Material Ledger Active'   lv_acct.
  PERFORM col USING 'HKMAT'  'MTO'      'Mat. Origin'      'Material Related Origin'  lv_acct.
  PERFORM col USING 'EKLAS'  'SalVC'    'Sales ValCls'     'Sales Order Val. Class'   lv_acct.
  PERFORM col USING 'QKLAS'  'PrjVC'    'Project VC'       'Project Stock Val. Class' lv_acct.
  PERFORM col USING 'ZPLPR'  'PlnPrc'   'Planned Prc'      'Future Planned Price'     lv_acct.
  PERFORM col USING 'AWSLS'  'VarKey'   'Variance Key'     'Variance Key'             lv_acct.
  PERFORM col USING 'NCOST'  'DoNotCst' 'Do Not Cost'      'Do Not Cost'              lv_acct.

  " Purchasing
  PERFORM col USING 'EKGRP'  'PGrp'     'Purch. Grp'       'Purchasing Group'         lv_pur.
  PERFORM col USING 'EKWSL'  'PValKey'  'PurchValKey'      'Purchasing Value Key'     lv_pur.
  PERFORM col USING 'BSTME'  'OUoM'     'Order UoM'        'Order Unit'               lv_pur.
  PERFORM col USING 'KAUTB'  'AutoPO'   'Auto PO'          'Automatic PO'             lv_pur.
  PERFORM col USING 'KZKRI'  'CritPart' 'Critical'         'Critical Part'            lv_pur.
  PERFORM col USING 'RGEKZ'  'Backfl'   'Backflush'        'Backflush'                lv_pur.
  PERFORM col USING 'MFRNR'  'Mfr'      'Manufacturer'     'Manufacturer'             lv_pur.
  PERFORM col USING 'MFRPN'  'MfrPtNo'  'Mfr Part No'      'Manufacturer Part Number' lv_pur.
  PERFORM col USING 'NORMT'  'Industry' 'Ind. Std'         'Industry Standard Desc.'  lv_pur.

  " Sales
  PERFORM col USING 'VMSTA'  'SlSts'    'Sales Sts'        'Sales Status'             lv_sls.
  PERFORM col USING 'VRKME'  'SlsUoM'   'Sales UoM'        'Sales Unit'               lv_sls.
  PERFORM col USING 'DWERK'  'DlvPlnt'  'Dlv. Plant'       'Delivering Plant'         lv_sls.
  PERFORM col USING 'KTGRM'  'AcctGrp'  'Acct Assn Grp'    'Acct Assignment Group'    lv_sls.
  PERFORM col USING 'MTPOS'  'ItmCat'   'Item Cat. Grp'    'Item Category Group'      lv_sls.
  PERFORM col USING 'PROVG'  'CommGrp'  'Comm. Group'      'Commission Group'         lv_sls.
  PERFORM col USING 'AUMNG'  'MinOrd'   'Min. Order'       'Minimum Order Qty'        lv_sls.
  PERFORM col USING 'LFMNG'  'MinDlv'   'Min. Dlv'         'Minimum Delivery Qty'     lv_sls.
  PERFORM col USING 'MVGR1'  'MatGrp1'  'Mat. Group 1'     'Material Group 1'         lv_sls.
  PERFORM col USING 'MVGR2'  'MatGrp2'  'Mat. Group 2'     'Material Group 2'         lv_sls.
  PERFORM col USING 'SKTOF'  'CashDisc' 'Cash Disc.'       'Cash Discount'            lv_sls.

  " Warehouse
  PERFORM col USING 'LGPRO'  'IssSLoc'  'Issue SLoc'       'Issue Storage Location'   lv_wh.
  PERFORM col USING 'LGFSB'  'ExtSLoc'  'Ext. Proc SLoc'   'SLoc for Ext. Proc.'      lv_wh.
  PERFORM col USING 'TRAGR'  'TrnGrp'   'Trans. Grp'       'Transportation Group'     lv_wh.
  PERFORM col USING 'VHART'  'PkgMat'   'Packaging'        'Packaging Material Type'  lv_wh.
  PERFORM col USING 'MAGRV'  'MatGrpPk' 'MatGrp Pack'      'Mat. Group Packaging'     lv_wh.
  PERFORM col USING 'XCHAR'  'BtPlnt'   'Batch Plant'      'Batch Mgmt Plant'         lv_wh.
  PERFORM col USING 'LABOR'  'LabOff'   'Lab/Office'       'Lab / Office'             ''.
  PERFORM col USING 'UEETO'  'OverDlv'  'Over Dlv %'       'Unlimited Overdelivery'   lv_wh.
  PERFORM col USING 'UEETK'  'UnlOver'  'Unlim. Over'      'Unlimited Overdelivery'   lv_wh.
  PERFORM col USING 'UNETO'  'UnderDlv' 'Under Dlv %'      'Underdelivery Tolerance'  lv_wh.

  " QM
  PERFORM col USING 'QMPUR'  'QMProc'   'QM in Proc.'      'QM in Procurement'        lv_qm.
  PERFORM col USING 'SSQSS'  'QMCtrl'   'QM Control'       'QM Control Key'           lv_qm.
  PERFORM col USING 'QZGTP'  'CertTy'   'Cert. Type'       'Certificate Type'         lv_qm.
  PERFORM col USING 'MHDRZ'  'MinRem'   'Min. Rem. Shlf'   'Min. Remaining Shelf Life' lv_qm.
  PERFORM col USING 'MHDHB'  'TotShlf'  'Total Shelf'      'Total Shelf Life'         lv_qm.
  PERFORM col USING 'STEUC'  'CtrlCd'   'Control Code'     'Control Code (HSN/SAC)'   lv_qm.
  PERFORM col USING 'HERKL'  'OrigCtry' 'Ctry Origin'      'Country of Origin'        lv_qm.
  PERFORM col USING 'HERKR'  'OrigReg'  'Region Origin'    'Region of Origin'         lv_qm.
  PERFORM col USING 'PROFL'  'DGProf'   'DG Profile'       'Dangerous Goods Profile'  lv_qm.
  PERFORM col USING 'KZUMW'  'EnvRel'   'Env. Rel.'        'Environmentally Relevant' lv_qm.

  " Stock
  PERFORM col USING 'LABST'  'Unrestr'  'Unrestricted'     'Unrestricted-Use Stock'   lv_stk.
  PERFORM col USING 'INSME'  'QI'       'QI Stock'         'In Quality Inspection'    lv_stk.
  PERFORM col USING 'SPEME'  'Blocked'  'Blocked'          'Blocked Stock'            lv_stk.
  PERFORM col USING 'UMLME'  'Transit'  'In Transfer'      'Stock in Transfer'        lv_stk.
  PERFORM col USING 'EINME'  'Restrict' 'Restricted'       'Restricted-Use Stock'     lv_stk.
  PERFORM col USING 'RETME'  'Returns'  'Returns'          'Blocked Returns'          lv_stk.

  " Texts
  PERFORM col USING 'PO_TEXT'    'PO Text'  'PO Text'          'Material PO Text (BEST)'   p_potxt.
  PERFORM col USING 'SO_TEXT'    'SO Text'  'SO Text'          'Material SO Text (0001)'   p_sotxt.
  PERFORM col USING 'BASIC_TEXT' 'Bsc Text' 'Basic Text'       'Basic Data Text (GRUN)'    p_bstxt.

  " Always-hidden helpers if unused
  PERFORM col USING 'WRKST'  'BscMatl'  'Basic Matl'       'Basic Material'           ''.
  PERFORM col USING 'FERTH'  'PrdMemo'  'Prod. Memo'       'Production Memo'          ''.
  PERFORM col USING 'ZEINR'  'DocNo'    'Document'         'Document Number'          ''.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  COL
*&---------------------------------------------------------------------*
FORM col USING iv_fnam TYPE lvc_fname
               iv_sh   TYPE scrtext_s
               iv_md   TYPE scrtext_m
               iv_lg   TYPE scrtext_l
               iv_vis  TYPE abap_bool.
  DATA lo_col TYPE REF TO cl_salv_column_table.
  TRY.
      lo_col ?= go_alv->get_columns( )->get_column( iv_fnam ).
      lo_col->set_short_text( iv_sh ).
      lo_col->set_medium_text( iv_md ).
      lo_col->set_long_text( iv_lg ).
      lo_col->set_tooltip( |{ iv_lg } ({ iv_fnam })| ).
      IF iv_vis IS INITIAL.
        lo_col->set_visible( if_salv_c_bool_sap=>false ).
      ENDIF.
    CATCH cx_salv_not_found ##NO_HANDLER.
  ENDTRY.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  CALL_MM03
*&---------------------------------------------------------------------*
FORM call_mm03 USING iv_row TYPE salv_de_row.
  DATA ls_out TYPE ty_out.
  READ TABLE gt_out INTO ls_out INDEX iv_row.
  IF sy-subrc <> 0 OR ls_out-matnr IS INITIAL.
    RETURN.
  ENDIF.
  SET PARAMETER ID 'MAT' FIELD ls_out-matnr.
  IF ls_out-werks IS NOT INITIAL.
    SET PARAMETER ID 'WRK' FIELD ls_out-werks.
  ENDIF.
  CALL TRANSACTION 'MM03' AND SKIP FIRST SCREEN.
ENDFORM.

*&---------------------------------------------------------------------*
*&      Form  DOWNLOAD_CSV
*&---------------------------------------------------------------------*
FORM download_csv.
  DATA: lt_out  TYPE TABLE OF string,
        lv_line TYPE string,
        lv_fn   TYPE string,
        lv_path TYPE string,
        lv_full TYPE string,
        lv_ua   TYPE char1.

  APPEND 'Status;Material;Description;Plant;PlantName;SLoc;ValArea;ValType;' &&
         'SalesOrg;DistChl;MatType;MatGroup;UoM;ValCategory;ValClass;' &&
         'PriceCtrl;StdPrice;MAP;Currency;MRPType;MRPCtrl;ProcType;' &&
         'ProfitCenter;Unrestricted;QI;Blocked;POText;SOText;BasicText'
         TO lt_out.

  LOOP AT gt_out ASSIGNING FIELD-SYMBOL(<o>).
    lv_line = |{ <o>-status };{ <o>-matnr };{ <o>-maktx };{ <o>-werks };| &&
              |{ <o>-name1 };{ <o>-lgort };{ <o>-bwkey };{ <o>-bwtar };| &&
              |{ <o>-vkorg };{ <o>-vtweg };{ <o>-mtart };{ <o>-matkl };| &&
              |{ <o>-meins };{ <o>-bwtty };{ <o>-bklas };{ <o>-vprsv };| &&
              |{ <o>-stprs };{ <o>-verpr };{ <o>-waers };{ <o>-dismm };| &&
              |{ <o>-dispo };{ <o>-beskz };{ <o>-prctr };{ <o>-labst };| &&
              |{ <o>-insme };{ <o>-speme };{ <o>-po_text };{ <o>-so_text };| &&
              |{ <o>-basic_text }|.
    REPLACE ALL OCCURRENCES OF cl_abap_char_utilities=>newline IN lv_line WITH ` `.
    APPEND lv_line TO lt_out.
  ENDLOOP.

  lv_fn = |ZMM_MAT_MASTER_{ sy-datum }_{ sy-uzeit }.csv|.

  cl_gui_frontend_services=>file_save_dialog(
    EXPORTING  default_extension = 'csv'
               default_file_name = lv_fn
               file_filter       = 'CSV files (*.csv)|*.csv'
    CHANGING   filename          = lv_fn
               path              = lv_path
               fullpath          = lv_full
               user_action       = lv_ua
    EXCEPTIONS OTHERS            = 1 ).
  IF sy-subrc <> 0 OR lv_ua <> cl_gui_frontend_services=>action_ok.
    RETURN.
  ENDIF.

  cl_gui_frontend_services=>gui_download(
    EXPORTING  filename = lv_full
               filetype = 'ASC'
    CHANGING   data_tab = lt_out
    EXCEPTIONS OTHERS   = 1 ).
  IF sy-subrc = 0.
    MESSAGE |CSV downloaded: { lv_full } ({ lines( gt_out ) } rows)| TYPE 'S'.
  ELSE.
    MESSAGE 'CSV download failed' TYPE 'E'.
  ENDIF.
ENDFORM.
