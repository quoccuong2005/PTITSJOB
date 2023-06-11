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
    const [totalPage,setTotalPage]=useState<number>(1)
    useEffect(()=>{
        const totalPage=total/limit;
        setTotalPage(totalPage)
        console.log('total',totalPage)
        let arrPage=[]
        if (totalPage>=1){
            for (let i=1;i<=Math.ceil(totalPage);i++){
                arrPage.push(i);
            }
        }else {
                arrPage.push(1);
        }

        setDataPage(arrPage)
    },[page,total,limit])
    const changePage = (page:number) => {
        handleChangePage(page)
        // setCurrentPage(page)
    }
    // useEffect(()=>{
    //     setCurrentPage(page)
    // },[page])
    const handleNextPage = () => {
        if (page===Math.ceil(total/limit)){
            handleChangePage(1)
        }else {
            let pageNext=page+1
            handleChangePage(pageNext)
        }

    }
    const handlePrevPage = () => {

        if (page===1){
            let pagePrev=Math.ceil(total/page)
            handleChangePage(pagePrev)
        }else {
            let pageNext=page-1
            handleChangePage(pageNext)
        }
    }
    return(
        <PaginationWrapper>
            {total>0&&
              <div className="pagination">
                  {totalPage>1&&    <a href="#" onClick={()=>{handlePrevPage()}}>&laquo;</a>}

                  {dataPage?.map((value,i)=>{
                      return(
                        <a onClick={()=>changePage(value)} className={`${page===value?'active':''}`} key={i}>{value}</a>
                      )
                  })}
                  {totalPage>1&& <a href="#"  onClick={()=>{handleNextPage()}}>&raquo;</a>}
              </div>}

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
