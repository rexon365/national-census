import classNames from 'classnames';
import styles from './testimonial-card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Stars } from '../stars/stars';

export interface TestimonialCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestimonialCard = ({ className }: TestimonialCardProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['div-container']}>
            <div>
                <p className={styles.p}>The support and training modules have really helped me track the latest population trends effectively. </p>
            </div>
            <div className={styles['user-daetail']}>
                <div className={styles['user-icon']}>
                    <FontAwesomeIcon icon={faUser} className={styles.user} />
                </div>
                <div className={styles.name}>
                    <h5 className={styles.name}>John Doe </h5>
                    <div className={styles.stars}>
                        <Stars />
                    </div></div>
                <div className={styles['div-quote']}>
                    <FontAwesomeIcon icon={faQuoteRight} className={styles.quote} />
                </div>
            </div>
        </div>
        <div className={styles['div-container']}>
            <div>
                <p className={styles.p}>CensusHub has made demographic analysis incredibly straightforward. A great tool for researchers. </p>
            </div>
            <div className={styles['user-daetail']}>
                <div className={styles['user-icon']}>
                    <FontAwesomeIcon icon={faUser} className={styles.user} />
                </div>
                <div className={styles.name}>
                    <h5 className={styles.name}>Jane Doe</h5>
                    <div className={styles.stars}>
                        <Stars />
                    </div></div>
                <div className={styles['div-quote']}>
                    <FontAwesomeIcon icon={faQuoteRight} className={styles.quote} />
                </div>
            </div>
        </div>
    </div>;
};
