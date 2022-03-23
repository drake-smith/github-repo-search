import React from 'react';
import { Link } from 'react-router-dom';

/*
 * For purpose of this project and time, allow any type here to define the API response object,
 * which contains more data than we need.
 */
interface SearchResultProps {
  id: number;
  name: string;
  login: string;
  description: string;
  stargazers_count: number;
  language: string;
}

const SearchResult = ({
  id,
  name,
  login,
  description,
  stargazers_count,
  language,
}: SearchResultProps) => {
  return (
    <li key={id}>
      <Link to={`${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>Owner: {login}</p>
      <p>{description}</p>
      <p>Number of stars: {stargazers_count}</p>
      <p>Language: {language}</p>
    </li>
  );
};

export default SearchResult;
