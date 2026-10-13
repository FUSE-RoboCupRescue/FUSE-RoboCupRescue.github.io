"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { photo } from "@/data/site";
import { asset } from "@/lib/asset";
import { ArrowLeft, ArrowRight, Close } from "./icons";

type Item = { base: string; alt: string };

export default function Gallery({ items }: { items: Item[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIndex((i) => {
      if (i !== null) triggers.current[i]?.focus();
      return null;
    });
  }, []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const current = index === null ? null : items[index];

  return (
    <>
      <ul className="gallery">
        {items.map((item, i) => {
          const p = photo(item.base);
          return (
            <li key={item.base}>
              <button
                type="button"
                className="gallery__item"
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                onClick={() => setIndex(i)}
                aria-label={`Open photo: ${item.alt}`}
              >
                <img
                  src={asset(`/img/${item.base}-800.webp`)}
                  alt={item.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </li>
          );
        })}
      </ul>

      {current &&
        createPortal(
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <figure key={current.base}>
            <img
              src={asset(photo(current.base).src)}
              alt={current.alt}
              width={1600}
              height={1200}
            />
            <figcaption>
              {current.alt} ({index! + 1} of {items.length})
            </figcaption>
          </figure>
          <button ref={closeRef} type="button" className="lightbox__close" onClick={close} aria-label="Close photo">
            <Close />
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous photo">
            <ArrowLeft />
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Next photo">
            <ArrowRight />
          </button>
        </div>,
          document.body
        )}
    </>
  );
}
