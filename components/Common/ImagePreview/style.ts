import styled from "styled-components";

export const ImagePreviewStyle = styled.div`
	.image-preview {
		margin: 8px 0 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		float: left;

		li {
			margin: 0;
			list-style: none;
			position: relative;

			a {
				display: block;
				overflow: hidden;
				border-radius: 2px;
				border: 1px solid #eceeef;

				img {
					object-fit: cover;
					width: 150px;
					height: 100px;
					transition: 0.4s;
				}

				&:hover {
					img {
						opacity: 0.5;
					}
				}
			}

			button {
				width: 20px;
				height: 20px;
				font-size: 12px;
				background: rgba(255, 255, 255, 0.6);
				line-height: 16px;
				text-align: center;
				border: 1px solid rgba(255, 255, 255, 0.7);
				border-radius: 50%;
				position: absolute;
				top: 4px;
				right: 4px;
				opacity: 0.5;

				&:hover {
					opacity: 1;
				}
			}
		}
	}
`;
