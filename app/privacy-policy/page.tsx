import { PageShell } from "../_shared/layout/page-shell";

export const metadata = {
  title: "Privacy Policy",
  description: "How HARTS Consulting collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <main className="legal-page">
        <div className="legal-inner">
          <div className="legal-header">
            <p className="legal-eyebrow">Legal</p>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-updated">Last Updated: May 31, 2026</p>
          </div>
          <div className="legal-body">
            <p>
              HARTS Consulting (&ldquo;HARTS&rdquo;, &ldquo;we&rdquo;,
              &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to
              protecting your privacy and handling your information
              responsibly.
            </p>

            <h2>Information We Collect</h2>
            <p>
              When you submit an enquiry through our website, we may collect
              information such as:
            </p>
            <ul>
              <li>Name</li>
              <li>Company / Organisation name</li>
              <li>Work Email</li>
              <li>Country</li>
              <li>Phone number</li>
              <li>Information provided in your message or enquiry</li>
            </ul>
            <p>
              We collect only the information necessary to respond to your
              enquiry and provide information about our services.
            </p>

            <h2>How We Use Your Information</h2>
            <p>The information you provide may be used to:</p>
            <ul>
              <li>Respond to your enquiries and requests</li>
              <li>Communicate regarding our consulting services</li>
              <li>Schedule meetings or discussions</li>
              <li>Improve our services and website experience</li>
              <li>
                Maintain the security and operation of our website
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to
              third parties.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable technical and organisational measures to
              protect the information submitted through our website from
              unauthorised access, disclosure, alteration, or misuse.
            </p>
            <p>
              While we strive to protect your information, no method of
              internet transmission or electronic storage can be guaranteed
              to be completely secure.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain enquiry information only for as long as necessary to
              respond to your request, maintain business records, or comply
              with applicable legal requirements.
            </p>

            <h2>Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of the
              information you have provided to us by contacting us using the
              details below.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or how
              your information is handled, please contact:
            </p>
            <p>
              <strong>HARTS Consulting</strong>
              <br />
              Email:{" "}
              <a href="mailto:hello@hartsconsulting.com">
                hello@hartsconsulting.com
              </a>
            </p>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any
              changes will be posted on this page with an updated revision
              date.
            </p>
            <p>
              By using this website and submitting an enquiry, you
              acknowledge and agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
