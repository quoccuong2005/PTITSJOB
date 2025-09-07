import Link from "next/link";
import styled, { CSSProperties } from "styled-components";

interface IProps {
  icon?: string;
  title?: string;
  link?: string;
  linkText?: string;
  style?: CSSProperties;
}

const CardCTDT = (props: IProps) => {
  const {icon, title, link, style, linkText} = props;
  return <CardCTDTWrapper>
    <div className="card" style={style}>
      <div className="icon">
        <img src={icon}/>
      </div>
      <div className="title">
        {title}
      </div>
      <Link className="link" href={link || '#'}>
        {linkText}
      </Link>
      <img src="/images/logo-ptit.png" className="image-float"/>
    </div>
  </CardCTDTWrapper>;
}

const CardCTDTWrapper = styled.div`
  .card {
    background-color: #FFF0F0;
    padding: 20px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    overflow: hidden;

    .icon {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      padding: 12px;
    }

    .title {
      font-weight: 600;
      font-size: 18px;
      line-height: 145%;
      letter-spacing: 3%;
      text-align: justify;
      color: #051A53;
    }

    .link {
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 3%;
      text-decoration: underline;
      text-decoration-style: solid;
      text-decoration-offset: 3px;
      color: #007AFF;
    }

    .image-float {
      position: absolute;
      width: 144.74px;
      height: 187.63px;
      opacity: 0.03;
      mix-blend-mode: luminosity;
      transform: rotate(330deg);
      bottom: -40px;
      right: -30px;
    }
  }
`

export default CardCTDT;