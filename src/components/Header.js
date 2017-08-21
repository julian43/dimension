import React from 'react';

export default (props) => {
 //let alt = props.alt || "image avatar";
 return (
	<header id="header">
		<div className="logo">
			<span className="icon fa-diamond"></span>
		</div>
		<div className="content">
			<div className="inner">
				<h1>Dimension</h1>
				<p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
				for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
			</div>
		</div>
		<nav>
			<ul>
				<li><a href="#intro">Intro</a></li>
				<li><a href="#work">Work</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
			
			</ul>
		</nav>
	</header>
    )
}