import Image from '../../images/img3.jpg';
import SectionHead from '../../component/SectionHead';
import {GiCutDiamond} from 'react-icons/gi';
import {community} from '../../data';
import Card from '../../UI/Card';

const Community = () => {
  return (
    <section className='values'>
        <div className='container values__container'>
            <div className='values__left'>
            <div className='values__image'>
                <img src={Image} alt='Community Image'/>
            </div>
            </div>
            <div className='values__right'>
                <SectionHead icon={<GiCutDiamond/>} title='Community'/>
                <p>
                  Lorem are gascvavjopjpoj opwqqvqrckpvrok kcf kffds opwqqvqrckpvrok
                  cqfvbcxbsdfgvacoaf lkvpCADOKAKVA OKCAEFOOAFXFVOKPOkccgqgok
                </p>
                <div className='values__wrapper'>
                  {
                    community.map(({id, icon, title, desc}) => {
                      return <Card key={id} className='vales__value'>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{desc}</small>
                      </Card>
                    } )
                  }
                </div>
            </div>
        </div>

    </section>
  )
}

export default Community