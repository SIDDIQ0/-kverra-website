import { Link } from "react-router-dom";
import { useTilt } from "../hooks/useTilt";

/** A router Link with pointer-tracked 3D tilt (see useTilt). */
export function TiltCard({ to, className = "", children, tilt = 8, style }) {
  const ref = useTilt(tilt);
  return (
    <Link ref={ref} to={to} className={className} style={{ transformStyle: "preserve-3d", ...style }}>
      {children}
    </Link>
  );
}
