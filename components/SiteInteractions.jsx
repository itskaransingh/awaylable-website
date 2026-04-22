"use client";

import { useEffect } from "react";

import { initHomeInteractions } from "@/lib/home-interactions";

export default function SiteInteractions() {
  useEffect(() => {
    initHomeInteractions();
  }, []);

  return null;
}
