import Header from './component/Header'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {

  return (
    <div className='flex'>
      <Navbar />
      <Header />
    </div>

      // faire une boucle .map pour afficher les challenges
  );
};

export default Home
