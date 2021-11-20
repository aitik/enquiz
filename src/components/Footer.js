import React from 'react';
import bwLogo from'../enquiz_bw.png';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="pt-5">
            <div className="container text-center">
                <img src={bwLogo} className="logo" alt="EnQuiz"/>
            </div>
            <div className="container text-center">
                <p>&copy; EnQuiz 2021.</p>
            </div>

        </footer>
    )
}

export default Footer;
