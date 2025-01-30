export const ejectedCodes = {
  css: `:root {
    /* Other variables  */
    --auera-text-color: #000;
    --auera-text-muted: var(--auera-slate-700);
    --auera-card-sh: rgba(0, 0, 0, 0.05); 
    background: #fff;
  }
  
  html[data-theme="dark"] {
    /* Other variables  */
    --auera-text-color: #fff;
    --auera-text-muted: #a1a1aa;
    --auera-card-sh: var(--auera-neutral-900);
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
  dropShadow: {...}
}`,
};
