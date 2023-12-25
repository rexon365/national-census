import classNames from 'classnames';
import styles from './email-submit.module.scss';

export interface EmailSubmitProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const EmailSubmit = ({ className }: EmailSubmitProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['input-banner']}>
            <input placeholder="Enter your email" className={styles['input-text-banner']} />
            <button className={styles['input-banner-submit']}>Subscribe</button>
        </div>
    </div>;
};
