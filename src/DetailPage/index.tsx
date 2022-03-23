import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

interface DetailPageProps {
  selectedSearchResult: any;
}

const DetailPage = ({ selectedSearchResult }: DetailPageProps) => {
  const { repoId } = useParams();

  if (!selectedSearchResult || repoId === selectedSearchResult.id)
    return <h1>Not found</h1>;

  return (
    <div>
      <h2>{selectedSearchResult.name}</h2>
      <p>Owner: {selectedSearchResult.owner.login}</p>
      <img src={selectedSearchResult.owner.avatar_url} alt="avatar" />
      <p>Visit owner profile page: {selectedSearchResult.owner.html_url}</p>
      <p>{selectedSearchResult.description}</p>
      <p>Number of stars: {selectedSearchResult.stargazers_count}</p>
      <p>Language: {selectedSearchResult.language}</p>
      <p>Repo created on: {selectedSearchResult.created_at}</p>
      <p>Topics:</p>
      {selectedSearchResult.topics.map((topic: string, i: number) => (
        <p key={i}>{topic}</p>
      ))}
    </div>
  );
};

export default DetailPage;
