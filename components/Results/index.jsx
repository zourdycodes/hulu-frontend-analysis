import React from 'react';
import FlipMove from 'react-flip-move';

import { MovieCard } from '../MovieCard';

export const Results = ({ moviesData }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  3xl:flex flex-wrap justify-center">
      {moviesData?.map((result) => {
        return <MovieCard key={result.id} {...result} />;
      })}
    </FlipMove>
  );
};
