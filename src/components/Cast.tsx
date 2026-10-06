"use client"
import type { Player } from "asciinema-player";
import { useEffect, useRef } from "react";

export interface CastProps {
  src: string;
  [k: string]: any;
}
export const Cast: React.FC<CastProps> = ({ src, ...opts }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let player: Player | undefined
    let cancelled = false;

    (async () => {
      const AsciinemaPlayer = await import("asciinema-player")
      if (!cancelled && ref.current) {
        player = AsciinemaPlayer.create(src, ref.current, opts)
      }
    })();
    return () => {
      cancelled = true
      player?.dispose()
    }
  }, [src])

  return <div style={{ width: '100%', maxWidth: '600px' }} ref={ref} />
}
