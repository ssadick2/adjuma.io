import SectionHead from "../../component/SectionHead";
import { FaQuestion } from "react-icons/fa";
import {news} from '../../data';
import New from "../../component/New";

const News = () => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead icon={<FaQuestion/>} title='News'/>
            <div className="faqs__wrapper">
                {
                    news.map(({id, question, answer}) => {
                        return <New key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default News