export const GITHUB_API_URL = 'https://api.github.com/search/repositories';

/*
 * Sort options for GitHub GET requests. Default key is blank value because
 * default behavior is to sort by best match and pass in no query param.
 */
export const SORT_BY = {
  stars: 'stars',
  default: '',
};

interface LANGUAGES {
  [key: string]: string;
}

export const LANGUAGES: LANGUAGES = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  ruby: 'Ruby',
  java: 'Java',
  php: 'PHP',
  'c#': 'C#',
  'c++': 'C++',
};
