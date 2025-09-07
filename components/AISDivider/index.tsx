import styled from "styled-components";

interface IProps {
    style?: React.CSSProperties;
}

const AISDivider = (props: IProps) => {
  const {style} = props;
  return <AISDividerWrapper><div className="divider" style={style}></div></AISDividerWrapper>
}

const AISDividerWrapper = styled.div`
  .divider {
    background-color: #F2ECE9;
    width: 1px;
    height: 36px;
  }
`
export default  AISDivider;