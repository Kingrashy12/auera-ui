# Changelog

## [0.1.26] - 2025-01-16

### Added

- **IconButton** component now conditionally accepts BtnProps or DivProps based on the `asChild` prop.
  - The component dynamically renders either `AueraButton` or `AueraDiv` depending on the `asChild` value.
  - Introduced `IconButtonPropsExtended` to manage the conditional extension of types.

## [0.1.24] - 2025-01-16

### Added

- **Hover styles** for TabHandle, improving visual feedback when hovering over tabs.
- **Unstyled variant** for Button, allowing for more customization without default styles.

### Updated

- Adjusted Tabs component for better styling and interaction consistency.

## [0.1.23] - 2025-01-12

### Added

- **Components**
- `Collapse`
- `CollapseContent`

## [0.1.22] - 2025-01-12

### Added

- **Components**
- `Menu` Popup for displaying a list of actions.
- `MenuTrigger` Trigger component for `Menu`.
- `MenuItem` Component for rendering Menu Item

- **Plugin**
  - **aueraTw**: Added 5 new variants and 2 utility classes.

## [0.1.21] - 2025-01-03

### Added

- **Component**
  - Integrated `motion/react` to the package for enhanced animations.
  - Added support for `motion` props across components, enabling seamless customization of animations.
  - Updated `Button` and `IconButton` to use the `withTrigger` prop for improved trigger handling and management.
- **Plugin**
  - Added the `SafeList` method to whitelist dynamic Tailwind CSS utility color classes.

## [0.1.7] - 2024-12-15

### Changed

- Improved the `eject` process for better clarity and reliability during setup.

## [0.1.5] - 2024-12-14

### Added

- **Avatar**: A component for displaying user profile pictures with optimized loading.
- **Media**: A utility component for media assets like images and videos.
- **Tooltip**: A lightweight component for hover-over hints.
- **Skeleton**: Placeholder UI for loading states.
- **BounceLoader**: Animated loader for dynamic interfaces.
- **CircularProgress**: Circular progress indicator for tasks.
- **aueraTw**: Utility for managing Tailwind CSS configurations.

### Changed

- **Drawer**, **Tabs**, **Modal**: Switched default export to namespace for improved import consistency and flexibility.

## [0.1.4] - 2024-12-12

### Added

- `Breadcrums` component for displaying hierarchical navigation.
- `StatusBadge` a badge component for status representation.

### Changed

- Improved eject scripts for configuration management.

---

## [0.1.3] - 2024-12-09

### Added

- `Tabs` component for tabbed navigation.
- `Card` Component for structured content display.

---

## [0.1.2] - 2024-12-03

### Fixed

- Corrected an issue with `Provider` where an unexpected semicolon appeared.

---

## [0.1.0] - 2024-12-03

### Added

- Initial release of the UI library.
