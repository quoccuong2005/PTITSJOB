import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { IDataNavBar } from "../../utils/interface";

interface IProps {
	data: IDataNavBar[];
}
const NavBarComponents = (props: IProps) => {
	return (
		<>
			<Navbar fluid rounded >
				<Navbar.Collapse>
					<div className='flex'>
						{props.data?.map((val, i) => {
							if (val?.childrenRouter && val?.childrenRouter?.length > 0) {
								return (
									<Dropdown inline label={val?.name} key={i} >
										{val?.childrenRouter?.map((val2,i2)=>{
											if (val2?.childrenRouter&&val2?.childrenRouter?.length>0){
												return (
													<Dropdown
														inline
														label={val2?.name}
														placement="right"
														key={i2}
													>
														{val2?.childrenRouter?.map((val3,i3)=>{
															return(
																<Dropdown.Item key={i3}>
																	{val3?.name}
																</Dropdown.Item>
															)
														})}


													</Dropdown>
												)
											}else {
												return(
													<Dropdown.Item key={i2}>{val2?.name}</Dropdown.Item>
												)
											}
										})}
									</Dropdown>
								);
							} else {
								return (
									<Navbar.Link className="mr-[20px]"  href='#' key={i}>
										<p>{val?.name}</p>
									</Navbar.Link>
								);
							}
						})}
					</div>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
export default NavBarComponents;
