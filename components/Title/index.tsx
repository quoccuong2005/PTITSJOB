import styled from "styled-components";

interface IProps {
	title: string;
	description?: string;
	uppercase?: boolean;
	type?: "primary" | "default";
}
const Title = (props: IProps) => {
	return (
		<TitleWrapper>
			<div className='flex flex-col items-center lg:mb-[40px] mb-[20px]'>
				<div
					className={` ${props.uppercase ? "uppercase" : ""} ${props.type === "default" ? "text-white" : "text-black"} text-center text-xl lg:text-3xl`}
				>
					{props.title}
				</div>
				<div className={`border-b-2 ${props.type==='default'?'border-white-500 md:border-white-500':'border-primary-500 md:border-primary-500'} md:border-b-4  pb-[12px] w-[64px]`}></div>
				{/*<div className={`border-b-2 ${props.type==='default'?'border-white-500 md:border-white-500':'border-primary-500 md:border-primary-500'} md:border-b-4  pb-[12px] w-[114px]`}></div>*/}
			</div>
			{props.description && <div className={`description text-center ${props.type==='default'?'text-white':'text-black'}`} dangerouslySetInnerHTML={{__html:props.description}}></div>}
		</TitleWrapper>
	);
};

const TitleWrapper = styled.div`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;

	line-height: 39px;
	color: #18202A;
	.description {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
	}
`;
export default Title;
