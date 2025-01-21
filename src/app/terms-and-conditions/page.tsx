import Link from "next/link";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phonico | Terms and Conditions",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonico Terms of Use</h1>
      <p className={styles.paragraph}>
        Thank you for choosing Phonico. By using our services, you agree to
        comply with the terms outlined in this document. These Terms of Use
        constitute a binding agreement between you and Phonico, LLC ("Phonico,"
        "we," "us," or "our"). Please read them carefully.
      </p>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>1. Service Agreement</h2>
        <p className={styles.paragraph}>
          By using Phonico services, you agree to abide by these Terms of Use,
          including but not limited to our Fair Use Policy, Privacy Policy, and
          Acceptable Use Guidelines. Failure to comply may result in service
          suspension or termination.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>2. Fair Use Policy</h2>
        <p className={styles.paragraph}>
          Phonico implements a Fair Use Policy to ensure service quality for all
          customers. Our standard service plan includes a maximum of 2,000
          minutes per month for voice calls. Excessive usage beyond this limit
          may result in service suspension, reduced speeds, or additional
          charges.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>3. Acceptable Use Guidelines</h2>
        <h3 className={styles.subtitle}>3.1 Personal Use Only:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Services are for individual, non-commercial use.
          </li>
          <li className={styles.listItem}>
            Unauthorized resale, sharing, or commercial exploitation is
            prohibited.
          </li>
        </ul>

        <h3 className={styles.subtitle}>3.2 Prohibited Activities:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Telemarketing, mass texting, or robocalls.
          </li>
          <li className={styles.listItem}>
            Any activity that could harm the network performance or integrity.
          </li>
          <li className={styles.listItem}>
            Illegal or fraudulent use of the service.
          </li>
          <li className={styles.listItem}>
            Use of the service in ways that violate applicable laws or
            regulations.
          </li>
        </ul>

        <h3 className={styles.subtitle}>3.3 Data and SMS Usage:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Data and messaging usage must align with fair usage policies.
          </li>
          <li className={styles.listItem}>
            Data-heavy activities such as continuous streaming or downloads may
            lead to bandwidth restrictions.
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>4. Account Responsibilities</h2>
        <p className={styles.paragraph}>
          <strong>4.1 Security:</strong> Users must maintain the confidentiality
          of their account credentials and notify Phonico immediately in case of
          unauthorized access.
        </p>
        <p className={styles.paragraph}>
          <strong>4.2 Account Modifications:</strong> Users may manage their
          service plans via the official Phonico website or by contacting
          customer support.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>5. Service Availability</h2>
        <p className={styles.paragraph}>
          Coverage, performance, and network availability may be impacted by
          various external factors such as weather, terrain, or congestion.
          Phonico does not guarantee uninterrupted service.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>6. Billing and Payments</h2>
        <p className={styles.paragraph}>
          <strong>6.1 Payment Responsibilities:</strong> Customers agree to pay
          for services as outlined in their selected plans. Late payments may
          result in service suspension or additional fees.
        </p>
        <p className={styles.paragraph}>
          <strong>6.2 Taxes and Fees:</strong> Applicable taxes and regulatory
          fees will be added to the total bill.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>7. Cancellations and Refunds</h2>
        <p className={styles.paragraph}>
          <strong>7.1 Refund Policy:</strong> Phonico offers refunds only for
          valid reasons, as determined by our customer service team. This policy
          is in place to prevent abuse and ensure fair usage. Refund requests
          must be submitted within 7 days of activation.
        </p>
        <p className={styles.paragraph}>
          <strong>7.2 Service Cancellation:</strong> Plans can be canceled
          anytime; however, refunds will not be provided for unused service
          periods.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>8. Privacy Policy</h2>
        <p className={styles.paragraph}>
          We prioritize your privacy. Please review our{" "}
          <Link
            href="https://phonico.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", color: "blue" }}
          >
            Privacy Policy
          </Link>{" "}
          to learn how we collect, use, and protect your data.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>9. Dispute Resolution</h2>
        <p className={styles.paragraph}>
          By using Phonico services, you agree to resolve disputes through
          binding arbitration in Orange County, Florida, waiving your right to a
          jury trial.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>11. Contact Us</h2>
        <p className={styles.contact}>Phone: (484) 746-6426</p>
        <p className={styles.contact}>Email: support@phonico.com</p>
      </div>
    </div>
  );
}
