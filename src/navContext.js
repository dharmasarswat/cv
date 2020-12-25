import { createContext } from "react";
import { useState } from "react";

export const NavContext = createContext();

export const NavProvider = (props) => {
	const [active, setActive] = useState("/");

	return (
		<NavContext.Provider value={{ active, setActive }}>
			{props.children}
		</NavContext.Provider>
	);
};
