import classNames from 'classnames';
import styles from './welcome-card.module.scss';

export interface WelcomeCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WelcomeCard = ({ className }: WelcomeCardProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.contain}>
            <div className={styles['left-div']}>
                <h2 className={styles.h2}>Hello, John Doe</h2>
                <p className={styles.p}>Welcome to your personal census dashboard</p>
                <button className={styles.button}>Take the census now</button>
            </div>
            <div className={styles['right-div']}>
                <img src="https://admin.pixelstrap.com/zeta/assets/images/images.svg" alt="" className={styles.image} />
            </div>
        </div>
    </div>;
};
