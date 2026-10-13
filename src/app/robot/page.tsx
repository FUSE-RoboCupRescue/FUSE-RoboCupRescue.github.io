import type { Metadata } from "next";
import SponsorBand from "@/components/sponsor-band";
import { Download } from "@/components/icons";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Robots",
  description: "PHRYNE and TUBer: the two tracked rescue robots designed by FUSE for RoboCup Rescue.",
};

export default function Robots() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1 className="display">Robots</h1>
          <p className="lead">
            Two designs so far. Each one is shaped by what we learned building the last, and by what we could afford to
            make.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <article className="robot split split--media-left" aria-labelledby="phryne">
            <div className="robot__media">
              <div className="frame frame--43">
                <img
                  src={asset("/img/phryne-1080.webp")}
                  srcSet={`${asset("/img/phryne-640.webp")} 640w, ${asset("/img/phryne-1080.webp")} 1080w`}
                  sizes="(min-width: 900px) 58vw, 100vw"
                  alt="CAD render of PHRYNE with teal tracks, four flippers and a mounted arm"
                  width={1080}
                  height={862}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div>
              <p className="robot__stage">First design</p>
              <h2 id="phryne" className="h2 robot__name">
                PHRYNE
              </h2>
              <div className="prose robot__text">
                <p>
                  Designed for the 2025 German RoboCup Rescue competition, PHRYNE is built for disaster sites: rubble,
                  collapsed buildings and other terrain that is hard to cross.
                </p>
                <p>
                  Tracks and flippers carry it over obstacles, and a mounted arm handles precise tasks, so the same
                  robot can support responders in many kinds of hazardous situations.
                </p>
              </div>
              <dl className="facts">
                <div>
                  <dt>Drive</dt>
                  <dd>Tracks with four flippers</dd>
                </div>
                <div>
                  <dt>Manipulation</dt>
                  <dd>Mounted arm for precise tasks</dd>
                </div>
              </dl>
              <div className="button-row">
                <a href={asset("/RoboCupRescue_TDP_2025.pdf")} className="button button--ghost" target="_blank" rel="noopener">
                  <Download />
                  Concept paper (PDF, 1.7 MB)
                </a>
              </div>
            </div>
          </article>

          <article className="robot robot--flip split split--media-left" aria-labelledby="tuber">
            <div className="robot__media">
              <div className="frame frame--43">
                <img
                  src={asset("/img/robot4-1600.webp")}
                  srcSet={`${asset("/img/robot4-800.webp")} 800w, ${asset("/img/robot4-1600.webp")} 1600w`}
                  sizes="(min-width: 900px) 58vw, 100vw"
                  alt="TUBer in the plywood test arena with its flippers raised"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div>
              <p className="robot__stage">Second design</p>
              <h2 id="tuber" className="h2 robot__name">
                TUBer
              </h2>
              <div className="prose robot__text">
                <p>
                  PHRYNE turned out to be too expensive to build, so we redesigned it to cost less. TUBer has more
                  parts but is simpler to manufacture, and its materials are cheap and easy to source.
                </p>
                <p>
                  In theory it can handle every kind of terrain. Budget limits and delivery times meant we couldn't get
                  our preferred motors, which reduces its manoeuvrability for now.
                </p>
              </div>
              <dl className="facts">
                <div>
                  <dt>Chassis and flippers</dt>
                  <dd>Aluminium</dd>
                </div>
                <div>
                  <dt>Everything else</dt>
                  <dd>Off-the-shelf parts and 3D-printed components</dd>
                </div>
                <div>
                  <dt>Competed at</dt>
                  <dd>RoboCup Rescue German Open 2026, Cologne</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </section>

      <SponsorBand />
    </>
  );
}
