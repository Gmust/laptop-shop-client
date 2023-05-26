import { Laptop } from '@components/pages/LaptopPage/Laptop';
import { getLaptopById, getLaptopsBy } from '@/sevices/api/laptops';

const LaptopPage = async ({ params }: any) => {

  const laptop = await getLaptopById(params.laptopId);
  const newLaptops = await getLaptopsBy({ url: '/new' });
  const bestsellersLaptops = await getLaptopsBy({ url: '/bestSellers' });

  return (
    <div>
      <Laptop laptop={laptop} newLaptops={newLaptops.rows} bestsellers={bestsellersLaptops.rows} />
    </div>
  );

};

export default LaptopPage;