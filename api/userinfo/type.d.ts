export interface UserAuthItem {
    _id: string;
    ip: string;
    platform: string;
    userAgent: Record<string, any>;
    origin: string;
    user: string;
    userInfo: string;
    jti: string;
    exp: number;
}

export interface UserData {
    _id: string;
    username: string;
    password?: string;
    ssoId: string;
    email: string;
    firstname: string;
    lastname: string;
    fullname?: string;
    gender?: string;
    dob?: string; // ISO date string
    systemRole?: string;
    authList?: UserAuthItem[];
    dataPartitionCode?: string;
}

export interface UserInfoResponse {
    success: boolean;
    data: UserData;
}
