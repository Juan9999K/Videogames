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
                     Aplicación de videojuegos 🎮.
                    <br/>
                    <br/>
                    Esta aplicación proporciona información sobre varios videojuegos,
                    tiene una paginación y también tiene la funcionalidad para buscar,
                    filtra, ordena y crea videojuegos.
                    <br/>
                    <br/>
                    Esta aplicación fue desarrollada utilizando:
                    Javascript, React, Redux, Node.js, Express, PostgreSQL,
                    Sequalize y puro CSS 👩💻.
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