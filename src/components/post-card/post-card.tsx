import classNames from 'classnames';
import styles from './post-card.module.scss';

export interface PostCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PostCard = ({ className }: PostCardProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['div-card']}>
            <div>
                <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.img} />
            </div>
            <div>
                <h2 className={styles.h2}>Understanding Population Data: A Simplified Guide </h2>
                <p className={styles.p}>Grasp the intricacies of population data, its importance, and how you can use the data effectively. </p>
            </div>
        </div>
        <div className={styles['div-card']}>
            <div>
                <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.img} />
            </div>
            <div>
                <h2 className={styles.h2}>Data-Driven Decision Making: A Comprehensive Guide </h2>
                <p className={styles.p}>Explore how data-driven decisions are transforming businesses, government policies and people&apos;s lives. </p>
            </div>
        </div>
        <div className={styles['div-card']}>
            <div>
                <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.img} />
            </div>
            <div>
                <h2 className={styles.h2}>Demographic Trends to Watch in 2023 </h2>
                <p className={styles.p}>Take a deep dive into the population patterns expected to shape the world in 2023 and beyond. </p>
            </div>
        </div>
    </div>;
};
