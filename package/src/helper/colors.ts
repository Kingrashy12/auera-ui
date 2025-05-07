function colorToHSL(color: string): string {
  // If the color is an RGB string, convert it to HSL
  if (color.startsWith("rgb")) {
    // Extract r, g, b values from the rgb string
    const rgbValues = color
      .replace(/[^\d,]/g, "") // Remove non-numeric characters
      .split(",") // Split into r, g, b values
      .map(Number); // Convert to numbers

    const r = rgbValues[0] / 255;
    const g = rgbValues[1] / 255;
    const b = rgbValues[2] / 255;

    return rgbToHSL(r, g, b);
  }

  // If the color is a hex string, convert it to HSL
  if (color.startsWith("#")) {
    color = color.replace("#", "");

    // If the hex is short (3 characters), expand it to 6 characters
    if (color.length === 3) {
      color = color
        .split("")
        .map((x) => x + x)
        .join("");
    }

    // Parse the hex color to RGB
    const r = parseInt(color.slice(0, 2), 16) / 255;
    const g = parseInt(color.slice(2, 4), 16) / 255;
    const b = parseInt(color.slice(4, 6), 16) / 255;

    return rgbToHSL(r, g, b);
  }

  // If the color is neither RGB nor hex, return an empty string (invalid input)
  return "";
}

// Helper function to convert RGB to HSL
function rgbToHSL(r: number, g: number, b: number): string {
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(
    l * 100
  )}%`;
}

export { colorToHSL };
