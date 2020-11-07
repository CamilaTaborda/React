import React from "react";


export const SideBar = (props)=>(

    <div className ="sidebar">
        <ul>
        <h3 class="sidebar">Menu</h3>
            {props.items.map(item=>(
               
                    <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
              
            ))}
        </ul>
    </div>
);