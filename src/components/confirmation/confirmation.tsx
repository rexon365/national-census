import classNames from 'classnames';
import styles from './confirmation.module.scss';

export interface ConfirmationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Confirmation = ({ className }: ConfirmationProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.contain}>
            <h1 className={styles.h1}>Thank You for Your Submission</h1>
            <p className={styles.p}>Your submitted information will have to be verified before it is validated. You will be notified once the verification process is complete. We appreciate your patience and cooperation.</p>
            <button className={styles.btn}>View recent statistics</button>
        </div>
    </div>;
};
