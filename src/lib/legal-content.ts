export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: { label?: string; text: string }[];
  table?: { headers: string[]; rows: string[][] };
  note?: string;
};

export type LegalDoc = {
  title: string;
  effectiveDate: string;
  complianceFramework: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  effectiveDate: "July 1, 2026",
  complianceFramework: "Digital Personal Data Protection (DPDP) Act",
  sections: [
    {
      heading: "1. Introduction",
      paragraphs: [
        'We value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how Oji Ramen ("we", "us", "our") processes your personal data as a "Data Fiduciary" when you use our Loyalty Application ("App"), in accordance with the Digital Personal Data Protection (DPDP) Act and other applicable regulations.',
      ],
    },
    {
      heading: "2. Data We Collect (Specified Purposes)",
      paragraphs: [
        "To provide you with rewards, track your store visits, and manage your membership, we collect the following digital personal data after obtaining your explicit, unambiguous, and unconditional consent:",
      ],
      bullets: [
        {
          label: "Identity Information",
          text: "Full Name, Age / Date of Birth (DoB) – collected to verify eligibility and provide age-appropriate rewards or birthday offers.",
        },
        {
          label: "Contact Details",
          text: "Email Address, Phone Number – collected to secure your account, send transaction/visit updates, and distribute earned discount vouchers.",
        },
        {
          label: "App Usage & Store Interaction Data",
          text: "Timestamp of taps, physical store location metadata at the moment of the physical tap, cumulative visit counts, and history of redeemed rewards.",
        },
      ],
    },
    {
      heading: "3. Legal Basis for Processing",
      paragraphs: [
        "Under the DPDP framework, your personal data is processed strictly based on Consent. By downloading the App and opting into the loyalty program, you provide an explicit itemized notice acknowledgement. You have the right to withdraw this consent at any absolute time via the app settings or by contacting our Data Protection Officer.",
      ],
    },
    {
      heading: "4. How We Use Your Personal Data",
      paragraphs: ["Your data is processed strictly for the following purposes:"],
      bullets: [
        { text: "Validating your identity when you physically tap your app at our store counter." },
        { text: "Incrementing your cumulative visit counter dynamically to upgrade your loyalty tier." },
        { text: "Issuing conditional discount codes, tier perks, and personalized culinary notifications." },
        { text: "Preventing loyalty system fraud, account duplication, or unauthorized perk redemptions." },
      ],
    },
    {
      heading: "5. Retention of Personal Data",
      paragraphs: [
        "We retain your personal data only as long as your loyalty account remains active. Under DPDP compliance, if you do not use the application or visit our store for a continuous period of 24 months, or if you choose to delete your account, your data will be permanently erased or anonymized within 30 days, unless statutory preservation is mandated by law.",
      ],
    },
    {
      heading: "6. Data Principal Rights (Your Rights under DPDP)",
      paragraphs: [
        'As the "Data Principal" under the DPDP Act, you possess explicit rights which you can exercise through our app dashboard or via written email request:',
      ],
      table: {
        headers: ["Right", "Description"],
        rows: [
          [
            "Right to Access & Summary",
            "You can request a summary of your personal data being processed and a history of all rewards shared.",
          ],
          [
            "Right to Correction & Erasure",
            "You can correct inaccurate details (e.g., misspelled name) or request absolute deletion of your profile.",
          ],
          [
            "Right to Withdraw Consent",
            "You can revoke permission to process your phone or email anytime, which automatically pauses loyalty benefits.",
          ],
          [
            "Right to Grievance Redressal",
            "You can file a formal complaint with our Data Protection Officer regarding any processing concerns.",
          ],
        ],
      },
    },
    {
      heading: "7. Data Protection Officer (DPO) Contact Details",
      paragraphs: [
        "For any queries, corrections, or exercise of your DPDP rights, please reach out to our designated Grievance Officer / Data Protection Officer:",
      ],
      bullets: [
        { label: "Designation", text: "Data Protection & Grievance Redressal Officer" },
        { label: "Email", text: "privacy@yourrestaurantapp.com" },
        { label: "Mailing Address", text: "[Insert Restaurant Corporate Office Physical Address]" },
        {
          label: "Turnaround Time",
          text: "All statutory DPDP complaints will be acknowledged within 48 hours and resolved within 7 business days.",
        },
      ],
      note: "The email and mailing address above are placeholders carried over from the source document — replace them with Oji Ramen's real contact details before publishing.",
    },
  ],
};

