import MovieCard from "../Component/card";
import React from "react";

export const renderCard = (movie) => {
    return movie.map(data => {
        return (
            <div className="cardItems" key={data.id}>
                <MovieCard src={`http://image.tmdb.org/t/p/w185//${data.poster_path}`} title={data.title} overview={data.overview}/>
            </div>
        )
    })
};
