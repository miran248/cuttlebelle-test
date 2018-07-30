import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

import {
	gap,
	dark,
	light,
	block,
	caption,
	colors,
} from "./theme";

import { activeClass } from "./helpers";

import Navigation from "./partials/Navigation";


const Html = styled.html`
	height: 100vh;

	background-color: ${dark.background};

	color: ${dark.foreground};

	@font-face {
    font-family: DroidSans;
		font-style: normal;
		font-weight: normal;
    src: url(/assets/fonts/DroidSans.ttf);
	}

	@font-face {
    font-family: DroidSans;
		font-style: normal;
		font-weight: bold;
    src: url(/assets/fonts/DroidSans-Bold.ttf);
	}

	@font-face {
    font-family: DroidSansMono;
		font-style: normal;
		font-weight: normal;
    src: url(/assets/fonts/DroidSansMono.ttf);
	}

	font-family: DroidSans;

	font-size: 20px;

	code {
		padding: ${gap.l};

		margin-left: -${gap.m};
		margin-right: -${gap.m};

		display: block;

		border-right: .5vw solid ${colors.red};

		font-family: DroidSansMono;

		font-size: .8em;
	}

	p {
		margin: 0;

		padding-top: ${gap.xs};
		padding-bottom: ${gap.xs};

		position: relative;

		& > code {
			background-color: ${block.background};

			color: ${block.foreground};
		}
	}

	blockquote {
		margin-left: -${gap.m};
		margin-right: -${gap.m};

		padding: ${gap.l};

		position: relative;

		display: block;

		background-color: ${block.background};

		color: ${block.foreground};

		border-right: .5vw solid ${colors.blue};

		font-family: DroidSans;

		font-size: .75em;

		& > p {
			padding: 0;
		}
	}

	a {
		color: inherit;

		text-decoration: none;
	}

	hr {
		border-style: solid;
		border-color: ${light.divider};
	}

	img {
		display: block;
	}
`;

const Body = styled.body`
	height: 100vh;

	margin: 0;

	padding-right: 1vw;

	display: flex;

	@media screen and (orientation: portrait) {
		padding-left: 1vw;

		flex-direction: column-reverse;
	}

	@media screen and (orientation: landscape) {
		flex-direction: row-reverse;
	}
`;

const Main = styled.main`
	padding-left: ${gap.m};
	padding-right: ${gap.m};

	overflow-y: auto;

  -webkit-overflow-scrolling: touch;

	flex: 1;

	background-color: ${light.background};

	color: ${light.foreground};

	font-size: 4vw;

	@media screen and (min-width: 400px) {
		font-size: 3.5vw;
	}

	@media screen and (min-width: 600px) {
		font-size: 3vw;
	}

	@media screen and (min-width: 800px) {
		font-size: 2.5vw;
	}

	@media screen and (min-width: 1000px) {
		font-size: 2vw;
	}

	@media screen and (min-width: 1200px) {
		font-size: 1.5vw;
	}
`;

const Page = (props) => {
	const { title, header, main, footer, _pages, _ID } = props;

	// console.log("page", title, _ID, Object.keys(props));

	return (
		<Html>
			<head>
				<title>{title}</title>

				<meta charSet="utf-8" />
			  <meta name="description" content="description placeholder" />
			  <meta name="keywords" content="keywords placeholder" />
			  <meta name="author" content="miran248" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

				<link rel="stylesheet" href={`${_pages.index._url}assets/css/hljs.atom_one_dark.css`} />
			</head>

			<Body>
				<Main>
					{header}

					{main}
				</Main>

				<Navigation {...props} />
			</Body>
		</Html>
	);
};

Page.propTypes = {
	title: PropTypes.string.isRequired,
	main: PropTypes.node.isRequired,
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
