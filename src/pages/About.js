import React, { useEffect, useContext } from "react";
import { NavContext } from "../navContext";
import { Container, Col, Row } from "react-bootstrap";
import { Services } from "./Services";

export const About = () => {
	const { setActive } = useContext(NavContext);

	useEffect(() => {
		setActive("/about");
		window.scroll(0, 0);
	}, []);

	return (
		<>
			<Container
				style={{ minHeight: "80vh" }}
				className="d-flex flex-column justify-content-center align-items-center"
			>
				<Row className="justify-content-between align-items-center mt-4">
					<Col md={12}>
						<h1 style={{ fontWeight: 600 }}>About me</h1>
					</Col>
					<Col md={6} className="m-0">
						<h3 className="mb-3 mt-4">
							Mern stack developer, based in the India.
						</h3>
						<h5 className="text-muted ">
							I am self taught MERN stack developer, located in Indore, India.
						</h5>
						<h5 className="text-muted mt-4">
							I work with a Dell Inspiron 15 and particularly enjoy creating
							creative and good looking UI/UX.
						</h5>
						<h5 className="text-muted mt-3">
							My hobbies and interests away from the development include
							supporting my national cricket team, finding new and good places
							to explore and attending social events with friends and family.
						</h5>
					</Col>
					<Col md={6} className="mx-auto">
						<figure>
							<img
								src={process.env.PUBLIC_URL + "/images/rafting.webp"}
								alt="Rafting"
								className="mx-auto "
								loading="lazy"
								width="95%"
							/>
							<figcaption
								className="text-center m-0 p-0 text-black-50"
								style={{ transform: "translate(0px, -40px)" }}
							>
								River rafting - The Vyas river
							</figcaption>
						</figure>
					</Col>
				</Row>
			</Container>
			<Services />
		</>
	);
};
