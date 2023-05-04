import styles from './ContactUs.module.css'
import cx from 'classnames'

function ContactUs(){
    return(
        <div className={styles.contact}>
            <div className={styles.topicText}>
                <h2>Imaš pitanje?</h2>
                <p>Želiš saznati kako udomiti neku od ovih slatkih životinja? Nemoj čekati nego nam pošalji poruku i javit ćemo ti se što prije.</p>
            </div>

            <form>
                <div className={styles.inputBox}>
                        <input type="text" name="ime" placeholder="Unesi svoje ime" />
                </div>
                
                <div className={styles.inputBox}>
                    <input type="email" name="email" placeholder="Unesi svoj email" />
                </div>

               <div className={cx(styles.inputBox,styles.messageBox)}>
                    <textarea name="poruka" placeholder='Unesi svoju poruku'/>
                </div>

                <div className={styles.contactBtn}>
                    <input type="button" value="Pošalji" />
                </div>
            </form>
            

        </div>
    )
}
export default ContactUs