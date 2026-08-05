import { GitHubClient } from "./githubClient";

export class GitHubService {
  constructor(private readonly client: GitHubClient) {}

  async fetchRepositories(username: string) {
    return this.client.getRepositories(username);
  }

  async fetchRepositoryLanguages(owner: string, repository: string) {
    return this.client.getRepositoryLanguages(owner, repository);
  }
  async fetchAllRepositoryLanguages(username: string) {
  const repositories = await this.fetchRepositories(username);

  const languages = await Promise.all(
    repositories.map((repository) =>
      this.fetchRepositoryLanguages(repository.owner.login, repository.name)
    )
  );
  return languages;
  }
}
   