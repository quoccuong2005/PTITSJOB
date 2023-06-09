import styled from "styled-components";
import moment from "moment";
import Modal from "../../Common/Modal";
import { JSXElementConstructor, ReactElement, ReactFragment, useState } from "react";
import { rules } from "../../../utils/rules";
import { useForm } from "react-hook-form";
import { tr } from "date-fns/locale";
import axios from "axios";
import { ip } from "../../../api/ip";
import { useRouter } from "next/router";

interface IProps {
	data: { imageUrl: string | undefined; name: string; comment: string; dateTime: string };
	index: number;
	record?: any;
}

const CommentItems = (props: IProps) => {
	const { data, index } = props;
	const router = useRouter();
	const [isShowModal, setIsShowModal] = useState<boolean>(false);
	const [dataRep, setDataRep] = useState<any>();
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleName = (name: string) => {
		if (name) {
			let arr = name.split(" ");
			console.log("rr", arr);
			return `${arr[0]?.[0]}${arr[1]?.[0] ? arr[1]?.[0] : arr[0]?.[1]}`;
		} else {
			return null;
		}
	};
	const renderDefaultAvatar = (indexVal: number, name?: string) => {
		return (
			<div
				className={`w-full h-full flex items-center justify-center image-default ${
					indexVal % 2 === 0 ? "image-default-1" : "image-default-2"
				}`}
			>
				{handleName(name ? name : data?.name)}
			</div>
		);
	};
	const handleSubmitForm = async (value: any) => {
		console.log("data", value);
		const obj = { ...value, articleId: router?.query?.id, parentId: dataRep?.id };
		try {
			const res = await axios.post(`${ip}/cmscore/v5/CommentArticle`, obj);
			if (res) {
				setIsShowModal(false);
				reset();
			} else {
			}
		} catch (e) {
			console.log(e);
		}
	};
	const handleLike = async (id: string) => {
		try {
			const res = await axios.put(`${ip}/cmscore/v5/CommentArticle/LikeComment/${id}`);
			if (res) {
			}
		} catch (e) {
			console.log(e);
		}
	};
	const handleDislike = async (id:string) => {
		try {
			const res = await axios.put(`${ip}/cmscore/v5/CommentArticle/UnLikeComment/${id}`);
			if (res) {
			}
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<CommentItemsWrapper>
			<div className='flex'>
				<div className='avatar shrink-0 mr-[16px] w-[56px] h-[56px] overflow-hidden'>
					{data?.imageUrl ? (
						<img className='w-full h-full' src={data?.imageUrl} alt={"image"} />
					) : (
						<>{renderDefaultAvatar(index)}</>
					)}
				</div>
				<div>
					<div className='flex '>
						<div className='name mr-[16px]'>{data?.name}</div>
						<div className='date'>{moment(data?.dateTime).format("HH:mm DD/MM/YYYY")}</div>
					</div>
					<div className='comment mt-[8px]'>
						<div dangerouslySetInnerHTML={{ __html: data?.comment }}></div>
					</div>
					<div className='flex mt-[16px]'>
						<div className='like flex mr-[42px]' onClick={()=>{
							handleLike(props?.record?.id)
						}}>
							<img className='w-[24px] h-[24px] mr-[8px] cursor-pointer' src='/images/icons/like.svg' alt='like' />
							<div>{props?.record?.likeNumber ?? 0} Thích</div>
						</div>
						<div
							className='reply flex'
							onClick={() => {
								setIsShowModal(true);
								setDataRep(props.record);
							}}
						>
							<img className='w-[24px] h-[24px] mr-[8px] cursor-pointer' src='/images/icons/message.svg' alt='reply' />
							<div>Trả lời</div>
						</div>
					</div>
					<div>
						{props.record?.comments?.map(
							(
								valueCmt: {
									imageUrl: string | undefined;
									userName: string;
									created: moment.MomentInput;
									contentComment: any;
								},
								indexCmt: number
							) => {
								return (
									<>
										<div className='flex reply'>
											<div className='avatar shrink-0 mr-[16px] w-[56px] h-[56px] overflow-hidden'>
												{valueCmt?.imageUrl ? (
													<img className='w-full h-full' src={valueCmt?.imageUrl} alt={"image"} />
												) : (
													<>{renderDefaultAvatar(indexCmt, valueCmt?.userName ?? "")}</>
												)}
											</div>
											<div>
												<div className='flex '>
													<div className='name mr-[16px]'>{valueCmt?.userName}</div>
													<div className='date'>{moment(valueCmt?.created).format("HH:mm DD/MM/YYYY")}</div>
												</div>
												<div className='comment mt-[8px]'>
													<div dangerouslySetInnerHTML={{ __html: valueCmt?.contentComment }}></div>
												</div>
												{/*<div className='flex mt-[16px]'>*/}
												{/*	<div className='like flex mr-[42px]'>*/}
												{/*		<img className='w-[24px] h-[24px] mr-[8px] cursor-pointer' src='/images/icons/like.svg' alt='like' />*/}
												{/*		<div>{props?.record?.likeNumber??0} Thích</div>*/}
												{/*	</div>*/}
												{/*	<div className='reply flex' onClick={()=>{*/}
												{/*		setIsShowModal(true)*/}
												{/*		setDatarep(props.record)*/}
												{/*	}}>*/}
												{/*		<img className='w-[24px] h-[24px] mr-[8px] cursor-pointer' src='/images/icons/message.svg' alt='reply' />*/}
												{/*		<div>Trả lời</div>*/}
												{/*	</div>*/}
												{/*</div>*/}
											</div>
										</div>
									</>
								);
							}
						)}
					</div>
				</div>
			</div>
			<Modal
				show={isShowModal}
				onCancel={() => {
					setIsShowModal(false);
				}}
				showFooter={false}
			>
				<div className='form'>
					<form onSubmit={handleSubmit(handleSubmitForm)}>
						<div className={"grid grid-flow-row-dense  lg:grid-cols-2 lg:gap-[56px]"}>
							<div className={"lg:mb-6 mb-2"}>
								<div className={"lg:flex lg:items-center"}>
									<label className={"required-label shrink-0"}>Họ và tên</label>
									<div className={"w-full relative"}>
										<input
											className={"w-full"}
											placeholder='Nhập họ tên'
											{...register("userName", { ...rules.required })}
										/>
										{/*// @ts-ignore*/}
										{errors.hoTen && <p className='error-text'>{errors.hoTen?.message}</p>}
									</div>
								</div>
							</div>
							<div className={"mb-2 lg:mb-0"}>
								<div className={"lg:flex lg:items-center"}>
									<label className={"required-label shrink-0 lg:mb-0"}>Email</label>
									<div className={"w-full relative"}>
										<input
											className={"w-full"}
											placeholder='Nhập email'
											{...register("userEmail", { ...rules.required, ...rules.email })}
										/>
										{/*// @ts-ignore*/}
										{errors.email && <p className='error-text'>{errors.email?.message}</p>}
									</div>
								</div>
							</div>
						</div>

						<div className={"lg:flex"}>
							<label className={"required-label shrink-0"}>Lời bình</label>
							<div className={"w-full relative"}>
								<textarea placeholder='Nhập lời bình' {...register("contentComment", { ...rules.required })} />
								{/*// @ts-ignore*/}
								{errors.comment && <p className='error-text'>{errors.comment?.message}</p>}
							</div>
						</div>

						<div className='lg:ml-[94px] flex justify-center lg:block '>
							<button type='submit' className='mt-6 btn'>
								Trả lời
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</CommentItemsWrapper>
	);
};

const CommentItemsWrapper = styled.div`
	.reply {
		border-bottom: 1px solid #f1f3f5;
		padding-bottom: 8px;
		margin-bottom: 8px;
		&:last-of-type {
			border: none;
		}
	}
	.form {
		border: 1px solid #f2f3f3;
		border-radius: 16px;
		padding: 24px;
		label {
			min-width: 80px;
			margin-right: 16px;
		}
		input {
			background: #f2f3f3;
			border-radius: 8px;
			padding: 12px;
			&:focus {
				outline: none;
			}
		}
		textarea {
			background: #f1f3f5;
			border-radius: 8px;
			resize: none;
			min-height: 180px;
			width: 100%;
			border: none;
			&:focus {
				outline: none;
			}
		}
		button {
			padding: 12px 64px;
			background: #fa5252;
			//border-radius: 8px;
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			/* identical to box height, or 150% */

			display: flex;
			align-items: center;

			/* White */

			color: #ffffff;
		}
		.title-form {
			font-family: "Inter";
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 32px;
			display: flex;
			align-items: center;
			color: #212529;
		}
	}
	border-bottom: 1px solid #f1f3f5;
	padding-bottom: 16px;
	margin-bottom: 16px;
	&:last-of-type {
		border: none;
		padding-bottom: 0;
		margin-bottom: 0;
	}
	.avatar {
		border-radius: 50px;
	}
	.image-default-1 {
		color: #7950f2;
		background-color: #f3f0ff;
	}
	.image-default-2 {
		color: #fa5252;
		background-color: #fff5f5;
	}
	.name {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;

		color: #212529;
	}
	.date {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		color: #868e96;
	}
`;
export default CommentItems;
