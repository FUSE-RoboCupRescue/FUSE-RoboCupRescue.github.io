import type { Metadata } from "next";
import { team } from "@/data/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Team",
  description: "The students behind FUSE, the RoboCup Rescue team from TU Berlin.",
};

export default function Team() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1 className="display">Team</h1>
          <p className="lead">
            Students, mostly from TU Berlin, covering mechanical design, electronics and software.
          </p>
        </div>
      </header>

      <section className="section--tight">
        <div className="container">
          <figure>
            <div className="frame" style={{ aspectRatio: "16 / 9" }}>
              <img
                src={asset("/img/team-event-1600.webp")}
                srcSet={`${asset("/img/team-event-800.webp")} 800w, ${asset("/img/team-event-1600.webp")} 1600w`}
                sizes="(min-width: 1264px) 1200px, 100vw"
                alt="The FUSE team kneeling and standing around TUBer in the competition hall"
                width={1600}
                height={1200}
                style={{ objectPosition: "50% 45%" }}
                decoding="async"
              />
            </div>
            <figcaption className="caption">The team with TUBer in the competition hall.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="visually-hidden">Members</h2>
          <ul className="team-grid">
            {team.map((m) => (
              <li key={m.name} className="member">
                <div className="member__photo">
                  <img src={asset(m.photo)} alt={`Portrait of ${m.name}`} width={480} height={480} loading="lazy" decoding="async" />
                </div>
                <h3 className="member__name">{m.name}</h3>
                <p className="member__role">{m.role}</p>
                <p className="member__study">{m.study}</p>
                {m.email && (
                  <a className="member__mail" href={`mailto:${m.email}`}>
                    {m.email}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
