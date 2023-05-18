import { MainPage } from '@components/pages/MainPage/MainPage';
import { getLaptopsFx } from '@/context/laptops';

const Home = async () => {

  const data = await getLaptopsFx({});


  return (
    <div>
      <MainPage {...data} />
    </div>
  );
};


export default Home;
