import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

import Breadcrumbs from "./Breadcrumbs";
import Links from "./Links";


const Article = styled.article`

`;

const Posts = (props) => {
	const { _body } = props;

	return (
		<Article>
			<Breadcrumbs {...props} />

			{ _body }

			<hr />

			<Links {...props} />
		</Article>
	);
};

Posts.propTypes = {
	_body: PropTypes.node.isRequired,
};

Posts.defaultProps = {};

export default Posts;
