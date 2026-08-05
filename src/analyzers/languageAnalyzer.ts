export interface LanguageStats {
  [language: string]: number;
}

export class LanguageAnalyzer {
  aggregate(
    repositoryLanguages: LanguageStats[]
  ): LanguageStats {
    const totals: LanguageStats = {};

    for (const languages of repositoryLanguages) {
      for (const [language, bytes] of Object.entries(languages)) {
        totals[language] = (totals[language] ?? 0) + bytes;
      }
    }

    return totals;
  }
}