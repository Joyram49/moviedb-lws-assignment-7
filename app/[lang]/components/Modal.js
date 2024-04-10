"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function MovieModal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const handleClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className='fixed inset-0 z-10 bg-black/60 mx-auto '
      onClick={handleClick}
    >
      <div
        ref={wrapper}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 h-auto   bg-white rounded text-dark p-6'
      >
        {children}
      </div>
    </div>
  );
}
