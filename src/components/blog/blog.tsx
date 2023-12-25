import classNames from 'classnames';
import styles from './blog.module.scss';
import { PostCard } from '../post-card/post-card';

export interface BlogProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Blog = ({ className }: BlogProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.title}>
            <h1 className={styles.h1}>Get Updated with our Blog Posts </h1>
            <p className={styles.p}>Stay informed on demographic trends and gain insights from leading industry professionals. </p>
        </div>
        <div className={styles['div-card']}>
            <PostCard />
        </div>
        <div className={styles['div-btn']}>
            <button className={styles['btn-more']}>Read More</button>
        </div>
    </div>;
};
