import React from "react";


export const NavMenu = (props)=>(

    <nav className ="Main-nav">
        <ul>
            {props.items.map(item=>(
                <li>
                    <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
                </li>
            ))}
        </ul>
    </nav>
);