import { User } from "../user/type";
import { DataConfig, DataThongTin, MainMenu } from "../../utils/interface";

declare module Auth {
  export interface IClientOAuth {
    _id: string; //"PTIT";
    name: string; //"Học viện Công nghệ Bưu chính Viễn thông";
    oauth: {
      fieldMap: {
        username: string; //"preferred_username";
        email: string; //"email";
        fullname: string; //"name";
        familyName: string; //"family_name";
        givenName: string; // "given_name";
      };
      enable: boolean; // true;
      clientId: string; //"slink-web";
      name: string; // "S-Link ID";
      discovery: string; //"https://slinkid.ptit.edu.vn/auth/realms/master/.well-known/openid-configuration";
      buttonColor: string; // "#cc0d00";
      issuer: string; //"https://slinkid.ptit.edu.vn/auth/realms/master";
      authorizationEndpoint: string; //"https://slinkid.ptit.edu.vn/auth/realms/master/protocol/openid-connect/auth";
      tokenEndpoint: string; //"https://slinkid.ptit.edu.vn/auth/realms/master/protocol/openid-connect/token";
      introspectionEndpoint: string; //"https://slinkid.ptit.edu.vn/auth/realms/master/protocol/openid-connect/token/introspect";
      userinfoEndpoint: string; // "https://slinkid.ptit.edu.vn/auth/realms/master/protocol/openid-connect/userinfo";
      endSessionEndpoint: string; // "https://slinkid.ptit.edu.vn/auth/realms/master/protocol/openid-connect/logout";
      jwksUri: string; //"https://slinkid.ptit.edu.vn/auth/realms/master/protocol/openid-connect/certs";
    };
    createdAt: string; // "2022-12-27T03:10:25.697Z";
    updatedAt: string; //"2022-12-27T03:10:25.697Z";
  }

  interface AuthContextType {
    isAuthenticated: boolean;
    user?: User.IRoot;
    setUser: (item?: User.IRoot) => void;
    langCode?: string;
    userLoading: boolean;
    setLangCode: (item: any) => void;
    showAuthModal?: string;
    setShowAuthModal: (modal: string) => void;
    login: (data: {
      username: string;
      password: string;
    }) => Promise<User.IRoot | undefined>;
    oauthLogin: (data: {
      accessToken: string;
      clientId: string;
    }) => Promise<User.IRoot | undefined>;
    logout: () => Promise<number>;
    allBookmark: string[];
    setAllBookmark: (data: string[]) => void;
    allApply: string[];
    setAllApply: (data: string[]) => void;
    allFollow: string[];
    setAllFollow: (data: string[]) => void;
    setMenu: (data: MainMenu[]) => void;
    setDataConfig: (data: DataConfig[]) => void;
    setDataThongTin: (data: DataThongTin) => void;
    setDataHome: (data: any) => void;
    dataHome: any;
    dataThongTin: DataThongTin;
    menu: MainMenu[];
    dataConfig: DataConfig[];
    OAuthData: Auth.IClientOAuth;
    typeLogin: "keycloak" | "default";
    setTypeLogin: (data: "keycloak" | "default") => void;
  }
}
