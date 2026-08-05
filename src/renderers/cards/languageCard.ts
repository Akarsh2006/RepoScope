import { Language } from "../../types/language";

export class LanguageCard {
  generate(languages: Language[]): string {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
  <text x="20" y="40" font-size="24" font-weight="bold">
    RepoScope
  </text>

  ${languages
    .map(
      (language, index) => `
        <text x="20" y="${80 + index * 25}" font-size="16">
          ${language.name} (${language.percentage.toFixed(1)}%)
        </text>
      `
    )
    .join("")}
</svg>
`;
  }
}