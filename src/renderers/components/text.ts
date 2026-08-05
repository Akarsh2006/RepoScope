interface TextProps {
  x: number;
  y: number;
  value: string;
  size: number;
  color: string;
  weight?: "normal" | "bold";
}

export function text({
  x,
  y,
  value,
  size,
  color,
  weight = "normal",
}: TextProps): string {
  return `
    <text
      x="${x}"
      y="${y}"
      font-size="${size}"
      font-weight="${weight}"
      fill="${color}">
      ${value}
    </text>
  `;
}