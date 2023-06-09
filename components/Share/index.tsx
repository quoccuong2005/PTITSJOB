import styled from "styled-components";
import { FacebookShareButton, TwitterShareButton,EmailShareButton } from "react-share";
import ReactToPrint from "react-to-print";
import React, {useEffect} from "react";
const Share = (props:{ref?:any}) => {

  useEffect(()=>{
    console.log('ref',props.ref)
  },[props.ref])

  return(
    <ShareWrapper>
      <div className='inline-flex items-center' >
        {/*<span className='mr-4'>Chia sẻ </span>*/}
        <div className='share-item'>
          <FacebookShareButton
            url={"https://canbotttt.edu.vn/tin-ve-dao-tao-boi-duong/"}
            quote={"kaka"}
            hashtag={"#daoboi"}
            className="Demo__some-network__share-button"
          >
          <img src={"/images/icons/Facebook-3.svg"} alt={"image"} />
          </FacebookShareButton>
        </div>
        {/*<div className='share-item'>*/}
        {/*  <EmailShareButton*/}
        {/*      url={"https://canbotttt.edu.vn/tin-ve-dao-tao-boi-duong/"}*/}
        {/*      // quote={"kaka"}*/}
        {/*      // hashtag={"#daoboi"}*/}
        {/*      className="Demo__some-network__share-button"*/}
        {/*  >*/}
        {/*    <img src={"/images/icons/mail-pri.svg"} alt={"image"} />*/}
        {/*  </EmailShareButton>*/}
        {/*  /!*<img src={"/images/icons/mail-pri.svg"} alt={"image"} />*!/*/}
        {/*</div>*/}
        {/*<div className='share-item' >*/}
        {/*  <img src={"/images/icons/print-pri.svg"} alt={"image"} />*/}
        {/*</div>*/}
      </div>
    </ShareWrapper>
  )
}
const ShareWrapper=styled.div`
  .share-item {
    margin-right: 16px;
    background: #f1f3f5;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    //&:last-of-type {
    //  margin-right: 0;
    //}
  }
`
export default Share;