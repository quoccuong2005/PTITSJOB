import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
import TextIcon from "../../components/TextIcon";
import AISLink from "../../components/AISLink";
import AISButton from "../../components/AISButton";
import AISInput from "../../components/AISInput";
import AISDivider from "../../components/AISDivider";
import AISDropdown from "../../components/AISDropdown";
import { useRouter } from "next/router";
import Link from "next/link";
import { DataMenu } from "../../utils/interface";
import SocialIcon from "./components/SocialIcon";
interface IProps {
    language?: string;
    handleChangeLanguage: (lang: string) => void;
}

const HeaderSinhVien = (props: IProps) => {
    const { language, handleChangeLanguage } = props;
    const [common] = useCommonTranslation();
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState<boolean>(false);
    const [showDiscoverDropdown, setShowDiscoverDropdown] = useState<boolean>(false);
    const [showViecLamDropdown, setShowViecLamDropdown] = useState(false);
    const [showCVDropdown, setShowCVDropdown] = useState(false);
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const languageRef = useRef<HTMLDivElement>(null);
    const discoverRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const allLanguages = [
        {
            code: "vi",
            label: 'Tiếng Việt',
            flag: "/images/icons/vn.svg",
        },
        {
            code: "en",
            label: "English",
            flag: "/images/icons/us.svg",
        },
        { code: "es", label: "Español", flag: "/images/icons/es.png" },
        { code: "lo", label: "ລາວ", flag: "/images/icons/la.png" },
        { code: "km", label: "ភាសាខ្មែរ", flag: "/images/icons/kh.png" },
        { code: "zh", label: "中文", flag: "/images/icons/cn.png" },
    ];
    const currentLang =
        allLanguages.find((l) => l.code === language) || allLanguages[0];

    const discoverDropdownData = [
        {
            title: common("discoverDropdown.trendingSkills.title") as string,
            items: common("discoverDropdown.trendingSkills.items", { returnObjects: true }) as unknown as string[],
            viewAllText: common("discoverDropdown.trendingSkills.viewAllText") as string,
        },
        {
            title: common("discoverDropdown.careerGoals.title") as string,
            items: common("discoverDropdown.careerGoals.items", { returnObjects: true }) as unknown as string[],
            viewAllText: common("discoverDropdown.careerGoals.viewAllText") as string,
        },
        {
            title: common("discoverDropdown.categories.title") as string,
            items: common("discoverDropdown.categories.items", { returnObjects: true }) as unknown as string[],
            viewAllText: common("discoverDropdown.categories.viewAllText") as string,
        },
        {
            title: common("discoverDropdown.certificates.title") as string,
            items: common("discoverDropdown.certificates.items", { returnObjects: true }) as unknown as string[],
            viewAllText: common("discoverDropdown.certificates.viewAllText") as string,
        },
    ];


    const handleClickOutSide = (e: any) => {
        const node = menuRef.current;
        const languageNode = languageRef.current;
        const discoverNode = discoverRef.current;
        const { target } = e;
        if (node) {
            if (!node.contains(target)) {
                setShowMenu(false);
            }
        }
        if (languageNode) {
            if (!languageNode.contains(target)) {
                //
            }
        }
        if (discoverNode) {
            if (!discoverNode.contains(target)) {
                setShowDiscoverDropdown(false);
            }
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        window.addEventListener("click", handleClickOutSide);
        return () => {
            window.removeEventListener("scroll", isSticky);
            window.removeEventListener("click", handleClickOutSide);
        };
    }, []);

    const isSticky = (e: any) => {
        if (window.scrollY > 167) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };

    const dataMenu: DataMenu[] = [
        {
            id: 1,
            ten: common('courses.title'),
            link: "/tat-ca-khoa-hoc",
            sangTrangMoi: false,
            trangCon: []
        },
        {
            id: 2,
            ten: common('training.title'),
            link: "https://daotao.ptit.edu.vn/ctdt/dai-hoc/",
            sangTrangMoi: false,
            trangCon: []
        },
        {
            id: 3,
            ten: common('career.title'),
            link: "/muc-tieu-nghe-nghiep",
            sangTrangMoi: false,
            trangCon: []
        },
        {
            id: 4,
            ten: common('pages.allCourses.title'),
            link: "/tat-ca-khoa-hoc",
            sangTrangMoi: false,
            trangCon: []
        },
    ];

    return (
        <HeaderWrapper className="shadow-header">
            <div className="hidden lg:block bg-primary">
                <div className="flex align-items-center justify-between px-[40px] py-[5.5px]">
                    <TextIcon
                        icon={
                            <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.62793 0.216064C7.8718 0.0948862 8.16699 0.115063 8.39453 0.275635L14.0195 4.25024C14.1094 4.3138 14.1821 4.39551 14.2354 4.48755L15.1846 5.15161C15.4389 5.32963 15.501 5.68033 15.3232 5.93481C15.1451 6.18921 14.7936 6.2515 14.5391 6.07349L14.21 5.84302L13.2051 13.2141C13.1542 13.5853 12.8366 13.8623 12.4619 13.8625H8.71191V8.98755C8.71191 8.57334 8.37613 8.23755 7.96191 8.23755C7.54783 8.2377 7.21191 8.57343 7.21191 8.98755V13.8625H3.46191C3.0861 13.8622 2.76716 13.5838 2.71777 13.2112L1.74414 5.82446L1.38184 6.07544C1.1265 6.25174 0.776328 6.18794 0.599609 5.93286C0.422999 5.67749 0.486969 5.32645 0.742188 5.14966L1.74805 4.45337C1.79828 4.37649 1.86215 4.30733 1.93945 4.2522L7.52637 0.276611L7.62793 0.216064Z"
                                    fill="white"
                                />
                            </svg>
                        }
                    >
                        <AISLink href={"https://ptit.edu.vn/"}>{common("portal_title") as string}</AISLink>
                    </TextIcon>
                    <div className="flex items-center gap-[40px]">
                        <TextIcon
                            icon={
                                <svg
                                    width="16"
                                    height="12"
                                    viewBox="0 0 16 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.416 11.2441C14.3778 11.2478 14.339 11.25 14.2998 11.25H1.7002C1.66039 11.25 1.62085 11.2479 1.58203 11.2441L6.25977 6.87402L6.5 7.08887C7.35413 7.85293 8.64587 7.85293 9.5 7.08887L9.74023 6.87305L14.416 11.2441ZM5.13672 5.86914L0.508789 10.1953C0.503038 10.1477 0.5 10.099 0.5 10.0498V1.9502C0.5 1.87757 0.507169 1.80638 0.519531 1.7373L5.13672 5.86914ZM15.4795 1.7373C15.4919 1.80643 15.5 1.87751 15.5 1.9502V10.0498C15.5 10.099 15.496 10.1476 15.4902 10.1953L10.8613 5.86914L15.4795 1.7373ZM14.333 0.750977L8.5 5.9707C8.21527 6.22546 7.78473 6.22546 7.5 5.9707L1.66602 0.750977C1.67731 0.750662 1.68882 0.75 1.7002 0.75H14.2998C14.3108 0.75 14.322 0.75068 14.333 0.750977Z"
                                        fill="white"
                                    />
                                </svg>
                            }
                        >
                            <AISLink
                                href={"mailto:universe@ptit.edu.vn"}
                                style={{ color: "white", textDecoration: "none" }}
                            >
                                universe@ptit.edu.vn
                            </AISLink>
                        </TextIcon>
                        <div className="relative w-[120px]" ref={languageRef}>
                            <div
                                className="flex justify-end items-center cursor-pointer"
                                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                            >
                                <img
                                    className="h-[20px] w-[30px] mr-2"
                                    src={currentLang.flag}
                                    alt={currentLang.label}
                                />
                                <span className="text-white text-sm">
                                    {currentLang.label}
                                </span>
                            </div>

                            {showLanguageDropdown && (
                                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50 min-w-[160px]">
                                    {allLanguages.map((lang) => (
                                        <div
                                            key={lang.code}
                                            className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 ${language === lang.code ? "bg-gray-50" : ""
                                                }`}
                                            onClick={() => {
                                                handleChangeLanguage(lang.code);
                                                setShowLanguageDropdown(false);
                                            }}
                                        >
                                            <img
                                                className="h-[20px] w-[30px] mr-3"
                                                src={lang.flag}
                                                alt={lang.label}
                                            />
                                            <span className="text-gray-800 text-sm">
                                                {lang.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`label bg-white ${isScroll ? "fixed top-0 left-0 w-full z-40" : ""
                    } `}
            >
                <div className="lg:mx-auto px-[16px] lg:px-[40px] py-[16px]">
                    <div className={`hidden lg:flex justify-between items-center relative`}>
                        <div className="flex items-center gap-[20px]">
                            <Link href="/" className="logo flex flex-row gap-[12px] items-center">
                                <img src="/images/logo-ptit.png" className="h-[40px]" alt={"image"} />
                                <div className="flex flex-col">
                                    <h2 className="name-dv">{common("name_org") as string}</h2>
                                    <h2 className="name-main">{common("name_site") as string}</h2>
                                </div>
                            </Link>
                            <AISDivider />
                            {/* <div
                                ref={discoverRef}
                                onMouseEnter={() => setShowDiscoverDropdown(true)}
                                onMouseLeave={() => setShowDiscoverDropdown(false)}
                            >
                                <AISButton
                                    iconPosition="end"
                                    icon={
                                        <svg
                                            width="8"
                                            height="6"
                                            viewBox="0 0 8 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1.5L4 4.5L7 1.5"
                                                stroke="#BC2826"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    }
                                >
                                    {common("discover")}
                                </AISButton>

                                <AISDropdown
                                    isVisible={showDiscoverDropdown}
                                    sections={discoverDropdownData}
                                    onMouseEnter={() => setShowDiscoverDropdown(true)}
                                    onMouseLeave={() => setShowDiscoverDropdown(false)}
                                />
                            </div> */}
                            <a href="/" className="flex items-center gap-1 px-2 py-1 font-semibold text-[#051A53] hover:text-[#d32f2f] bg-transparent border-none outline-none cursor-pointer">Trang chủ</a>
                            {/* Dropdown Việc làm */}
                            <div
                                className="relative"
                                onMouseEnter={() => setShowViecLamDropdown(true)}
                                onMouseLeave={() => setShowViecLamDropdown(false)}
                                style={{ minWidth: 100 }}
                            >
                                <button
                                    className="flex items-center gap-1 px-2 py-1 font-semibold text-[#051A53] hover:text-[#d32f2f] bg-transparent border-none outline-none cursor-pointer"
                                    style={{ background: "none" }}
                                >
                                    Việc làm
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                                        <path d="M1 1.5L5 5L9 1.5" stroke="#BC2826" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                {showViecLamDropdown && (
                                    <div tabIndex={-1}
                                        onMouseLeave={() => setShowViecLamDropdown(false)} className="absolute left-0 top-full  bg-white shadow-lg rounded-md z-50 min-w-[297px]">
                                        <ul>
                                            <ul>
                                                <li className="block px-4 py-2 text-[#828D9B]">VIỆC LÀM</li>
                                                <li>
                                                    <Link href="/Vieclamdaluu/vieclamdaluu" className="block px-4 py-2 hover:bg-gray-100  text-[#051A53]"><img src="/images/about/luu.png" alt="Lưu" className="inline-block mr-2" />Việc làm đã lưu</Link>
                                                </li>
                                                <li>
                                                    <Link href="/Vieclamdaungtuyen/vieclamdaungtuyen" className="block px-4 py-2 hover:bg-gray-100 text-[#051A53]"><img src="/images/about/ungtuyen.png" alt="Ứng tuyển" className="inline-block mr-2" />Việc làm đã ứng tuyển</Link>
                                                </li>
                                                <li>
                                                    <Link href="/SuitableJob/suitablejob" className="block px-4 py-2 hover:bg-gray-100 text-[#051A53]"><img src="/images/about/phuhop.png" alt="Fulltime" className="inline-block mr-2" />Việc làm phù hợp</Link>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className="block px-4 py-2 text-[#828D9B]">CÔNG TY</li>
                                                <li>
                                                    <Link href="/ListCompany/ListCompany" className="block px-4 py-2 hover:bg-gray-100 text-[#051A53]"><img src="/images/about/danhsachcongty.png" alt="Parttime" className="inline-block mr-2" />Danh sách công ty</Link>
                                                </li>
                                                <li>
                                                    <Link href="/TopCompany/topcompany" className="block px-4 py-2 hover:bg-gray-100 text-[#051A53]"><img src="/images/about/topcongty.png" alt="Freelance" className="inline-block mr-2" />Top công ty</Link>
                                                </li>
                                            </ul>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div
                                className="relative"
                                onMouseEnter={() => setShowCVDropdown(true)}
                                onMouseLeave={() => setShowCVDropdown(false)}
                                style={{ minWidth: 100 }}
                            >
                                <button
                                    className="flex items-center gap-1 px-2 py-1 font-semibold text-[#051A53] hover:text-[#d32f2f] bg-transparent border-none outline-none cursor-pointer"
                                    style={{ background: "none" }}
                                >
                                    Mẫu CV
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                                        <path d="M1 1.5L5 5L9 1.5" stroke="#BC2826" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                {showCVDropdown && (
                                    <div tabIndex={1}
                                        onMouseLeave={() => setShowCVDropdown(false)} className="absolute left-0 top-full  bg-white shadow-lg rounded-md z-50 min-w-[297px]">
                                        <ul>
                                            <li className="block px-4 py-2 text-[#828D9B]">Mẫu CV</li>
                                            <li>
                                                <Link href="/MauCV/maucv" className="block px-4 py-2 hover:bg-gray-100 text-[#051A53]"><img src="/images/about/tonghopmau.png" alt="Tổng hợp các mẫu CV" className="inline-block mr-2" />Tổng hợp các mẫu CV</Link>
                                            </li>
                                            <li>
                                                <Link href="/Quanlycv/quanlycv" className="block px-4 py-2 hover:bg-gray-100 text-[#051A53]"><img src="/images/about/tonghopmau.png" alt="Quản lý CV" className="inline-block mr-2" />Quản lý CV</Link>
                                            </li>
                                            <li>
                                                <Link href="/Huongdanvietcv/huongdanvietcv" className="block px-4 py-2 hover:bg-gray-100 text-[#051A53]"><img src="/images/about/huongdan.png" alt="Hướng dẫn viết CV" className="inline-block mr-2" />Hướng dẫn viết CV</Link>
                                            </li>

                                        </ul>
                                    </div>
                                )}
                            </div>
                            <a href="/Tuvanhuongnghiep/tuvanhuongnghiep" className="flex items-center gap-1 px-2 py-1 font-semibold text-[#051A53] hover:text-[#d32f2f] bg-transparent border-none outline-none cursor-pointer">Tư vấn hướng nghiệp</a>
                        </div>

                        <div className="flex items-center gap-[20px]">
                            <button className="px-4 py-2 bg-[#F5F1ED] text-[#051A53] font-medium rounded-[8px]  transition-colors duration-200">
                                Đăng tuyển & tìm hồ sơ
                            </button>
                            <button className="px-4 py-2 border border-primary text-primary font-medium rounded-[8px] hover:bg-primary hover:text-white transition-colors duration-200">
                                Đăng ký
                            </button>
                            <AISButton
                                onClick={() => {
                                    // Navigate to login page
                                    router.push("/LoginPage");
                                }}
                                type="primary"
                            >
                                {common("login")}
                            </AISButton>
                        </div>
                    </div>
                    <div
                        className={
                            "lg:hidden flex justify-between items-center"
                        }
                    >
                        <Link href="/" className="mr-[8px]">
                            <div className="logo">
                                <img src="/images/logo-ptit.png" className="h-[40px]" alt={"image"} />
                            </div>
                        </Link>

                        <div className="flex shrink-0">
                            <div className="relative" ref={languageRef}>
                                <div
                                    className="flex items-center cursor-pointer"
                                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                >
                                    <img
                                        className="h-[28px] mr-4"
                                        src={currentLang.flag}
                                        alt={currentLang.label}
                                    />
                                </div>

                                {showLanguageDropdown && (
                                    <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50 min-w-[160px]">
                                        {allLanguages.map((lang) => (
                                            <div
                                                key={lang.code}
                                                className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 ${language === lang.code ? "bg-gray-50" : ""
                                                    }`}
                                                onClick={() => {
                                                    handleChangeLanguage(lang.code);
                                                    setShowLanguageDropdown(false);
                                                }}
                                            >
                                                <img
                                                    className="h-[20px] w-[30px] mr-3"
                                                    src={lang.flag}
                                                    alt={lang.label}
                                                />
                                                <span className="text-gray-800 text-sm">
                                                    {lang.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div
                                className="flex items-center relative shrink-0 mr-[8px]"
                                ref={menuRef}
                            >
                                <div onClick={() => setShowMenu(!showMenu)}>
                                    <img src={"/images/icons/icon-menu.png"} style={{ height: '24px' }} alt={"image"} />
                                </div>
                                {showMenu && (
                                    <>
                                        <div
                                            className="cover-ham"
                                            onClick={() => {
                                                setShowMenu(false);
                                            }}
                                        ></div>
                                        <div className="ham-menu z-50" style={{
                                            backgroundSize: '90% auto',
                                            backgroundPosition: 'center right',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundColor: 'var(--primary-color)'
                                        }}>
                                            <ul>
                                                {dataMenu?.map((value, index) => {
                                                    return (
                                                        <div
                                                            onClick={() => {
                                                                if (value?.trangCon?.length > 0) {
                                                                } else {
                                                                    if (value?.sangTrangMoi) {
                                                                        window.open(value?.link);
                                                                    } else {
                                                                        router.push(value?.link);
                                                                    }
                                                                }
                                                                setShowMenu(false);
                                                            }}
                                                            className={` mr-[24px] mb-[24px] last-of-type:mr-0 text-nav pt-2 cursor-pointer  ${value?.link
                                                                ?.split("?")?.[0]
                                                                ? `${isScroll
                                                                    ? "lg:border-b-2  lg:border-primary-500"
                                                                    : "lg:border-b-2  lg:border-primary-500"
                                                                } `
                                                                : `lg:border-none text-white`
                                                                } block  `}
                                                            key={index}
                                                        >
                                                            <div className="text-md md:text-xl text-white">
                                                                {value?.ten}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </ul>
                                            <div className="absolute bottom-[10px]">
                                                <div className="flex items-center gap-[12px]">
                                                    <SocialIcon href="https://www.facebook.com/HocvienPTIT">
                                                        <svg
                                                            width="9"
                                                            height="16"
                                                            viewBox="0 0 9 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M4.89196 16C5.1681 16 5.39196 15.7761 5.39196 15.5V9.21352C5.39196 8.93738 5.61582 8.71352 5.89196 8.71352H7.41008C7.66166 8.71352 7.87407 8.52659 7.90603 8.27704L8.14334 6.42415C8.18162 6.12523 7.94875 5.86063 7.64739 5.86063H5.89196C5.61582 5.86063 5.39196 5.63677 5.39196 5.36063V4.04345C5.39196 3.22021 5.62133 2.65657 6.80285 2.65657H7.79997C8.07611 2.65657 8.29997 2.43271 8.29997 2.15657V0.562336C8.29997 0.306817 8.10736 0.0917132 7.85275 0.0702405C7.27213 0.0212745 6.68956 -0.00211794 6.10674 0.000150394C3.93395 0.000150394 2.44216 1.32658 2.44216 3.76163V5.35529C2.44216 5.63144 2.2183 5.85529 1.94216 5.85529H0.5C0.223858 5.85529 0 6.07915 0 6.35529V8.20819C0 8.48433 0.223858 8.70819 0.5 8.70819H1.9475C2.22364 8.70819 2.4475 8.93204 2.4475 9.20819V15.5C2.4475 15.7761 2.67135 16 2.9475 16H4.89196Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </SocialIcon>
                                                    <SocialIcon href="https://www.tiktok.com/@langthangptit?fbclid=IwY2xjawMsj6hleHRuA2FlbQIxMABicmlkETF3OFU4SUpWNGlDQ3dyU3h5AR5PE-MpxyNhLIpNrFa-bvKnMghRf4VDo4-9pYyOoneHfgtr9dxo0JPZBJtLcg_aem_Vlna4peJ6WYwp5zXkfsXng">
                                                        <svg
                                                            width="20"
                                                            height="22"
                                                            viewBox="0 0 20 22"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M18.8788 5.776V9.93392C17.0853 10.0463 15.3479 9.70917 13.9467 8.86635V14.8223C13.8705 15.8219 13.7605 16.3556 13.3862 17.2384C12.6016 18.8678 11.8151 19.5685 10.1916 20.4411C8.22998 21.3401 5.70789 21.1154 4.08255 20.0478C2.12093 18.8117 1.11209 17.0136 1 14.9909C1 12.6871 1.50442 11.6196 2.68139 10.2711C4.47487 8.47303 6.21231 7.91115 8.95858 8.30446V12.7995C8.34207 12.4062 7.22115 12.2055 6.38045 12.6871C5.66675 13.096 5.324 13.7838 5.31003 14.7082C5.30719 14.896 5.338 15.0837 5.40325 15.2599C5.76959 16.2488 6.46073 16.6854 7.38928 16.7889C9.07067 16.7327 9.68719 15.4966 9.68719 14.4852V1H13.9467C14.2269 4.25891 15.7962 5.776 18.8788 5.776Z"
                                                                stroke="white"
                                                                stroke-width="1.5"
                                                            />
                                                        </svg>
                                                    </SocialIcon>
                                                    <SocialIcon href="https://www.youtube.com/@pchannels">
                                                        <svg
                                                            width="23"
                                                            height="16"
                                                            viewBox="0 0 23 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M22.0622 7.93106C22.0622 7.87688 22.0622 7.81533 22.0597 7.74392C22.0572 7.54447 22.0523 7.32041 22.0474 7.08156C22.0277 6.39458 21.9932 5.71006 21.9391 5.06494C21.8652 4.17605 21.7568 3.4349 21.6091 2.87842C21.4532 2.29769 21.1476 1.76805 20.7229 1.34244C20.2981 0.916822 19.7691 0.610147 19.1887 0.453062C18.4918 0.265928 17.1277 0.1502 15.2071 0.0787934C14.2936 0.0443213 13.3161 0.0221605 12.3386 0.00984903C11.9963 0.00492444 11.6787 0.0024623 11.393 0H10.6691C10.3835 0.0024623 10.0659 0.00492444 9.72361 0.00984903C8.74608 0.0221605 7.76854 0.0443213 6.85503 0.0787934C4.93444 0.152662 3.56787 0.26839 2.8735 0.453062C2.29289 0.609762 1.76367 0.916307 1.33886 1.34198C0.914051 1.76765 0.608581 2.2975 0.453063 2.87842C0.302862 3.4349 0.196984 4.17605 0.123115 5.06494C0.0689443 5.71006 0.0344721 6.39458 0.0147737 7.08156C0.00738685 7.32041 0.00492455 7.54447 0.00246226 7.74392C0.00246226 7.81533 0 7.87688 0 7.93106V8.06894C0 8.12311 -3.76083e-08 8.18467 0.00246226 8.25608C0.00492455 8.45552 0.00984915 8.67959 0.0147737 8.91844C0.0344721 9.60542 0.0689443 10.2899 0.123115 10.9351C0.196984 11.8239 0.305325 12.5651 0.453063 13.1216C0.768236 14.301 1.69406 15.2318 2.8735 15.5469C3.56787 15.7341 4.93444 15.8498 6.85503 15.9212C7.76854 15.9557 8.74608 15.9778 9.72361 15.9901C10.0659 15.9951 10.3835 15.9975 10.6691 16H11.393C11.6787 15.9975 11.9963 15.9951 12.3386 15.9901C13.3161 15.9778 14.2936 15.9557 15.2071 15.9212C17.1277 15.8473 18.4943 15.7316 19.1887 15.5469C20.3681 15.2318 21.2939 14.3035 21.6091 13.1216C21.7593 12.5651 21.8652 11.8239 21.9391 10.9351C21.9932 10.2899 22.0277 9.60542 22.0474 8.91844C22.0548 8.67959 22.0572 8.45552 22.0597 8.25608C22.0597 8.18467 22.0622 8.12311 22.0622 8.06894V7.93106ZM20.2893 8.05909C20.2893 8.1108 20.2893 8.16743 20.2869 8.23392C20.2844 8.42598 20.2795 8.63773 20.2745 8.86673C20.2573 9.5217 20.2228 10.1767 20.1711 10.7849C20.1046 11.5777 20.0111 12.2278 19.8954 12.6636C19.7427 13.2324 19.2945 13.683 18.7282 13.8332C18.2111 13.9711 16.9086 14.0819 15.1382 14.1484C14.2419 14.1828 13.2767 14.205 12.3139 14.2173C11.9766 14.2222 11.6639 14.2247 11.3832 14.2247H10.679L9.74823 14.2173C8.78547 14.205 7.82271 14.1828 6.92398 14.1484C5.15359 14.0794 3.84857 13.9711 3.33395 13.8332C2.76762 13.6805 2.31948 13.2324 2.16682 12.6636C2.05109 12.2278 1.95753 11.5777 1.89104 10.7849C1.83934 10.1767 1.80733 9.5217 1.78763 8.86673C1.78024 8.63773 1.77778 8.42351 1.77532 8.23392C1.77532 8.16743 1.77285 8.10834 1.77285 8.05909V7.9409C1.77285 7.8892 1.77285 7.83256 1.77532 7.76608C1.77778 7.57402 1.7827 7.36226 1.78763 7.13327C1.80486 6.4783 1.83934 5.82333 1.89104 5.21514C1.95753 4.42228 2.05109 3.77224 2.16682 3.33641C2.31948 2.76762 2.76762 2.31702 3.33395 2.16682C3.85103 2.02893 5.15359 1.91813 6.92398 1.85165C7.82025 1.81717 8.78547 1.79501 9.74823 1.7827C10.0856 1.77778 10.3983 1.77532 10.679 1.77532H11.3832L12.3139 1.7827C13.2767 1.79501 14.2395 1.81717 15.1382 1.85165C16.9086 1.92059 18.2136 2.02893 18.7282 2.16682C19.2945 2.31948 19.7427 2.76762 19.8954 3.33641C20.0111 3.77224 20.1046 4.42228 20.1711 5.21514C20.2228 5.82333 20.2548 6.4783 20.2745 7.13327C20.2819 7.36226 20.2844 7.57648 20.2869 7.76608C20.2869 7.83256 20.2893 7.89166 20.2893 7.9409V8.05909ZM8.83964 11.2995L14.5522 7.97538L8.83964 4.70052V11.2995Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </SocialIcon>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 30;
  position: relative;

  .name-dv {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-color);
  }
  
  .name-main {
    color: #051A53;
    font-size: 18px;
    font-weight: 600;
  }
  .header-branch {
    padding: 16px 0;
    .info {
      .line {
        width: 1px;
        height: 100%;
        margin: 0 16px;
        border-right: 1px solid #ffffff;
      }
      img {
        margin-right: 4px;
        width: 20px;
        height: 20px;
      }
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
    }
    .socical {
      img {
        margin-right: 20px;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
  .label {
    .tooltip-label {
      border-radius: 0px !important;
      padding: 20px 24px !important;
      margin-left: -24.906px;
    }
  }
  .search {
    input {
      height: 100%;
      padding-left: 12px;
      background: #f1f3f5;
      border-radius: 4px 0 0 4px;
      &:focus {
        outline: none;
      }
    }
    img {
      width: 20px;
      height: 20px;
    }
    button {
      padding: 4px 12px;
      background: #f1f3f5;
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

    line-height: 19px;
  }
  .text-active {
    color: #de221a !important;
  }
  .menu-mobile {
    ul {
      li {
        margin-bottom: 8px;
        border-bottom: 1px solid #ececec;
      }
    }
  }
  .text-children {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #18202a;
    &:hover {
      color: #de221a;
    }
  }
  .shadow-header {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  }
  .cover-ham {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000006b;
    backdrop-filter: blur(2px);
    z-index: 30;
    opacity: 1;
    -webkit-transition: 500ms;
    transition: 500ms;
  }
  .ham-menu {
    width: 70%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    //visibility: hidden;
    //transform: translate(110%);
    //z-index: 998;
    background-color: #ffffff;
    animation: slide 0.5s forwards;
    //transition: 1s;
    display: flex;
    //justify-content: center;
    padding-left: 16px;
    align-items: center;
  }
  @keyframes slide {
    from {
      right: -50%;
    }
    to {
      right: 0;
    }
  }
`;
export default React.memo(HeaderSinhVien);
