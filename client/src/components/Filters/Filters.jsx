import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions";
import s from "../../styles/Filters.module.css"

export default function Filters({handlerGenres, handlerCreated, source, genrechange}) {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);


    return (
        <div className={s.divSourceGenres}>

            <div className={s.divSource}>
                <p className={s.titles}>Fuente</p>

                <div className={s.divSource}>
                    <button style={source === "All"? {backgroundColor: "#280783", color: "white", borderColor: "white"} : undefined} className={s.source} onClick={() => handlerCreated('All')} >Todos</button>
                    <button style={source === "Created"? {backgroundColor: "#280783", color: "white", borderColor: "white"} : undefined} className={s.source} onClick={() => handlerCreated('Created')}>CREADOS</button>
                    <button style={source === "Api"? {backgroundColor: "#280783", color: "white", borderColor: "white"} : undefined} className={s.source} onClick={() => handlerCreated('Api')}>API</button>
                </div>
            </div>

            <div>
                <p className={s.titles}>GENEROS</p>

                <select value={genrechange} onChange={(e) => handlerGenres(e)} className={s.select}>
                    <option value=''>--Seleccionar--</option>
                    <option value='All'>Todos</option>
                    {
                        genres && genres.map(g => (
                            <option value={g.name} key={g.id}>{g.name}</option>
                        ))
                    }
                </select>
            </div>

        </div>
    )
}