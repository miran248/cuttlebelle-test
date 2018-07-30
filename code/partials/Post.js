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
} from "../theme";

import Breadcrumbs from "./Breadcrumbs";
import Related from "./Related";


const Article = styled.article`

`;

const Section = styled.section`
	img {
		max-width: fill-available;

		margin-left: -${gap.m};
		margin-right: -${gap.m};

		border-top-width: 1vw;
		border-top-style: solid;

		border-bottom-width: 1vw;
		border-bottom-style: solid;

		border-color: ${dark.border};

		& + em {
			margin-left: -${gap.m};
			margin-right: -${gap.m};

			padding: ${gap.s};

			position: absolute;

			left: 0;
			right 0;
			bottom: 2vw;

			display: block;

			background-color: ${caption.background};

			color: ${caption.foreground};

			font-size: .6em;
		}
	}

	table {
		width: 100%;

		border-collapse: collapse;
	}

	table, th, td {
		padding: 1vw;

		border: 1px solid ${light.divider};
	}

	ul, ol {
		margin: 0;

		padding-top: 2vw;
		padding-bottom: 2vw;

		position: relative;

		input {
			vertical-align: middle;
		}
	}
`;

const Post = (props) => {
	const { _body } = props;

	return (
		<Article>
			<Breadcrumbs {...props} />

			<Section>
				{ _body }
			</Section>

			<Related {...props} />
		</Article>
	);
};

Post.propTypes = {
	_body: PropTypes.node.isRequired,
};

Post.defaultProps = {};

export default Post;
