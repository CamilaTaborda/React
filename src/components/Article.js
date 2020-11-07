import React from "react";


export const Article = (props)=>(

    <article className ="article">
       
            {props.items.map(item=>(
                <h4>
                    <p>{item.title} </p>
                  
                </h4>
            ))}
  
    </article>
);