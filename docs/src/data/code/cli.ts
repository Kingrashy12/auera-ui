export const ejectedCodes = {
  css: `:root {
    /* Other variables  */
    --auera-text-color: #000;
    --auera-text-muted: var(--auera-slate-700);
    background: #fff;
  }
  
  html[data-theme="dark"] {
    /* Other variables  */
    --auera-text-color: #fff;
    --auera-text-muted: #a1a1aa;
    background: #000;
  }`,
  config: `export const tailwindExtend = {
  boxShadow: {...},
  borderColor: {...},
  backgroundColor: {...},
  colors: {...},
  transitionProperty: {...},
  keyframes: {...},
  animation: {...},
  dropShadow: {...},
  fontFamily: {...},
}`,
};
