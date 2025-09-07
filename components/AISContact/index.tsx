import styled from "styled-components";

interface IProps {
  label: string;
  children: JSX.Element;
}

const AISContact = (props: IProps) => {
  const {label, children} = props;
  return <AISContactWrapper>
    <p className="label">
      {label}
    </p>
    {children}
  </AISContactWrapper>;
}

const AISContactWrapper = styled.div`
  .label {
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 3%;
    color: #FFB6B6;
    margin-bottom: 10px;
  }
`

export default AISContact;