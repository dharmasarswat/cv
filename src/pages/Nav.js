import React from "react";
import { routes } from "../App";
import { Link } from "react-router-dom";
import "../assets/css/nav.css";
import { Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { NavContext } from "../navContext";

export const Nab = () => {
	const { active, setActive } = useContext(NavContext);

	const handelClick = (e) => {
		setActive(e.target.accessKey);
	};

	return (
		<>
			<Navbar
				style={{ backgroundColor: "#ffffff", overflowX: "auto", width: "100%" }}
				variant="light"
				sticky="top"
				className="justify-content-center mx-auto"
			>
				<Nav defaultActiveKey="/">
					{routes.map((route, index) => {
						return (
							<Nav.Item key={index}>
								<Link to={route.path}>
									<button
										accessKey={route.path}
										onClick={handelClick}
										className={
											active === route.path ? "active navItem" : "navItem"
										}
									>
										{route.name}
									</button>
								</Link>
							</Nav.Item>
						);
					})}
				</Nav>
			</Navbar>
		</>
	);
};
