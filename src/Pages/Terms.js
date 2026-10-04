import React from "react";
import LegalPageLayout from "../components/LegalPageLayout";

function Terms() {
  const sections = [
    { id: "acceptance", number: "01", title: "Using this website", body: <p>By using this website, you agree to use it lawfully and respectfully. If you do not agree with these terms, please do not use the website.</p> },
    { id: "information", number: "02", title: "Website information", body: <><p>We aim to keep website information accurate and useful, but service descriptions, availability, timing and pricing may change. Website content is general information and is not a final quotation or project specification.</p><p>A formal scope, price and timeframe will be confirmed separately for each project.</p></> },
    { id: "enquiries", number: "03", title: "Quotes and enquiries", body: <p>Submitting an enquiry does not create a contract or guarantee service availability. Any estimate depends on the information provided, site conditions, access, approvals, safety requirements and the agreed scope of work.</p> },
    { id: "content", number: "04", title: "Intellectual property", body: <p>Unless stated otherwise, website text, branding, graphics, layout and original content belong to YN Demolition / YN Enterprise or its licensors. You may view the website for enquiry purposes, but must not copy, republish or commercially reuse content without permission.</p> },
    { id: "availability", number: "05", title: "Availability and links", body: <p>We do not guarantee that the website will always be available, error-free or free from harmful components. Links to third-party websites are provided for convenience, and we are not responsible for their content or privacy practices.</p> },
    { id: "liability", number: "06", title: "Liability and updates", body: <p>To the extent permitted by law, YN Demolition / YN Enterprise is not responsible for loss caused by reliance on general website information. We may update these terms from time to time by publishing a revised version on this page.</p> },
    { id: "contact", number: "07", title: "Contact", body: <><p>Questions about these terms can be sent to our team.</p><a href="mailto:privacy@ynenterprise.com" className="font-bold text-amber-700 underline">privacy@ynenterprise.com</a></> },
  ];
  return <LegalPageLayout eyebrow="Clear expectations" title="Terms & Conditions" intro="The basic terms for using the YN Demolition website, requesting information and starting a conversation about our services." effectiveDate="November 21, 2025" sections={sections} activePage="terms" />;
}

export default Terms;
