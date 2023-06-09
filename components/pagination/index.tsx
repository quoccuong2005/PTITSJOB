import styled from "styled-components";
import {useEffect, useState} from "react";
import {el} from "date-fns/locale";

interface IProps {
	total: number;
	page: number;
	limit: number;
    handleChangePage:(page:number)=>void
}
const Pagination = (props: IProps) => {
    const {page,total,limit,handleChangePage}=props
    const [dataPage,setDataPage]=useState<number[]>([])
    const [currentPage,setCurrentPage]=useState<number>(1)
    useEffect(()=>{
        const totalPage=total/limit;
        console.log('total',totalPage)
        let arrPage=[]
        if (totalPage>=1){
            for (let i=1;i<=totalPage;i++){
                arrPage.push(i);
            }
        }else {
                arrPage.push(1);
        }

        setDataPage(arrPage)
    },[page,total,limit])
    const changePage = (page:number) => {
        handleChangePage(page)
        setCurrentPage(page)
    }
    return(
        <PaginationWrapper>

            <div className="pagination">
                <a href="#">&laquo;</a>
                {dataPage?.map((value,i)=>{
                    return(
                        <a onClick={()=>changePage(value)} className={`${currentPage===value?'active':''}`} key={i}>{value}</a>
                    )
                })}
                <a href="#">&raquo;</a>
            </div>
        </PaginationWrapper>
    )


};
const PaginationWrapper=styled.div`
  .pagination {
    display: inline-block;
  }

  .pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }

  .pagination a.active {
    background-color: #DE221A;
    color: white;
  }

  .pagination a:hover:not(.active) {background-color: #ddd;}
`
export default Pagination;
