import { forwardRef } from "react";
import { useBlurReveal } from "../hooks/useBlurReveal";

function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(node);
      else ref.current = node;
    });
  };
}

/** An <img> that resolves from a soft blur to sharp as it scrolls into view. */
export const BlurImage = forwardRef(function BlurImage(
  { className = "", delay = 0, ...imgProps },
  forwardedRef
) {
  const revealRef = useBlurReveal({ delay });
  return <img ref={mergeRefs(revealRef, forwardedRef)} className={className} {...imgProps} />;
});
