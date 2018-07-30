import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

import { gap, header } from "../theme";


const _Header = styled.header`
	padding: ${gap.l};

	margin-left: -${gap.m};
	margin-right: -${gap.m};

	display: flex;

	align-items: center;
	justify-content: center;

	background-color: ${header.background};

	color: ${header.foreground};

	h1, h2, h3, h4, h5, h6 {
    display: flex;

		align-items: center;
		justify-content: center;

		& > i {
			padding-left: 1vw;

			font-size: .5em;
		}
	}
`;

const Header = (props) => {
	const { _body } = props;

	return (
		<_Header>
			{ _body }
		</_Header>
	);
};

Header.propTypes = {
	_body: PropTypes.node.isRequired,
};

Header.defaultProps = {};

export default Header;
