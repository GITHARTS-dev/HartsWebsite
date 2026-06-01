import { PageShell } from "../_shared/layout/page-shell";

export const metadata = {
  title: "Terms of Use",
  description: "Terms and conditions governing use of the HARTS Consulting website.",
};

export default function TermsOfUsePage() {
  return (
    <PageShell>
      <main className="legal-page">
        <div className="legal-inner">
          <div className="legal-header">
            <p className="legal-eyebrow">Legal</p>
            <h1 className="legal-title">Terms of Use</h1>
            <p className="legal-updated">Last Updated: May 31, 2026</p>
          </div>
          <div className="legal-body">
            <p>
              Welcome to HARTS Consulting (&ldquo;HARTS&rdquo;,
              &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By
              accessing or using this website, you agree to comply with these
              Terms of Use. If you do not agree with these terms, please
              discontinue use of the website.
            </p>

            <h2>Website Purpose</h2>
            <p>
              This website is provided for informational purposes and to
              enable prospective clients, partners, and stakeholders to learn
              about HARTS Consulting and submit business enquiries.
            </p>
            <p>
              The information provided on this website does not constitute
              legal, financial, tax, investment, or other professional advice.
              Any engagement for consulting services will be governed by a
              separate written agreement between HARTS Consulting and the
              client.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos,
              designs, frameworks, methodologies, images, and other materials,
              is the property of HARTS Consulting unless otherwise stated.
            </p>
            <p>
              You may not reproduce, distribute, modify, publish, or use any
              content from this website for commercial purposes without prior
              written permission from HARTS Consulting.
            </p>

            <h2>Acceptable Use</h2>
            <p>
              You agree to use this website only for lawful purposes and not
              to:
            </p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>
                Attempt to gain unauthorised access to the website or its
                systems
              </li>
              <li>
                Interfere with the security or operation of the website
              </li>
              <li>
                Submit false, misleading, or fraudulent information through
                enquiry forms
              </li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              The website and its content are provided on an &ldquo;as
              is&rdquo; and &ldquo;as available&rdquo; basis. While we strive
              to keep information accurate and up to date, HARTS Consulting
              makes no warranties or representations regarding the
              completeness, accuracy, reliability, or availability of the
              website or its content.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, HARTS Consulting shall
              not be liable for any direct, indirect, incidental,
              consequential, or special damages arising from the use of, or
              inability to use, this website or reliance on any information
              contained within it.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in
              accordance with the laws of India. Any disputes arising from the
              use of this website shall be subject to the jurisdiction of the
              courts in Germany / India.
            </p>

            <h2>Contact Us</h2>
            <p>
              For questions regarding these Terms of Use, please contact:
            </p>
            <p>
              <strong>HARTS Consulting</strong>
              <br />
              Email:{" "}
              <a href="mailto:hello@hartsconsulting.com">
                hello@hartsconsulting.com
              </a>
            </p>
            <p>
              By continuing to use this website, you acknowledge that you
              have read, understood, and agreed to these Terms of Use.
            </p>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
