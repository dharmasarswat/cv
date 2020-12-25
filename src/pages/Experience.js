import { Container, Row, Col } from "react-bootstrap";

const experiences = [
	{
		heading: "Front-end Developer",
		company: "Flats and Flatmates",
		duration: "Aug 2020 - Dec 2020",
		location: "Remote",
		desc:
			"Here I worked as a Reactjs developer to create some awesome projects.",
	},
	{
		heading: "Full-stack Developer",
		company: "Kanishka IT",
		duration: "Jan 2020 - Mar 2020",
		location: "Gwalior, M.P, India",
		desc:
			"I've completed my internship as a Full stack Developer in Kanishka IT. Here I've worked on some MEAN stack projects some MERN stack projects and I've also Worked on some Full stack projects.",
	},
];

export const Experience = () => {
	return (
		<Container
			style={{ minHeight: "80vh" }}
			className="d-flex flex-column justify-content-center align-items-center mt-5"
		>
			<Row className="justify-content-between align-items-strech mt-4">
				<Col md={12} className="mb-4">
					<h1 style={{ fontWeight: 600 }}>Experience</h1>
				</Col>
				{experiences.map((experence, index) => {
					return (
						<Col
							md={5}
							className="m-0 text-center my-4 bg-light py-5 px-4 rounded"
							key={index}
							style={{ borderTop: "5px solid var(--primary-color)" }}
						>
							<h1
								className="mb-4 mt-4"
								style={{ color: "var(--primary-color)" }}
							>
								{experence.company}
							</h1>
							<div
								style={{
									height: "5px",
									width: "12%",
									backgroundColor: "var(--primary-color)",
									borderRadius: "10px",
									margin: "30px auto",
								}}
							/>
							<h3 className="mb-4 mt-4">{experence.heading}</h3>
							<h6 className="text-muted">( {experence.duration} )</h6>
							<h6 className="text-muted">{experence.location}</h6>
							<h5 className="text-muted mt-4 text-center">{experence.desc}</h5>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
