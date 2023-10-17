import { uploadFile, uploadImage } from "../../api/uploadFile";
import ImagePreview from "./ImagePreview/ImagePreview";

const FileUpload = (props: {
	values: string[];
	setValues: (data: string[]) => void;
	accept?: string;
	multiple?: boolean;
	disabled?: boolean;
	imagePreview?: boolean;
}) => {
	const { values, setValues, accept, multiple, disabled, imagePreview } = props;

	const onUploadImage = (files?: FileList) => {
		if (!files) return;

		Array.from(files).every(async (file) => {
			await uploadFile({ file, filename: file.name.split(".")[0], public: true }).then((response) => {
				const url = response.data?.data?.url;
				let temp = [...values];
				if (multiple) {
					temp.push(url);
				} else {
					temp = [url];
				}
				setValues(temp);
			});
			if (multiple) return true;
		});
	};

	const onRemoveFile = (index: number) => {
		let temp = [...values];
		temp.splice(index, 1);
		setValues(temp);
	};

	return (
		<>
			<div className='input-upload'>
				<button type='button' className={`btn ${disabled ? "btn-default" : "outline-primary"}`}>
					<i className='fa fa-upload'></i> Tải lên
				</button>
				<input
					type='file'
					disabled={disabled ?? false}
					onChange={(val) => onUploadImage(val.target.files ?? undefined)}
					multiple={multiple ?? false}
					accept={accept ?? ".jpg, .jpeg, .png"}
				/>
			</div>
			<div className='clearfix' />

			{imagePreview ? (
				<ImagePreview listAnh={values} onRemove={disabled ? undefined : onRemoveFile} />
			) : (
				<>
					{values.map((url, index) => (
						<div key={index} className='upload-item'>
							-{" "}
							<a href={url} target='_blank' rel='noreferrer'>
								Tập tin {index + 1}
							</a>
							{!disabled ? (
								<button title='Bỏ tập tin' type='button' onClick={() => onRemoveFile(index)}>
									<i className='fa fa-times'></i>
								</button>
							) : null}
						</div>
					))}
				</>
			)}
		</>
	);
};

export default FileUpload;
