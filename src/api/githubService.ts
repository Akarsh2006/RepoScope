import { GitHubClient } from "./githubClient";

export class GitHubService {
  constructor(private readonly client: GitHubClient) {}

  async fetchRepositories(username: string) {
    return this.client.getRepositories(username);
  }
}