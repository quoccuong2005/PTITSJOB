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
interface IProps {
  language?: string;
  handleChangeLanguage: (lang: string) => void;
}

const Header = (props: IProps) => {
  const { language, handleChangeLanguage } = props;
  const [common] = useCommonTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState<boolean>(false);
  const [showDiscoverDropdown, setShowDiscoverDropdown] = useState<boolean>(false);
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
        setShowLanguageDropdown(false);
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
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 10.315V12.967C13.7501 13.1569 13.6781 13.3397 13.5487 13.4786C13.4192 13.6176 13.2419 13.7022 13.0525 13.7155C12.7247 13.738 12.457 13.75 12.25 13.75C5.62225 13.75 0.25 8.37775 0.25 1.75C0.25 1.543 0.26125 1.27525 0.2845 0.9475C0.297792 0.758083 0.382436 0.580758 0.521353 0.451307C0.660269 0.321855 0.843117 0.249914 1.033 0.25H3.685C3.77803 0.249906 3.86777 0.284394 3.9368 0.346765C4.00582 0.409136 4.0492 0.494937 4.0585 0.5875C4.07575 0.76 4.0915 0.89725 4.1065 1.0015C4.25555 2.04169 4.561 3.05337 5.0125 4.00225C5.08375 4.15225 5.03725 4.3315 4.90225 4.4275L3.28375 5.584C4.27334 7.88984 6.11091 9.72741 8.41675 10.717L9.57175 9.1015C9.61896 9.0355 9.68784 8.98816 9.76637 8.96774C9.84491 8.94732 9.92812 8.95511 10.0015 8.98975C10.9503 9.44044 11.9617 9.74513 13.0015 9.8935C13.1058 9.9085 13.243 9.92425 13.414 9.9415C13.5064 9.95098 13.592 9.99443 13.6543 10.0634C13.7165 10.1324 13.7501 10.2221 13.75 10.315Z"
                    fill="white"
                  />
                </svg>
              }
            >
              <AISLink
                href={"tel:02438547797"}
                style={{ color: "white", textDecoration: "none" }}
              >
                (024) 38 547 797
              </AISLink>
            </TextIcon>
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
                href={"mailto:qldt@ptit.edu.vn"}
                style={{ color: "white", textDecoration: "none" }}
              >
                qldt@ptit.edu.vn
              </AISLink>
            </TextIcon>
            <div className="relative" ref={languageRef}>
              <div
                className="flex items-center cursor-pointer"
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
                      className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                        language === lang.code ? "bg-gray-50" : ""
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
        className={`label bg-white ${
          isScroll ? "fixed top-0 left-0 w-full z-40" : ""
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
              <div 
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
              </div>
            </div>

            <div className="flex items-center gap-[20px]">
              <AISInput
                icon={
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.167 12.75L16.5003 16.0833"
                      stroke="#C0C0C0"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="8.16667"
                      cy="8.16667"
                      r="6.66667"
                      stroke="#C0C0C0"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                style={{ width: "340px" }}
                placeholder={common("search_placeholder")}
                onEnter={(value) => {
                  router.push(`/tat-ca-khoa-hoc?search=${encodeURIComponent(value.trim())}`);
                }}
              />
              <AISDivider />
              <AISButton
                onClick={() => {
                  window.location.href = "https://slink.ptit.edu.vn";
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
              <div
                className="flex items-center relative shrink-0 mr-[8px]"
                ref={menuRef}
              >
                <div onClick={() => setShowMenu(!showMenu)}>
                  <img src={"/images/icons/icon-menu.png"} style={{height: '24px'}} alt={"image"} />
                </div>
                {showMenu && (
                  <>
                    <div
                      className="cover-ham"
                      onClick={() => {
                        setShowMenu(false);
                      }}
                    ></div>
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
    background-color: #ffffffa1;
    z-index: 30;
    opacity: 1;
    -webkit-transition: 500ms;
    transition: 500ms;
  }
  .ham-menu {
    width: 50%;
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
export default React.memo(Header);
