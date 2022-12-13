/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@' {
  const value:any
  export default value
}

declare type Indexable<T> = {
  [key: string]: T
}

interface ImportMetaEnv {}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
