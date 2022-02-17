import DashboardLayout from '../src/layouts/DashboardLayout';
import Banner from '../src/components/Banner';
import Head from 'next/head';

import ProtectedRoute from '../src/components/ProtectedRouter';

export async function getServerSideProps() {
    await new Promise((resolve) => {
      setTimeout(resolve, 600)
    })
    return{props: {}}
  }

const Dashboard = () => {

    const BackgroundConfig = {
        BackgroundImageBanner: '/images/contentBanner1.png'
    };

  return (
      <>

        <Head>
          <title>Dashboard | Hub Maker Bahia</title>
        </Head>

        <DashboardLayout>
          <Banner {...BackgroundConfig} ></Banner>
        </DashboardLayout>
      </>

  );
}

export default ProtectedRoute(Dashboard)