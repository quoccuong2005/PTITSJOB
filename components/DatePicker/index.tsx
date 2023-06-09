import DatePicker from "react-datepicker";
import React, { useState } from "react";
import styled from "styled-components";
interface IProps {
	selected: any;
	onChange: (date: any) => void;
	placeholder?:string
}
const DatePickerFake = (props: IProps) => {
	return (
		<DatePickerWraper>
			<div className='date-picker flex'>
				<DatePicker selected={props.selected} onChange={(date) => props.onChange(date)} placeholderText={props.placeholder} />
				<div className='icon-picker'>
					<img src='/images/icons/date-picker.svg'  alt={'image'}/>
				</div>
			</div>
		</DatePickerWraper>
	);
};
const DatePickerWraper = styled.div`
  .icon-picker{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #495057;
    //border-radius: 0px 8px 8px 0px;
    width: 48px;
    height: 48px;
  }`;
export default DatePickerFake;
