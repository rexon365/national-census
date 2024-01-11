import classNames from 'classnames';
import styles from './age-verification.module.scss';

export interface AgeVerificationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AgeVerification = ({ className }: AgeVerificationProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.outter}>
            <div className={styles.content}>
                <h3 className={styles.h3}>Are you over 21?</h3>
                <p className={styles.p}>Please confirm you are 21 years or older to participate in the census.</p>
                <div className={styles['buttons-div']}>
                    <button className={styles.button}>YES</button>
                    <button className={styles.button}>NO</button>
                </div>
            </div>
        </div></div>;
};
