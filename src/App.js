import React from "react";
import { Button } from "./Componetes/Button";
import { Input } from "./Componetes/Input";
import { SelectComponete } from "./Componetes/SelectComponete";

const App = () => {

  return (
    <>
      <p className="center">Seja bem vindo(a)!</p>
      <div className="center">Preencha todos os campos requeridos com atenção</div>
      <br></br>
      <label className="center" htmlFor="nome">Nome*</label>
        < Input placeholder="Digite seu nome "/>
      <label className="center" htmlFor="sbrenome">Sobrenome*</label>
        < Input placeholder="Digite seu sobrenome"/>
        <label className="center">Gênero*</label>
        < SelectComponete/>
      <label className="center" htmlFor="email">Email</label>
         < Input placeholder="Digite seu email"/>
      <label className="center" htmlFor="telefone">Telefone*</label>
       < Input placeholder="Digite seu telefone"/>
      <label className="center" htmlFor="senha">Senha*</label>
        < Input placeholder="Digite sua Senha"/>
      <label className="center" htmlFor="confirmeSenha">Confirme sua senha*</label>
        < Input placeholder="Confirme sua senha"/>
        < Button />
    </>
  );
}

export default App;
