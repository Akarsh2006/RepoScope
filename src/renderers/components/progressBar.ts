interface ProgressBarProps {
  x: number;
  y: number;
  width: number;
  height: number;
  percentage: number;
  color: string;
  background: string;
}

export function progressBar({
  x,
  y,
  width,
  height,
  percentage,
  color,
  background,
}: ProgressBarProps): string {
  const filledWidth = (width * percentage) / 100;

  return `
    <rect
      x="${x}"
      y="${y}"
      width="${width}"
      height="${height}"
      rx="${height / 2}"
      fill="${background}"
    />

    <rect
      x="${x}"
      y="${y}"
      width="${filledWidth}"
      height="${height}"
      rx="${height / 2}"
      fill="${color}"
    />
  `;
}