export const tailwindExtend = {
  boxShadow: {
    // Button: Frost
    "frost-blue":
      "var(--auera-blue-900) 0px 1px 0px inset, rgba(0, 77, 153, 0.4) 0px -1px 0px 1px inset, rgba(9, 11, 11, 0.1) 0px 2px 4px 0px",
    "frost-danger":
      "var(--auera-red-900) 0px 1px 0px inset, var(--auera-red-400) 0px -1px 0px 1px inset, rgba(9, 11, 11, 0.1) 0px 2px 4px 0px",
    "frost-success":
      "var(--auera-green-900) 0px 1px 0px inset, var(--auera-green-400) 0px -1px 0px 1px inset, rgba(9, 11, 11, 0.1) 0px 2px 4px 0px",
    "frost-warn":
      "var(--auera-yellow-900) 0px 1px 0px inset, var(--auera-yellow-400) 0px -1px 0px 1px inset, rgba(9, 11, 11, 0.1) 0px 2px 4px 0px",
    "frost-outline":
      "var(--auera-frost-outline) 0 -1px 0 1px inset, var(--auera-frost-outline-out) 0 1px 2px 0",
    "frost-light-primary":
      "var(--auera-frost-light-primary) 0 -1px 0 1px inset, var(--auera-frost-light-primary-out) 0 1px 2px 0",
    "frost-light-danger":
      "var(--auera-frost-light-danger) 0 -1px 0 1px inset, var(--auera-frost-light-danger-out) 0 1px 2px 0",
    "frost-light-success":
      "var(--auera-frost-light-success) 0 -1px 0 1px inset, var(--auera-frost-light-success-out) 0 1px 2px 0",
    "frost-light-warn":
      "var(--auera-frost-light-warn) 0 -1px 0 1px inset, var(--auera-frost-light-warn-out) 0 1px 2px 0",
    "frost-modal-dark":
      "var(--auera-neutral-800) 0 -1px 0 1px inset, var(--auera-neutral-900) 0 1px 2px 0",
    card: "0 4px 10px var(--auera-card-sh)",
  },
  colors: {
    primary: "var(--auera-text-color)",
    muted: "var(--auera-text-muted)",
  },
  borderColor: {
    "frost-blue": "var(--auera-blue-800)",
    "frost-danger": "var(--auera-red-800)",
    frost_success: "var(--auera-green-800)",
    frost_warn: "var(--auera-yellow-800)",
    "frost-outline": "var(--auera-frost-outline-border)",
    "frost-light-primary": "var(--auera-frost-light-primary-border)",
    "frost-light-danger": "var(--auera-frost-light-danger-border)",
    "frost-light-success": "var(--auera-frost-light-success-border)",
    "frost-light-warn": "var(--auera-frost-light-warn-border)",
    "dark-soft-red": "rgb(255,205,210,0.2)",
    "dark-soft-yellow": "rgb(255,249,196,0.2)",
    "dark-soft-green": "rgb(200,230,201,0.2)",
    "dark-soft-blue": "rgb(187,222,251,0.2)",
  },
  backgroundColor: {
    "light-frost": "hsla(210, 100%, 96%, 0.2)",
    "light-drop": "rgb(255,255,255,0.5)",
    "dark-drop": "rgb(0,0,0,0.5)",
    // For dark mode
    "dark-soft-red": "rgb(255,205,210,0.2)",
    "dark-soft-yellow": "rgb(255,249,196,0.2)",
    "dark-soft-green": "rgb(200,230,201,0.2)",
    "dark-soft-blue": "rgb(187,222,251,0.2)",
    "frost-danger-hover": "var(--auera-frost-light-danger-hover)",
    "frost-success-hover": "var(--auera-frost-light-success-hover)",
    "frost-warn-hover": "var(--auera-frost-light-warn-hover)",
    "frost-light-hover": "var(--auera-frost-light-primary-hover)",
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
      " 0%": {
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
