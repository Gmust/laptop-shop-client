import { MainPage } from '@components/pages/MainPage/MainPage';
import { getAllLaptopsFx } from '@/context/laptops';
import { getLaptopsBy } from '@/sevices/api/laptops';

const Home = async () => {

  const allLaptops = await getAllLaptopsFx({});
  const newLaptops = await getLaptopsBy({ url: '/new' });
  const bestsellersLaptops = await getLaptopsBy({ url: '/bestSellers' });

  return (
    <div>
      <MainPage allLaptops={allLaptops.rows} bestsellersLaptops={bestsellersLaptops.rows}
                newLaptops={bestsellersLaptops.rows} />
    </div>
  );
};


export default Home;
