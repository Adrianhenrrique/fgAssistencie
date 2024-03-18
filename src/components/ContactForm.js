import style from './ContactForm.module.css'
import { IMaskInput } from "react-imask";
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    if (!name || !email || !numero || !message) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos antes de enviar.");
    }
  };
  
  return (
    <>
    <form className={style.form} id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xeqyonba" method="post" onSubmit={handleSubmit}>
      <h1>Receba o contato de um de nossos assistente em até 24 horas</h1>
      <fieldset className={style.formOut} id="fs-frm-inputs">
        <label className={style.title} for="full-name">Seu Nome: </label>
        <input className={style.input} type="text" name="name" id="full-name" placeholder="Seu nome" required="" onChange={(e) => setName(e.target.value)}/>

        <label className={style.title} for="email-address">Email:</label>
        <input className={style.input} type="email" name="_replyto" id="email-address" placeholder="Ex.: seuemail@gmail.com" required="" onChange={(e) => setEmail(e.target.value)}/>
        
        <label className={style.title} id='numberTell' for="numero-telefone">Numero telefone:</label>
        <IMaskInput
          mask="(00) 00000-0000"
          className={style.input} 
          type="txt" 
          name="numero" 
          id="numero-telefone" 
          placeholder="whatsapp/celular" 
          required="" 
          onAccept={(value) => setNumero(value)}
        />
        
        <label className={style.title} for="message">Mensagem: </label>
        <textarea className={style.input} style={{
          height: '200px'
        }} rows="5" name="message" id="message" placeholder="Digite aqui" required="" onChange={(e) => setMessage(e.target.value)}></textarea>
        
        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
      </fieldset>
    <input className={style.button} type="submit" value="Enviar contato"/>
    </form>
    </>
  );
}

export default ContactForm;