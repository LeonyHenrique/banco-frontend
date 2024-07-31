import React, {useState} from "react";
import styles from "./CriarConta.module.css"
import Header from "../../components/header/Header";
import {useNavigate} from 'react-router-dom';

const CriarConta =()=>{
    const [formData,setFormData] = useState({
        nome: "",
        idade:"",
        documento: '',
        email: "",
        senha: "",
        confirmarSenha: "",
        tipoConta: 'corrente',
    });
    const handleChange =(e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {       
        e.preventDefault();
        if (formData.senha !== formData.confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }
        console.log(formData);
};
const navigate = useNavigate();

const handleNavigate = () => {
  navigate('/Home');
};
return (
    <div className={styles.container01}>
    <Header />
    <div className={styles.container}>
  
        <div className={styles.content}>
                <h1>Criar Conta</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="number"
                    name="idade"
                    placeholder="Digite sua idade"
                    value={formData.idade}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="text"
                    name="documento"
                    placeholder="Digite seu documento"
                    value={formData.documento}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Digite seu Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="password"
                    name="senha"
                    placeholder="digite a sua senha"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                    />
                    <input 
                    type="password"
                    name="confirmarSenha"
                    placeholder="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    required
                    />
                 <div className={styles.radioGroup}>
                        <label>
                            <input
                                type="radio"
                                name="tipoConta"
                                value="corrente"
                                checked={formData.tipoConta === 'corrente'}
                                onChange={handleChange}
                            />
                            Conta Corrente
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="tipoConta"
                                value="poupanca"
                                checked={formData.tipoConta === 'poupanca'}
                                onChange={handleChange}
                            />
                            Poupança
                        </label>
                    </div>
                    <button className={styles.button} onClick={handleNavigate}>Ir para Home</button>
                </form>
        </div>
            </div>
        </div>
    );
};

export default CriarConta;