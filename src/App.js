import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Key from './apiKey';
import Nav from './Component/nav';
import {renderCard} from './js/renderCard';
import Axios from "axios";

const App = () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Key}`;
    const [movie, setData] = useState([]);
    useEffect(() => {
        Axios.get(url).then(json => setData(json.data.results))
    },[url]);

    const search = async () => {
        const movieName = document.getElementById('movieName').value;
        console.log(movieName);
        Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${movieName}`).then(data => setData(data.data.results))
};

    return (
            <div className="App">
                <div className="Navbar">
                    <header>
                        <Nav event={search} atribute={setData}/>
                    </header>
                </div>
                <div className="Card">
                    {renderCard(movie)}
                </div>

            </div>
        )
};

export default App;