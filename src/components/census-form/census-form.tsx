import classNames from 'classnames';
import styles from './census-form.module.scss';

export interface CensusFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CensusForm = ({ className }: CensusFormProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.contain}>
            <form className={styles['census-formx']}>
                <h1 className={styles['census-form-titlex']}>National Online Population Census Form</h1>
                <h3 className={styles['census-form-subtitlex']}>Please fill out the form below with your information</h3>

                <h2 className={styles['census-form-section-titlex']}>Personal Information</h2>
                Full Legal Name (First, Middle, Last):<br /><input type="text" name="fullname" className={styles['census-form-inputx']} placeholder="Enter your full name" /><br />
                Gender (Please select the option that best describes your gender identity):<br />
                <select name="gender" className={styles['census-form-inputx']}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br />
                Date of Birth (Please enter in the format DD/MM/YYYY):<br /><input type="text" name="dob" placeholder="Enter your date of birth" className={styles['census-form-inputx']} /><br />
                Nationality (Please enter your citizenship status):<br /><input type="text" name="nationality" placeholder="Enter your nationality" className={styles['census-form-inputx']} /><br />

                <h2 className={styles['census-form-section-titlex']}>Residential Information</h2>
                Current Residential Address (Street, Apartment/Unit number):<br /><input type="text" name="address" placeholder="Enter your address" className={styles['census-form-inputx']} /><br />
                City/Town:<br /><input type="text" name="city" placeholder="Enter your city" className={styles['census-form-inputx']} /><br />
                Region:<br />
                <select name="region" className={styles['census-form-inputx']}>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Centre">Centre</option>
                    <option value="East">East</option>
                    <option value="Far North">Far North</option>
                    <option value="Littoral">Littoral</option>
                    <option value="North">North</option>
                    <option value="Northwest">Northwest</option>
                    <option value="West">West</option>
                    <option value="South">South</option>
                    <option value="Southwest">Southwest</option>
                </select><br />
                Postal Code/ZIP Code:<br /><input type="text" name="postal_code" placeholder="Enter your postal code" className={styles['census-form-inputx']} /><br />
                Country:<br /><input type="text" name="country" placeholder="Enter your country" className={styles['census-form-inputx']} /><br />

                <h2 className={styles['census-form-section-titlex']}>Contact Information</h2>
                Primary Email Address:<br /><input type="email" name="email" placeholder="Enter your email" className={styles['census-form-inputx']} /><br />
                Primary Phone Number (with country code):<br /><input type="tel" name="phone" placeholder="Enter your phone number" className={styles['census-form-inputx']} /><br />

                <h2 className="census-form-section-title">Employment Information</h2>
                Current Occupation (Job Title and Description):<br /><input type="text" name="occupation" placeholder="Enter your occupation" className={styles['census-form-inputx']} /><br />
                Name of Employer or Self-Employed (if applicable):<br /><input type="text" name="employer" placeholder="Enter your employer" className={styles['census-form-inputx']} /><br />
                Work Address (if applicable):<br /><input type="text" name="work_address" placeholder="Enter your work address" className={styles['census-form-inputx']} /><br />

                <h2 className={styles['census-form-section-titlex']}>Household Information</h2>
                Total Number of individuals living in the household (including yourself):<br /><input type="number" name="household_size" placeholder="Enter the number of individuals" className={styles['census-form-inputx']} /><br />
                Number of Male Children:<br /><input type="number" name="male_children" placeholder="Enter the number of male children" className={styles['census-form-inputx']} /><br />
                Number of Female Children:<br /><input type="number" name="female_children" placeholder="Enter the number of female children" className={styles['census-form-inputx']} /><br />
                Number of Children Above 21 Years Old:<br /><input type="number" name="children_above_21" placeholder="Enter the number of children above 21" className={styles['census-form-inputx']} /><br />
                Number of Children Under 21 Years Old:<br /><input type="number" name="children_under_21" placeholder="Enter the number of children under 21" className={styles['census-form-inputx']} /><br />
                Please note: Children who have passed away are not considered in this census.<br />

                <h2 className={styles['census-form-section-titlex']}>Declaration</h2> I hereby declare that the information provided is true to the best of my knowledge and belief. I understand that any false statement may lead to penalties as provided by law.<div className={styles.check}>
                    <input type="checkbox" name="declaration" value="agree" className={styles['census-form-checkboxx']} /> Yes I approve the declaration
                </div>
                <br />
                Signature (Type full name):<br /><input type="text" name="signature" placeholder="Enter your full name" className={styles['census-form-inputx']} />
                Date (Please enter in the format DD/MM/YYYY):<br /><input type="date" name="date" value="2024-01-11" className={styles['census-form-inputx']} /><br />
                <div className={styles.sbt}>
                    <input type="submit" value="Submit" className={styles['census-form-submitx']} />
                </div></form>

        </div>
    </div>;
};
