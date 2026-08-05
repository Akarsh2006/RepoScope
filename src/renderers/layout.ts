export class Layout {
  readonly cardWidth = 600;

  readonly padding = 20;

  readonly titleY = 40;

  readonly languageStartY = 80;

  readonly rowHeight = 40;

  readonly progressBarHeight = 8;

  readonly progressBarWidth = 250;

  readonly languageDotRadius = 5;

  getLanguageY(index: number): number {
    return this.languageStartY + index * this.rowHeight;
  }

  getCardHeight(languageCount: number): number {
    return Math.max(
      180,
      this.languageStartY + languageCount * this.rowHeight
    );
  }
}