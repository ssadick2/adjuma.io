import MainHeader from '../../component/MainHeader';
import Community from '../community/Community';
import Jobs from '../jobs/Jobs';
import News from '../news/News';

import "./Home.css";
const Home = () => {
  return (
    <>
      <MainHeader/>
      <Jobs/>
      <Community/>
      <News/>
    </>
  )
}

export default Home
