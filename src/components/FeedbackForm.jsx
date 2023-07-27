import {useState, useContext, useEffect} from'react'
import Cards from './shared/Cards'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(()=> {
      if(feedbackEdit.edit === true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
    },[feedbackEdit])

    const handleText = (e) => {
      if(text === ''){
        setBtnDisabled(true)
        setMessage(null)

      } else if (text !== '' && text.trim().length < 10){
        setMessage("Text must be atleast 10 characters ")
        setBtnDisabled(true)

      } else {
        setMessage(null)
        setBtnDisabled(false)
      }
        setText(e.target.value)
    }

    const handleSubmit= (e) => {
      e.preventDefault()
      if(text.trim().length > 10) {
        const newFeedback  = {
          text,
          rating,
        }

        console.log(newFeedback)

        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
          addFeedback(newFeedback)
        }

        setBtnDisabled(true)
        setRating(10)
        setText('')
      }
    }
  return (
    <Cards>
         <form onSubmit= {handleSubmit}>
            <h2>Please give your rating here</h2>
            <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
            <input onChange= {handleText} 
            type='text' 
            placeholder='Write a review'
            value= {text} />
            <Button type='submit' isDisabled = {btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
         </form>

    </Cards>
   
  )
}

export default FeedbackForm