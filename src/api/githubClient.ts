import { Octokit } from "@octokit/rest";

export class GitHubClient {
  private readonly octokit: Octokit;

  constructor(token: string) {
    this.octokit = new Octokit({
      auth: token,
    });
  }

  async getRepositories(username: string) {
    const { data } = await this.octokit.repos.listForUser({
      username,
      per_page: 100,
    });
    return data;
  }

  async getRepositoryLanguages(owner: string, repository: string) {
    const { data } = await this.octokit.repos.listLanguages({
      owner,
      repo: repository,
    });

    return data;
  }
}