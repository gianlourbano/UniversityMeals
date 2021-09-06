import { CSSProperties, FunctionComponent } from "react";

//default html props 
interface UIComponentProps {
	className?: string,
	id?: string,
	style?: CSSProperties
}

//custom type to inject html props into ui components
export type UIComponent<P = {}> = FunctionComponent<P & UIComponentProps> 