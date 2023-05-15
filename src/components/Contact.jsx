import './Contact.css';
import React, { useState } from 'react';


function Contactus() {
  const [name, setName] = useState('');
  const [ocupType, setocupType] = useState('');
  const [orgName, setorgName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const onContact = () => {
    console.log(name, ocupType, orgName, email, msg);
  }

  return (
    <>
      <div className='mandiv'>
        <div className='heding_detials'>
          <div className='contect_form'>
            <h1 className='form'>Contect Form </h1>

            <label htmlFor="">Name:</label>
            <input id='name' name="setName" type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="">Ocuupation Type :</label>
            <input id='Ocuupation' name="setocupType" type="text" value={ocupType} onChange={(e) => setocupType(e.target.value)} />

            <label htmlFor="">Organization / Instiute Name :</label>
            <input id='Instiute' name="setorgName" type="text" value={orgName} onChange={(e) => setorgName(e.target.value)} />

            <label htmlFor=""> Email :</label>
            <input id='Email' name="setemail" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="">Message :</label>
            <textarea name="setmsg" id="Message" cols="30" rows="5" value={msg} onChange={(e) => setMsg(e.target.value)}>

            </textarea>
            <div className='mybutton'>
              <button type="submit" onClick={onContact}>Send Message </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contactus