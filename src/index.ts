import { env } from "./config/env";
import { GitHubClient } from "./api/githubClient";
import { GitHubService } from "./api/githubService";
import { LanguageAnalyzer } from "./analyzers/languageAnalyzer";

async function main() {
  const client = new GitHubClient(env.githubToken);
  const githubService = new GitHubService(client);
  const analyzer = new LanguageAnalyzer();

  const languages = await githubService.fetchAllRepositoryLanguages(
    env.githubUsername
  );

  const totals = analyzer.aggregate(languages);

  console.log(totals);
}

main().catch(console.error);