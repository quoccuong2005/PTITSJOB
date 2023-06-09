import styled from "styled-components";

interface IProps {
	title: string;
	description?: string;
	uppercase?: boolean;
	type?: "primary" | "default";
	onClick?: (e:any) => void;
}
const Title = (props: IProps) => {
	return (
		<TitleWrapper>
			<div  className={`border-b lg:mb-[20px] mb-[20px] cursor-pointer min-h-[55px] flex items-center ${
				props.type === "default"
					? "border-white-500 md:border-white-500"
					: "border-primary-500 md:border-primary-500"
			} md:border-b-2  `} onClick={props.onClick}>
				<div
					className={` ${props.uppercase ? "uppercase" : ""} ${props.type === "default" ? "text-white" : "text-red"} `}
				>
					{props.title}
				</div>
				{/*<div*/}
				{/*	className={`border-b ${*/}
				{/*		props.type === "default"*/}
				{/*			? "border-white-500 md:border-white-500"*/}
				{/*			: "border-primary-500 md:border-primary-500"*/}
				{/*	} md:border-b-2  `}*/}
				{/*></div>*/}
				{/*<div className={`border-b-2 ${props.type==='default'?'border-white-500 md:border-white-500':'border-primary-500 md:border-primary-500'} md:border-b-4  pb-[12px] w-[114px]`}></div>*/}
			</div>
			{/*{props.description && <div className={`description text-center ${props.type==='default'?'text-white':'text-black'}`} dangerouslySetInnerHTML={{__html:props.description}}></div>}*/}
		</TitleWrapper>
	);
};

const TitleWrapper = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	color: #b70b00;
	.description {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
	}
`;
export default Title;
