import React from 'react'


export const Button = () => {

  function Clique (event){
    event.preventDefault();
    console.log("oiee")
    alert("Formulário enviado com sucesso");

  };
  return (
    <>
    <div className='center' style={{margin: "25px"}}>
        <button  onClick={Clique}  style={{margin: "0 auto", color: "white"}}>Enviar</button>
    </div>
    </>  
  )
}
