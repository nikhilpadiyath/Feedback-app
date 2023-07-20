import PropTypes from 'prop-types'

function Cards({children,reverse}) {
 // return (
   // <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  
  // )

  return(
    <div className="card" style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : 'white',
        color: reverse ? 'white' : "#000"
    }}>{children}</div>
  )
}

Cards.defaultProps = {
    reverse: false,
}

Cards.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Cards