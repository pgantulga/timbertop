import * as styles from './notFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (

        <div className='container'>
            <div className={styles.notFound}>
                <h1>404</h1>
                <Link to='/'>Oops, this page could not be found.</Link>
            </div>
        </div>
    )
}

export default NotFound;