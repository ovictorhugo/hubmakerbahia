
import MainLayout from '../src/layouts/MainLayout'
import Homepage from '../src/components/Homepage'
import Head from 'next/head';

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 600)
  })
  return{props: {}}
}

export default function Home() {
  return (
      <>
        <Head>
          <title>Página Inicial | Hub Maker Bahia</title>
        </Head>

        <MainLayout>
          <Homepage/>
        </MainLayout>
      </>

  );
}

