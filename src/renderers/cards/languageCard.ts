import { languageColors } from "../../constants/languageColors";
import { Language } from "../../types/language";
import { Layout } from "../layout";
import { githubDarkTheme } from "../themes/githubDark";
import { SvgBuilder } from "../svgBuilder";
import { distributionBar } from "../components/distributionBar";
import { LanguageSummary } from "../../types/summary";

export class LanguageCard {
  generate(languages: Language[], summary: LanguageSummary): string {
    const layout = new Layout();
    const cardHeight = layout.getCardHeight(languages.length);
    const builder = new SvgBuilder(layout.cardWidth, cardHeight);

  builder.background(
    githubDarkTheme.background,
    githubDarkTheme.border
  );

  builder.title(
    "RepoScope",
    layout.padding,
    layout.titleY,
    githubDarkTheme.title
  );
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
      const column = index % layout.legendColumns;
      const row = Math.floor(index / layout.legendColumns);

      const x = layout.padding + column * layout.legendColumnWidth;
      const y = layout.getLanguageY(row);

      return `
        <circle
          cx="${x + 5}"
          cy="${y - 5}"
          r="${layout.languageDotRadius}"
          fill="${languageColors[language.name] ?? "#ffffff"}"
        />

        <text
          x="${x + 20}"
          y="${y}"
          font-size="16"
          fill="${githubDarkTheme.text}">
          ${language.name}
        </text>
        
        <text
          x="${x + layout.legendColumnWidth - 20}"
          y="${y}"
          font-size="16"
          text-anchor="end"
          fill="${githubDarkTheme.text}">
          ${language.displayPercentage}
        </text>

        ${distributionBar({
          x: layout.padding,
          y: 60,
          width: layout.cardWidth - layout.padding * 2,
          height: 10,
          languages,
          background: githubDarkTheme.barBackground,
        })}
      `;
    })
    .join("")}
      <text
    x="${layout.padding}"
    y="${cardHeight - 60}"
    font-size="14"
    fill="${githubDarkTheme.text}">
    Repositories: ${summary.totalRepositories}
  </text>

  <text
    x="${layout.padding}"
    y="${cardHeight - 40}"
    font-size="14"
    fill="${githubDarkTheme.text}">
    Languages: ${summary.totalLanguages}
  </text>

  <text
    x="${layout.padding}"
    y="${cardHeight - 20}"
    font-size="14"
    fill="${githubDarkTheme.text}">
    Top Language: ${summary.topLanguage}
  </text>
</svg>
`;
  }
}