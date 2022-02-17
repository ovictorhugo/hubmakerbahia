import React from "react";
import SignIn from '../src/components/SignIn';
import Head from "next/head";
import AuthLayout from "../src/layouts/AuthLayout";

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 600)
  })
  return{props: {}}
}

const Login = props =>{
    return (
        <AuthLayout>
            <Head>
                <title>Login | Hub Maker Bahia</title>
            </Head>

            <SignIn></SignIn>
        </AuthLayout>
    );
}

export default Login;