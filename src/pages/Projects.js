import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const projects = [
	{
		name: "Flats and Flatmates",
		img: "/images/fnf.webp",
		desc:
			"FlatsandFlatmates.co.in is a community of like-minded people looking to find an affordable flat and flatmates they can share a co-living space with.",
		technologies: "ReactJs",
		link: "https://flatsandflatmates.co.in/",
	},
	{
		name: "Animal Feed",
		img: "/images/animalFeed.webp",
		desc:
			"ANIMAL FEED is dedicated to farmers, although designed as a B2C and Consumer brand platform with the aim to educate and hire customers.",
		technologies: "ReactJs",
		link: "http://dharmasarswat.github.io/animalFeed",
	},
	{
		name: "Covid 19 India",
		img: "/images/covid19.webp",
		desc:
			"Covid 19 India is a portal where you can get informaton about total number of active, recovered and dead patients of COVID19.",
		technologies: "HTML5, CSS3, JS",
		link: "https://dharmasarswat.github.io/covid19tracker.github.io/",
	},
];

export const Project = () => {
	return (
		<Container
			style={{ minHeight: "80vh" }}
			className="d-flex justify-content-center align-items-center"
		>
			<Row className="justify-content-between align-items-center h-100">
				<Col md={12} className="my-4">
					<h1 style={{ fontWeight: 600 }}>Projects</h1>
				</Col>
				{projects.map((project, index) => {
					return (
						<Row
							key={index}
							className="justify-content-between align-items-center my-4"
						>
							<Col md={5} className="mx-auto p-0">
								<img
									src={process.env.PUBLIC_URL + project.img}
									alt={project.name}
									className="rounded my-4 p-0 w-100"
								/>
							</Col>
							<Col md={6} className="m-0 px-4">
								<h2>{project.name}</h2>
								<h6 className="text-black-50 mb-4 mt-3">
									{project.technologies}
								</h6>
								<p className="text-black-50">{project.desc}</p>
								<a href={project.link} target="__blank">
									<Button variant="outline-info" className="mt-4 mr-3 border-0">
										View live
									</Button>
								</a>
							</Col>
						</Row>
					);
				})}
			</Row>
		</Container>
	);
};
