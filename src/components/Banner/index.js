import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Matheus Oliveira, aluno de Front-end da Alura. Neste portifólio compartilho vários conhecimentos adquiridos, espero que goste :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='Bordered'
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do autor Mathues"
                />
            </div>
        </div>
    );
}