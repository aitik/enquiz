import React, {Component, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Axios from "axios";
import "../App.css";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import ProgressButton from 'react-progress-button'

function Dictionary() {
    // Setting up the initial states using react hook 'useState'

    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");

    // Function to fetch information on button
    // click, and set the data accordingly
    function getMeaning() {
        Axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
        ).then((response) => {
            setData(response.data[0]);
        });
    }

    // Function to play and listen the
    // phonetics of the searched word
    function playAudio() {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }

    return (
        <div>
            <Header></Header>
        <div className="dict">
            <h1 className='dich1'>Dictionary</h1>
            {/*<ProgressButton onClick={handleClick}> Go! </ProgressButton>*/}
            <div className="searchBox">
                <input className='dicinput'
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => {
                        setSearchWord(e.target.value);
                    }}
                />

                <button className='dicbutton'
                    onClick={() => {
                        getMeaning();
                    }}
                >
                    <FaSearch size="20px" />
                </button>
            </div>
            {data && (
                <div className="showResults">
                    <h2 className='dich2'>
                        {data.word}{" "}
                        <button className='dicbutton ml-3'
                            onClick={() => {
                                playAudio();
                            }}
                        >
                            <FcSpeaker size="26px" />
                        </button>
                    </h2>
                    <h4 className='dich4'>Parts of speech:</h4>


                    <p>{data.meanings[0].partOfSpeech}</p>


                    <h4 className='dich4'>Definition:</h4>


                    <p>{data.meanings[0].definitions[0].definition}</p>


                    <h4 className='dich4'>Example:</h4>


                    <p>{data.meanings[0].definitions[0].example}</p>

                </div>
            )}
        </div>
            <Footer></Footer>
        </div>
    );

}

export default Dictionary;


