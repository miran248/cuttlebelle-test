import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

import { gap, links } from "../theme";


const Section = styled.section`
	padding-top: ${gap.xs};
	padding-bottom: ${gap.xs};

	& > a {
		margin-top: 1vw;
		margin-bottom: 1vw;

		padding: 1vw;

		display: flex;

		align-items: center;

		background-color: ${links.background};

		color: ${links.title};

		& > .title {
			padding-left: 1vw;
			padding-right: 1vw;

			flex: 1;
		}

		& > .date {
			color: ${links.date};

			font-size: .75em;
		}

		img {
			max-width: 5vw;

			border: .1vw solid ${links.image};
		}
	}
`;

const Links = (props) => {
	const { links, _pages, _ID } = props;

	return (
		<Section>
		{
			Object.keys(_pages)
				.filter(
					(page) => page.startsWith("posts/")
				)
				.sort(
					(a, b) => new Date(_pages[b].date) - new Date(_pages[a].date)
				)
				.map(
					(page, i) =>(
						<a key={i} href={_pages[page]._url}>
							<span><img src="https://imgplaceholder.com/64x64" /></span>
							<span className="title">{_pages[page].title}</span>
							<span className="date">{new Date(_pages[page].date).toLocaleDateString()}</span>
						</a>
					)
				)
		}
		</Section>
	);
};

Links.propTypes = {
	title: PropTypes.string.isRequired,
};

Links.defaultProps = {};

export default Links;
