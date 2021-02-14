import React from 'react';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <Link to={`/index`} style={{ textDecoration: 'none' }}>
                <img className="logo" src="https://verb-assignment.s3.us-east-2.amazonaws.com/output-onlinepngtools.png" />
            </Link>
            <div className="social">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-github" aria-hidden="true"></i>
                <i class="fa fa-angellist" aria-hidden="true"></i>
            </div>
        </div>
    )
}