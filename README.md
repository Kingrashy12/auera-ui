<div align='center'>
<img src='https://github.com/Kingrashy12/auera-ui/blob/main/images/logo.png' width="160" height="160" alt="Auera UI" />

<div align='center'>
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Kingrashy12/auera-ui/blob/main/images/logo-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/Kingrashy12/auera-ui/blob/main/images/logo-light.png" />
    <img alt="Auera UI" src='https://github.com/Kingrashy12/auera-ui/blob/main/images/logo-light.png' width="230" height="70" style="max-width:100%;" />
</picture> 
</div>

 <h1 style="font-size: 25px;">
   Build <span style="background: linear-gradient(to bottom, #60a5fa, #1d4ed8); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">beautiful</span> UIs, effortlessly.
  </h1>
</div>

# Documentation

For full documentation, visit:
[Storybook](https://storybook-aueraui.vercel.app/),
[Auera UI](https://aueraui.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Provider](#provider)
- [Extending Tailwind Config](#extending-tailwind-config)
- [Importing CSS](#importing-css)
- [CLI Tool](#cli-tool)
- [System Design Variants (Flavours)](#system-design-variants-flavours)
- [Usage](#usage)
- [Components](#components)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Installation

### Prerequisites

Before installing Auera UI, ensure you have:

- React `>= 18.3.2`
- ReactDOM `>= 18.3.2`
- tailwindcss `>= 3.4.1 `

installed in your project.

To install `Auera UI`, you can use npm or yarn:

```bash
npm install auera-ui
```

or

```bash
yarn add auera-ui
```

## Provider

Most of Auera UI components depend's on the `Provider` to share global settings and themes.
Wrapping your application with the `Provider` ensures consistent styling and functionality.

### Usage Example

```typescript
import { Provider } from "auera-ui";

function RootLayout() {
  return <Provider theme="light">{/* Your application components */}</Provider>;
}
```

### Why Use the Provider?

- **Global Theme Management:** Applies consistent themes across all components.
- **State Management:** Centralizes shared state or configuration settings.
- **Customization:** Easily configure settings like default colors, fonts, and behavior.

## Extending Tailwind Config

You can extend the Tailwind configuration to customize styles and integrate Auera UI's default theme.

### Steps:

```javascript
// tailwind.config.js or tailwind.config.ts
/** @type {import('tailwindcss').Config} */
import { tailwindExtend } from "auera-ui";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/auera-ui/**/*.{js,ts,jsx,tsx}",
  ],
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
    },
  },
  plugins: [],
};
```

## Importing CSS

Auera UI comes with its own CSS file that you can import to apply default styles globally.

### Importing in your project:

```javascript
import 'auera-ui/dist/auera.css';

// or in your main CSS file
@import 'auera-ui/dist/auera.css';
```

## CLI Tool

Auera UI provides a CLI tool to eject and customize default configurations and CSS.

### Run the CLI:

```bash
 npx auera-ui eject
```

### CLI Workflow:

    When you run the `eject` command, you'll be prompted to select what you want to eject:

```bash
 What do you want to eject? (Use arrow keys)
 ❯ auera.css
   tailwind.extend.ts
```

- **`auera.css`:** Ejects the default CSS file from Auera UI for manual customization.
- **`tailwind.extend.ts`:** Generates a Tailwind configuration file with default themes and extensions.

### Example:

If you choose `auera.css`, it will create a local copy of the CSS file in your project directory:

```bash
Ejected auera.css to ./styles/auera.css
```

### Benefits:

- **Customization:** Easily adjust the default styles and Tailwind config to suit your project.
- **Flexibility:** Allows you to fine-tune the framework without modifying the core library.

## System Design Variants (Flavours)

Auera UI provides multiple **System Design Variants** or **Flavours**, each offering a distinct design style suited to different applications. These flavours are designed to cater to various design philosophies, allowing you to pick the one that fits your project best.

### Available Flavours:

- **`corporate`:** A professional and clean design perfect for enterprise applications. It focuses onsimplicity and readability.
- **`frost`:** Inspired by glassmorphism, this flavour uses frosted-glass effects to create a sleek, modern look with semi-transparent elements.
- **`neumorphic`:** This flavour features soft, 3D-style components with inner and outer shadows, mimicking physical objects and creating a soft, tactile feel.

### Switching Between Flavours

To switch between flavours, you can use the `Provider` component and pass the desired flavour as a prop.

### Example:

```tsx
import { Provider } from "auera-ui";

function RootLayout() {
  return (
    // Switch to the 'frost' flavour for a frosted-glass effect
    <Provider flavour="frost">{/* Your application components */}</Provider>
  );
}
```

### How to Customize a Flavour:

- **Override Styles:** You can extend the default Tailwind config to modify the look of the selected flavour.

### Customizing Flavour Styles:

To tailor the visual styles of a flavour, customize both the **`auera.css`** file and the **Tailwind configuration**.

#### Steps to Customize:

1. **Eject `auera.css`:**
   Use the CLI to eject the default CSS:

```bash
    npx auera-ui eject
```

Select the option to eject `auera.css`:

```bash
 What do you want to eject? (Use arrow keys)
 ❯ auera.css
   tailwind.extend.ts
```

2. **Modify `auera.css`:**
   Adjust the styles directly in `auera.css` to change specific component designs, colors, or layouts.

3. **Extend Tailwind Config:**
   Customize the Tailwind configuration in the `tailwind.extend.ts` file to override or extend default styles.

```typescript
  // tailwind.extend.ts
  export const tailwindExtend = {
   boxShadow:{...},
   colors:{...},
   borderColor:{...},
   backgroundColor:{...},
  };
```

### Benefits of Customization:

- **Control:** Fine-tune the default flavour to match your brand identity.
- **Scalability:** Create consistent, reusable design patterns across your application.
- **Flexibility:** Combine custom CSS and extended Tailwind themes for a fully personalized UI experience.

### ⚠️ **Important Notice:**

If you customize either **`auera.css`** or **`tailwind.extend.ts`**, you must update your imports in both **`tailwind.config.js`** and your main **CSS file**:

#### Example:

**`tailwind.config.ts`:**

```typescript
import { tailwindExtend } from "./tailwind.extend";

module.exports = {
  ...tailwindExtend,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/auera-ui/**/*.{js,ts,jsx,tsx}",
  ],
};
```

**Main CSS File Import:**

```css
@import "./auera.css"; /* Ensure this points to your customized CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;
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

Auera UI includes a variety of components to help you build your application. These components are designed to be customizable and easily integrable into your projects.

- [Button](#Button): A flexible and customizable button component to trigger actions.
- [Card](#Card): A container component for displaying content in a structured format with options for customization.
- [Modal](#Modal): A dialog window for presenting information or taking user input, with support for overlays and custom content.
- [Drawer](#Drawer): A sliding panel for displaying additional content or options without navigating away from the current page.
- [Input](#Input): A form element that allows users to enter text or data, with support for validation and various input types.
- [Menu](#Menu): A popup menu component for displaying a list of actions or options.
- [Stack](#Stack): A layout component that arranges elements in a flexible, vertical or horizontal stack, providing responsive spacing.
- [Box](#Box): A simple container for wrapping elements, providing customization options for layout and styling.

---

### Additional Notes

Each component is fully customizable and designed with accessibility and usability in mind. You can adjust styles, behavior, and layouts by extending Tailwind CSS or by modifying the components directly.

For a full list of components and their usage, please refer to the [documentation](https://aueraui.vercel.app/components).

## Acknowledgements

- Thanks to [Tailwind CSS](https://tailwindcss.com/) for providing a powerful utility-first CSS framework.

## License

- Licensed under the [Apache-2.0](./LICENSE)
