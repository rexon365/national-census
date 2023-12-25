import classNames from 'classnames';
import styles from './faq-tabs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export interface FaqTabsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FaqTabs = ({ className }: FaqTabsProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.main}>
            <div className={styles['div-tab']}>
                <div>
                    <h3 className={styles.h3}>Why is a census important? </h3>
                </div>
                <FontAwesomeIcon icon={faPlus} className={styles['plus-icon']} />
            </div></div>
        <div className={styles.main}>
            <div className={styles['div-tab']}>
                <div>
                    <h3 className={styles.h3}>What is the deadline? </h3>
                </div>
                <FontAwesomeIcon icon={faPlus} className={styles['plus-icon2']} />
            </div></div>
        <div className={styles.main}>
            <div className={styles['div-tab']}>
                <div>
                    <h3 className={styles.h3}>Is my information secure? </h3>
                </div>
                <FontAwesomeIcon icon={faPlus} className={styles['plus-icon3']} />
            </div></div>
        <div className={styles.main}>
            <div className={styles['div-tab']}>
                <div>
                    <h3 className={styles.h3}>How can I participate? </h3>
                </div>
                <FontAwesomeIcon icon={faPlus} className={styles['plus-icon4']} />
            </div></div>
    </div>;
};