export const deleteAccount: LegalDoc = {
  title: "Delete Your Account",
  effectiveDate: "July 1, 2026",
  complianceFramework: "Account Deletion & Data Retention Policy",
  sections: [
    {
      heading: "1. Overview",
      paragraphs: [
        "Oji Ramen allows users to permanently delete their account and associated personal data at any time. This page outlines the account deletion process and our data retention policy.",
      ],
    },
    {
      heading: "2. How to Delete Your Account",
      paragraphs: [
        "You can delete your account directly from the Oji Ramen app by following these steps:",
      ],
      bullets: [
        { text: "Open the Oji Ramen app." },
        { text: "Sign in to your account." },
        { text: "Go to Profile." },
        { text: "Tap Settings." },
        { text: "Select Delete Account." },
        { text: "Confirm your account deletion request." },
      ],
      note: 'Alternatively, you can request account deletion by emailing us at support@ojiramen.com from your registered email address with the subject "Account Deletion Request." Your request will be processed within 30 days after verification.',
    },
    {
      heading: "3. What Data Is Deleted",
      paragraphs: [
        "When your account is deleted, the following information is permanently removed:",
      ],
      bullets: [
        { text: "Your profile information (name, mobile number, email address, if applicable)" },
        { text: "Account credentials and login information" },
        { text: "Loyalty membership information" },
        { text: "Reward redemption history" },
        { text: "Visit history associated with your account" },
        { text: "Notification preferences" },
        { text: "App preferences and settings" },
        { text: "Any personal information associated with your account" },
      ],
    },
    {
      heading: "4. What Data May Be Retained",
      paragraphs: [
        "Some information may be retained for a limited period where required by law or for legitimate business purposes, including:",
      ],
      bullets: [
        { text: "Records required for legal, tax, or regulatory compliance" },
        { text: "Information necessary for fraud prevention, dispute resolution, or security investigations" },
        { text: "Anonymous or aggregated analytics data that cannot identify you personally" },
      ],
      note: "Any retained information will be securely stored and deleted once the applicable retention period has expired.",
    },
    {
      heading: "5. Processing Time",
      paragraphs: [
        "Account deletion requests are completed within 180 days after successful verification. Once your account is deleted, this action is permanent and cannot be undone.",
      ],
    },
    {
      heading: "6. Need Help?",
      paragraphs: [
        "If you have any questions or experience issues deleting your account, please contact us:",
      ],
      bullets: [{ label: "Email", text: "support@ojiramen.com" }],
    },
  ],
};

export const termsAndConditions: LegalDoc = {
  title: "Terms & Conditions",
  effectiveDate: "July 1, 2026",
  complianceFramework: "Standard Consumer Protection & Digital Commerce Laws",
  sections: [
    {
      heading: "1. Agreement to Terms",
      paragraphs: [
        'Welcome to the Oji Ramen Loyalty Application. By downloading, registering, or utilizing this application, you enter into a legally binding agreement with Oji Ramen to abide by these Terms and Conditions ("Terms").',
      ],
    },
    {
      heading: "2. Eligibility & Account Creation",
      bullets: [
        {
          label: "Age Restriction",
          text: "You must be at least 18 years of age to establish an independent loyalty profile. If you are under 18, you may only use this app under the strict supervision of a parent or legal guardian who agrees to be bound by these Terms.",
        },
        {
          label: "Account Authenticity",
          text: "You agree to provide accurate, truthful details (Name, Age, Phone, Email) during registration. Registering multiple accounts to manipulate the loyalty system is strictly prohibited and constitutes grounds for immediate lifetime banning.",
        },
      ],
    },
    {
      heading: '3. The Visit Tracking Mechanism ("Tap System")',
      bullets: [
        {
          label: "Verification Metric",
          text: "Every time you visit a participating restaurant outlet, you must physically present and tap your application code at the point-of-sale (POS) terminal during your purchase transaction.",
        },
        {
          label: "Limitations on Adjustments",
          text: "Only one (1) valid visit can be registered and incremented per individual per calendar day. Retrospective visit additions for past dining sessions where the application was not tapped will not be entertained or applied manually.",
        },
      ],
    },
    {
      heading: "4. Tiered Loyalty Progression & Rewards Structure",
      paragraphs: [
        "Your loyalty status scales dynamically based on your recorded cumulative visit counts within a rolling 12-month period. The reward ecosystem operates as follows:",
      ],
      table: {
        headers: ["Tier Level", "Required Visits", "Standard Discounts & Perquisites"],
        rows: [
          ["Bronze (Base)", "0 - 5 Visits", "Enrolled Entry Level. Welcome discount coupon of 5% off on your next visit."],
          ["Silver", "6 - 15 Visits", "10% standard discount on all food items; free beverage on every 10th visit."],
          ["Gold (Premium)", "16+ Visits", "15% flat discount on total bill, priority reservation booking, and free birthday dessert."],
        ],
      },
      note: "Discounts and vouchers issued within the application are non-transferable, possess zero cash value, and cannot be stacked or combined with any other concurrent offline promotions, happy hours, or festival menus unless explicitly stated.",
    },
    {
      heading: "5. Modification of Program and Termination",
      bullets: [
        {
          label: "Right to Amend",
          text: "Oji Ramen reserves the explicit, unilateral right to modify, restructure, suspend, or terminate the loyalty tier parameters, percentages of discounts, or the entire loyalty program framework with a 15-day prior digital notice pushed through the app.",
        },
        {
          label: "Account Revocation",
          text: "We reserve the right to forfeit points, downgrade tiers, or freeze accounts instantly if any fraudulent manipulation, terminal tampering, or abusive behavior toward store staff is identified.",
        },
      ],
    },
    {
      heading: "6. Limitation of Liability",
      paragraphs: [
        "Oji Ramen is not liable for any temporary application downtime, network errors at the store terminal that prevent successful visit taps, loss of data due to mobile device compatibility issues, or unredeemed expired vouchers.",
      ],
    },
    {
      heading: "7. Governing Law & Dispute Resolution",
      paragraphs: [
        "These Terms and Conditions shall be governed by and construed in accordance with national laws. Any disputes arising from the terms of the loyalty system shall be subject to the exclusive jurisdiction of the localized municipal courts where Oji Ramen's primary registered corporate headquarters is located.",
      ],
    },
  ],
};
