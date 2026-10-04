import React from "react";
import LegalPageLayout from "./LegalPageLayout";

const bulletList = (items) => (
  <ul className="list-disc space-y-2 pl-6">
    {items.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "overview", number: "01", title: "Purpose and application",
      subsections: [
        { id: "policy-scope", title: "Policy scope", body: <p>This policy applies when you visit our website, submit an enquiry, request a quote, contact us or otherwise interact with our business.</p> },
        { id: "australian-privacy", title: "Australian privacy principles", body: <p>We aim to manage personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles, to the extent they apply to our business.</p> },
      ],
      body: <><p>YN Demolition / YN Enterprise respects your privacy and is committed to handling personal information responsibly and transparently. This policy explains how we collect, use, hold, disclose and protect information when you visit our website, request a quote, submit an enquiry or otherwise interact with our business.</p><p>We aim to handle personal information in accordance with applicable Australian privacy laws, including the Privacy Act 1988 (Cth) and the Australian Privacy Principles, to the extent they apply to our business.</p></>,
    },
    {
      id: "collect", number: "02", title: "Information we collect",
      body: <><p>Depending on how you interact with us, we may collect:</p>{bulletList(["Full name, phone number and email address.", "Property or project address, suburb and postcode.", "Details about your demolition, site-clearing or related project.", "Information provided through quote forms and correspondence.", "Preferred contact details and communication preferences.", "Other information you voluntarily provide."])}<p>We generally request only information reasonably necessary to respond to your enquiry, assess project requirements, provide services or operate our business.</p></>,
    },
    {
      id: "technical", number: "03", title: "Website and technical information",
      body: <><p>When you visit our website, technical information may be collected automatically depending on the technologies and services in use.</p>{bulletList(["IP address, browser type and version.", "Device type and operating system.", "Pages viewed, referring source and visit date or time.", "Approximate location derived from technical data.", "Information about how you interact with the website."])}<p>This information may be used for website functionality, security, analytics, performance measurement and improvement.</p></>,
    },
    {
      id: "collection", number: "04", title: "How we collect information",
      body: <><p>We may collect personal information:</p>{bulletList(["Directly from you through an enquiry or quote form.", "When you contact us by phone, email or another communication channel.", "When you request service information or discuss a project with our team.", "When you use or interact with our website.", "Through analytics, cookies, pixels, tags or similar technologies.", "From third parties where reasonably necessary and permitted by law."])}<p>Where practical, we collect personal information directly from you.</p></>,
    },
    {
      id: "use", number: "05", title: "How we use your information",
      body: <><p>We may collect, hold and use information to:</p>{bulletList(["Respond to enquiries and assess demolition or site-clearing requirements.", "Prepare quotes or estimates and arrange inspections or consultations.", "Coordinate requested services and communicate project updates.", "Manage customer, transaction and business records.", "Improve our website, services and customer experience.", "Maintain security and investigate fraud, misuse or incidents.", "Comply with legal obligations and protect our legal rights.", "Manage complaints, disputes and related enquiries."])}<p>We will not use your personal information for unrelated purposes unless permitted or required by law.</p></>,
    },
    {
      id: "cookies", number: "06", title: "Cookies, analytics and advertising technologies",
      body: <><p>Our website may use cookies, pixels, tags, Google Tag Manager, analytics tools and similar technologies to operate, secure and improve the website.</p><p>These technologies may help us with:</p>{bulletList(["Website analytics and performance measurement.", "Understanding website interactions and improving user experience.", "Measuring advertising or marketing performance.", "Website security and relevant advertising or remarketing where applicable."])}<p>Third-party technology providers may process information according to their own privacy policies and applicable laws. You can control or restrict cookies through your browser settings, although this may affect some website functionality.</p></>,
    },
    {
      id: "forms", number: "07", title: "Lead forms and quote enquiries",
      body: <><p>Information submitted through our website or an associated online form may be used to contact you, understand your project, assess whether our services are suitable, prepare or arrange a quote, arrange a site assessment and provide relevant service information.</p><p>Submitting an enquiry does not guarantee that a quote, service or contract will be provided.</p></>,
    },
    {
      id: "marketing", number: "08", title: "Direct marketing",
      body: <p>Where permitted by law, we may use your contact information to send service information, offers or updates that may be relevant to you. We will comply with applicable Australian direct-marketing and spam requirements. You may ask us to stop marketing communications or use the unsubscribe option provided.</p>,
    },
    {
      id: "sharing", number: "09", title: "When information is shared",
      body: <><p>We do not sell your personal information. We may disclose relevant information where reasonably necessary to operate our business or provide requested services, including to:</p>{bulletList(["Contractors and service providers involved in requested services.", "Website hosting, IT, software and cloud-service providers.", "Analytics or advertising technology providers.", "Professional advisers and payment providers where applicable.", "Government agencies or authorities where required or authorised by law.", "Other parties where you have requested or authorised disclosure."])}<p>We expect providers handling information on our behalf to use it only for the relevant business purpose and to handle it appropriately.</p></>,
    },
    {
      id: "overseas", number: "10", title: "Overseas disclosure",
      body: <p>Some technology, hosting, cloud, analytics, advertising or other providers may operate or store information outside Australia. Personal information may therefore be handled by overseas recipients depending on the services used at the relevant time. Where required by law, we will take reasonable steps in relation to overseas disclosures.</p>,
    },
    {
      id: "security", number: "11", title: "Security and retention",
      body: <><p>We take reasonable steps to protect personal information from unauthorised access, disclosure, misuse, loss, destruction or alteration. Information may be stored using business systems, website platforms, cloud services, email systems and other technology providers.</p><p>No electronic storage or transmission method is completely secure. We retain information only as long as reasonably necessary for the purpose collected, legitimate business purposes or where required or permitted by law. When no longer required, we may securely delete, destroy or de-identify it where practical.</p></>,
    },
    {
      id: "rights", number: "12", title: "Access, correction and privacy choices",
      body: <><p>You may request access to, or correction of, personal information we hold about you. We may verify your identity before responding. You may also ask us to delete information, subject to legal, accounting, contractual, insurance or regulatory requirements.</p><p>Where lawful and practicable, you may deal with us anonymously or using a pseudonym. This may not be practical when we need your details to respond, provide a quote, arrange services or comply with legal obligations.</p></>,
    },
    {
      id: "complaints", number: "13", title: "Privacy complaints",
      subsections: [
        { id: "complaint-information", title: "Information to include", body: <p>Please provide your name and contact details, details of your concern, relevant dates or communications and the outcome you are seeking.</p> },
        { id: "complaint-contact", title: "Contact for privacy complaints", body: <p>Email privacy@ynenterprise.com or call +61 431 270 377. We aim to respond as soon as reasonably practicable.</p> },
      ],
      body: <><p>To make a privacy complaint, provide your name and contact details, the concern, relevant dates or communications and the outcome you are seeking. We will take reasonable steps to investigate and respond.</p><div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><p className="font-black text-slate-950">privacy@ynenterprise.com</p><p className="mt-1 text-sm text-slate-600">+61 431 270 377</p><p className="mt-1 text-sm text-slate-600">84 Browns Plains Rd, Browns Plains, Brisbane QLD 4118</p></div><p>If your complaint remains unresolved, you may be able to contact the Office of the Australian Information Commissioner (OAIC), subject to the requirements that apply to your circumstances.</p></>,
    },
    {
      id: "third-party", number: "14", title: "Children and third-party websites",
      body: <><p>Our website and services are not specifically directed at children, and we do not knowingly seek unnecessary personal information from children.</p><p>Our website may link to third-party websites or services. Their own privacy practices apply after you leave our website, and we are not responsible for their content, security or privacy practices.</p></>,
    },
    {
      id: "anonymity", number: "15", title: "Anonymity and pseudonymity",
      body: <p>Where lawful and practicable, you may deal with us without identifying yourself or by using a pseudonym. This may not be practical where we need your identity or contact details to respond to an enquiry, provide a quote, arrange services, enter into a contract or comply with legal obligations.</p>,
    },
    {
      id: "changes", number: "16", title: "Changes to this policy",
      body: <p>We may update this policy when our business operations, website, technology providers, advertising technologies, data practices or applicable privacy requirements change. The updated version will be published on this website with a revised last-updated date.</p>,
    },
    {
      id: "important-notice", number: "17", title: "Important notice",
      body: <p>This policy should be kept accurate and updated whenever the website, advertising technologies, forms, CRM systems, service providers or data-handling practices change.</p>,
    },
    {
      id: "contact", number: "18", title: "Contact us",
      subsections: [
        { id: "business-contact", title: "YN Demolition / YN Enterprise", body: <p>84 Browns Plains Rd, Browns Plains, Brisbane QLD 4118 · +61 431 270 377 · ynenterprise.com</p> },
        { id: "privacy-enquiries", title: "Privacy enquiries", body: <p>For privacy questions, access or correction requests and complaints, email privacy@ynenterprise.com.</p> },
      ],
      body: <><p>For questions, access or correction requests, privacy enquiries or complaints, contact YN Demolition / YN Enterprise:</p><div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><p className="font-black text-slate-950">privacy@ynenterprise.com</p><p className="mt-1 text-sm text-slate-600">+61 431 270 377</p><p className="mt-1 text-sm text-slate-600">ynenterprise.com</p></div></>,
    },
  ];

  return <LegalPageLayout eyebrow="Your information matters" title="Privacy Policy" intro="How YN Demolition / YN Enterprise handles information shared through this website, our enquiry process, quote forms and related technologies." effectiveDate="November 21, 2025" lastUpdated="October 4, 2026" sections={sections} activePage="privacy" />;
};

export default PrivacyPolicy;
