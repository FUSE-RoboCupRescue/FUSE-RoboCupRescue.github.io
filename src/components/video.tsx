"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";
import { Play } from "./icons";

type Props = {
  id: string;
  title: string;
  poster: string;
  start?: number;
};

/**
 * Shows a local poster image and only loads the YouTube player after a click,
 * so the page doesn't pull in YouTube's scripts on first load.
 */
export default function Video({ id, title, poster, start }: Props) {
  const [playing, setPlaying] = useState(false);
  const params = new URLSearchParams({ autoplay: "1", rel: "0" });
  if (start) params.set("start", String(start));

  return (
    <div className="video">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video__poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          <img src={asset(poster)} alt="" width={800} height={600} loading="lazy" decoding="async" />
          <span className="video__play">
            <Play />
          </span>
          <span className="video__label">{title}</span>
        </button>
      )}
    </div>
  );
}
