import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './boasVindas.module.css'
import Header from '../../components/header/Header';


const boasVindas =()=>{
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('/Home');
};
    return (
        <div className={styles.container01}>
        <Header />
        <div className={styles.container}>
        <div className={styles.content}>
          <h1>Bem vindo ao Banco Pulse</h1>
          <p>Explore nossos benefícios e soluções financeiras.</p>
          <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src="/img/Black_Master.png" alt="Serviço 1" />
                        <h2>Cartões</h2>
                        <p>Adquira já o seu!</p>
                    </div>
                    <div className={styles.card}>
                        <img src="/img/emprestimo01.png" alt="Serviço 2"
                         />
                        <h2>Empréstimos</h2>
                        <p>venha fazer o seu orçamento</p>
                    </div>
                    <div className={styles.card}>
                        <img src="/img/cotacao.png" alt="Serviço 2" 
                       />
                        <h2>Cotação</h2>
                        <p>Solicite uma cotação e descubra as melhores ofertas disponíveis para você</p>
                    </div>
                    <div className={styles.card}>
                        <img src="/img/investimento.png" alt="Serviço 2" />
                        <h2>Investimentos</h2>
                        <p>Explore oportunidades de investimento e aumente seu patrimônio.</p>
                    </div>
                </div>
                <button className={styles.button} onClick={handleNavigate}>Ir para Home</button>
        </div>
        </div>
    </div>
  );
};
export default boasVindas;