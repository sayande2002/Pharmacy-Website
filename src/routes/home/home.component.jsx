import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import medicine from "../../assets/category/medicine.jpg";
import ayurveda from "../../assets/category/ayurveda-products.jpg";
import healthsuppliment from "../../assets/category/health-suppliment.jpg";
import beautyproducts from "../../assets/category/beauti-products.jpg";
import gym from "../../assets/category/gym.jpg";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: medicine,
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: ayurveda,
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: healthsuppliment,
    },
    {
      id: 4,
      title: "womens",
      imageUrl: beautyproducts,
    },
    {
      id: 5,
      title: "mens",
      imageUrl: gym,
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
