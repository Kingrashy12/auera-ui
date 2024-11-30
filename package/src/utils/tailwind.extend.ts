/** @type {import('tailwindcss').Config} */
export const tailwindExtend = {
  boxShadow: {
    //Button
    "frost-blue":
      "var(--blue-900) 0px 1px 0px inset, rgba(0, 77, 153, 0.4) 0px -1px 0px 1px inset, rgba(9, 11, 11, 0.1) 0px 2px 4px 0px",
    "frost-danger":
      "var(--red-900) 0px 1px 0px inset, var(--red-400) 0px -1px 0px 1px inset, rgba(9, 11, 11, 0.1) 0px 2px 4px 0px",
    "frost-success":
      "var(--green-900) 0px 1px 0px inset, var(--green-400) 0px -1px 0px 1px inset, rgba(9, 11, 11, 0.1) 0px 2px 4px 0px",
    "frost-warn":
      "var(--yellow-900) 0px 1px 0px inset, var(--yellow-400) 0px -1px 0px 1px inset, rgba(9, 11, 11, 0.1) 0px 2px 4px 0px",
    "frost-outline":
      "var(--frost-outline) 0 -1px 0 1px inset, var(--frost-outline-out) 0 1px 2px 0",
    "frost-light-primary":
      "var(--frost-light-primary) 0 -1px 0 1px inset, var(--frost-light-primary-out) 0 1px 2px 0",
    "frost-light-danger":
      "var(--frost-light-danger) 0 -1px 0 1px inset, var(--frost-light-danger-out) 0 1px 2px 0",
    "frost-light-success":
      "var(--frost-light-success) 0 -1px 0 1px inset, var(--frost-light-success-out) 0 1px 2px 0",
    "frost-light-warn":
      "var(--frost-light-warn) 0 -1px 0 1px inset, var(--frost-light-warn-out) 0 1px 2px 0",
    // Neumorphic design pattern
    "neumorphic-solid-primary":
      "var(--blue-900) 0px -6px 0px inset,  rgba(0, 77, 153, 0.4) 0px -4px 0px 6px inset, rgba(9, 11, 11, 0.1) 0px 6px 10px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-solid-danger":
      "var(--red-900) 0px -6px 0px inset, var(--red-400) 0px -4px 0px 6px inset, rgba(9, 11, 11, 0.1) 0px 6px 10px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-solid-success":
      "var(--green-900) 0px -6px 0px inset, var(--green-400) 0px -4px 0px 6px inset, rgba(9, 11, 11, 0.1) 0px 6px 10px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-solid-warn":
      "var(--yellow-900) 0px -6px 0px inset, var(--yellow-400) 0px -4px 0px 6px inset, rgba(9, 11, 11, 0.1) 0px 6px 10px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-outline":
      "var(--neumorphic-outline) 0px -6px 0px inset, var(--neumorphic-outline-out) 0px -4px 0px 6px inset, rgba(9, 11, 11, 0.1) 0px 6px 10px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-solid-primary_hover":
      "var(--blue-900) 0px -3px 0px inset, rgba(0, 77, 153, 0.4) 0px -2px 0px 3px inset, rgba(9, 11, 11, 0.1) 0px 4px 8px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-solid-danger_hover":
      "var(--red-900) 0px -3px 0px inset, var(--red-400) 0px -2px 0px 3px inset, rgba(9, 11, 11, 0.1) 0px 4px 8px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-solid-success_hover":
      "var(--green-900) 0px -3px 0px inset, var(--green-400) 0px -2px 0px 3px inset, rgba(9, 11, 11, 0.1) 0px 4px 8px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-solid-warn_hover":
      "var(--yellow-900) 0px -3px 0px inset, var(--yellow-400) 0px -2px 0px 3px inset, rgba(9, 11, 11, 0.1) 0px 4px 8px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-outline_hover":
      "var(--neumorphic-outline) 0px -3px 0px inset, var(--neumorphic-outline-out) 0px -2px 0px 3px inset, rgba(9, 11, 11, 0.1) 0px 4px 8px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-flat-success":
      "var(--green-400) 0px -6px 0px inset, var(--green-200) 0px -4px 0px 6px inset, rgba(9, 11, 11, 0.1) 0px 6px 10px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-flat-success_hover":
      "var(--green-400) 0px -3px 0px inset, var(--green-200) 0px -2px 0px 3px inset, rgba(9, 11, 11, 0.1) 0px 4px 8px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-flat-primary":
      "var(--blue-400) 0px -6px 0px inset, var(--blue-200) 0px -4px 0px 6px inset, rgba(9, 11, 11, 0.1) 0px 6px 10px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-flat-primary_hover":
      "var(--blue-400) 0px -3px 0px inset, var(--blue-200) 0px -2px 0px 3px inset, rgba(9, 11, 11, 0.1) 0px 4px 8px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-flat-danger":
      "var(--red-400) 0px -6px 0px inset, var(--red-200) 0px -4px 0px 6px inset, rgba(9, 11, 11, 0.1) 0px 6px 10px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-flat-danger_hover":
      "var(--red-400) 0px -3px 0px inset, var(--red-200) 0px -2px 0px 3px inset, rgba(9, 11, 11, 0.1) 0px 4px 8px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-flat-warn":
      "var(--yellow-400) 0px -6px 0px inset, var(--yellow-200) 0px -4px 0px 6px inset, rgba(9, 11, 11, 0.1) 0px 6px 10px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "neumorphic-flat-warn_hover":
      "var(--yellow-400) 0px -3px 0px inset, var(--yellow-200) 0px -2px 0px 3px inset, rgba(9, 11, 11, 0.1) 0px 4px 8px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "card-shadow-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
    "card-shadow-dark": "0 4px 6px var(--neutral-900)",
    "neumorphic-modal-dark":
      "var(--neutral-950) 0px -6px 0px inset, var(--neutral-800) 0px -4px 0px 6px inset, rgba(9, 11, 11, 0.1) 0px 6px 10px 0px, rgba(9, 11, 11, 0.1) 0px 1px 2px 0px",
    "frost-modal-dark":
      "var(--neutral-800) 0 -1px 0 1px inset, var(--neutral-900) 0 1px 2px 0",
  },
  colors: {
    blue: {
      50: "var(--blue-50)",
      100: "var(--blue-100)",
      200: "var(--blue-200)",
      400: "var(--blue-400)",
      700: "var(--blue-700)",
      800: "var(--blue-800)",
      900: "var(--blue-900)",
    },
    red: {
      50: "var(--red-50)",
      100: "var(--red-100)",
      200: "var(--red-200)",
      400: "var(--red-400)",
      700: "var(--red-700)",
      800: "var(--red-800)",
      900: "var(--red-900)",
    },
    green: {
      50: "var(--green-50)",
      100: "var(--green-100)",
      200: "var(--green-200)",
      400: "var(--green-400)",
      700: "var(--green-700)",
      800: "var(--green-800)",
      900: "var(--green-900)",
    },
    yellow: {
      50: "var(--yellow-50)",
      100: "var(--yellow-100)",
      200: "var(--yellow-200)",
      400: "var(--yellow-400)",
      700: "var(--yellow-700)",
      800: "var(--yellow-800)",
      900: "var(--yellow-900)",
    },
    gray: {
      50: "var(--gray-50)",
      100: "var(--gray-100)",
      200: "var(--gray-200)",
      400: "var(--gray-400)",
      700: "var(--gray-700)",
      800: "var(--gray-800)",
      900: "var(--gray-900)",
    },
    neutral: {
      50: "var(--neutral-50)",
      100: "var(--neutral-100)",
      200: "var(--neutral-200)",
      400: "var(--neutral-400)",
      700: "var(--neutral-700)",
      800: "var(--neutral-800)",
      900: "var(--neutral-900)",
    },
    slate: {
      900: "var(--slate-900)",
      950: "var(--slate-950)",
    },
    "corprate-outline": "var(--corprate-outline)",
  },
  borderColor: {
    "frost-blue": "var(--blue-800)",
    "frost-danger": "var(--red-800)",
    frost_success: "var(--green-800)",
    frost_warn: "var(--yellow-800)",
    "frost-outline": "var(--frost-outline-border)",
    "frost-light-primary": "var(--frost-light-primary-border)",
    "frost-light-danger": "var(--frost-light-danger-border)",
    "frost-light-success": "var(--frost-light-success-border)",
    "frost-light-warn": "var(--frost-light-warn-border)",
    "dark-soft-red": "rgb(255,205,210,0.2)",
    "dark-soft-yellow": "rgb(255,249,196,0.2)",
    "dark-soft-green": "rgb(200,230,201,0.2)",
    "dark-soft-blue": "rgb(187,222,251,0.2)",
    "corprate-outline": "var(--corporate-outline-border)",
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
    "frost-danger-hover": "var(--frost-light-danger-hover)",
    "frost-success-hover": "var(--frost-light-success-hover)",
    "frost-warn-hover": "var(--frost-light-warn-hover)",
    "frost-light-hover": "var(--frost-light-primary-hover)",
    "corprate-outline-hover": "var(--corprate-outline-hover)",
    "corprate-dimmed-primary": "var(--corprate-dimmed-primary)",
    "corprate-dimmed-danger": "var(--corprate-dimmed-danger)",
    "corprate-dimmed-warn": "var(--corprate-dimmed-warn)",
    "corprate-dimmed-success": "var(--corprate-dimmed-success)",
    "corprate-ghost-primary-hover": "var(--corprate-ghost-primary-hover)",
    "corprate-ghost-danger-hover": "var(--corprate-ghost-danger-hover)",
    "corprate-ghost-warn-hover": "var(--corprate-ghost-warn-hover)",
    "corprate-ghost-success-hover": "var(--corprate-ghost-success-hover)",
    "corprate-light-primary-hover": "var(--corprate-light-primary-hover)",
    "corprate-light-danger-hover": "var(--corprate-light-danger-hover)",
    "corprate-light-warn-hover": "var(--corprate-light-warn-hover)",
    "corprate-light-success-hover": "var(--corprate-light-success-hover)",
  },
};
