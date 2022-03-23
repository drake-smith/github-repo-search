import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../shared/media';

const { tablet } = media;
/*
 * For purpose of this project and time, allow any type here to define the API response object,
 * which contains more data than we need.
 */
interface SearchResultProps {
  index: number;
  handleSelectSearchResult: (index: number) => void;
  id: number;
  name: string;
  login: string;
  description: string;
  stargazers_count: number;
  language: string;
}

const SearchResultContainer = styled.li`
  padding: 1rem;
  border-radius: 10px;
  background: #f7f7f9;
  margin-top: 1rem;
  /* display: flex; */
  /* justify-content: space-between; */
  display: block;
  grid-template-columns: 66.66% 1fr;
  column-gap: 1rem;

  ${tablet`
    display: grid;
    align-items: center;
  `}

  &:last-child {
    margin-bottom: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration-color: #ed1c24;
  color: #202020;
  font-style: italic;

  &:hover,
  &:focus {
    color: #ed1c24;
  }
`;

const LinkTitle = styled.h2`
  display: inline;
`;

const Desc = styled.p`
  font-style: italic;
  margin-top: 0.5rem;

  // Some description fields are extremely long, so the below sets max number of lines to 4
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`;

const TextAlignRight = styled.div`
  margin-top: 1rem;
  font-size: 16px;

  ${tablet`
    margin-top: 0;
    text-align: right;
  `}
`;

const SearchResult = ({
  index,
  handleSelectSearchResult,
  id,
  name,
  login,
  description,
  stargazers_count,
  language,
}: SearchResultProps) => {
  return (
    <SearchResultContainer key={id}>
      <div>
        <StyledLink
          to={`${id}`}
          onClick={() => handleSelectSearchResult(index)}
        >
          <LinkTitle>{name}</LinkTitle>
        </StyledLink>
        <Desc>{description}</Desc>
      </div>
      <div>
        <TextAlignRight>
          <p>
            by <strong>{login}</strong>
          </p>
          <p>{stargazers_count} ⭐ </p>
          <p>{language}</p>
        </TextAlignRight>
      </div>
    </SearchResultContainer>
  );
};

export default SearchResult;
