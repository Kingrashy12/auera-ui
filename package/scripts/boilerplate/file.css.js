export const cssTemp = `
:root {
  /* Primary colors */
  --primary-50: #e3f2fd;
  --primary-100: #bbdefb;
  --primary-200: #90caf9;
  --primary-300: #64b5f6;
  --primary-400: #42a5f5;
  --primary-500: #2196f3;
  --primary-600: #1e88e5;
  --primary-700: #1976d2;
  --primary-800: #1565c0;
  --primary-900: #0d47a1;

  /* Tertiary colors */
  --tertiary-50: #fff8e1;
  --tertiary-100: #ffecb3;
  --tertiary-200: #ffe082;
  --tertiary-300: #ffd54f;
  --tertiary-400: #ffca28;
  --tertiary-500: #ffc107;
  --tertiary-600: #ffb300;
  --tertiary-700: #ffa000;
  --tertiary-800: #ff8f00;
  --tertiary-900: #ff6f00;

  /* Neutral colors */
  --neutral-50: rgb(250, 250, 250);
  --neutral-100: rgb(245, 245, 245);
  --neutral-200: rgb(229, 229, 229);
  --neutral-300: rgb(212, 212, 212);
  --neutral-400: rgb(163, 163, 163);
  --neutral-500: rgb(115, 115, 115);
  --neutral-600: rgb(82, 82, 82);
  --neutral-700: rgb(64, 64, 64);
  --neutral-800: rgb(38, 38, 38);
  --neutral-900: rgb(23, 23, 23);
  --neutral-950: rgb(10, 10, 10);

  /* Gray colors */
  --gray-50: rgb(249, 250, 251);
  --gray-100: rgb(243, 244, 246);
  --gray-200: rgb(229, 231, 235);
  --gray-300: rgb(209, 213, 219);
  --gray-400: rgb(156, 163, 175);
  --gray-500: rgb(107, 114, 128);
  --gray-600: rgb(75, 85, 99);
  --gray-700: rgb(55, 65, 81);
  --gray-800: rgb(31, 41, 55);
  --gray-900: rgb(17, 24, 39);
  --gray-950: rgb(3, 7, 18);

  /* Slate colors */
  --slate-50: rgb(248, 250, 252);
  --slate-100: rgb(241, 245, 249);
  --slate-200: rgb(226, 232, 240);
  --slate-300: rgb(203, 213, 225);
  --slate-400: rgb(148, 163, 184);
  --slate-500: rgb(100, 116, 139);
  --slate-600: rgb(71, 85, 105);
  --slate-700: rgb(51, 65, 85);
  --slate-800: rgb(30, 41, 59);
  --slate-900: rgb(15, 23, 42);
  --slate-950: rgb(2, 6, 23);

  /* Blue colors */
  --blue-50: #eff6ff;
  --blue-100: #dbeafe;
  --blue-200: #bfdbfe;
  --blue-300: #93c5fd;
  --blue-400: #60a5fa;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  --blue-800: #1e40af;
  --blue-900: #1e3a8a;
  --blue-950: #172554;

  /* Red colors */
  --red-50: #fef2f2;
  --red-100: #fee2e2;
  --red-200: #fecaca;
  --red-300: #fca5a5;
  --red-400: #f87171;
  --red-500: #ef4444;
  --red-600: #dc2626;
  --red-700: #b91c1c;
  --red-800: #991b1b;
  --red-900: #7f1d1d;
  --red-950: #450a0a;

  /* Yellow colors */
  --yellow-50: #fffbeb;
  --yellow-100: #fef3c7;
  --yellow-200: #fde68a;
  --yellow-300: #fcd34d;
  --yellow-400: #fbbf24;
  --yellow-500: #f59e0b;
  --yellow-600: #d97706;
  --yellow-700: #b45309;
  --yellow-800: #92400e;
  --yellow-900: #78350f;
  --yellow-950: #451a03;

  /* Green colors */
  --green-50: #ecfdf5;
  --green-100: #d1fae5;
  --green-200: #a7f3d0;
  --green-300: #6ee7b7;
  --green-400: #34d399;
  --green-500: #10b981;
  --green-600: #059669;
  --green-700: #047857;
  --green-800: #065f46;
  --green-900: #064e3b;
  --green-950: #022c22;

  /* Soft colors, only for dark mode */
  --soft-red: rgb(255, 205, 210, 0.2);
  --soft-yellow: rgb(255, 249, 196, 0.2);
  --soft-green: rgb(200, 230, 201, 0.2);
  --soft-blue: rgb(187, 222, 251, 0.2);
}

html[color-scheme="dark"] {
  --frost-light-danger: hsla(0, 100%, 50%, 0.4);
  --frost-light-danger-out: hsla(0, 100%, 55%, 0.5);
  --frost-light-primary: hsla(220, 90%, 60%, 0.4);
  --frost-light-primary-out: hsla(220, 90%, 65%, 0.5);
  --frost-light-success: hsla(140, 80%, 45%, 0.4);
  --frost-light-success-out: hsla(140, 80%, 50%, 0.5);
  --frost-light-warn: hsla(50, 100%, 50%, 0.4);
  --frost-light-warn-out: hsla(50, 100%, 55%, 0.5);
  --neumorphic-outline: var(--neutral-800);
  --neumorphic-outline-out: var(--neutral-600);
  --frost-outline: var(--neutral-800);
  --frost-outline-out: var(--neutral-900);
  --corprate-outline: #fff;
  --corprate-dimmed-primary: var(--soft-blue);
  --corprate-dimmed-success: var(--soft-green);
  --corprate-dimmed-danger: var(--soft-red);
  --corprate-dimmed-warn: var(--soft-yellow);
  --drawer-content: #000;

  /* Border color */
  --frost-light-danger-border: var(--soft-red);
  --frost-light-success-border: var(--soft-green);
  --frost-light-warn-border: var(--soft-yellow);
  --frost-light-primary-border: var(--soft-blue);
  --frost-outline-border: var(--neutral-800);
  --corporate-outline-border: var(--neutral-800);

  /* Hover color */
  --frost-light-danger-hover: var(--slate-900);
  --frost-light-success-hover: var(--slate-900);
  --frost-light-warn-hover: var(--slate-900);
  --frost-light-primary-hover: var(--slate-900);
  --corprate-outline-hover: var(--neutral-800);
  --corprate-ghost-primary-hover: var(--soft-blue);
  --corprate-ghost-success-hover: var(--soft-green);
  --corprate-ghost-danger-hover: var(--soft-red);
  --corprate-ghost-warn-hover: var(--soft-yellow);
  --corprate-light-primary-hover: var(--slate-900);
  --corprate-light-success-hover: var(--slate-900);
  --corprate-light-danger-hover: var(--slate-900);
  --corprate-light-warn-hover: var(--slate-900);

  background: #000005;
}
html[color-scheme="light"] {
  --frost-light-danger: var(--red-100);
  --frost-light-danger-out: var(--red-200);
  --frost-light-primary: hsla(210, 100%, 90%, 0.4);
  --frost-light-primary-out: hsla(210, 100%, 90%, 0.5);
  --frost-light-success: var(--green-100);
  --frost-light-success-out: var(--green-200);
  --frost-light-warn: var(--yellow-100);
  --frost-light-warn-out: var(--yellow-200);
  --neumorphic-outline: var(--neutral-400);
  --neumorphic-outline-out: var(--neutral-200);
  --frost-outline: var(--neutral-100);
  --frost-outline-out: var(--neutral-200);
  --corprate-outline: #000;
  --corprate-dimmed-primary: var(--blue-100);
  --corprate-dimmed-success: var(--green-100);
  --corprate-dimmed-danger: var(--red-100);
  --corprate-dimmed-warn: var(--yellow-100);
  --drawer-content: #fff;

  /* Border color */
  --frost-light-danger-border: var(--red-200);
  --frost-light-success-border: var(--green-200);
  --frost-light-warn-border: var(--yellow-200);
  --frost-light-primary-border: var(--blue-100);
  --frost-outline-border: var(--neutral-200);
  --corporate-outline-border: var(--neutral-300);

  /* Hover color */
  --frost-light-danger-hover: var(--red-50);
  --frost-light-success-hover: var(--green-50);
  --frost-light-warn-hover: var(--yellow-50);
  --frost-light-primary-hover: var(--blue-50);
  --corprate-outline-hover: var(--neutral-100);
  --corprate-ghost-primary-hover: var(--blue-100);
  --corprate-ghost-success-hover: var(--green-100);
  --corprate-ghost-danger-hover: var(--red-100);
  --corprate-ghost-warn-hover: var(--yellow-100);
  --corprate-light-primary-hover: var(--blue-200);
  --corprate-light-success-hover: var(--green-200);
  --corprate-light-danger-hover: var(--red-200);
  --corprate-light-warn-hover: var(--yellow-200);

  background: #fffff5;
}


@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .border-image {
    border-image: initial;
  }
  .animate-slideIn {
    animation: slideIn 0.5s ease-in-out;
  }
  .animate-slideOut {
    animation: slideOut 0.5s ease-in-out;
  }
  .animate-dropIn {
    animation: dropIn 0.5s ease-in-out;
  }
  .animate-dropOut {
    animation: dropOut 0.5s ease-in-out;
  }
  .animate-walkIn {
    animation: walkIn 0.5s ease-in-out;
  }
  .animate-walkOut {
    animation: walkOut 0.5s ease-in-out;
  }
  .animate-slideInLeft {
    animation: slideInLeft 0.5s ease-in-out;
  }
  .animate-slideOutLeft {
    animation: slideOutLeft 0.5s ease-in-out;
  }
}

/* Modal Animation */
@keyframes slideIn {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes walkIn {
  from {
    scale: 0.2;
    opacity: 0;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}
@keyframes walkOut {
  from {
    scale: 1;
    opacity: 1;
  }
  to {
    scale: 0.2;
    opacity: 0;
  }
}

@keyframes dropIn {
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes dropOut {
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(-50%);
    opacity: 0;
  }
}

/* Drawer Slide Animation */
@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideOutLeft {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

`;
