import React from 'react';
import styled, { css } from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { media } from '../shared/media';

const { tablet } = media;

interface DetailPageProps {
  selectedSearchResult: any;
}

const LinkStyles = css`
  text-decoration-color: #ed1c24;
  color: #202020;
  font-style: italic;
  text-transform: uppercase;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #ed1c24;
  }
`;

const DetailContainer = styled.div`
  background: #f7f7f9;
  max-width: 1024px;
  border-radius: 10px;
  margin: 3rem auto;
  padding: 2rem;
`;

const StyledLink = styled(Link)`
  ${LinkStyles}
`;

const DetailGrid = styled.div`
  display: block;
  grid-template-columns: 66.66% 1fr;
  column-gap: 1rem;
  margin-top: 2rem;

  ${tablet`
    display: grid;
  `}
`;

const RepoTitle = styled.h2`
  font-size: 4rem;
  font-style: italic;
`;

const RepoOwnerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const AvatarImg = styled.img`
  max-width: 100px;
  border-radius: 10px;
`;

const OwnerInfo = styled.div`
  margin-left: 1rem;
`;

const StyledDesc = styled.p`
  font-style: italic;
  margin-top: 0.5rem;

  // Some description fields are extremely long, so the below sets max number of lines to 4
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`;

const OutboundLink = styled.a`
  ${LinkStyles};
  font-size: 16px;
  margin-top: 1.5rem;
`;

const TopicsTitle = styled.p`
  font-weight: bold;
  margin-top: 1.5rem;
`;

const DetailDataContainer = styled.div`
  margin-top: 1.5rem;
`;

const DetailData = styled.p`
  margin-top: 0.5rem;
`;

const DetailPage = ({ selectedSearchResult }: DetailPageProps) => {
  const { repoId } = useParams();

  const createdAt = new Date(
    selectedSearchResult.created_at
  ).toLocaleDateString('en-US');
  const updatedAt = new Date(
    selectedSearchResult.updated_at
  ).toLocaleDateString('en-US');
  if (!selectedSearchResult || repoId === selectedSearchResult.id)
    return <h1>Not found</h1>;

  return (
    <DetailContainer>
      <StyledLink to={'/'}>&#8592; Back</StyledLink>
      <DetailGrid>
        <div>
          <RepoTitle>{selectedSearchResult.name}</RepoTitle>
          <StyledDesc>{selectedSearchResult.description}</StyledDesc>
          <OutboundLink
            href={selectedSearchResult.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the repository &#8594;
          </OutboundLink>

          <RepoOwnerContainer>
            <AvatarImg
              src={selectedSearchResult.owner.avatar_url}
              alt={`Avatar for ${selectedSearchResult.owner.login}`}
            />
            <OwnerInfo>
              <p>
                <strong>by</strong> {selectedSearchResult.owner.login}
              </p>
              <OutboundLink
                href={selectedSearchResult.owner.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {selectedSearchResult.owner.login}'s page &#8594;
              </OutboundLink>
            </OwnerInfo>
          </RepoOwnerContainer>

          {selectedSearchResult.topics.length > 0 && (
            <TopicsTitle>Topics:</TopicsTitle>
          )}

          {selectedSearchResult.topics.length > 0 &&
            selectedSearchResult.topics.map((topic: string, i: number) => {
              if (i === selectedSearchResult.topics.length - 1)
                return <span key={i}>{topic}</span>;
              return <span key={i}>{topic}, </span>;
            })}
        </div>
        <DetailDataContainer>
          <DetailData>
            <strong>Stars:</strong> {selectedSearchResult.stargazers_count} ⭐
          </DetailData>
          <DetailData>
            <strong>Forks:</strong> {selectedSearchResult.forks} 🍴
          </DetailData>
          <DetailData>
            <strong>Open issues:</strong> {selectedSearchResult.open_issues} ❗
          </DetailData>
          <DetailData>
            <strong>Language:</strong> {selectedSearchResult.language}
          </DetailData>

          <DetailData>
            <strong>Created on:</strong> {createdAt}
          </DetailData>
          <DetailData>
            <strong>Last updated on:</strong> {updatedAt}
          </DetailData>
        </DetailDataContainer>
      </DetailGrid>
    </DetailContainer>
  );
};

export default DetailPage;
