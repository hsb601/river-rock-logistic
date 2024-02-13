// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 5% 2.5%;
	background: black;
	bottom: 0;
	width: 95%;

	@media (max-width: 1500px) {
		// padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1500px;
	margin: 0 auto;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 30px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1500px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: skyblue;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;

export const FooterAddress = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  font-size: 24px;
  color: #fff;

  & > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
