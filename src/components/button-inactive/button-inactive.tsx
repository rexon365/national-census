import classNames from 'classnames';
import styles from './button-inactive.module.scss';

export interface ButtonInactiveProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ButtonInactive = ({ className }: ButtonInactiveProps) => {
    return <div className={classNames(styles.root, className)}>
        <button className={styles['button-inactive']}>Statistics</button>
    </div>;
};
