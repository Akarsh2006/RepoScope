import { env } from "./config/env";
import { GitHubClient } from "./api/githubClient";
import { GitHubService } from "./api/githubService";

async function main() {
  const client = new GitHubClient(env.githubToken);
  const githubService = new GitHubService(client);

  const repositories = await githubService.fetchRepositories(
    env.githubUsername
  );

  console.log(`Found ${repositories.length} repositories:\n`);

  repositories.forEach((repository) => {
    console.log(repository.name);
  });
}

main().catch(console.error);