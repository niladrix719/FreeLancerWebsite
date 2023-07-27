import styles from '@/styles/Terms_And_Conditions.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Data_Protection(props) {
  return (
    <div className={styles.termsNConditions}>
      <Navbar user={props.user} company={props.company} setCompany={props.setCompany} setUser={props.setUser} />
      <div className={styles.main}>
        <div className={styles.body}>
          <div className={styles.termsNConditions_form} style={{ height: '88.3vh' }}>
            <h1 className={styles.heading}>Data Protection Policy</h1>
            <p className={styles.subHeading}>Your Agreement</p>
            <p className={styles.para}>Welcome to Fipezo, a platform committed to protecting your data and privacy. This Data Protection Policy (&quot;Policy&quot;) outlines how we collect, use, and safeguard your personal information when you use the Fipezo website and any associated services (collectively referred to as the &quot;Platform&quot;). By accessing or using the Platform, you agree to the practices described in this Policy. If you do not agree with any part of this Policy, please refrain from using the Platform.

              <span className={styles.title}>Information Collection and Use</span>
              1.1 Personal Data: We may collect personal information, such as your name, email address, and contact details, when you create an account or interact with the Platform. This data is used to provide and improve our services and communicate with you.

              1.2 Usage Data: When you access the Platform, we may automatically collect certain information about your device, including your IP address, browser type, and usage patterns. This data is used to analyze user behavior and improve the Platform's performance.

              <span className={styles.title}>Data Storage and Security</span>
              2.1 Data Retention: We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Policy, or as required by law.

              2.2 Data Security: We take reasonable measures to protect your data from unauthorized access, disclosure, or alteration. However, no data transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.

              <span className={styles.title}>Cookies and Tracking Technologies</span>
              3.1 Cookies: The Platform may use cookies and similar tracking technologies to enhance your user experience and collect information about your interactions with the Platform.

              3.2 Third-Party Services: We may use third-party services that utilize cookies and other tracking technologies. These services are governed by their respective privacy policies.

              <span className={styles.title}>Your Choices</span>
              4.1 Account Information: You have the right to access, update, and delete your personal information by managing your account settings.

              4.2 Marketing Communications: You can opt-out of receiving promotional emails or notifications from us by following the unsubscribe instructions included in the messages.

              <span className={styles.title}>Changes to this Policy</span>
              5.1 Policy Updates: Fipezo may modify or update this Policy from time to time. We will notify you of significant changes through the Platform or other communication channels.

              <span className={styles.title}>Contact Us</span>
              6.1 If you have any questions or concerns about this Policy or your data, please contact us at privacy@fipezo.com.

              <span className={styles.title}>Termination</span>
              7.1 Termination by Fipezo: Fipezo reserves the right, at its sole discretion, to suspend, terminate,</p>
          </div>
          {/* <div className={styles.btns}>
            <button className={styles.btn}>I Agree</button>
            <button className={styles.btn}>Cancel</button>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Data_Protection;