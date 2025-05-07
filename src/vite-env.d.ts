/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob<T = any>(
    pattern: string | string[],
    options?: {
      eager?: boolean;
      as?: string;
      import?: string;
    }
  ): Record<string, T>;
}

interface Frontmatter {
  title: string;
  date: string;
  description: string;
  status?: string;
}

interface ImportMetaGlob {
  frontmatter: Frontmatter;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
} 