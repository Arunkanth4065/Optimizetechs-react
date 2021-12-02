import React from 'react';
import {
Nav,
NavLink,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navigation = () => {
return (
	<>
	<Nav>
		{/* <Bars /> */}
		<div className="navigate">
			<div  className="homebtn">
		<Link to='/' activeStyle>
		<button className="button1">
			home
		</button>
		</Link>
		</div>
		<div className="hungarianbtn">
		<Link to='/homecomponent' activeStyle>
		<button className="button2">
			Assignment Problem
		</button>
		</Link>
		</div>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</div>
	</Nav>
	</>
);
};

export default Navigation;
