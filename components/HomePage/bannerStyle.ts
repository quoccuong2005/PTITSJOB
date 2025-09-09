import styled from "styled-components";

export const BannerWrappper = styled.div`
  .bg {
    background-color: #fff0f0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    height: 440px;
  }

  .title {
    font-weight: 800;
    font-style: Italic;
    font-size: 40px;
    line-height: 145%;
    letter-spacing: 3%;
    color: var(--primary-color);
  }

  .banner-content {
    max-width: 580px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
  }

  .description {
    font-weight: 500;
    font-size: 18px;
    line-height: 170%;
    letter-spacing: 3%;
    vertical-align: middle;
  }

  .bn-image {
    background-image: url(/images/home/ptit-logo.png);
    padding-left: 80px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    height: 436px;
    display: flex;
    align-items: center;
  }
`;