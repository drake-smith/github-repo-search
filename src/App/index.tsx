import React from 'react';
import styled from 'styled-components';
import { media } from '../shared/media';
import SearchBar from '../SearchBar';

const { tablet, desktop } = media;

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1.5rem;

  ${tablet`
    padding: 2rem;
  `}

  ${desktop`
    padding: 3rem;
  `};
`;

const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  background-color: #ed1c24;
  color: #ffffff;
  display: inline-block;
  padding: 0.5rem 1rem;

  ${tablet`
    font-size: 3rem;
    padding: 0.5rem 1.5rem;
  `}

  ${desktop`
    font-size: 4rem;
  `};
`;

const App = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Title>GitHub Repo Finder</Title>
        <SearchBar
          handleSearch={() => {
            console.log('Ran!');
            return;
          }}
          isDisabled={false}
        />
      </ContentContainer>
    </PageContainer>
  );
};

export default App;
