import React from "react";

const NoData = () => {
  return(
    <>
      <div className="w-full h-full justify-center items-center flex flex-col">
        <img
          className="mb-[16px]"
          src="/images/default/no_data.png"
          alt="image"
        />
        <p className="text-secondary text-sm">Không có dữ liệu</p>
      </div>
    </>
  )
}
export default NoData;