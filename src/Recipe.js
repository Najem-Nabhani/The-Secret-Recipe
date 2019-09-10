import React from 'react';

const Recipe = ({title, image, ingers})=>{
    return(
        <div className='recipe'>
            <h3>{title}</h3>
            <img className='recipe-img' src={image} alt=''/>

            <ul className='recipe-inger'>
            { ingers.map(
            (inger, idx)=>(
                <li key={idx}> {inger.text} </li>
              ))}
            </ul>
        </div>
    )
}

export default Recipe;