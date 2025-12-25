import { useMemo } from "react";

import "./styles.css";

export interface LandoNorrisTextEffectProps {
  text: string;
  href: HTMLAnchorElement["href"];
  target?: HTMLAnchorElement["target"];
}

export const LandoNorrisTextEffect = (props: LandoNorrisTextEffectProps) => {
  const parts = useMemo(() => {
    const segmenter = new Intl.Segmenter("en");
    return Array.from(segmenter.segment(props.text));
  }, [props.text]);

  return (
    <a href={props.href} target={props.target}>
      {parts.map((part) => {
        if (part.segment === " ") {
          return <span key={part.index}>&nbsp;</span>;
        }

        return <span key={part.index}>{part.segment}</span>;
      })}
    </a>
  );
};
