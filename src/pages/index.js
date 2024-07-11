//import styles from '@/pages/';
import { PrismaClient } from '@prisma/client';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  await prisma.visit.create({ data: {} });
  const visits = await prisma.visit.count();
  return {
    props: { visits },
  };
}

const Home = ({ visits }) => (
  <div className="flex justify-between bg-amber-50 flex-col min-h-screen p-6 ">
    <Header />
    <Main />
    <Footer visits={visits} />
  </div>
);

export default Home;
