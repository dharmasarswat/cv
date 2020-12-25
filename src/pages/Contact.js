import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { NavContext } from "../navContext";
import emailjs, { init } from "emailjs-com";
init("user_lsIER5kfwFqYLMHb7mMwz");

export const Contact = () => {
	const { setActive } = useContext(NavContext);
	const [state, setState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [error, setError] = useState("");

	useEffect(() => {
		setActive("/contact");
		window.scroll(0, 0);
	}, []);

	const handelChange = (e) => {
		const name = e.target.name;
		setState((state) => ({ ...state, [name]: e.target.value }));
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		setError("");
		if (!state.name || !state.email || !state.message)
			setError("Please enter valid data.");
		else {
			const templateParams = {
				from_name: state.name + " (" + state.email + ")",
				to_name: "Dharmendra Sarswat",
				message: state.message,
			};

			emailjs
				.send(
					"service_7pi4nb5",
					"template_luq8lae",
					templateParams,
					"user_lsIER5kfwFqYLMHb7mMwz"
				)
				.then((response) => console.log(response))
				.catch((err) => console.log(err))
				.finally(() => alert("Thank you for sharing your views with us."));
		}
	};

	return (
		<Container
			style={{ minHeight: "80vh" }}
			className="d-flex flex-column justify-content-center align-items-center"
		>
			<Row className="justify-content-between align-items-center h-100">
				<Col md={6} className="p-2 m-0">
					<h1 className="mb-4 mt-4" style={{ color: "var(--primary-color)" }}>
						Contact Me
					</h1>
					<h5 className="text-black-50 mb-4 mt-3">
						If you’d like to chat about a project please fill in the form below
						and I’ll get back within 1-2 days.
					</h5>
				</Col>
				<Col md={5} className="px-2 mt-5">
					<img
						src={process.env.PUBLIC_URL + "/images/contact.svg"}
						alt="Contact Me"
						className="rounded my-4 p-0 w-100"
					/>
				</Col>
				<Col
					md={12}
					className="mx-auto text-center bg-light py-5 px-4 rounded mb-5"
					style={{
						borderTop: "5px solid var(--primary-color)",
						marginTop: "150px",
						marginBottom: "50px",
					}}
				>
					<h3 className="mb-4">Status</h3>
					<h1 className="mb-4 mt-4" style={{ color: "var(--primary-color)" }}>
						Available
					</h1>
					<h4 className="text-muted">I’m currently taking on new projects!</h4>
				</Col>
			</Row>
			<Form onSubmit={handelSubmit}>
				<Row className="my-5">
					<Col md={6} className="mt-4">
						<Form.Group>
							<Form.Label
								style={{ fontSize: "24px" }}
								className="font-weight-bold text-muted"
							>
								Name
							</Form.Label>
							<Form.Control
								type="text"
								size="lg"
								required
								value={state.name}
								onChange={handelChange}
								name="name"
							/>
						</Form.Group>
					</Col>
					<Col md={6} className="mt-4">
						<Form.Group>
							<Form.Label
								style={{ fontSize: "24px" }}
								className="font-weight-bold text-muted"
							>
								Email
							</Form.Label>
							<Form.Control
								type="email"
								size="lg"
								required
								value={state.email}
								onChange={handelChange}
								name="email"
							/>
						</Form.Group>
					</Col>
					<Col md={12} className="mt-4">
						<Form.Group>
							<Form.Label
								style={{ fontSize: "24px" }}
								className="font-weight-bold text-muted"
							>
								SUGGESTIONS / HOW CAN I HELP?
							</Form.Label>
							<Form.Control
								size="lg"
								as="textarea"
								rows={5}
								required
								value={state.message}
								onChange={handelChange}
								name="message"
							/>
						</Form.Group>
					</Col>
					{error.length > 0 && (
						<Col md={12} className="text-danger my-4">
							{error}
						</Col>
					)}
					<Col md={12} className="d-flex justify-content-center">
						<Button
							type="submit"
							variant="outline-info"
							size="lg"
							className="w-25 mt-4"
						>
							Send
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};
