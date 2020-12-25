import React, { useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../navContext";

export const Home = () => {
	const { setActive } = useContext(NavContext);

	useEffect(() => {
		setActive("/");
	}, []);

	return (
		<Container
			style={{ minHeight: "80vh" }}
			className="d-flex justify-content-center align-items-center"
		>
			<Row className="justify-content-between align-items-center h-100">
				<Col md={5} className="p-0 m-0">
					<img
						src={process.env.PUBLIC_URL + "/images/profilePic.jpg"}
						alt="Dharmendra Sarswat"
						className="rounded my-4 p-0 w-100"
					/>
				</Col>
				<Col md={6} className="p-2 m-0">
					<h2>Hi, I'm Dharmendra Sarswat</h2>
					<h5 className="text-black-50 mb-4 mt-3">
						Mern stack developer, based in the India.
					</h5>
					<p className="text-black-50">
						“Let us take you into a deeper experience, make a moment a lasting
						conveyable memory. Let us help build your tribe.”{" "}
						<em>-Deep Immersion</em>
					</p>
					<a href="/resume.pdf" download>
						<Button variant="outline-dark" className="mt-4 mr-3">
							Download resume
						</Button>
					</a>
					<Link to="/about">
						<Button variant="outline-info" className="mt-4 border-0">
							More about me
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};
