import Nav from "../Nav/Nav"
import s from "../../styles/About.module.css"
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';

export default function About() {

    return(
        <div className={s.divGeneral}>
            
            <Nav/>

            <div className={s.divDetail}>

                <h2 className={s.title}>VideoGames</h2>

                <p className={s.text}>
                     Aplicaci贸n de videojuegos 馃幃.
                    <br/>
                    <br/>
                    Esta aplicaci贸n proporciona informaci贸n sobre varios videojuegos,
                    tiene una paginaci贸n y tambi茅n tiene la funcionalidad para buscar,
                    filtra, ordena y crea videojuegos.
                    <br/>
                    <br/>
                    Esta aplicaci贸n fue desarrollada utilizando:
                    Javascript, React, Redux, Node.js, Express, PostgreSQL,
                    Sequalize y puro CSS 馃懇馃捇.
                </p>

                <div className={s.divRedes}>
                    <a target="_blank" rel="noreferrer" href="https://co.linkedin.com/" className={s.redes}>
                        <img className={s.imagenL} src={linkedin} alt="img not found"/>
                        <p className={s.textRedes}>LinkedIn</p>
                    </a>
                    
                    <a target="_blank" rel="noreferrer" href="https://github.com/" className={s.redes}>
                        <img className={s.imagenG} src={github} alt="img not found"/>
                        <p className={s.textRedes}>GitHub</p>
                    </a>
                </div>
                
            </div>
        </div>
    )
}