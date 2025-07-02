export const tailwindExtend = {
  boxShadow: {
    card: "0 4px 10px var(--auera-card-sh)",
  },
  colors: {
    primary: "var(--auera-text-color)",
    muted: "var(--auera-text-muted)",
    border: "var(--auera-border)",
    hover: "var(--auera-hover)",
    input: "var(--auera-input)",
    shadow: "var(--auera-shadow)",
    text: "var(--auera-text)",
    "btn-hover": "var(--auera-btn-hover)",
    "btn-shadow": "var(--auera-btn-shadow)",
  },
  borderColor: {
    border: "var(--auera-border)",
    "btn-border": "var(--auera-btn-border)",
  },
  backgroundColor: {
    background: "var(--auera-background)",
    sidebar: "var(--auera-sidebar)",
    modal: "var(--auera-modal)",
    hover: "var(--auera-hover)",
    input: "var(--auera-input)",
    content: "var(--auera-content)",
    "btn-bg": "var(--auera-bg-btn)",
    "btn-hover": "var(--auera-btn-hover)",
  },
  borderWidth: {
    1.7: "1.7px",
    1.9: "1.9px",
    3: "3px",
    5: "5px",
    6: "6px",
    7: "7px",
    8: "8px",
    9: "9px",
    10: "10px",
  },
  transitionProperty: {
    layer: "background-color 0.3s ease, box-shadow 0.3s ease",
    "border-color": "border-color 0.3s ease, box-shadow 0.3s ease",
  },
  keyframes: {
    slideIn: {
      from: {
        transform: "translateX(100%)",
        opacity: "0",
      },
      to: {
        transform: "translateX(0)",
        opacity: "1",
      },
    },
    slideOut: {
      from: {
        transform: "translateX(0)",
        opacity: "1",
      },
      to: {
        transform: "translateX(100%)",
        opacity: "0",
      },
    },
    walkIn: {
      from: {
        scale: "0.2",
        opacity: "0",
      },
      to: {
        scale: "1",
        opacity: "1",
      },
    },
    walkOut: {
      from: {
        scale: "1",
        opacity: "1",
      },
      to: {
        scale: "0.2",
        opacity: "0",
      },
    },
    dropIn: {
      from: {
        transform: "translateY(-50%)",
        opacity: "0",
      },
      to: {
        transform: "translateY(0%)",
        opacity: "1",
      },
    },
    dropOut: {
      from: {
        transform: "translateY(0%)",
        opacity: "1",
      },
      to: {
        transform: "translateY(-50%)",
        opacity: "0",
      },
    },
    slideInLeft: {
      "0%": {
        transform: "translateX(-100%)",
        opacity: "0",
      },
      "100%": {
        transform: "translateX(0)",
        opacity: "1",
      },
    },
    slideOutLeft: {
      "0%": {
        transform: "translateX(0)",
        opacity: "1",
      },
      "100%": {
        transform: "translateX(-100%)",
        opacity: "0",
      },
    },
    popIn: {
      "0%": {
        transform: "translateY(50%)",
        opacity: "0",
      },
      "100%": {
        transform: "translateY(0%)",
        opacity: "1",
      },
    },
    popOut: {
      "0%": {
        transform: "translateY(0%)",
        opacity: "1",
      },
      "100%": {
        transform: "translateY(50%)",
        opacity: "0",
      },
    },
    shake: {
      "0%": {
        transform: "translateX(6px)",
      },
      "50%": {
        transform: "translateX(-6px)",
      },
      "100%": {
        transform: "translateX(6px)",
      },
    },
    scrollX: {
      "0%": {
        transform: "translateX(100%)",
      },
      "100%": {
        transform: "translateX(-100%)",
      },
    },
    wave: {
      "0%": {
        transform: "scaleY(1)",
      },
      "100%": {
        transform: "scaleY(1)",
      },
      "50%": {
        transform: "scaleY(1.5)",
      },
    },
  },
  animation: {
    slideIn: "slideIn 0.5s ease-in-out",
    slideOut: "slideOut 0.5s ease-in-out",
    dropIn: "dropIn 0.5s ease-in-out",
    dropOut: "dropOut 0.5s ease-in-out",
    walkIn: "walkIn 0.5s ease-in-out",
    walkOut: "walkOut 0.5s ease-in-out",
    slideInLeft: "slideInLeft 0.5s ease-in-out",
    slideOutLeft: "slideOutLeft 0.5s ease-in-out",
    popIn: "popIn 0.5s ease-in-out",
    popOut: "popOut 0.5s ease-in-out",
    shake: "shake 0.2s ease-in-out",
    scrollX: "scrollX 40s linear infinite",
    wave: "wave 1.2s infinite ease-in-out",
  },
  dropShadow: {
    tab: "0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06)",
  },
  fontFamily: {
    inter: "'Inter', sans-serif",
    archivo: "'Archivo Black', san-serif",
  },
};
