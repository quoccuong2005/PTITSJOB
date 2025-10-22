import Link from "next/link";
import styled, { CSSProperties } from "styled-components";

interface IProps {
  id: string;
  icon: string;
  name: string;
  field: string;
  jobsCount: number;
  highlight?: boolean;
}

const CardCTDT = (props: IProps) => {
  const { icon, name, field, jobsCount, highlight } = props;

  if (highlight) {

    return (
      <CardCTDTWrapper $highlight={highlight}>
        <div className="card">
          <div className="content">
            <div className="icon">
              <img src={icon} alt={name} />
            </div>
            <div className="name">{name}</div>
            <div className="field">{field}</div>
            <Link className="link" href={`/company/${props.id}`}>

              <span className="job-count">{jobsCount} việc làm</span>
            </Link>
          </div>
        </div>
      </CardCTDTWrapper>
    );
  }


  return (
    <CardCTDTWrapper $highlight={false}>
      <div className="card">
        <div className="content">
          <div className="header">
            <img src={icon} alt={name} />
            <div>
              <div className="field">{field}</div>
              <div className="name">{name}</div>
            </div>
          </div>
          <Link className="link" href={`/company/${props.id}`}>
            <img className="icon-link" src="/images/home/industrydefault.png" />
            <span className="job-count">{jobsCount} việc làm</span>
          </Link>
        </div>
      </div>
    </CardCTDTWrapper>
  );
};

const CardCTDTWrapper = styled.div<{ $highlight?: boolean }>`
  .card {
    background: ${({ $highlight }) =>
    $highlight
      ? "linear-gradient(135deg, #FF4D4F 0%, #FF7875 100%)"
      : "#FFFFFF"};
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transition: 0.2s;
    cursor: pointer;
    color: ${({ $highlight }) => ($highlight ? "#fff" : "#051a53")};
    box-shadow: ${({ $highlight }) =>
    $highlight
      ? "0px 8px 24px rgba(255, 77, 79, 0.25)"
      : "0px 2px 10px rgba(0, 0, 0, 0.05)"};
    border: ${({ $highlight }) => ($highlight ? "none" : "1px solid #EEEEEE")};
    ${({ $highlight }) => ($highlight ? "text-align: center;" : "")};
    ${({ $highlight }) => ($highlight ? "padding-bottom: 20px;" : "")};
  }
  
  .crown {
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 22px;
    z-index: 2;
  }
  
  .content {
    display: flex;
    flex-direction: ${({ $highlight }) => ($highlight ? "column" : "column")};
    ${({ $highlight }) => ($highlight ? "align-items: center;" : "")};
    padding: ${({ $highlight }) => ($highlight ? "36px 20px 20px" : "16px")};
    gap: ${({ $highlight }) => ($highlight ? "12px" : "16px")};
    height: 100%;
  }

  .header {
    display: flex;
    gap: 12px;
    align-items: center;
  }

    img {
    width: 74px;
    height: 74px;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid #E1E1E1;
    }
  
  .icon-normal {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .name {
    font-weight: 600;
    font-size: ${({ $highlight }) => ($highlight ? "20px" : "16px")};
    line-height: 145%;
    color: ${({ $highlight }) => ($highlight ? "#fff" : "#051a53")};
    margin-bottom: ${({ $highlight }) => ($highlight ? "4px" : "0")};
  }

  .field {
    font-size: 14px;
    color: ${({ $highlight }) => ($highlight ? "#ffeaea" : "#666")};
    margin-bottom: ${({ $highlight }) => ($highlight ? "16px" : "0")};
  }

  .link {
    margin-top: auto;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    .icon-link{
      width: 16px;
      height: 16px;
    }
    
    .job-count {
      font-weight: 400;
      font-size: 16px;
      padding: ${({ $highlight }) => ($highlight ? "6px 12px" : "0")};
      border-radius: ${({ $highlight }) => ($highlight ? "8px" : "0")};
      background: ${({ $highlight }) => ($highlight ? "#fff" : "transparent")};
      color: ${({ $highlight }) => ($highlight ? "#ff4d4f" : "#6F6F6F")};
      display: inline-block;
    }
  }

  &:hover .card {
    transform: translateY(-4px);
    box-shadow: ${({ $highlight }) =>
    $highlight
      ? "0px 12px 30px rgba(255, 77, 79, 0.35)"
      : "0px 8px 20px rgba(0, 0, 0, 0.1)"};
  }
`;

export default CardCTDT;