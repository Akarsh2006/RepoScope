import { languageColors } from "../../constants/languageColors";
import { Language } from "../../types/language";
import { progressBar } from "../components/progressBar";
import { Layout } from "../layout";
import { githubDarkTheme } from "../themes/githubDark";

export class LanguageCard {
  generate(languages: Language[]): string {
    const layout = new Layout();
    const cardHeight = layout.getCardHeight(languages.length);

    return `
<svg xmlns="http://www.w3.org/2000/svg" width="${layout.cardWidth}" height="${cardHeight}">
  <rect
    width="${layout.cardWidth}"
    height="${cardHeight}"
    rx="12"
    fill="${githubDarkTheme.background}"
    stroke="${githubDarkTheme.border}"
  />

  <text
    x="${layout.padding}"
    y="${layout.titleY}"
    font-size="24"
    font-weight="bold"
    fill="${githubDarkTheme.title}">
    RepoScope
  </text>

  ${languages
    .map((language, index) => {
      const y = layout.getLanguageY(index);

      return `
        <circle
          cx="${layout.padding + 5}"
          cy="${y - 5}"
          r="${layout.languageDotRadius}"
          fill="${languageColors[language.name] ?? "#ffffff"}"
        />

        <text
          x="${layout.padding + 20}"
          y="${y}"
          font-size="16"
          fill="${githubDarkTheme.text}">
          ${language.name}
        </text>
        
        <text
          x="${layout.cardWidth - layout.padding}"
          y="${y}"
          font-size="16"
          text-anchor="end"
          fill="${githubDarkTheme.text}">
          ${language.displayPercentage}
        </text>

        ${progressBar({
          x: layout.padding,
          y: y + 10,
          width: layout.progressBarWidth,
          height: layout.progressBarHeight,
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