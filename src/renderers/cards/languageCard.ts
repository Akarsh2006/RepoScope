import { languageColors } from "../../constants/languageColors";
import { progressBar } from "../components/progressBar";
import { githubDarkTheme } from "../themes/githubDark";
import { Language } from "../../types/language";

export class LanguageCard {
  generate(languages: Language[]): string {
    const cardHeight = Math.max(180, 80 + languages.length * 40);

    return `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="${cardHeight}">
  <rect
    width="600"
    height="${cardHeight}"
    rx="12"
    fill="${githubDarkTheme.background}"
    stroke="${githubDarkTheme.border}"
  />

  <text
    x="20"
    y="40"
    font-size="24"
    font-weight="bold"
    fill="${githubDarkTheme.title}">
    RepoScope
  </text>

  ${languages
    .map((language, index) => {
      const y = 80 + index * 40;

      return `
        <circle
          cx="25"
          cy="${y - 5}"
          r="5"
          fill="${languageColors[language.name] ?? "#ffffff"}"
        />
        <text
          x="40"
          y="${y}"
          font-size="16"
          fill="${githubDarkTheme.text}">
          ${language.name} (${language.percentage.toFixed(1)}%)
        </text>

        ${progressBar({
          x: 20,
          y: y + 10,
          width: 250,
          height: 8,
          percentage: language.percentage,
          color: languageColors[language.name] ?? "#ffffff",
          background: githubDarkTheme.barBackground,
        })}
      `;
    })
    .join("")}
</svg>
`;
  }
}