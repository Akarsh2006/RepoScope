import { writeFileSync } from "node:fs";

import { GitHubClient } from "./api/githubClient";
import { GitHubService } from "./api/githubService";
import { LanguageAnalyzer } from "./analyzers/languageAnalyzer";
import { env } from "./config/env";
import { LanguageCard } from "./renderers/cards/languageCard";

async function main() {
  const client = new GitHubClient(env.githubToken);
  const githubService = new GitHubService(client);
  const analyzer = new LanguageAnalyzer();
  const card = new LanguageCard();

  const languages = await githubService.fetchAllRepositoryLanguages(
    env.githubUsername
  );

const totals = analyzer.aggregate(languages);
const languageData = analyzer.calculatePercentages(totals);

const svg = card.generate(languageData);

  writeFileSync("output/languages-card.svg", svg);

  console.log("✅ Card generated: output/languages-card.svg");
}

main().catch(console.error);