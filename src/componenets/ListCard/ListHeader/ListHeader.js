import CartButton from './CartButton'
import styles from './ListHeader.module.css'

const ListHeader=props=>{
    return(
        <div className={styles['list-header']}>
            <CartButton />
        </div>
    )
}

export default ListHeader