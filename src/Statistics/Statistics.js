import React from 'react';
import style from './Statistics.module.css'

const color = ["red", "blue", "teal", "green", "pink"];
const Statistics = ({ titel, stats }) => {
   return (
             <section className={style.statistics}>
           <h2 className={style.title}>Upload stats</h2>

           <ul className={style.statList}>
               {stats.map((num, index) => 
                    (
                   <li className={style.item} style={{ backgroundColor: color[index] }}>
                           <span className={style.label}>{num.label}</span>
                           <span className={style.percentage}>{num.percentage}%</span>
                       </li>
                   )
               )}
            </ul>
        </section>
    )
}
export default Statistics