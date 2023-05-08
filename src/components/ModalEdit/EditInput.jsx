import { useEffect } from 'react';
import styles from './ModalEdit.module.css'
export function EditTextInput({zivotinja,promjenaUlaza, name, type, required}){
    return(
        <div className={styles.inputBox}>
            <label>{name}</label>
            <input type={type} placeholder={zivotinja[name]} name={name} required={required}
             onFocus={(e) => {
                if (name === "pregled") {
                  e.target.type = "date";
                }
                }}
              onChange={promjenaUlaza}
              />
        </div>
    )
}

export function EditSelectInput({zivotinja, promjenaUlaza, name, lista}){
    return(
        <div className={styles.selectBox}>
            <label>{name}</label>
             <select
                    name={name}
                    value={zivotinja[name]}
                    onChange={promjenaUlaza}
                    >
                    {lista.map(lis => (
                        <option key={lis.naziv} value={lis.naziv}>
                            {lis.naziv}
                        </option>
                    ))}
            </select>
        </div>
    )
}

export function EditCheckbox({zivotinja,promjenaUlaza,name}){
    return(
        <div className={styles.selectBox}>
            <div className={styles.checkbox}>
                <label>{name}</label>
                <input type="checkbox" defaultChecked={zivotinja[name]} name={name} onChange={promjenaUlaza} />
            </div>
  
        </div>
    )
}