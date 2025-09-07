import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface IProps {
	data: {
		title: string;
		path: string;
	}[];
}

const HomeIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
		<path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
		<path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
	</svg>
);

const ChevronRight = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const BreadcrumbPage = (props: IProps) => {
	return (
		<BreadcrumbContainer>
			{props.data.map((val, i) => {
				const isLast = i === props.data.length - 1;
				const isFirst = i === 0;
				
				return (
					<React.Fragment key={i}>
						<BreadcrumbItem $isLast={isLast}>
							{isFirst ? (
								<Link href={val.path}>
									<BreadcrumbLink $isLast={isLast}>
										<HomeIcon />
										<span>{val.title}</span>
									</BreadcrumbLink>
								</Link>
							) : (
								isLast ? (
									<BreadcrumbCurrent>
										{val.title}
									</BreadcrumbCurrent>
								) : (
									<Link href={val.path}>
										<BreadcrumbLink $isLast={isLast}>
											{val.title}
										</BreadcrumbLink>
									</Link>
								)
							)}
						</BreadcrumbItem>
						{!isLast && (
							<BreadcrumbSeparator>
								<ChevronRight />
							</BreadcrumbSeparator>
						)}
					</React.Fragment>
				);
			})}
		</BreadcrumbContainer>
	);
};


const BreadcrumbContainer = styled.nav`
	display: flex;
	align-items: center;
	gap: 8px;
	flex-wrap: wrap;
`;

const BreadcrumbItem = styled.div<{ $isLast: boolean }>`
	display: flex;
	align-items: center;
`;

const BreadcrumbLink = styled.a<{ $isLast: boolean }>`
	display: flex;
	align-items: center;
	gap: 6px;
	color: #6B7280;
	text-decoration: none;
	font-size: 16px;
	font-weight: 500;
	transition: color 0.2s ease;
	cursor: pointer;

	&:hover {
		color: #051A53;
		text-decoration: underline;
	}

	svg {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}
`;

const BreadcrumbCurrent = styled.span`
	color: #051A53;
	font-size: 16px;
	font-weight: 600;
	padding: 4px 8px;
	border-radius: 6px;
`;

const BreadcrumbSeparator = styled.div`
	color: #9CA3AF;
	display: flex;
	align-items: center;
	
	svg {
		width: 16px;
		height: 16px;
	}
`;

export default BreadcrumbPage;
