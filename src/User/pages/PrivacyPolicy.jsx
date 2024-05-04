import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <div
        className="text-center mt-auto mx-auto contact-info py-5 bg-cover bg-center"
        style={{ backgroundImage: "url(assets/contact-bg.jpg)" }}
      >
        <p className="g-book text-uppercase text-white mb-2">Majestic Hotel</p>
        <h1 className="heading-fonts text-uppercase text-3xl md:text-6xl text-white mb-0">
          Privacy Policy
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-6">
          At The Majestic Hotel, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard your information
          when you visit our website or utilize our services.
        </p>

        <h2 className="text-2xl font-bold my-4">Information We Collect</h2>
        <p>
          When you make a reservation, sign up for our newsletter, or interact
          with our website, we may collect personal information such as your
          name, email address, phone number, and payment details. We may also
          collect information about your preferences and interests to enhance
          your experience with us.
        </p>

        <h2 className="text-2xl font-bold my-4">How We Use Your Information</h2>
        <ol className="list-decimal list-inside mb-6">
          <li>Processing reservations and payments.</li>
          <li>Providing personalized services and offers.</li>
          <li>
            Communicating with you about your bookings, inquiries, and special
            promotions.
          </li>
          <li>Improving our website and services.</li>
          <li>Complying with legal obligations.</li>
        </ol>

        <h2 className="text-2xl font-bold my-4">Data Security</h2>
        <p>
          We take the security of your personal information seriously and have
          implemented measures to protect it from unauthorized access,
          alteration, disclosure, or destruction. Our website is encrypted using
          Secure Socket Layer (SSL) technology to ensure the secure transmission
          of data.
        </p>

        <h2 className="text-2xl font-bold my-4">Third-Party Disclosure</h2>
        <p>
          We may share your information with trusted third parties who assist us
          in operating our website, conducting our business, or servicing you,
          as long as those parties agree to keep this information confidential.
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties without your consent.
        </p>

        <h2 className="text-2xl font-bold my-4">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete the personal
          information we hold about you. You may also opt-out of receiving
          marketing communications from us at any time by following the
          unsubscribe instructions included in our emails.
        </p>

        <h2 className="text-2xl font-bold my-4">Cookie Policy</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your
          browsing experience and collect information about how you use our
          website. You can control cookies through your browser settings or by
          opting out of specific types of cookies in our Cookie Preference
          Center.
        </p>

        <h2 className="text-2xl font-bold my-4">Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be reflected on this page, and we encourage you
          to review this policy periodically for updates.
        </p>

        <p className="mb-6">
          By using our website or providing us with your personal information,
          you consent to the collection, use, and disclosure of information in
          accordance with this Privacy Policy.
        </p>

        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:contact@themajestichotel.com"
            className="text-blue-500 hover:text-blue-700"
          >
            contact@themajestichotel.com
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default PrivacyPolicy;
