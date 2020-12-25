import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Education } from "./pages/Education";
import { Experience } from "./pages/Experience";
import { Project } from "./pages/Projects";
import { Container } from "react-bootstrap";
import { Nab } from "./pages/Nav";
import { Portfolio } from "./pages/Portfolio";

export const routes = [
	{
		component: Home,
		path: "/",
		name: "home",
	},
	{
		component: About,
		path: "/about",
		name: "about",
	},
	{
		component: Portfolio,
		path: "/portfolio",
		name: "portfolio",
	},
	{
		component: Contact,
		path: "/contact",
		name: "contact",
	},
];

console.log(document.location.pathname);
function App() {
	return (
		<BrowserRouter>
			<Nab />
			<Switch>
				{routes.map((route, index) => {
					return (
						<Route
							exact
							path={route.path}
							component={route.component}
							key={index}
						/>
					);
				})}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
