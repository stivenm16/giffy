import React from "react";
import { Link } from "wouter";

export default function Category({ name, options = [] }) {
    return (
      
         <ul className='searcher'>
            {options.map(popularGif => (
                <li key={popularGif}>
                <Link to={`/search/${popularGif}`}>
                    <h2 className='links-navbar'>
                    {popularGif}
                    </h2>
                </Link>        
            </li>
            ))}
            
         </ul>
      
    );
  }