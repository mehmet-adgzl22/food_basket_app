import { BsBasket } from 'react-icons/bs';
import { IoRestaurant } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { restaurants } = useSelector((store) => store.restaurantReducer);

  const { cart } = useSelector((store) => store.cartReducer);


  const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

  return (
    <div className="shadow">
      <div className="container flex justify-between items-center">
        <Link
          to={'/'}
          className="text-red-500 font-[900] text-3xl font-mono md:text-3xl" 
        >
       <img src="./logo3.png" alt="" width={90} height={80}/>
        </Link>

        <div className="flex gap-5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:underline cursor-pointer font-semibold"
          >
            Şuan Yakınınızda {restaurants?.length}
            <IoRestaurant className="text-red-500" />
            <span className="max-md:hidden">Restoran var.</span>
          </Link>

          <button className="button font-semibold">Giriş Yap</button>
          <button className="button font-semibold">Kayıt Ol</button>

          <Link
            to="/cart"
            className="flex items-center gap-2 py-2 px-3 hover:bg-red-300 rounded-full font-semibold"
          >
            <BsBasket />
            <span>{totalAmount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
