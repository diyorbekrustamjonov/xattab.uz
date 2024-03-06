export function hexToRgb(hex: string, alpha = 1, useCSSVar = false): string {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    if (useCSSVar) {
        return `${r},${g},${b},${alpha}`;
    }
    return `rgba(${r},${g},${b},${alpha})`;
}