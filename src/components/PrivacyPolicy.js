import React from "react";

const PrivacyPolicy = () => {
  const companyName = "YN Demolition / YN Enterprise";
  const contactEmail = "privacy@ynenterprise.com";
  const effectiveDate = "November 21, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-md text-gray-500">
              Effective date: <span className="font-semibold">{effectiveDate}</span>
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                **Personal Identification Information:** Name, email address, phone number, and physical address collected when you request a quote or service.
              </li>
              <li>
                **Project Details:** Information related to demolition projects, site photos, plans, and specifications necessary for providing service estimates and execution.
              </li>
              <li>
                **Usage Data:** Cookies, analytics data (e.g., IP address, browser type, pages visited) to understand website performance and user behavior.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>To **respond to your inquiries** and provide accurate demolition service quotes.</li>
              <li>To **deliver and manage** the services you have contracted us for.</li>
              <li>To **improve our website and services** based on usage patterns and feedback.</li>
              <li>To **comply with legal obligations** and regulatory requirements.</li>
              <li>To **ensure the security** of our operations and prevent fraudulent activity.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
              3. Disclosure and Sharing of Information
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal data. We may share information only as necessary for business operations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                **Service Providers:** With third-party vendors who perform functions on our behalf (e.g., hosting, analytics, legal counsel).
              </li>
              <li>
                **Legal Requirements:** When required by law, subpoena, or government request.
              </li>
              <li>
                **Business Transfer:** In connection with a merger, sale of company assets, or acquisition.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
              4. Data Security and Retention
            </h2>
            <p className="text-gray-700">
              We employ commercially reasonable security measures (e.g., encryption, firewalls) to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We retain your information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
              5. Your Privacy Rights
            </h2>
            <p className="text-gray-700">
              Depending on your location, you may have the right to request access to, correction of, or deletion of your personal data we hold. To exercise these rights, please contact us using the details below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the **"Effective date"** at the top. You are advised to review this policy periodically for any changes.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
              7. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Privacy Policy or your data, please contact us:
            </p>

            <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-lg text-gray-900 font-bold mb-1">{companyName}</p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-yellow-600 hover:text-yellow-700 font-medium transition duration-150 ease-in-out underline"
                >
                  {contactEmail}
                </a>
              </p>
            </div>
          </section>

          <footer className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
            <p>
              **Disclaimer:** This policy is intended as a general guideline and does **not** constitute legal advice. Please consult with a legal professional to ensure full compliance with all applicable laws and regulations.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;