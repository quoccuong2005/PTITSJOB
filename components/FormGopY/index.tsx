import styled from "styled-components";
import { rules } from "../../utils/rules";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import CommentItems from "./components/commentItems";
import { ip } from "../../api/ip";
import axios from "axios";
import {da} from "date-fns/locale";
interface IProps {
	onSubmit: (data: any, callback: (status: boolean) => void) => void;
	sendSuccess: boolean;
	articleId?: string;
}
const FormGopY = (props: IProps) => {
	const { onSubmit, sendSuccess } = props;
	const [dataComment, setDataComment] = useState<any[]>([]);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleSubmitForm = (val: any) => {
		onSubmit(val, (data) => {
			if (data) {
				reset();
				getDataComment()
				// location.reload();
			} else {
			}
		});
	};
	const getDataComment = async () => {
		try {
			const res = await axios.post(`${ip}/cmscore/v5/CommentArticle/GetData/Custom/${props.articleId}`, {
				filters: [],
				sorts: [],
				pageInfo: {
					page: 1,
					pageSize: 10,
				},
			});
			if (res) {
				setDataComment(res?.data?.data);
				sortComment(res?.data?.data)
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		if (props.articleId) {
			getDataComment();
		}
	}, [props.articleId]);
	const sortComment = (data:any[]) => {
	  const dataParent=data?.filter((item)=>{
		  return item?.parentId==='00000000-0000-0000-0000-000000000000'
	  })
		const arr2=dataParent?.map((value)=>{
			const obj=data?.filter((value3)=>{
				return value3?.parentId===value?.id;
			})
			return{...value,children:obj}
		})
	}
	return (
		<FormGopYWrapper>
			<div className='form bg-[#F8F9FA]'>
				<h2 className='title-form mb-6'>Ý kiến bạn đọc</h2>
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
							Gửi ý kiến
						</button>
						{sendSuccess && (
							<div className='send-status flex items-center'>
								<img src={"/images/icons/status-success.svg"} alt={"image"} className='mr-4' />
								<span>Gửi thành công, Ý kiến của bạn đã được chuyển đến ban biên tập!</span>
							</div>
						)}
					</div>
				</form>
			</div>
			<div className='comment mt-[40px]'>
				<div className='total-comment mb-[40px]'>Bình luận: {dataComment?.length}</div>
				<div>
					{dataComment?.filter((item)=>{
						return item.parentId==='00000000-0000-0000-0000-000000000000'
					})?.map((val, i) => {
						return (
							<CommentItems
								data={{
									imageUrl: "",
									name: val?.userName,
									comment: val?.contentComment,
									dateTime: val?.created,
								}}
								record={val}
								index={i + 1}
								key={i}
							/>
						);
					})}
				</div>
				{/*<div className='show-more text-center mt-[24px]'>Xem thêm bình luận</div>*/}
			</div>
		</FormGopYWrapper>
	);
};
const FormGopYWrapper = styled.div`
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
	.comment {
		.total-comment {
			font-family: "Inter";
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 24px;
			color: #343a40;
		}
	}
	.show-more {
		font-family: "Inter";
		font-style: normal;
		font-weight: 500;
		font-size: 15px;
		line-height: 24px;
		text-decoration-line: underline;
		color: #BC2826;
		cursor: pointer;
	}
`;
export default FormGopY;
