import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Header = () => {
    return (
    <div>
        <Link to='/login'>
            <h1>Login</h1>
        </Link>
        <Link to='/homepage'>
            <h1>Homepage</h1>
        </Link>
        <Link to="/orders">
            <h1>Orders</h1>
        </Link>
    </div>
    )
}

export default Header;