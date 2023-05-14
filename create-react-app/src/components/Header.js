import React, { Component } from 'react';


class Header extends Component {
    render(){
        return(
            <div className='container'>
               <nav>
                    <div className="nav-wrapper">
                    <a className="left brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <a href='#'>Sign in with Google</a>
                            </li>
                    
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;