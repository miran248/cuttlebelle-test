import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

import { gap, related } from "../theme";


const Section = styled.section`
	margin-left: -${gap.m};
	margin-right: -${gap.m};

	padding-top: ${gap.xs};
	padding-bottom: ${gap.xs};

	padding-left: ${gap.m};
	padding-right: ${gap.m};

	display: flex;

	align-items: center;
	justify-content: space-between;

	background-color: ${related.background};

	color: ${related.enabled};

	& > a {
    display: flex;

		align-items: center;
		justify-content: center;

		&.disabled {
			pointer-events: none;

			color: ${related.disabled};
		}
	}
`;

const Related = (props) => {
	const { _pages, _parents, _ID } = props;

	const parent = _parents[_parents.length - 2];

	const keys = Object.keys(_pages)
		.filter(
			(page) => page.startsWith("posts/")
		)
		.sort(
			(a, b) => new Date(_pages[b].date) - new Date(_pages[a].date)
		);

	var prev = null, next = null;

// >
	for(const key of keys) {
		if(new Date(_pages[key].date) - new Date(_pages[_ID].date) > 0) {
			next = key;

			continue;
		}

		if(new Date(_pages[key].date) - new Date(_pages[_ID].date) < 0) {
			prev = key;

			break;
		}
	}

	return (
		<Section>
			<a
				href={prev ? _pages[prev]._url : "#"}
				className={!prev ? "disabled" : undefined}
			>
				<i className="material-icons">keyboard_arrow_left</i>Prev
			</a>

			<a
				href={next ? _pages[next]._url : "#"}
				className={!next ? "disabled" : undefined}
			>
				Next<i className="material-icons">keyboard_arrow_right</i>
			</a>
		</Section>
	);
};

Related.propTypes = {
	_parents: PropTypes.node.isRequired,
};

Related.defaultProps = {};

export default Related;
