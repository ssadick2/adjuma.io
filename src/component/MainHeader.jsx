import {Link} from 'react-router-dom';
import Image from '../images/oco.jpg'
const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#Welcome</h4>
          <h1>Join us Adjuma.io</h1>
          <p>
            lorem egf avniangvsaigsigasiggagzzbgzdzb
            fvggsvgzgzgvgvgzgvzgzgzgzgzgzgvzcgztcagg
          </p>
          <Link to='/jobs' className='btn lg'>GET STARTED</Link>
        </div>
        <div className="main__header-right">
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={Image} alt='Main Header Image'/>
          </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader