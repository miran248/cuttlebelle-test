import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

import { gap, breadcrumbs } from "../theme";

import { activeClass } from "../helpers";


const Section = styled.section`
	margin-left: -${gap.m};
	margin-right: -${gap.m};

	padding-top: ${gap.xs};
	padding-bottom: ${gap.xs};

	padding-left: ${gap.m};
	padding-right: ${gap.m};

	display: flex;

	align-items: center;

	background-color: ${breadcrumbs.background};

	color: ${breadcrumbs.enabled};

	a {
		margin-top: -1vw;
		margin-bottom: -1vw;

		padding-top: 1vw;
		padding-bottom: 1vw;

		padding-left: 2vw;
		padding-right: 2vw;

    display: flex;

		align-items: center;
		justify-content: center;

		border-right: 2px solid ${breadcrumbs.divider};

		&:last-child {
			border-right: none;
		}

		&.disabled {
			pointer-events: none;

			color: ${breadcrumbs.disabled};
		}
	}
`;

const Breadcrumbs = (props) => {
	const { _pages, _parents, _ID } = props;

	return (
		<Section>
			{_parents.map(
				(parent, i) => (
					<a key={i}
						href={_pages[parent]._url}
						className={activeClass(parent, _ID, "disabled")}
					>
						{_pages[parent].title}
					</a>
				)
			)}
		</Section>
	);
};

Breadcrumbs.propTypes = {
	_parents: PropTypes.node.isRequired,
};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
