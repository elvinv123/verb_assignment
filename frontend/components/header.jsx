import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <nav>
            <section>
                <Link to={`/index`} style={{ textDecoration: 'none' }}>
                    <img className="logo" src="https://verb-assignment.s3.us-east-2.amazonaws.com/output-onlinepngtools.png"/>
                </Link>
                <form >
                    <input type="text"
                        placeholder="Search All Products"
                    />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
                </section>
            <section className="navbar">
                <ul>
                    <li><Link to={`/index`} style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li><a href="https://www.linkedin.com/in/elvin-valette-5b2945a5/">LinkedIn</a></li>
                    <li><a href="https://github.com/elvinv123">GitHub</a></li>
                    <li><a href="https://angel.co/u/elvin-valette">AngelList</a></li>
                </ul>
                <Link to={`/cart`} className="cart">
                    <i className="fa fa-shopping-cart"></i>
                </Link>
            </section>
        </nav>
    )
}