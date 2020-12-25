import { SocialIcons } from "./SocialIcons";
import { Col, Row, Container } from "react-bootstrap";

export const Footer = () => {
	return (
		<footer className="text-center text-muted mt-4 mb-2">
			<Container>
				<Row>
					<Col md={6} className="m-0 p-0 justify-content-center">
						<SocialIcons />
					</Col>
					<Col md={6} className="m-0 p-0">
						Made with ❤️ by Dharmendra Sarswat. © 2020 All rights reserved.
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
