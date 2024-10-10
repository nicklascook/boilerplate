import React from "react";
import { tw } from "~/lib/utils";

const headerClasses = "text-lg font-medium my-3";
const textClasses = "my-2";

export const Privacy: React.FC = ({}) => {
  return (
    <div className="mx-auto max-w-[80rem] flex-1 flex-col items-center justify-center gap-4 px-4 py-24 pt-12">
      <h1 className="mb-9 text-center text-3xl font-semibold md:text-4xl">
        Privacy Policy
      </h1>
      <p className={tw(textClasses)}>
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your information. By using our service, you consent to
        this policy.
      </p>

      <h3 className={tw(headerClasses)}>1. Information Collection</h3>
      <p className={tw(textClasses)}>
        We collect information you provide directly to us, such as when you
        create an account, submit content, or communicate with us. This may
        include personal information like your name and email address.
      </p>

      <h3 className={tw(headerClasses)}>2. Use of Information</h3>
      <p className={tw(textClasses)}>
        The information we collect is used to provide, maintain, and improve our
        services. We also use the information to communicate with you and
        personalize our services for you.
      </p>

      <h3 className={tw(headerClasses)}>3. Sharing of Information</h3>
      <p className={tw(textClasses)}>
        We do not share your personal information with third parties, except as
        necessary to provide our services or if required by law.
      </p>

      <h3 className={tw(headerClasses)}>4. Data Security</h3>
      <p className={tw(textClasses)}>
        We take reasonable measures to protect your information from
        unauthorized access, alteration, or destruction.
      </p>

      <h3 className={tw(headerClasses)}>5. Your Rights</h3>
      <p className={tw(textClasses)}>
        You have the right to access, update, or delete your personal
        information at any time. If you wish to exercise these rights, please
        contact us at crauxy@gmail.com.
      </p>

      <h3 className={tw(headerClasses)}>6. Data Retention</h3>
      <p className={tw(textClasses)}>
        We retain your information for as long as necessary to provide our
        services and as required by law.
      </p>

      <h3 className={tw(headerClasses)}>7. Changes to This Policy</h3>
      <p className={tw(textClasses)}>
        We may update this privacy policy from time to time. We will notify you
        of any changes by posting the new policy on this page.
      </p>

      <p className={tw(textClasses)}>
        If you have any concerns about our use of your information or wish to
        have your data deleted, please contact us at crauxy@gmail.com or use the
        button in the bottom right.
      </p>
    </div>
  );
};

export default Privacy;
