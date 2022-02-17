import MainLayout from '../src/layouts/MainLayout'
import SubmitPanel from '../src/components/SubmitPanel';

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 600)
  })
  return{props: {}}
}

export default function Submit() {
    
  return (

      <MainLayout>
        <SubmitPanel>

        </SubmitPanel>
      </MainLayout>

  );
}