import MyButton from "../../components/myButton/MyButton"
import styles from "./lesson09.module.css"
import cn from "classnames"

export default function Lesson09() {
  return (
    <div className="lesson-container">
        <h2 className={styles.heading}>Lesson09</h2>
        <p className={`${styles.desc} ${styles.boldText}`}>V1 CSS MODULES s nesskoljkomi klassami</p>
        <p className={cn(styles.desc, styles.boldText)}>CSS MODULES npm i classnames</p>
        <p className={styles.boldText}>Zhirnyj tekst</p>
        <MyButton text="NEW BUTTON" isDanger={false}/>
    </div>
  )
}
