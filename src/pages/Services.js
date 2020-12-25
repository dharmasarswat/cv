import { Container, Row, Col } from "react-bootstrap";

const services = [
	{
		heading: "Web Design",
		subHeading: "User Focused",
		img: "/images/computer.svg",
		desc:
			"A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.",
	},
	{
		heading: "Web Development",
		subHeading: "Responsive and Fast",
		img: "/images/web-programming.svg",
		desc:
			"Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.",
	},
];

export const Services = () => {
	return (
		<Container
			style={{ minHeight: "80vh" }}
			className="d-flex flex-column justify-content-center align-items-center"
		>
			<Row className="justify-content-between align-items-center mt-4">
				<Col md={12} className="mb-4">
					<h1 style={{ fontWeight: 600 }}>Services</h1>
				</Col>
				{services.map((service, index) => {
					return (
						<Col
							md={5}
							className="m-0 text-center my-4 bg-light py-5 px-4 rounded"
							key={index}
							style={{ borderTop: "5px solid var(--primary-color)" }}
						>
							<img
								src={process.env.PUBLIC_URL + service.img}
								alt={service.heading}
								className="mx-auto "
								loading="lazy"
								width="100"
							/>
							<div
								style={{
									height: "5px",
									width: "12%",
									backgroundColor: "var(--primary-color)",
									borderRadius: "10px",
									margin: "30px auto",
								}}
							/>
							<h3 className="mb-4 mt-4">{service.heading}</h3>
							<h4 className="text-muted mt-5">{service.subHeading}</h4>
							<h5 className="text-muted mt-4 text-center">{service.desc}</h5>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
