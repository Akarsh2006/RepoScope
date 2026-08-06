import { Language } from "../../types/language";
import { languageColors } from "../../constants/languageColors";

interface DistributionBarProps {
  x: number;
  y: number;
  width: number;
  height: number;
  languages: Language[];
  background: string;
}

export function distributionBar({
  x,
  y,
  width,
  height,
  languages,
  background,
}: DistributionBarProps): string {
  let currentX = x;

  const segments = languages
    .map((language) => {
      const segmentWidth = (language.percentage / 100) * width;

      const svg = `
        <rect
          x="${currentX}"
          y="${y}"
          width="${segmentWidth}"
          height="${height}"
          fill="${languageColors[language.name] ?? "#ffffff"}"
        />
      `;

      currentX += segmentWidth;

      return svg;
    })
    .join("");

  return `
    <rect
      x="${x}"
      y="${y}"
      width="${width}"
      height="${height}"
      rx="${height / 2}"
      fill="${background}"
    />

    <clipPath id="language-bar">
      <rect
        x="${x}"
        y="${y}"
        width="${width}"
        height="${height}"
        rx="${height / 2}"
      />
    </clipPath>

    <g clip-path="url(#language-bar)">
      ${segments}
    </g>
  `;
}