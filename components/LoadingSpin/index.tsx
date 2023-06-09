import styled from "styled-components";
interface IProps{
  loading:boolean;
  children:any
}
const LoadingSpin = (props:IProps) => {
  return(
    <LoadingWrapper>
      {props.loading?<>
        <div className="bg-white flex justify-center items-center w-full h-[100vh]">
          <img className="w-[200px]" src="/images/icons/STDVDN.svg" alt="image"/>
        </div>
      </>:<>
        {props?.children}
      </>}
    </LoadingWrapper>
  )
}

const LoadingWrapper=styled.div`

`
export default LoadingSpin;