import Link from "next/link";
import styled from "styled-components";

interface IProps {
  children: JSX.Element;
  href?: string;
}

const SocialIcon = (props: IProps) => {
  const {children, href} = props;
  return <SocialIconWrapper><Link className="icon" href={href || '#'}>{children}</Link></SocialIconWrapper>;
}

const SocialIconWrapper = styled.div`
  .icon {
    width: 54px;
    height: 54px;
    border-radius: 90%;
    background-color: #BC2626;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;

    &:hover {
      transform: scale(1.1)
    }
  }
`
export default SocialIcon;