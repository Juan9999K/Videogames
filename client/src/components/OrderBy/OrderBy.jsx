import React from "react";
import s from "../../styles/OrderBy.module.css"

export default function OrderBy({handlerByName, handlerByRating, namechange, ratingchange}) {

    return (
        <div className={s.divSort}>

            <p className={s.titles}>ORDENAR POR</p>

            <div className={s.divName}>
                <label className={s.subTitles}>NOMBRE </label>
                <select value={namechange} onChange={(e) => handlerByName(e)} className={s.selects}>
                    <option value=''>--Seleccionar--</option>
                    <option value='asc'>(A - Z)</option>
                    <option value='desc'>(Z - A)</option>
                </select>
            </div>

            <div className={s.divRating}>
                <label className={s.subTitles}>clasificación
</label>
                <select value={ratingchange} onChange={(e) => handlerByRating(e)} className={s.selects}>
                    <option value=''>--Seleccionar--</option>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
            </div>
        </div>
    )

}