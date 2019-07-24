import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignedOutLinks() {
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/sign-up">Sign Up</NavLink></li>
                <li><NavLink to="/sign-in">Sign In</NavLink></li>
            </ul>
        </div>
    )
}
