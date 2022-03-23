import React from 'react';
import styled from 'styled-components';
import SearchResult from '../SearchResult';
/*
 * For purpose of this project and time, allow any type here to define the API response object,
 * which contains more data than we need.
 */
interface SearchResultsProps {
  // @ts-ignore
  results: Array<any>;
}

const SearchResultsContainer = styled.ul`
  margin-top: 1.5rem;
  width: 800px;
`;

// return (
//   <div key={i}>
//     <h2>{result.name}</h2>
//     <p>Owner: {result.owner.login}</p>
//     <p>{result.description}</p>
//     <p>Number of stars: {result.stargazers_count}</p>
//     <p>Language: {result.language}</p>
//   </div>
// );

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <SearchResultsContainer>
      {results.map((result) => (
        <SearchResult
          id={result.id}
          name={result.name}
          login={result.owner.login}
          description={result.description}
          stargazers_count={result.stargazers_count}
          language={result.language}
        />
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
