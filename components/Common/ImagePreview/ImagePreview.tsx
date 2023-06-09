import Image from "next/image";
import { ImagePreviewStyle } from "./style";

const ImagePreview = (props: { listAnh: string[]; onRemove?: (index: number) => void }) => {
	const { listAnh, onRemove } = props;

	if (listAnh.length)
		return (
			<ImagePreviewStyle>
				<ul className='image-preview'>
					{listAnh.map((item, index) => (
						<li key={index}>
							<a href={item} target='_blank' rel='noreferrer'>
								<Image style={{width:'150px',height:'150px'}} src={item} key={index} width={150} height={150} alt='' />
							</a>
							{onRemove ? (
								<button title='Bỏ tập tin' type='button' onClick={() => onRemove(index)}>
									<i className='fa fa-times'></i>
								</button>
							) : null}
						</li>
					))}
				</ul>
			</ImagePreviewStyle>
		);
	else return null;
};

export default ImagePreview;
