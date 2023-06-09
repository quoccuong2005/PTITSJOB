import { HiChevronUp } from "react-icons/hi";
import ScrollToTop from "react-scroll-to-top";

const ScrollTopButton = () => {
	return <ScrollToTop smooth component={<HiChevronUp className='text-2xl mx-auto' />} />;
};

export default ScrollTopButton;
