import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingContent from "./LoadingContent";

const Loading = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = (url: any) => url !== router.asPath && setLoading(true);
		const handleComplete = () => setLoading(false);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	});

	return loading ? (
		<div className='relative'>
			<LoadingContent />
		</div>
	) : (
		<></>
	);
};

export default Loading;
