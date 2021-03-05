export interface Repository {
    owner: Owner,
    forks_count: string,
    stargazers_count: string,
    name: string,
    html_url: string,
}

interface Owner {
    login: string,
    avatar_url: string,
    repos_url: string,
    url: string
}