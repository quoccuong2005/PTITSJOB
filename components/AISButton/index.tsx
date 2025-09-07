import styled, { CSSProperties } from "styled-components";

interface IProps {
	type?: "primary" | "default";
	children?: any;
	style?: CSSProperties;
	classname?: string;
	onClick?:()=>void;
	icon?: JSX.Element;
	iconPosition?: 'start' | 'end';
}

const AISButton = (props: IProps) => {
	const {style, children, classname, onClick, type, icon, iconPosition} = props;
	return (
		<ButtonWrapper>
			<button
				onClick={onClick}
				className={`${classname? classname: ''} ${
					type === "primary" ? "primary" : "default"
				} flex items-center gap-[10px]`}
				style={style}
			>	
				{(!iconPosition || iconPosition === 'start') && icon}
				{children}
				{iconPosition === 'end' && icon}
			</button>
		</ButtonWrapper>
	);
};

const ButtonWrapper = styled.div`
	button {
		height: 40px;
		border-radius: 8px;
		padding-left: 16px; 
		padding-right: 16px;
		line-height: 100%;
		letter-spacing: 3%;
		transition: all 0.2s ease;
		min-width: max-content;
	}

	button.primary {
		color: white;
		font-weight: 600;
		font-size: 16px;
		background-color: var(--primary-color);
			&:hover {
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
			}

			&:active {
				transform: scale(0.97);
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) inset;
			}
	}

	button.default {
		color: var(--primary-color);
		font-weight: 600;
		font-size: 16px;
		border: 1px solid var(--primary-color);
		background: transparent;
		transition: all 0.25s ease;

		&:hover {
			background: #bc282614; // nền highlight
		}

		&:active {
			transform: scale(0.96);
			border-color: darken(var(--primary-color), 10%);
			box-shadow: 0 0 6px rgba(0, 123, 255, 0.3);
		}
	}
}
`;
export default AISButton;
