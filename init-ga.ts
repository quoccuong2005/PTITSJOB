import ReactGA, { ga } from "react-ga";

export interface FieldsObject {
  result: string;
}

export interface EventLabel {
  linkFrom: string | null;
  linkTo: string | null;
}

export const evenClickLanding = {
  click_icon_lucky_spin: " Click_icon_lucky_spin",
  click_icon_downloadApp: "Click_icon_downloadapp",
  click_icon_hotline: "Click_icon_hotline",
  click_icon_redirect_seller: " Click_icon_redirect_seller",
  click_icon_followOrder: "Click_icon_followorder",
  click_button_home: "Click_button_home",
  click_button_categories: "Click_button_categories",
  click_notification_normal: "Click_notification_normal",
  click_notification_auction: "Click_notification_auction",
  click_viewCart: "Click_viewcart",
  click_button_shareFacebook: "Click_button_sharefacebook",
  click_itemDetail: "Click_itemdetail",
  click_button_viewMore: "Click_button_viewmore",
  click_button_tool_sellNow: "Click_button_tool_sellnow",
  click_button_tool_banner: "Click_button_tool_banner",
  click_button_tool_postSell: "Click_button_tool_postSell",
  click_button_tool_chat: "Click_button_tool_chat",
  click_button_onTop: "Click_button_onTop",
};
export const evenClickDetail = {
  click_icon_lucky_spin: " Click_icon_lucky_spin",
  click_icon_downloadApp: "Click_icon_downloadapp",
  click_icon_hotline: "Click_icon_hotline",
  click_icon_redirect_seller: " Click_icon_redirect_seller",
  click_icon_followOrder: "Click_icon_followorder",
  click_button_home: "Click_button_home",
  click_button_categories: "Click_button_categories",
  click_notification_normal: "Click_notification_normal",
  click_notification_auction: "Click_notification_auction",
  click_viewCart: "Click_viewcart",
  click_button_addToCart: "Click_button_addtocart",
  click_button_viewShop: "Click_button_viewshop",
  click_likeProduct: "Click_likeproduct",
  click_shareFacebook: "Click_sharefacebook",
  click_itemDetail_another: "Click_itemdetail_another",
  click_button_auction: "Click_button_auction",
  click_button_buyNow: "Click_button_buynow",
  click_button_flashAuction: "Click_button_flashauction",
  click_button_remindAuctionFinish: "Click_button_remindauctionfinish",
  click_button_viewHistoryAuction: "Click_button_viewhistoryauction",
  click_button_chat: "Click_button_chat",
  click_button_tool_sellNow: "Click_button_tool_sellnow",
  click_button_tool_banner: "Click_button_tool_banner",
  click_button_tool_postSell: "Click_button_tool_postSell",
  click_button_tool_chat: "Click_button_tool_chat",
  click_button_onTop: "Click_button_onTop",
};
export const eventClickCard = {
  click_icon_lucky_spin: " Click_icon_lucky_spin",
  click_icon_downloadApp: "Click_icon_downloadapp",
  click_icon_hotline: "Click_icon_hotline",
  click_icon_redirect_seller: " Click_icon_redirect_seller",
  click_icon_followOrder: "Click_icon_followorder",
  click_button_home: "Click_button_home",
  click_button_categories: "Click_button_categories",
  click_notification_normal: "Click_notification_normal",
  click_notification_auction: "Click_notification_auction",
  click_viewCart: "Click_viewcart",
  click_button_tool_sellNow: "Click_button_tool_sellnow",
  click_button_tool_banner: "Click_button_tool_banner",
  click_button_tool_postSell: "Click_button_tool_postSell",
  click_button_tool_chat: "Click_button_tool_chat",
  click_button_onTop: "Click_button_onTop",
};
export const eventLoginAndRegister = {
  click_login: "Click_login",
  click_register: "Click_register",
  click_forgot_password: "Click_forgot_password",
  click_facebook: "Click_facebook",
  click_google: "Click_google",
  click_close: "Click_close",
};

