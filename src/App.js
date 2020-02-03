import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './conponent/nav';
import MovieCard from './conponent/card';
import axios from "axios";

const App = () => {


    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4d6f4b60a499907f2f7cb19137144751`;
    const [movie, setData] = useState([]);
    useEffect(() => {
        axios.get(url).then(json => setData(json.data.results))
    }, []);

    const search = async () => {
        const movieName = document.getElementById('movieName').value;
        console.log(movieName);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4d6f4b60a499907f2f7cb19137144751&query=${movieName}`).then(data => setData(data.data.results))

    };

    const renderCard = () => {
            return movie.map(data => {
                return (
                    <div className="cardItems" key={data.id}>
                        <MovieCard src={`http://image.tmdb.org/t/p/w185//${data.poster_path}`} title={data.title} overview={data.overview}/>
                    </div>
                )
            })
    };


    return (
            <div className="App">
                <div className="Navbar">
                    <header>
                        <Nav event={search}/>
                    </header>
                </div>
                <div className="Card">
                    {
                        renderCard()
                    }
                </div>

            </div>
        )
};

export default App;
