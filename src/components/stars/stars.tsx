import classNames from 'classnames';
import styles from './stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export interface StarsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Stars = ({ className }: StarsProps) => {
    return <div className={classNames(styles.root, className)}>
        <FontAwesomeIcon icon={faStar} className={styles.star} />
        <FontAwesomeIcon icon={faStar} className={styles.star} />
        <FontAwesomeIcon icon={faStar} className={styles.star} />
        <FontAwesomeIcon icon={faStar} className={styles.star} />
        <FontAwesomeIcon icon={faStar} className={styles.star} />
    </div>;
};