export function googleAnalytics() {
  console.log("GA", process.env.GA);
  console.log("link", window.location.pathname + window.location.search);
  try {
    ReactGA.initialize(process.env.GA??'G-8Z1H039CBG');
    ReactGA.pageview(window.location.pathname + window.location.search);
  } catch (e) {
    console.log(e);
  }
}

export function GA(
  category: string,
  action: string,
  eventLabel?: EventLabel,
  eventValue?: number,
  fieldsObject?: FieldsObject
) {
  // console.log("category:  ",category)
  // console.log("action:   ",action)
  // console.log("event Label",JSON.stringify(eventLabel))

  ga("send", "event", {
    eventCategory: category,
    eventAction: action,
    eventLabel: JSON.stringify(eventLabel),
    eventValue: eventValue,
    fieldsObject: fieldsObject,
  });
  ReactGA.event({ category, action });
}

/*Login*/

export function handleCancelLoginButton(
  categoryEvent: string,
  actionEvent: string
) {
  GA(categoryEvent, actionEvent);
}

// export function handleSubmitLogin(fieldsObject: string) {
//     GA('login', 'submit_form', undefined, undefined, {result: fieldsObject});
// }

// export function handleSubmitLoginSocial(eventLabel: EventLabel, fieldsObject: string) {
//     GA('login', 'login_social', eventLabel, undefined, {result: fieldsObject});
// }

/*Register*/

// export function handleCancelRegisterButton() {
//     GA('register', 'close_popup');
// }
//
// export function handleSubmitRegister(fieldsObject: string) {
//     GA('register', 'submit_form', undefined, undefined, {result: fieldsObject});
// }

/*forgot password*/

/*OTP*/
// export function handleCancelOTPButton() {
//     GA('popup_otp', 'close_popup');
// }
export function handleThanhToan() {
  GA("payment", "Click_payment_btn");
}
export function handleSendOtp() {
  GA("popup_otp", "Click_send_otp");
}

export function handleReSendOtp() {
  GA("popup_otp", "Click_resend_otp");
}

/*click continued*/
export function handleVerifyOtp() {
  GA("popup_otp", "Click_continue");
}

/* landing buyer*/
export function handleScrollLanding(landingName: string) {
  GA(`Trang landing(${landingName})`, "scroll");
}

export function handleClickOnLanding(landingName: string, event: string) {
  GA(`Trang landing(${landingName})`, event);
}

/*product detail*/
export function handleScrollDetail(eventLabel: EventLabel) {
  GA("Trang detail sản phẩm", "scroll", eventLabel);
}

export function handleClickOnDetail(event: string, eventLabel: EventLabel) {
  GA("Trang detail sản phẩm", event, eventLabel);
}

/*cart*/
export function handleScrollCart(eventLabel: EventLabel) {
  GA("Trang cart detail", "scroll", eventLabel);
}

export function handleClickOnCart(event: string, eventLabel: EventLabel) {
  GA("Trang cart detail", event, eventLabel);
}

/*thanh toan chi tiet*/
export function handleClickAddAddress() {
  GA("Trang thanh toán chi tiết", "Click_add_address/Click_edit_address");
}

export function handleClickChoosePartnerLogistic() {
  GA("Trang thanh toán chi tiết", "Click_choose_partnerlogictics");
}

export function handleClickChoosePayment() {
  GA("Trang thanh toán chi tiết", "Click_choose_paymentmethod");
}

/*Trang thanh toán*/
export function handleChooseProduct() {
  GA("Trang thanh toán", "Click_choose_product");
}

export function handleAddMore() {
  GA("Trang thanh toán", "Click_addmore/subtract");
}

export function handleDelete() {
  GA("Trang thanh toán", "Click_delete");
}

export function handleClickButtonProcess() {
  GA("Trang thanh toán", "Click_button_processtoorder");
}
