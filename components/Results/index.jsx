import React from 'react';

import { MovieCard } from '../MovieCard';

export const Results = ({ moviesData }) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4">
      {moviesData?.map((result) => {
        return <MovieCard key={result.id} {...result} />;
      })}
    </div>
  );
};
