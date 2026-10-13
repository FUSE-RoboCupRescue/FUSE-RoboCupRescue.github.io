import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, team } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with FUSE, the RoboCup Rescue team from TU Berlin.",
};

export default function Contact() {
  const leader = team[0];
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1 className="display">Contact</h1>
          <p className="lead">Questions, sponsoring, or want to join? Write to us.</p>
          <a className="contact-mail" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>
      </header>

      <section className="section">
        <div className="container contact-cards">
          <div className="contact-card">
            <h2>Team leader</h2>
            <p>
              {leader.name}
              <br />
              <a href={`mailto:${leader.email}`}>{leader.email}</a>
            </p>
          </div>
          <div className="contact-card">
            <h2>Lab</h2>
            <address>
              Marchstr. 23, MAR 4-4, Room 4.025
              <br />
              10587 Berlin
            </address>
            <a
              className="button button--ghost button--small"
              href="https://www.openstreetmap.org/search?query=Marchstra%C3%9Fe%2023%2C%2010587%20Berlin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in map
            </a>
          </div>
          <div className="contact-card">
            <h2>Team members</h2>
            <p>Every member's email is on the team page.</p>
            <Link className="button button--ghost button--small" href="/team">
              Go to the team page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
