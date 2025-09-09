import styled from "styled-components";
import SocialIcon from "./components/SocialIcon";
import AISHozionalDivider from "../../components/AISHozionalDivider";
import AISContact from "../../components/AISContact";
import AISLink from "../../components/AISLink";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";

const Footer = () => {
  const [common] = useCommonTranslation();
  return (
    <FooterWrapper>
      <div className="footer-backgroud">
        <div className="container mx-auto py-[40px]">
          <section className="brand-info flex flex-col lg:flex-row gap-[20px] justify-between items-center">
            <div className="flex flex-row items-center gap-[15px]">
              <img
                alt="logo-footer"
                src="/images/common/logo-footer.svg"
                height={64}
              />
              <div className="flex flex-col">
                <h2 className="name-dv">{common("name_org") as string}</h2>
                <h2 className="name-main">{common("name_site") as string}</h2>
              </div>
            </div>

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
          </section>
          <AISHozionalDivider space={40} />
          <section className="contact-info">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AISContact label={common("foot.phoneNumber")}>
                <AISLink href="tel:02437562186" style={{ fontSize: "16px" }}>
                  024 3756 2186
                </AISLink>
              </AISContact>
              <AISContact label={common("foot.headquarters")}>
                <AISLink
                  href="https://www.google.com/maps/place/Vi%E1%BB%87n+Khoa+h%E1%BB%8Dc+K%E1%BB%B9+thu%E1%BA%ADt+B%C6%B0u+%C4%91i%E1%BB%87n,+122+Ho%C3%A0ng+Qu%E1%BB%91c+Vi%E1%BB%87t,+C%E1%BB%95+Nhu%E1%BA%BF,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0463573,105.791915,203m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3135ab303fd3ac4f:0x8c5d7b3e90ab9a3a!2zMTIyIEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBD4buVIE5odeG6vywgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWkgMTEzMDAsIFZp4buHdCBOYW0!3b1!8m2!3d21.04647!4d105.792306!16s%2Fg%2F11sqhf15s4!3m5!1s0x3135ab303c8fa8dd:0xa221c6abb139912a!8m2!3d21.0465794!4d105.7922477!16s%2Fg%2F11bvtc44rk?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                  style={{ fontSize: "16px" }}
                >
                  {common("address.headquartersAddress")}
                </AISLink>
              </AISContact>
              <AISContact label={common("foot.academiaHCM")}>
                <AISLink
                  href="https://www.google.com/maps/place/Khoa+Vi%E1%BB%85n+Th%C3%B4ng+(Ng%C3%A0nh+K%E1%BB%B9+Thu%E1%BA%ADt+%C4%90i%E1%BB%87n+T%E1%BB%AD+Vi%E1%BB%85n+Th%C3%B4ng,+Ng%C3%A0nh+C%C3%B4ng+Ngh%E1%BB%87+Internet+V%E1%BA%A1n+V%E1%BA%ADt)/@10.7894399,106.7007287,855m/data=!3m2!1e3!4b1!4m6!3m5!1s0x317529c5ac3bea21:0x4205b86798ec87cb!8m2!3d10.7894399!4d106.7007287!16s%2Fg%2F11r3r_dwzr?hl=vi-VN&entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                  style={{ fontSize: "16px" }}
                >
                  {common("address.academiaHCMAddress")}
                </AISLink>
              </AISContact>
              <AISContact label={common("foot.emailContactus")}>
                <AISLink
                  href="mailto:ctsv@ptit.edu.vn"
                  style={{ fontSize: "16px" }}
                >
                  ctsv@ptit.edu.vn
                </AISLink>
              </AISContact>
              <AISContact label={common("foot.trainingHN")}>
                <AISLink
                  href="https://www.google.com/maps/place/H%E1%BB%8Dc+vi%E1%BB%87n+C%C3%B4ng+ngh%E1%BB%87+B%C6%B0u+ch%C3%ADnh+vi%E1%BB%85n+th%C3%B4ng/@20.980913,105.7826528,813m/data=!3m1!1e3!4m6!3m5!1s0x3135accdd8a1ad71:0xa2f9b16036648187!8m2!3d20.980913!4d105.7874165!16s%2Fg%2F12168p16?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                  style={{ fontSize: "16px" }}
                >
                  {common("address.trainingHNAddress")}
                </AISLink>
              </AISContact>
              <AISContact label={common("foot.trainingHCM")}>
                <AISLink
                  href="https://www.google.com/maps/place/H%E1%BB%8Dc+vi%E1%BB%87n+C%C3%B4ng+ngh%E1%BB%87+B%C6%B0u+Ch%C3%ADnh+Vi%E1%BB%85n+Th%C3%B4ng+c%C6%A1+s%E1%BB%9F+t%E1%BA%A1i+TP.HCM/@10.8478107,106.7847125,428m/data=!3m1!1e3!4m15!1m8!3m7!1s0x317527131ae8b249:0x4d2d3c8fab7d3c2e!2zOTcgTWFuIFRoaeG7h24sIEhp4buHcCBQaMO6LCBUaOG7pyDEkOG7qWMsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!3b1!8m2!3d10.8473782!4d106.7857609!16s%2Fg%2F11c5j8p21n!3m5!1s0x31752772b245dff1:0xb838977f3d419d!8m2!3d10.847987!4d106.7866647!16s%2Fm%2F0119w781?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                  style={{ fontSize: "16px" }}
                >
                  {common("address.trainingHCMAddress")}
                </AISLink>
              </AISContact>
            </div>
          </section>
          <AISHozionalDivider space={40} />
          <section className="backlink">
            <div className="title-backlink">{common("foot.link")}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AISLink
                href="https://mst.gov.vn/gioi-thieu-19797875.htm"
                style={{ fontSize: "16px" }}
              >
                {common("foot.IandC")}
              </AISLink>
              <AISLink
                href="https://ptithcm.edu.vn/"
                style={{ fontSize: "16px" }}
              >
                {common("foot.HCMAcademy")}
              </AISLink>
              <AISLink
                href="https://daotao.ptit.edu.vn/"
                style={{ fontSize: "16px" }}
              >
                {common("foot.trainingPortal")}
              </AISLink>
              <AISLink href="https://ript.vn/" style={{ fontSize: "16px" }}>
                {common("foot.technologyInstitute")}
              </AISLink>
              <AISLink href="https://pttc.edu.vn/" style={{ fontSize: "16px" }}>
                {common("foot.trainingCenter1")}
              </AISLink>
              <AISLink
                href="https://khcn.ptit.edu.vn/"
                style={{ fontSize: "16px" }}
              >
                {common("foot.SandTPortal")}
              </AISLink>
              <AISLink
                href="https://eript.ptit.edu.vn/"
                style={{ fontSize: "16px" }}
              >
                {common("foot.economicsInstitute")}
              </AISLink>
              <AISLink
                href="http://pttc2.ptit.edu.vn"
                style={{ fontSize: "16px" }}
              >
                {common("foot.trainingCenter2")}
              </AISLink>
              <AISLink
                href="https://english.ptit.edu.vn"
                style={{ fontSize: "16px" }}
              >
                {common("foot.internationalCooperation")}
              </AISLink>
              <AISLink
                href="https://cdit.ptit.edu.vn/"
                style={{ fontSize: "16px" }}
              >
                {common("foot.CDIT")}
              </AISLink>
              <AISLink
                href="https://cie.ptit.edu.vn/vi/"
                style={{ fontSize: "16px" }}
              >
                {common("foot.internationalTrainingCenter")}
              </AISLink>
            </div>
          </section>
        </div>
        <div className="copyright">
          <div className="container mx-auto py-[24px]">
            © Copyright 2025 HocVienCongNgheBuuChinhVienThong, All rights
            reserved ® {common("foot.copyright")}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  .name-dv {
    font-size: 18px;
    font-weight: 600;
    color: white;
  }
  
  .name-main {
    color: white;
    font-size: 24px;
    font-weight: 500;
  }
  .footer-backgroud {
    background-color: #9f1111;
  }

  .title-backlink {
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 3%;
    margin-bottom: 24px;
    color: #ffb6b6;
  }

  .copyright {
    background-color: #941a1a;
    font-weight: 300;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 6%;
    text-align: center;
    color: #ffb6b6;
  }
`;
export default Footer;
