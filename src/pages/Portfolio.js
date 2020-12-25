import React, { Fragment, useEffect } from "react";
import { Project } from "./Projects";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { useContext } from "react";
import { NavContext } from "../navContext";

export const Portfolio = () => {
	const { setActive } = useContext(NavContext);

	useEffect(() => {
		setActive("/portfolio");
		window.scroll(0, 0);
	}, []);

	return (
		<Fragment>
			<Project />
			<Experience />
			<Education />
		</Fragment>
	);
};
