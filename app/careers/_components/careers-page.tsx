"use client";

import Link from "next/link";
import { PageHero } from "../../_shared/layout/page-hero";
import { FinalCTA } from "../../_shared/layout/final-cta";

export function CareersPage() {
  return (
    <main className="careers-page">
      <PageHero
        scene="careers"
        layout="split"
        eyebrow="Careers"
        titleSoft="Build a career that"
        titleStrong="Defines Transformation."
        subtitle="Join a senior team of strategists, operators, and technologists shaping decisive, durable change for global leaders."
        actions={
          <>
            <Link className="solid-button large" href="#openings">
              View current openings
            </Link>
          </>
        }
      />

      <section className="careers-culture section" id="culture">
        <div className="careers-culture-inner">
          <p className="eyebrow">Culture</p>
          <h2>Shape the Future of Consulting.</h2>
          <p>
            At HARTS, we work with talented professionals who are passionate about solving business challenges and delivering meaningful results. We value collaboration, practical thinking, and a commitment to excellence.
          </p>
        </div>
      </section>

      <section className="careers-openings section" id="openings">
        <div className="section-heading careers-opening-heading">
            <p className="eyebrow">Current Openings</p>
            <h2>No Open Positions at This Time</h2>
            <p>
              HARTS is not actively recruiting for any roles at the moment.
              New opportunities will be published on this page as they open.
            </p>
            {/* <p>
              If you believe your experience aligns with the way we work, we
              welcome you to share your profile with our talent team. Every
              submission is reviewed, and we will reach out when a suitable
              opportunity arises.
            </p> */}
        </div>
      </section>

      {/* <FinalCTA
        eyebrow="Stay Connected"
        heading="Introduce yourself before the next opening goes live."
        body="Share your profile and a short note on how you can contribute. We will reach out when a role aligns with your experience."
        primary={{ label: "Send Your Interest", href: "/contact?source=careers" }}
      /> */}
    </main>
  );
}
