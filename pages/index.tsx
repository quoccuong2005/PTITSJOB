import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import {DarkThemeToggle, Navbar } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { rules } from "../utils/rules";
import { useRouter } from "next/router";
import HomePage from "../components/Home";
import { Router } from "../config";

const Home: NextPage = () => {
	const [common] = useTranslation("common");
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [typeMenu, setTypeMenu] = useState<string>("home");
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const {
		register: register2,
		formState: { errors: errors2 },
		handleSubmit: handleSubmit2,
	} = useForm();
	const onSubmit = (data: any) => {
		if (data?.keyword) {
			router.push(`/tim-kiem?keyword=${data?.keyword}`);
		}
	};
	useEffect(() => {
		console.log("router", router);
		if (router) {
			if (router.asPath === "/#tuyen-sinh") {
				setTypeMenu("tuyen-sinh");
			} else {
				setTypeMenu("home");
			}
		}
	}, [router]);
	return (
		<HomeWrapper>
			{/*<Head>*/}
			{/*	<title>{common("common.aisoft-title")}</title>*/}
			{/*	<meta property='og:title' content={common("common.aisoft-title") || ""} />*/}
			{/*</Head>*/}

			{typeMenu === "home" && <HomePage />}
			{/*{typeMenu === "tuyen-sinh" && <TuyenSinh />}*/}
		</HomeWrapper>
	);
};
const HomeWrapper = styled.div`
	.search {
		input {
			height: 100%;
			padding-left: 40px;
			background: #f1f3f5;
			border-radius: 4px 0 0 4px ;
			&:focus {
				outline: none;
			}
		}
		img {
			width: 20px;
			height: 20px;
		}
		button {
			padding: 8px 12px;
			background: #fa5252;
			border-radius: 0px 4px 4px 0px;
			font-family: "Inter";
			font-style: normal;
			line-height: 20px;

			display: flex;
			align-items: center;

			color: #ffffff;
		}
	}
	.text-nav {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 20px;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		color: #212529;
	}

	
`;
export default Home;
