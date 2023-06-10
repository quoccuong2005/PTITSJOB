import Dropdown from "react-dropdown";
import styled from "styled-components";
interface IProps {
	option: any;
	onChange: (val: any) => void;
	value: any;
	placeholder: string;
}
const DropdownFake = (props: IProps) => {
	return (
		<DropdownWrapper>
			<Dropdown  options={props.option} onChange={props.onChange} value={props.value} placeholder={props.placeholder} />
		</DropdownWrapper>
	);
};
const DropdownWrapper=styled.div`
  .Dropdown-control{
		min-width: 192px;
    background: #FFFFFF;
		border: 1px solid #FFFFFF;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    //border-radius: 8px;
    width: 100%;
    height: 100%;
    padding: 8px 20px;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 18px;
		color: #73787E;
    .Dropdown-arrow{
      top:15px
    }
    
  }
`
export default DropdownFake;
