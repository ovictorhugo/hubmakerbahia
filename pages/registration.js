import React from "react";
import SignUp from '../src/components/SignUp';
import Head from "next/head";
import AuthLayout from "../src/layouts/AuthLayout";

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 600)
  })
  return{props: {}}
}

const Registration = props =>{
    return (
        <AuthLayout>
            <Head>
            <title>Registro | Hub Maker Bahia</title>
            </Head>
 
            <SignUp></SignUp>
        </AuthLayout>

        
    );
}

export default Registration;