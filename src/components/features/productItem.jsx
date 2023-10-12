// import Card from 'react-bootstrap/Card';
import holder from '../../assets/ball.png';
import * as styles from './productItem.css'

function ProductItem(props) {
    const { product } = props;
    return (
        <div className={styles.itemBox}>
            <img className={styles.holder} src={holder} alt={product.name} />
            <h5 className={styles.productName}>{product.name}</h5>
            <p className={styles.price}>300AUD</p>
        </div>
    )

}

export default ProductItem;