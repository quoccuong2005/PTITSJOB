import { Flowbite } from "flowbite-react";
import { FC, PropsWithChildren } from "react";
import { flowbiteTheme as theme } from "../styles/theme";

const FlowbiteContext: FC<PropsWithChildren> = function ({ children }) {
	return <Flowbite theme={{ theme }}>{children}</Flowbite>;
};

export default FlowbiteContext;
