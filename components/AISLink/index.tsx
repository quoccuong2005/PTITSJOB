import Link from "next/link";
import { CSSProperties } from "react";
import styled from "styled-components";

interface IProps {
  href?: string;
  children?: JSX.Element | string;
  style?: CSSProperties;
}

const AISLink = (props: IProps) => {
  const { href, children, style } = props;
  return (
    <LinkWrapper>
      <Link href={href || "#"} style={style}>
        {children}
      </Link>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1%;
  color: white;

  a {
    position: relative;
    text-decoration: none; /* bỏ underline mặc định */
    color: white;
  }

  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px; /* khoảng cách giữa text và gạch */
    width: 0;
    height: 0.8px;
    background: white;
    transition: width 0.3s ease-in-out;
  }

  a:hover::after {
    width: 100%;
  }
`;

export default AISLink;
