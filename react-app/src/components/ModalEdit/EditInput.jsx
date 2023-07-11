import { useEffect, useState } from 'react';
import styles from './ModalEdit.module.css'
import axios from 'axios';


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

    const [selectedValue, setSelectedValue] = useState(zivotinja[name]);

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
        promjenaUlaza(e);
    }

    return(
        <div className={styles.selectBox}>
            <label>{name}</label>
             <select
                    name={name}
                    value={selectedValue}
                    onChange={handleChange}
                    >
                    {lista.map(lis => (
                        <option key={lis.id} value={lis.vrsta}>
                            {lis.vrsta}
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