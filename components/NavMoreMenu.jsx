"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const PANEL_WIDTH = 220;
const PANEL_GAP = 10;
const VIEWPORT_PADDING = 16;

export default function NavMoreMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const canUsePortal = typeof document !== "undefined";

  const updatePosition = () => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const centeredLeft = rect.left + rect.width / 2;
    const minLeft = PANEL_WIDTH / 2 + VIEWPORT_PADDING;
    const maxLeft = window.innerWidth - PANEL_WIDTH / 2 - VIEWPORT_PADDING;

    setPosition({
      top: rect.bottom + PANEL_GAP,
      left: Math.min(Math.max(centeredLeft, minLeft), maxLeft),
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    updatePosition();

    const closeOnOutsidePress = (event) => {
      if (
        triggerRef.current?.contains(event.target) ||
        panelRef.current?.contains(event.target)
      ) {
        return;
      }

      setIsOpen(false);
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="nav-link nav-more-trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>More</span>
        <span className="nav-chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      {canUsePortal &&
        isOpen &&
        createPortal(
          <div
            ref={panelRef}
            className="nav-more-panel nav-more-panel--open"
            role="menu"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-more-item"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}
