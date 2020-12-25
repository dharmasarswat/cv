import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Nab } from "./pages/Nav";
import { Portfolio } from "./pages/Portfolio";
import { Footer } from "./pages/Footer";

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
				<Route exact path="/cv" component={Home} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
