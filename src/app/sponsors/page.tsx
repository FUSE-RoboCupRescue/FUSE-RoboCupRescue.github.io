import type { Metadata } from "next";
import { Mail } from "@/components/icons";
import { contactEmail, sponsors } from "@/data/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "The organisations supporting FUSE, and how your company can sponsor our RoboCup Rescue robot.",
};

const benefits = [
  {
    title: "Your products, at work",
    text: "Show what your components can do inside a robot built for some of the hardest terrain in robotics competitions.",
  },
  {
    title: "Your logo, on the field",
    text: "We feature sponsor logos on our team jerseys and on the robot itself, at every competition and event.",
  },
  {
    title: "A live demo at your event",
    text: "We can bring the robot to one of your events and show your products in action.",
  },
];

export default function Sponsors() {
  const mail = `mailto:${contactEmail}?subject=${encodeURIComponent("Sponsoring FUSE")}`;
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1 className="display">Sponsors</h1>
          <p className="lead">These organisations make our work possible. Thank you.</p>
        </div>
      </header>

      <section className="section--tight">
        <div className="container">
          <h2 className="visually-hidden">Current sponsors</h2>
          <ul className="logo-wall">
            {sponsors.map((s) => (
              <li key={s.short}>
                <a className="logo-tile" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} (opens in a new tab)`}>
                  <img src={asset(s.logo)} alt="" loading="lazy" decoding="async" />
                </a>
                <p className="logo-tile__name">{s.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="support" className="cta-band" aria-labelledby="support-title" style={{ scrollMarginTop: "var(--header-h)" }}>
        <div className="container" style={{ paddingBlock: "clamp(56px, 8vw, 104px)" }}>
          <div className="section-head">
            <h2 id="support-title" className="h2">
              Sponsor the next robot
            </h2>
            <p className="lead">
              We're looking for sponsors for our next competition. Your support goes straight into parts, manufacturing
              and travel.
            </p>
          </div>
          <div className="benefits">
            {benefits.map((b) => (
              <div key={b.title} className="benefit">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
          <div className="button-row" style={{ marginTop: 40 }}>
            <a href={mail} className="button button--primary">
              <Mail />
              Email us about sponsoring
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
