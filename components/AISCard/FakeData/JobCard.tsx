import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { JobCardProps } from "./Fakedata";
import Link from "next/link";
import { Tintuyendungpublic } from "../../../api/tintuyendungpublic/type";
import { formatDate } from "../../../assets/formatDate";
import { formatMoney } from "../../../assets/formatmoney"
const JobCard: React.FC<Tintuyendungpublic> = ({ mucLuongToiThieu, mucLuongToiDa, tieuDe, createdAt, _id, diaDiemLamViec, doanhNghiep }) => {

  return (

    <Link href={`/Detailcompany/${_id}`}>
      <CardWrapper>
        <Header>
          {doanhNghiep?.logo ? (<Image src={doanhNghiep.logo} alt={tieuDe} />) : (<Image src={"/images/default/defaultimage.png"} alt={tieuDe} />)}
          <div>
            <Company>{doanhNghiep?.ten || "Chưa có tên công ty"}</Company>
            <Title>{tieuDe || "Chưa có tiêu đề"}</Title>
          </div>
        </Header>
        <Meta>
          <span className="flex"><img src="/images/home/Group.png" className="mr-[12px]" alt="Location" /><span className="truncate w-40">{diaDiemLamViec || "Chưa có địa điểm"}</span></span>
          <span className="flex"><img src="/images/home/calendar.png" className="mr-[12px]" alt="Time" /> {formatDate(createdAt as Date)}</span>
        </Meta>
        <div className="flex">
          <img className="mr-3" src="/images/home/Lương.png" />
          <Salary>{formatMoney(mucLuongToiThieu)} - {formatMoney(mucLuongToiDa)}</Salary>
        </div>
        {/* <Tags>
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </Tags> */}
      </CardWrapper>
    </Link>

  );
};

export default JobCard;
const Header = styled.div`
    display: flex;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: #f3f4f6;
  object-fit: cover;
  margin-bottom: 8px;
  margin-right: 12px;
`;

const CardWrapper = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    border-color: #bc2826;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #051a53;
  margin: 0;
  line-height: 1.4;
`;

const Meta = styled.div`
  font-size: 15px;
  color: #666;
  display:flex;
  gap:60px;
`;

const Salary = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #bc2826;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: #f5f5f5;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  color: #374151;
`;
