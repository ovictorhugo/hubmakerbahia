import MainLayout from '../src/layouts/MainLayout';
import AboutUs from '../src/components/AboutUs';
import Head from 'next/head';

import ProtectedRoute from '../src/components/ProtectedRouter';


export async function getServerSideProps() {
    await new Promise((resolve) => {
      setTimeout(resolve, 600)
    })
    return{props: {}}
  }

const Dashboard = () => {

  return (
      <>
      <Head>
          <title>Quem somos | Hub Maker Bahia</title>
        </Head>

        <MainLayout>
        <AboutUs/>
      </MainLayout>
      </>
      

  );
}

export default ProtectedRoute(Dashboard)