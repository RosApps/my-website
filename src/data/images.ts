// images.ts - central image path manifest for all site photos, certificates, and logos.
// v5.2: All placeholders resolved. Paths match exact filenames in /public/images/.
// Codex task: "Add [filename] to the [section] in images.ts"

export const images = {
  // ── Section headshots ─────────────────────────────────────────────────────
  photos: {
    professional: "/images/Ronaks-headshot.png",
    student:      "/images/HeadshotRo.png",
    coach:        "/images/CoachRoHeadshot.jpeg",
    // Coaching action shots - London Jr. Mustangs
    coachAction1: "/images/yelling.jpg", // Intensity/passion shot - LJM Year 1, shown first/prominently
    coachAction2: "/images/group.jpg",   // RB group photo - LJM Year 2, secondary
    // Personal - Student section ONLY
    packers:      "/images/packers.jpg",
  },

  // ── Designation certificates (PDFs, URL-encoded) ───────────────────────────
  certificates: {
    fmva: "/images/FMVA%20Certificate.pdf",          // Feb 3, 2026
    bida: "/images/BIDA%C2%AE%20Certificate.pdf",    // Apr 9, 2026
    fitp: "/images/FTIP%20Certificate.pdf",          // Mar 18, 2026
    capm: null,                                       // In progress
  },

  // ── Organization logos ─────────────────────────────────────────────────────
  // Apply monochrome CSS treatment at render time: className="brightness-0 invert opacity-60"
  logos: {
    shipnoble:            "/images/SNlogo.png",
    londonMustangs:       "/images/LJM-logo.png",
    westernFootball:      "/images/WWFB-logo.png",
    burlingtonStampeders: "/images/BMFA.png",
    banquetBar:           "/images/Banquet.png",
    beertown:             "/images/BTlogo.png",
    cibcWoodGundy:        "/images/CIBCWG.png",
    linkedin:             "/images/LinkedIn.webp",
    westernUniversity:    "/images/UWO.gif",
    westernMgmtConsulting:    "/images/WMC.png",
    degrooteMBACapitalFund:   "/images/DMCF.png",
    jackAstors:               "/images/Astors.png",
    degrooteBusiness:         "/images/DSB.png",
    degrooteGolf:             "/images/SticksLogo.png",
    truscottPharmacy:         "/images/IDA.png",
  },

  // ── Testimonial screenshots ────────────────────────────────────────────────
  testimonials: {
    andrewRayman: "/images/arquote.jpg",
  },

  // ── Legacy alias kept for backwards compatibility ──────────────────────────
  hero: {
    headshot: "/images/Ronaks-headshot.png",
  },
};
