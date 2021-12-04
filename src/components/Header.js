import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    const onClick = () => {
        
    }
    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            <Button className ='btn' text={showAdd ? 'Hide' : 'Add New Task'} onClick={onAdd}/> 
        </header>
    )
}

// if no props are passed, the default title will be below
Header.defaultProps = {
    title: 'Task Tracker',
}

// a warning will compile if the prop passed is NOT a string
Header.propTypes = {
    title: PropTypes.string,
}

const headingStyle = {
    color: 'orange', 
}
export default Header
