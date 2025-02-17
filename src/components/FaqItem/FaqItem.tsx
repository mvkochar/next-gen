import React from 'react'
import classes from './FaqItem.module.css'

type FaqItemProps = {
    id: number
    question: string
    answer: string
}

const FaqItem = ({ id, question, answer }: FaqItemProps) => {
    const [show, setShow] = React.useState(false)
    const handleAnswer = () => {
        setShow((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.faq_item}>
            <div className="d-f jc-sb align-center">
                <h3 className={classes.faq_item_question}>{question}</h3>
                <button
                    className='btn-clear d-b'
                    onClick={handleAnswer}
                >
                    <img src={show ? "/images/minus.png" : "/images/plus.png"} alt="plus / minus" />
                </button>
            </div>
            <p className={show ? classes.faq_item_answer : 'd-n'}>{answer}</p>
        </div>
    )
}

export default FaqItem