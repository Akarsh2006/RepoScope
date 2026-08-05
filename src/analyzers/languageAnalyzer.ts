import { Language } from "../types/language";
import { defaultConfig } from "../config/defaultConfig";

const IGNORED_LANGUAGES = defaultConfig.ignoredLanguages;
export interface LanguageStats {
  [language: string]: number;
}

export class LanguageAnalyzer {
  aggregate(repositoryLanguages: LanguageStats[]): LanguageStats {
    const totals: LanguageStats = {};

    for (const languages of repositoryLanguages) {
      for (const [language, bytes] of Object.entries(languages)) {
        totals[language] = (totals[language] ?? 0) + bytes;
      }
    }

    return totals;
  }

  calculatePercentages(stats: LanguageStats): Language[] {
    const totalBytes = Object.values(stats).reduce(
      (sum, bytes) => sum + bytes,
      0
    );

    return Object.entries(stats)
      .filter(([language]) => !IGNORED_LANGUAGES.includes(language))
      .map(([name, bytes]) => ({
        name,
        bytes,
        percentage: (bytes / totalBytes) * 100,
        displayPercentage: `${((bytes / totalBytes) * 100).toFixed(1)}%`,
      }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, defaultConfig.topLanguages);
  }
}