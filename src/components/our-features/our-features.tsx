import classNames from 'classnames';
import styles from './our-features.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faCog, faFlag, faReceipt, faDharmachakra, faAdjust } from '@fortawesome/free-solid-svg-icons';

export interface OurFeaturesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const OurFeatures = ({ className }: OurFeaturesProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['div-first']}>
            <div className={styles['div-top']}>
                <div className={styles['div-icon']}>
                    <FontAwesomeIcon icon={faChartColumn} className={styles.icon} />
                </div>
                <h3 className={styles.h3}>Quality Data </h3>
                <p className={styles.p}>We ensure to provide our users with the most accurate, reliable, and latest population data, constantly updated by our dedicated professionals. </p>
            </div>
            <div className={styles['div-top']}>
                <div className={styles['div-icon']}>
                    <FontAwesomeIcon icon={faCog} className={styles.icon} />
                </div>
                <h3 className={styles.h3}>Accessibility </h3>
                <p className={styles.p}>Our platform is designed to be user-friendly, making complex data easy to understand and access for everyone. </p>
            </div>
            <div className={styles['div-top']}>
                <div className={styles['div-icon']}>
                    <FontAwesomeIcon icon={faFlag} className={styles.icon} />
                </div>
                <h3 className={styles.h3}>Insights </h3>
                <p className={styles.p}>Our in-depth insights can assist you in making informed decisions, whether for your research, studies or for an organization. </p>
            </div></div>
        <div className={styles['div-second']}>
            <div className={styles['div-top']}>
                <div className={styles['div-icon']}>
                    <FontAwesomeIcon icon={faReceipt} className={styles.icon} />
                </div>
                <h3 className={styles.h3}>Updates </h3>
                <p className={styles.p}>Rest assured, with us you will always have your finger on the pulse of the latest population trends and statistics. </p>
            </div>
            <div className={styles['div-top']}>
                <div className={styles['div-icon']}>
                    <FontAwesomeIcon icon={faDharmachakra} className={styles.icon} />
                </div>
                <h3 className={styles.h3}>Support </h3>
                <p className={styles.p}>Our team is always ready to provide assistance with meticulous precision. We are available 24/7 for our user queries. </p>
            </div>
            <div className={styles['div-top']}>
                <div className={styles['div-icon']}>
                    <FontAwesomeIcon icon={faAdjust} className={styles.icon} />
                </div>
                <h3 className={styles.h3}>Training </h3>
                <p className={styles.p}>We offer personalized training sessions to help users navigate and make the most out of the data available on our platform. </p>
            </div>
        </div>
    </div>;
};
