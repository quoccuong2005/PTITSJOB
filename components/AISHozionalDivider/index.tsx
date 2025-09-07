import styled from "styled-components";

interface IProps {
  style?: React.CSSProperties;
  space?: number;
}

const AISHozionalDivider = (props: IProps) => {
  const { style, space } = props;
  return (
    <AISHozionalDividerWrapper>
      <div className={`divider mt-[${space? space+'px': 'unset'}] mb-[${space? space+'px': 'unset'}]`} style={style}></div>
    </AISHozionalDividerWrapper>
  );
};

const AISHozionalDividerWrapper = styled.div`
  .divider {
    background-color: #bc2626;
    width: 100%;
    height: 1px;
  }
`;
export default AISHozionalDivider;
