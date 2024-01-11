import classNames from 'classnames';
import styles from './profile-status.module.scss';

export interface ProfileStatusProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProfileStatus = ({ className }: ProfileStatusProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.contain}>
            <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.2038404149.1703700836&amp;semt=ais" alt="" className={styles['profile-image']} />
            <h4 className={styles.h4}>JOHN DOE MAXWEL</h4>
            <p className={styles.email}>jdmaxwel@email.com</p>
            <button className={styles.button}>Not Registered</button>
        </div>
    </div>;
};
