import React, { useState, useEffect } from 'react';
import { getSaldo, depositar, sacar } from "../../../service/Aperacoes/operacoes";
import styles from "./Home.module.css";
import Header from '../../components/header/Header';

const Home = () => {
    const [saldo, setSaldo] = useState();
    const [valor, setValor] = useState();
  
    useEffect(() => {
      fetchSaldo();
  }, []);
    const fetchSaldo = async () => {
      try {
        const response = await getSaldo();
        setSaldo(response.data);
      } catch (error) {
        console.error('Erro ao buscar saldo:', error);
      }
    };
  
    const handleDepositar = async () => {
      try {
        await depositar(valor);
        fetchSaldo();
        setValor('');
      } catch (error) {
        console.error('Erro ao depositar:', error);
      }
    };
  
    const handleSacar = async () => {
      try {
        await sacar(valor);
        fetchSaldo();
        setValor('');
      } catch (error) {
        console.error('Erro ao sacar:', error);
      }
    };

    return (
      <div className={styles.container01}>
    <Header />
       <div className={styles.container}>
          <h1> ⚝ Banco ⚝ </h1>
          <div className={styles.saldoContainer}>        
            <button className={styles.button} onClick={fetchSaldo}>Buscar Saldo</button>
            <p className={styles.saldo}>Saldo atual: R${saldo},00</p>
          </div>      
          <div className={styles.operacoesContainer}>  
            <input
              className={styles.input}
              type="number"
               placeholder="Digite o valor"
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
            />
            <div className={styles.buttonGroup}>
            <button className={styles.button} onClick={handleDepositar}>Depositar</button>
            <button className={styles.button} onClick={handleSacar}>Sacar</button>
          </div>
        </div>
          </div>
          </div>
      );
    };
    
    export default Home;
  