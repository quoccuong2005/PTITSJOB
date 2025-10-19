import React from 'react';
import LoginFlow from '../../components/LoginFlow';
import LoginForm from "../../components/Account/LoginForm"
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
    return (
        <LoginFlow />
        // <LoginForm showModal="ok" setShowModal={() => { }} />
    );
};

export default LoginPage;