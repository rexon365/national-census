import classNames from 'classnames';
import styles from './error-page.module.scss';

export interface ErrorPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ErrorPage = ({ className }: ErrorPageProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.container}>
            <div className={styles['div-image']}>
                <img src="https://img.freepik.com/free-vector/error-404-page-found-confused-characters_107791-13163.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.2038404149.1703700836&amp;semt=sph" alt="" className={styles.image} />
            </div>
            <h1 className={styles.h1}>PAGE NOT FOUND</h1>
            <div className={styles['the-btn']}>
                <button className={styles.btn}>Go Back</button>
            </div>
        </div>
    </div>;
};
