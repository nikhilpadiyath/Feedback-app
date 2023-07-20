import { FaTimes} from 'react-icons/fa'
import Cards from "./shared/Cards"
import PropTypes from 'prop-types'

function FeedbackItem({item, handleDelete}) {

    const handleClick= (id) => {


    }

return (
     <Cards>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
            <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Cards>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem