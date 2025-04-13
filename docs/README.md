<div align='center'>
<img src='https://github.com/Kingrashy12/auera-ui/blob/main/images/logo.png' width="160" height="160" alt="AueraUI" />

<div align='center'>
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Kingrashy12/auera-ui/blob/main/images/logo-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/Kingrashy12/auera-ui/blob/main/images/logo-light.png" />

</picture> 
</div>

  <h1>AueraUI</h1>
  <h3>Build beautiful UIs, effortlessly.</h3>
  
[![npm](https://img.shields.io/npm/v/auera-ui?color=2962FF)](https://www.npmjs.com/package/auera-ui)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/auera-ui)](https://bundlephobia.com/result?p=auera-ui)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/Kingrashy12/auera-ui/blob/main/LICENSE)

[Documentation](https://aueraui.vercel.app/)

</div>

# Documentation

For full documentation, visit:

<!-- [Storybook](https://storybook-aueraui.vercel.app/), -->

[AueraUI](https://aueraui.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Provider](#provider)
- [Extending Tailwind Config](#extending-tailwind-config)
- [Importing CSS](#importing-css)
- [Components](#components)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Installation

### Prerequisites

Before installing AueraUI, ensure you have:

- React `>= 18.3.2`
- ReactDOM `>= 18.3.2`
- tailwindcss `>= 3.4.1 `

installed in your project.

To install `AueraUI`, you can use npm or yarn:

```bash
npm install auera-ui
```

or

```bash
yarn add auera-ui
```

## Provider

Most of AueraUI components depend's on the `Provider` to share global settings and themes.
Wrapping your application with the `Provider` ensures consistent styling and functionality.

### Usage Example

```typescript
import { Provider } from "auera-ui";

function RootLayout() {
  return <Provider>{/* Your application components */}</Provider>;
}
```

### Why Use the Provider?

- **Global Theme Management:** Applies consistent themes across all components.
- **State Management:** Centralizes shared state and configuration settings.
<!-- - **Customization:** Easily configure settings like default colors, fonts, and behavior. -->

## Extending Tailwind Config

You can extend the Tailwind configuration to customize styles and integrate AueraUI's default theme.

### Steps:

```javascript
// tailwind.config.js or tailwind.config.ts
/** @type {import('tailwindcss').Config} */
import { tailwindExtend, aueraTw, SafeLists } from "auera-ui";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/auera-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: SafeLists(),
  theme: {
    extend: {
      backgroundColor: {
        ...tailwindExtend.backgroundColor,
      },
      boxShadow: {
        ...tailwindExtend.boxShadow,
      },
      colors: {
        ...tailwindExtend.colors,
      },
      borderColor: {
        ...tailwindExtend.borderColor,
      },
      transitionProperty: {
        ...tailwindExtend.transitionProperty,
      },
      borderWidth: {
        ...tailwindExtend.borderWidth,
      },
      keyframes: { ...tailwindExtend.keyframes },
      animation: { ...tailwindExtend.animation },
      dropShadow: { ...tailwindExtend.dropShadow },
      fontFamily: { ...tailwindExtend.fontFamily },
    },
  },
  /* For enabling custom variants, This allows you use
   'theme-*dark/light'
   'tone-*light/dark'
   'scrollbar'
   'scrollbar-track'
   'scrollbar-thumb'
   'scrollbar-none'
   */
  plugins: [aueraTw],
};
```

## Importing CSS

AueraUI comes with its own CSS file that you can import to apply default styles globally.

### Importing in your project:

```javascript
import 'auera-ui/dist/auera.css';

// or in your main CSS file
@import 'auera-ui/dist/auera.css';
```

## Usage

Import and use components in your React project:

```typescript
import { Button } from "auera-ui";

function App() {
  return <Button colorScheme="warning">Click Me</Button>;
}
```

## Components

AueraUI includes a variety of components to help you build your application. These components are designed to be customizable and easily integrable into your projects.

- [Button](#Button): A flexible and customizable button component to trigger actions.
- [Card](#Card): A container component for displaying content in a structured format with options for customization.
- [Modal](#Modal): A dialog window for presenting information or taking user input, with support for overlays and custom content.
- [Drawer](#Drawer): A sliding panel for displaying additional content or options without navigating from the current page.
- [Stack](#Stack): A layout component that arranges elements in a flexible, vertical or horizontal stack, providing responsive spacing.
- [Box](#Box): A simple container for wrapping elements, providing customization options for layout and styling.

---

### Additional Notes

Each component is fully customizable and designed with accessibility and usability in mind. You can adjust styles, behavior, and layouts by extending Tailwind CSS or by modifying the components directly.

For a full list of components and their usage, please refer to the [documentation](https://aueraui.vercel.app/docs/components/overview).

## Acknowledgements

- Thanks to [Tailwind CSS](https://tailwindcss.com/) for providing a powerful utility-first CSS framework.

## License

- Licensed under the [Apache-2.0](./LICENSE)
