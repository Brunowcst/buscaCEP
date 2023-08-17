import styles from './About.module.css';

function About() {
    return (
        <div className={styles.content}>
            <p>Este projeto tem o objetivo principal de praticar o uso do pacote <a href="https://ant.design/" target="_blank" rel="noreferrer external">Ant-Desing.</a></p>

            <p>O Ant Design React é uma biblioteca que oferece um conjunto abrangente de componentes e ferramentas para ajudar os desenvolvedores a criarem interfaces incríveis e responsivas em seus projetos ReactJS.</p>
        </div>
    );
}

export default About;