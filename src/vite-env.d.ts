/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SYNCFUSION_LICENSE: string
  readonly VITE_JSPREADSHEET_LICENSE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
