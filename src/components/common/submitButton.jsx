import { Button } from "react-bootstrap"
import * as styles from './card.css'

const SubmitButton =  ({ children, loadingState, onClick }) => {
    return (
        <Button
            className = {styles.button}
        >
            {children}
        </Button>
    )
}

export default SubmitButton;