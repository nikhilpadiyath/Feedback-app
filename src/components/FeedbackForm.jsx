import {useState} from'react'
import Cards from './shared/Cards'
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleText = (e) => {
        setText(e.target.value)
    }
  return (
    <Cards>
         <form>
            <h2>Please give your rating here</h2>
        <div className="input-group">
            <input onChange= {handleText} 
            type='text' 
            placeholder='Write a review'
            value= {text} />
            <Button type='submit'>Send</Button>
        </div>
         </form>

    </Cards>
   
  )
}

export default FeedbackForm