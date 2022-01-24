import React from 'react';
import style from './Statistics.module.css'

const color = ["red", "blue", "teal", "green", "pink"];
const Statistics = ({ title, stats }) => {
   return (
             <section className={style.statistics}>
           {title === undefined ? null : <h2 className={style.title}>{title}</h2>}

           <ul className={style.statList}>
               {stats.map(({label,percentage}, index) => 
                    (
                   <li key={index} className={style.item} style={{ backgroundColor: color[index] }}>
                           <span>{label}</span>
                           <span className={style.percentage}>{percentage}%</span>
                    </li>
                   )
               )}
            </ul>
        </section>
    )
}
export default Statistics