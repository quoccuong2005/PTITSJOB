import styled, { CSSProperties } from "styled-components";

interface IProps {
	type?: "primary" | "default";
	children?: any;
	style?: CSSProperties;
	classname?: string;
	onClick?:()=>void
}

const Button = (props: IProps) => {
	return (
		<ButtonWrapper>
			<button
				onClick={props?.onClick}
				className={`${props.classname} button-default sm:px-[40px] sm:py-[8px] px-[12px] py-[4px] flex justify-center items-center  ${
					props.type === "primary" ? "bg-primary" : "bg-secondary"
				}`}
				style={props.style}
			>
				{props.children}
			</button>
		</ButtonWrapper>
	);
};

const ButtonWrapper = styled.div`
	.button-default {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 28px;
		/* identical to box height, or 175% */

		display: flex;
		align-items: center;
		text-align: center;
		color: #ffffff;

		box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
	}
`;
export default Button;
