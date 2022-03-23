import React from 'react';

interface DetailPageProps {
  selectedSearchResult: any;
}

const DetailPage = ({ selectedSearchResult }: DetailPageProps) => {
  return <h1>{selectedSearchResult.name}</h1>;
};

export default DetailPage;
