// This file ensures TypeScript recognizes .vue files as valid Vue components with a default export.
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
