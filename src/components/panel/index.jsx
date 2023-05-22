import React, { useState } from 'react'
import './style.scss';


export default function MainPanel() {
   const [state, setState] = useState({});
   const onChange = (name) => (e) => setState((prev) => ({...prev, [name]: e.target.value}));
   const btnIsDisabled = Object.values(state).filter(Boolean).length < 3;
  return (
    <div className="main_panel">
      <div className='header'>Создать соединение</div>
      <div className='field field_input'>
         <label title='idInstance' htmlFor='idInstance'>idInstance:</label>
            <input required type='text' name='idInstance' onChange={onChange('idInstance')} />
      </div>
      <div className='field field_input'>
         <label title='apiTokenInstatnce' htmlFor='apiTokenInstatnce'>apiTokenInstatnce:</label>
            <input required type='text' name='apiTokenInstatnce' onChange={onChange('apiTokenInstatnce')} />
      </div>
      <div className='field field_input'>
         <label title='receiver_tel_number' htmlFor='receiver_tel_number'>receiver_tel_number:</label>
            <input required type='text' name='receiver_tel_number' onChange={onChange('receiver_tel_number')} />

      </div>
      <div className='field field_create'>
         <button disabled={btnIsDisabled} className='create_btn' onClick={() => console.log(state)} >Создать новый чат</button>
      </div>

    </div>
  )
}
