import React from "react";
import {Link} from "react-router-dom";
import s from "../../styles/LandingPage.module.css"

export default function LandingPage() {

    return(
        <div className={s.divLP}>
            <div className={s.divTextBtn}>
                
                
                <Link to = "/home">
                    <button className={s.btn}>PRESS START</button>
                </Link>
            </div>

            <img className={s.img} src="" alt="Img not found"/>
        </div>
    )
}