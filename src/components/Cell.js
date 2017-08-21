import React from 'react';

export default (props) => {
   
 return (
        <article key={props.key} id={props.key}>
            <h2 className="major">{props.title}</h2>
            <span className="image main"><img src={props.img} alt={props.alt} /></span>
            <p>{props.text}</p>
        </article>
    )
}