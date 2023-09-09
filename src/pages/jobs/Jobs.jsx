import {FaCrown} from 'react-icons/fa';
import SectionHead from '../../component/SectionHead';
import {jobs} from '../../data';
import Card from '../../UI/Card';
import { Link } from 'react-router-dom';
import {AiFillCaretRight} from 'react-icons/ai';
import "./Jobs.css"

const Jobs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown/>} title='JOBS/LISTINGS'/>
      <div className='programs__wrapper'>
        {
          jobs.map(({id, icon, title, info, path}) => {
            return (
              <Card className='programs__program' key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className='btn sm'>Learn More <AiFillCaretRight/> </Link>
              </Card>
            )
          })
        }
      </div>
      <div className='programs__wrapper'>
        {
          jobs.map(({id, icon, title, info, path}) => {
            return (
              <Card className='programs__program' key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className='btn sm'>Learn More <AiFillCaretRight/> </Link>
              </Card>
            )
          })
        }
      </div>
      </div>
    </section>
  )
}

export default Jobs;
