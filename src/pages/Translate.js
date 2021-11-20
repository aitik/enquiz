import React, {useState} from 'react'
import axios from "axios";
import Axios from "axios";
import Header from "../components/Header";
import {FaSearch} from "react-icons/fa";
import {FcSpeaker} from "react-icons/fc";
import Footer from "../components/Footer";
import "../App.css";
import SelectSearch from 'react-select-search';

// import Translate from '@google-cloud/translate'
function Translate() {
    // Setting up the initial states using react hook 'useState'

    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");
    const [fromLang, setFromLang] = useState("Autodetect");
    const [toLang, setToLang] = useState("ru");
    const options = [
        {name: 'Autodetect', value: 'Autodetect'},
        {name: 'Russian', value: 'ru'},
        {name: 'English', value: 'en'},
        {name: 'Italian', value: 'it'},
        {name: 'Spanish', value: 'es'},
        {name: 'French', value: 'fr'},
        {name: 'German', value: 'de'},
        {name: 'Dutch', value: 'nl'},
        {name: 'Portuguese', value: 'pt'},
        {name: 'Hindi', value: 'hi'},
        {name: 'Japanese', value: 'ja'},
        {name: 'Chinese (Simplified)', value: 'zh-CN'},
        {name: 'Chinese (Traditional)', value: 'zh-TW'},
        {name: 'Korean', value: 'ko'},
        {name: 'Turkish', value: 'tr'},
        {name: 'Kazakh', value: 'kz'},
        {name: 'Kyrgyz', value: 'ky'},
    ];
    const options2 = [
        {name: 'Russian', value: 'ru'},
        {name: 'English', value: 'en'},
        {name: 'Italian', value: 'it'},
        {name: 'Spanish', value: 'es'},
        {name: 'French', value: 'fr'},
        {name: 'German', value: 'de'},
        {name: 'Dutch', value: 'nl'},
        {name: 'Portuguese', value: 'pt'},
        {name: 'Hindi', value: 'hi'},
        {name: 'Japanese', value: 'ja'},
        {name: 'Chinese (Simplified)', value: 'zh-CN'},
        {name: 'Chinese (Traditional)', value: 'zh-TW'},
        {name: 'Korean', value: 'ko'},
        {name: 'Turkish', value: 'tr'},
        {name: 'Kazakh', value: 'kz'},
        {name: 'Kyrgyz', value: 'ky'},
    ];
    const divStyle = {
        display: 'flex',
        alignItems: 'center'
    };
    function translate(){
        axios.request(
            {
                method: 'GET',
                url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get',
                params: {langpair: fromLang+'|'+toLang, q: searchWord, mt: '1', onlyprivate: '0', de: 'a@b.c'},
                headers: {
                    'x-rapidapi-host': 'translated-mymemory---translation-memory.p.rapidapi.com',
                    'x-rapidapi-key': '20152ea344msh610ee3bb808b0ccp102e82jsn5ca5a466b608'
                }
            }
        ).then(function (response) {
            console.log(response.data.responseData);
            setData(response.data.responseData)
        }).catch(function (error) {
            console.error(error);
        });
    }

    // Function to play and listen the
    // phonetics of the searched word


    return (
        <div>
            <Header></Header>
            <div className="dict">
                <h1 className='dich1'>Translator</h1>
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
                                translate();
                            }}
                    >
                        <FaSearch size="20px" />
                    </button>
                </div>
                <div style={divStyle}>
                    <SelectSearch options={options} onChange={setFromLang} value={fromLang} name="language" placeholder="Translate from" />
                    <SelectSearch options={options2} onChange={setToLang} value={toLang} name="language" placeholder="Translate to" />
                </div>

                {data && (
                    <div className="showResults">
                        <h2 className='dich2'>
                            {data.translatedText}{" "}
                                {/*<FcSpeaker size="26px" />*/}
                        </h2>
                        {/*// <h4 className='dich4'>Parts of speech:</h4>*/}
                        {/*//*/}
                        {/*//*/}
                        {/*// <p>{data.meanings[0].partOfSpeech}</p>*/}
                        {/*//*/}
                        {/*//*/}
                        {/*// <h4 className='dich4'>Definition:</h4>*/}
                        {/*//*/}
                        {/*//*/}
                        {/*// <p>{data.meanings[0].definitions[0].definition}</p>*/}
                        {/*//*/}
                        {/*//*/}
                        {/*// <h4 className='dich4'>Example:</h4>*/}
                        {/*//*/}
                        {/*//*/}
                        {/*// <p>{data.meanings[0].definitions[0].example}</p>*/}

                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    );

}

export default Translate;

