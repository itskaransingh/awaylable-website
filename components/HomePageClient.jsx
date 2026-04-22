"use client";

import { useEffect } from "react";
import Script from "next/script";

import { initHomeInteractions } from "@/lib/home-interactions";
import HomeMarkup from "@/components/HomeMarkup";

export default function HomePageClient() {
  useEffect(() => {
    initHomeInteractions();
  }, []);

  return (
    <>
      <HomeMarkup />
      <Script
        src="https://cdn.awaylable.in/widget.iife.js"
        data-org-id="be4e6ab6-3356-497c-a20a-b51df38fb6d9"
        strategy="lazyOnload"
      />
    </>
  );
}
