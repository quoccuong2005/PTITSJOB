import styled, { CSSProperties } from "styled-components";
import moment from "moment";
import { useRouter } from "next/router";
interface IPorps {
	data: { id: string; imageUrl: string; content: string; dateTime?: string; description?: string };
	style?: CSSProperties;
	isNotRedirect?:boolean
	size?: "large" | "small";
	category?:string
}
const    MiniCard = (props: IPorps) => {
	const router = useRouter();
	const handleClickDetail = (id: string) => {
		if (!props.isNotRedirect){
			router.push(`/tin-tuc/${id}`);
		}

	};
	return (
		<CardEventWrapper style={props.style}>
			{props.size === "small" ? (
				<div className='card small flex cursor-pointer' onClick={() => handleClickDetail(props.data.id)}>
					<img className='wow fadeInUp md:mr-[32px]' src={props.data.imageUrl} alt={"image"}
						 onError={({ currentTarget }) => {
							 currentTarget.onerror = null; // prevents looping
							 //currentTarget.src = "/images/default/tintuctbao.png";
							 currentTarget.src = `${props.category==='sach'?'/images/default/image-sach.jpg':'/images/default/tin1.png'}`;
						 }}/>
					<div>
						<p className='content wow fadeInUp' dangerouslySetInnerHTML={{__html:props.data.content}}></p>
						<p className='time wow fadeInUp'>{moment(props.data.dateTime).format("DD/MM/YYYY HH:mm")}</p>
					</div>
				</div>
			) : (
				<div className='card large flex cursor-pointer' onClick={() => handleClickDetail(props.data.id)}>
					<img className='wow fadeInUp md:mr-[32px]' src={props.data.imageUrl} alt={"image"}
						 onError={({ currentTarget }) => {
							 currentTarget.onerror = null; // prevents looping
							 //currentTarget.src = "/images/default/tin1.png";
							 currentTarget.src = `${props.category==='sach'?'/images/default/image-sach.jpg':'/images/default/tin1.png'}`;
						 }}/>
					<div className={"flex flex-col "}>
						<p className='content wow fadeInUp' dangerouslySetInnerHTML={{__html:props.data.content}}></p>
						{props.data.description && <p className='description wow fadeInUp' dangerouslySetInnerHTML={{__html:props.data.description}} ></p>}
						<p className='time wow fadeInUp'>{moment(props.data.dateTime).format("DD/MM/YYYY HH:mm")}</p>
					</div>
				</div>
			)}
		</CardEventWrapper>
	);
};
const CardEventWrapper = styled.div`
	//overflow: hidden;
	//max-width: 262px;
	.small {
		img {
			//max-width: 262px;
			max-width: 380px;
			//border-radius: 8px;
		}
	}
	.large {
		img {
			//max-width: 262px;
			max-width: 350px;
			//border-radius: 16px;
			margin-right: 32px;
		}
		.content {
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 18px;
			line-height: 28px;

			color: #212529;

			/* Inside auto layout */

			flex: none;
			order: 0;
			align-self: stretch;
			flex-grow: 0;
		}
	}
	.content {
		font-family: "Inter";
		font-style: normal;
		font-weight: 500;
		font-size: 15px;
		line-height: 24px;

		color: #212529;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.time {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 13px;
		line-height: 18px;
		display: flex;
		align-items: center;
		color: #868e96;
	}
`;

export default MiniCard;
