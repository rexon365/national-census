import classNames from 'classnames';
import styles from './accessible-data.module.scss';

export interface AccessibleDataProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AccessibleData = ({ className }: AccessibleDataProps) => {
    return <div className={styles['div-accessible-data']}>
        <div>
            <h2 className={styles['title-accessible-data']}>Accessible data for informed public decisions</h2>
        </div>
        <div>
            <h4 className={styles['h4-accessible-data']}>Our mission is to empower the public by making population census data accessible and understandable.</h4>
        </div>
    </div>;
};
