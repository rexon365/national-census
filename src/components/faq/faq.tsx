import classNames from 'classnames';
import styles from './faq.module.scss';
import { FaqTabs } from '../faq-tabs/faq-tabs';

export interface FAQProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FAQ = ({ className }: FAQProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.div1}>
            <h2 className={styles.h2}>Accurate census, the stepping stone for inclusive policy </h2>
        </div>
        <div className={styles.div2}>
            <div>
                <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.img} />
            </div>
            <div className={styles.tabs}>
                <FaqTabs />
            </div>
        </div>
    </div>;
};
