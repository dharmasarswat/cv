import { Container, Row, Col } from "react-bootstrap";

const educations = [
	{
		heading: "Graduation",
		instution: "ITM Group of Instutions",
		duration: "Aug 2017 - Aug 2021",
		img: "/images/graduated.svg",
		location: "Gwalior, M.P, India",
		score: "6.87 CGPA",
		stream: "Computer Science Engineering",
	},
	{
		heading: "Intermediate",
		instution: "S.S.B.B Sarswati Vidya Mandir",
		img: "/images/graduation.svg",
		duration: "May 2015 - Apr 2016",
		location: "Firozabad, U.P, India",
		score: "87%",
		stream: "Science, Maths",
	},
	{
		heading: "High school",
		instution: "S.S.B.B Sarswati Vidya Mandir",
		img: "/images/school.svg",
		duration: "May 2014 - Apr 2015",
		location: "Firozabad, U.P, India",
		score: "9.4 CGPA",
		stream: "All",
	},
];

export const Education = () => {
	return (
		<Container
			style={{ minHeight: "80vh" }}
			className="d-flex flex-column justify-content-center align-items-center mt-5"
		>
			<Row className="justify-content-between align-items-strech mt-4">
				<Col md={12} className="mb-4">
					<h1 style={{ fontWeight: 600 }}>Educations</h1>
				</Col>
				{educations.map((education, index) => {
					return (
						<Col
							md={5}
							className="mx-auto text-center my-4 bg-light py-5 px-4 rounded"
							key={index}
							style={{ borderTop: "5px solid var(--primary-color)" }}
						>
							<img
								src={process.env.PUBLIC_URL + education.img}
								alt={education.heading}
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
							<h1
								className="mb-4 mt-4"
								style={{ color: "var(--primary-color)" }}
							>
								{education.heading}
							</h1>
							<h3 className="mb-4">{education.instution}</h3>
							<h6 className="text-muted">( {education.duration} )</h6>
							<h6 className="text-muted mt-4">{education.location}</h6>
							<h6 className="text-muted text-center">
								Score: {education.score}
							</h6>
							<h6 className="text-muted text-center">
								Straem: {education.stream}
							</h6>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
