import styles from './GenericCard.module.css';

interface PropsGenericCard {
    icon: React.ReactNode,
    label: string,
    link: string,
    customClass: string,
    user: string
}

function GenericCard({icon, label, link, customClass, user} : PropsGenericCard) {
    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <div className={`${styles.contentGerericCard} ${styles[customClass]}`}>
                <span>{icon}</span>
                <h2>{label}</h2>
                <p>{user}</p>
            </div>
        </a>
    );
}

export default GenericCard;