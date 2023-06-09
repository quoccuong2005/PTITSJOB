import { Button } from "flowbite-react";
import { HiChevronLeft, HiOutlineChevronRight, HiOutlineDotsHorizontal } from "react-icons/hi";

const Pagination = (props: { total?: number; limit?: number; current?: number; setCurrent?: (n: number) => void }) => {
	const { total, limit, setCurrent } = props;
	const current = props.current ?? 1;
	const maxPage = Math.ceil((total ?? 0) / (limit ?? 10));
	const array = [-2, -1, 0, 1, 2];

	if (!total || total === 0) return <></>;

	return (
		<Button.Group>
			<Button
				color={"gray"}
				onClick={() => {
					if (setCurrent) setCurrent(1);
				}}
			>
				<HiChevronLeft />
			</Button>
			{current > 3 ? <HiOutlineDotsHorizontal /> : null}

			{array.map((item) =>
				item + current >= 1 && item + current <= maxPage ? (
					<Button
						key={item}
						onClick={() => {
							if (setCurrent) setCurrent(item + current);
						}}
						color={item === 0 ? undefined : "gray"}
					>
						{item + current}
					</Button>
				) : null
			)}

			{current < maxPage - 2 ? <HiOutlineDotsHorizontal /> : null}

			<Button
				onClick={() => {
					if (setCurrent) setCurrent(maxPage);
				}}
				color='gray'
			>
				<HiOutlineChevronRight />
			</Button>
		</Button.Group>
	);
};

export default Pagination;
