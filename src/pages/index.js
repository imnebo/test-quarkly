import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base">
				<StackItem width="40%" md-width="100%" margin="10px 10px 10px 10px">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Мой налог
					</Text>
				</StackItem>
				<StackItem
					width="25%"
					md-width="50%"
					sm-width="100%"
					background="#ff8400"
					color="#fdfdfd"
					border-radius="5px"
					margin="10px 10px 10px 10px"
					hover-box-shadow="0 10px 20px 0 rgba(0, 0, 0, 0.51)"
					hover-transition="--transformInOut"
					transition="--transformInOut"
				>
					<Text margin="0px">
						Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem
					width="25%"
					md-width="50%"
					sm-width="100%"
					background="#ff8400"
					color="#fdfdfd"
					border-radius="5px"
					margin="10px 10px 10px 10px"
					hover-box-shadow="0 10px 20px 0 rgba(0, 0, 0, 0.51)"
					hover-transition="--transformInOut"
					transition="--transformInOut"
				>
					<Text margin="0px">
						Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});