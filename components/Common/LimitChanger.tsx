import Select from "react-select";

const LimitChanger = (props: { limit: number; setLimit: (n: number) => void,setPage: (n: number) => void }) => {
	const { limit, setLimit,setPage } = props;
	const allLimit = [10, 20, 50].map((item) => ({ key: item, value: item, label: item + " mục" }));

	return (
		<div className='careerfy-filterable-select'>
			<span className='woocommerce-result-count'>Hiển thị</span>
			<Select
				className='select-normal'
				classNamePrefix='select'
				isSearchable={false}
				value={allLimit.filter((item) => item.value === limit)?.[0] ?? allLimit[0]}
				options={allLimit}
				onChange={(item: any) => {
					setLimit(item.value)
					setPage(1)
				}}
			/>
		</div>
	);
};

export default LimitChanger;
