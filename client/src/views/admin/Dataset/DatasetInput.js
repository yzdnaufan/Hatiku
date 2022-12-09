import React, { useRef } from 'react'
import { Form } from 'react-router-dom'
import axios from 'axios';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { handleFormSubmit } from '../../../utils/useForm';
import { Header } from '../../../components';
import { InputBox} from '../../../Configs/form';


const submitEvent = (e)=> {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
    ...memo,
    [key]: value,
  }), {});
  const dataJson = JSON.stringify(data);
  const res = axios.post('http://localhost:5000/patients', dataJson, {
  headers: {
    // Overwrite Axios's automatically set Content-Type
    'Content-Type': 'application/json'
  }})
  .then(r => {
    console.log(r);
    console.log(r.data);
  });
}



const DatasetInput = () => {
  
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 w-1000 md:p-10 bg-white rounded-3xl">
      <Header category="Form" title="Insert Data" />
      <form 
      method='post' 
      id="data-input"  
      onSubmit={submitEvent}
      >
        {InputBox.map((item, index) =>
        <>
          <span>{item.key}</span> 
          <item.input id={item.body.name} key={index} {...item.body}>
            {item.hasOwnProperty('option') ? item.option.flatMap((o)=> <option>{o}</option>) : null}
          </item.input>
        </>
        )}
        <button className='mt-4 rounded-md p-3 bg-slate-300 hover:bg-slate-400 hover:ease-in' type='submit'>Submit</button>
      </form>

      <script>
          
      </script>
    </div>
  )
}

export default DatasetInput