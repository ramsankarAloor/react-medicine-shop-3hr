import Input from '../../../UI/Input'
import styles from './MedicineItemForm.module.css' 

const MedicineItemForm=props=>{
    
    return (
        <form className={styles.form}>
            <Input label='Amount' input={{
                id: 'amount',
                type: 'number',
                min: 1,
                max: 5,
                step:1,
            }}/>
            <button type='submit'>+ Add</button>
        </form>
    )
}

export default MedicineItemForm