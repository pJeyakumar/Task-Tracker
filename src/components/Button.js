import PropTypes from 'prop-types'

// setting up our button, so that when it is clicked, the onClick function will be called, also setting the background color and text
const Button = ({color,text, onClick}) => {
    return (
        <button 
        onClick={onClick} 
        style={{backgroundColor: color}}
        className='btn'>{
            text}
        </button>
    )
}

// setting up the proptypes for the button so it knows what data type to expect for its properties
Button.propTypes={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
