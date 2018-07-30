import React from "react";
import styled from "@emotion/styled";

import { gap, navigation } from "../theme";

import { activeClass } from "../helpers";

const Nav = styled.nav`
	position: relative;

	display: flex;

	box-shadow: 0 0 2em .2em ${navigation.shadow};

	& > a {
		width: 50px;
		height: 50px;

    display: flex;

		align-items: center;
		justify-content: center;

		&.active {
			background-color: ${navigation.active};
		}
	}

	@media screen and (orientation: portrait) {
		height: 50px;

		margin-left: -1vw;
		margin-right: -1vw;

		flex-direction: row;

		// border-bottom: .2vw solid ${navigation.border};
	}

	@media screen and (orientation: landscape) {
		width: 50px;

		flex-direction: column;

		// border-right: .2vw solid ${navigation.border};
	}
`;

const Navigation = (props) => {
	const { _ID } = props;

	return (
		<Nav>
			<a href="/" className={activeClass(_ID, "index")}>
				<i className="material-icons">home</i>
			</a>
			<a href="/posts" className={activeClass(_ID, "posts")}>
				<i className="material-icons">list</i>
			</a>
			<a href="/contact" className={activeClass(_ID, "contact")}>
				<i className="material-icons">mail</i>
			</a>
		</Nav>
	);
};

Navigation.defaultProps = {};

export default Navigation;
