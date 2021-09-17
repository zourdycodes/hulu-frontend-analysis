import React, { forwardRef } from 'react';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

export const MovieCard = forwardRef(
  (
    {
      backdrop_path: backdropPath,
      poster_path: posterPath,
      original_name: originalName,
      media_type: mediaType,
      release_date: releaseDate,
      first_air_data: firstAirDate,
      vote_count: voteCount,
      overview,
      title,
    },
    ref
  ) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';

    return (
      <div
        ref={ref}
        className="p-2 cursor-pointer group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      >
        <Image
          layout="responsive"
          src={
            `${BASE_URL}${backdropPath || posterPath}` ||
            `${BASE_URL}${posterPath}`
          }
          width={1920}
          height={1080}
          alt="l"
        />
        <div className="p-2">
          <p className="truncate max-w-md">{overview}</p>

          <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {title || originalName}
          </h2>

          <p className="flex items-center opacity-0 transition duration-100 group-hover:opacity-100">
            {mediaType && `${mediaType} ·`} {releaseDate || firstAirDate} ·{' '}
            <ThumbUpIcon className="h-5 mx-2" /> {voteCount}
          </p>
        </div>
      </div>
    );
  }
);
