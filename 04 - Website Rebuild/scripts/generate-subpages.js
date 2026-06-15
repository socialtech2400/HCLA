const fs = require("fs");
const path = require("path");

const root = process.cwd();

const partnerLogos = [
  ["Los Angeles County Department of Mental Health.png", "Los Angeles County Department of Mental Health"],
  ["Los Angeles General Medical Center.png", "Los Angeles General Medical Center"],
  ["USC Pacific Asia Museum.png", "USC Pacific Asia Museum"],
  ["Autry Museum.png", "Autry Museum"],
  ["Earthstock.png", "Earthstock"],
  ["EO.png", "Entrepreneurs' Organization"],
  ["Sanctuary.png", "Sanctuary"],
  ["The Real Mental Health.png", "The Real Mental Health"],
  ["Uprising Together.png", "Uprising Together"],
  ["Zula Den.png", "Zula Den"]
];

function logoWall() {
  return `
        <div class="hcla-logo-wall" aria-label="Partner logos">
          ${partnerLogos.map(([file, alt]) => `<div class="hcla-logo-item"><img src="../../images/All Partner Logos/${file}" alt="${alt}"></div>`).join("\n          ")}
        </div>`;
}

function commonCss(id) {
  return `<style>
  @import url('https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Sora:wght@200;300;400;600&family=Source+Sans+3:wght@300;400;600;700&display=swap');

  #${id} {
    --hcla-ink: #212121;
    --hcla-navy: #1e2a64;
    --hcla-deep-green: #395b52;
    --hcla-gold: #8c7342;
    --hcla-champagne: #e6dac1;
    --hcla-ivory: #f2f2ed;
    --hcla-muted: #757575;
    --hcla-border: #dddddd;
    --hcla-bg: #ffffff;
    --hcla-white: #ffffff;
    --hcla-wide: 1200px;
    --hcla-content: 760px;
    --hcla-page-pad: clamp(20px, 4vw, 56px);
    --hcla-space-md: clamp(1.25rem, 0.8vw + 1rem, 1.5rem);
    --hcla-space-lg: clamp(2rem, 3.2vw + 1rem, 3rem);
    --hcla-space-xl: clamp(3.25rem, 4vw + 2rem, 4.5rem);
    --hcla-space-xxl: clamp(5.25rem, 7.2vw + 3rem, 7.5rem);
    --hcla-font-headline: Cardo, Palatino, Georgia, serif;
    --hcla-font-body: "Source Sans 3", Arial, sans-serif;
    --hcla-hero-bg: url("../../images/generated/hcla-homepage-hero-placeholder.png");
    color: var(--hcla-ink);
    background: var(--hcla-bg);
    font-family: var(--hcla-font-body);
    font-size: 18px;
    font-weight: 300;
    line-height: 1.6;
    overflow-x: hidden;
  }

  #${id}, #${id} * { box-sizing: border-box; }
  #${id} a { color: inherit; }
  #${id} img { display: block; max-width: 100%; }
  #${id} h1, #${id} h2, #${id} h3, #${id} p { margin-top: 0; }
  #${id} h1, #${id} h2, #${id} h3 { font-family: var(--hcla-font-headline); font-weight: 400; line-height: 1.16; overflow-wrap: break-word; }
  #${id} h1 {
    max-width: 980px;
    margin-bottom: 20px;
    color: var(--hcla-white);
    font-family: Sora, var(--hcla-font-body);
    font-size: clamp(42px, 6vw, 78px);
    font-weight: 200;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  #${id} h2 { color: var(--hcla-ink); font-size: clamp(34px, 4.5vw, 56px); }
  #${id} h3 { color: var(--hcla-ink); font-size: clamp(24px, 2.5vw, 34px); }

  #${id} .hcla-wrap { width: min(var(--hcla-wide), calc(100% - (var(--hcla-page-pad) * 2))); margin: 0 auto; }
  #${id} .hcla-content { width: min(var(--hcla-content), calc(100% - (var(--hcla-page-pad) * 2))); margin: 0 auto; }
  #${id} .hcla-eyebrow {
    margin-bottom: 12px;
    color: var(--hcla-muted);
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.24em;
    text-transform: uppercase;
  }
  #${id} .hcla-hero .hcla-eyebrow { color: rgba(255,255,255,0.86); }
  #${id} .hcla-button, #${id} .hcla-button:visited {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 11px 22px 9px;
    border: 1px solid var(--hcla-gold);
    border-radius: 0;
    background: var(--hcla-gold);
    color: var(--hcla-white);
    font-family: var(--hcla-font-headline);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.15em;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: background 180ms ease, border-color 180ms ease, color 180ms ease;
  }
  #${id} .hcla-button:hover, #${id} .hcla-button:focus { background: #735d31; border-color: #735d31; }
  #${id} .hcla-button-secondary, #${id} .hcla-button-secondary:visited { background: transparent; color: var(--hcla-gold); }
  #${id} .hcla-button-secondary:hover, #${id} .hcla-button-secondary:focus { background: var(--hcla-gold); color: var(--hcla-white); }
  #${id} .hcla-button-light, #${id} .hcla-button-light:visited { border-color: rgba(255,255,255,0.9); background: rgba(255,255,255,0.94); color: var(--hcla-ink); }
  #${id} .hcla-button-light:hover, #${id} .hcla-button-light:focus { border-color: var(--hcla-white); background: var(--hcla-white); color: var(--hcla-gold); }
  #${id} .hcla-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--hcla-gold);
    font-family: var(--hcla-font-headline);
    font-size: 15px;
    letter-spacing: 0.12em;
    text-decoration: none;
    text-transform: uppercase;
  }
  #${id} .hcla-link::after { content: ""; width: 36px; height: 1px; background: currentColor; }
  #${id} .hcla-divider { width: 150px; height: 1px; margin: 22px auto 26px; background: var(--hcla-gold); }
  #${id} .hcla-divider-left { margin-right: 0; margin-left: 0; }

  #${id} .hcla-site-header { position: absolute; z-index: 10; top: 0; left: 0; width: 100%; color: var(--hcla-white); }
  #${id} .hcla-header-inner { display: grid; grid-template-columns: minmax(110px,1fr) auto minmax(110px,1fr); align-items: center; gap: 20px; min-height: 82px; padding: 12px 0; }
  #${id} .hcla-menu-button { display: inline-flex; align-items: center; justify-self: start; gap: 10px; width: auto; min-height: 42px; padding: 0; border: 0; background: transparent; color: inherit; cursor: pointer; font-family: var(--hcla-font-headline); font-size: 14px; letter-spacing: 0.16em; text-transform: uppercase; }
  #${id} .hcla-menu-icon { position: relative; width: 28px; height: 12px; }
  #${id} .hcla-menu-icon::before, #${id} .hcla-menu-icon::after { content: ""; position: absolute; left: 0; width: 100%; height: 1px; background: currentColor; }
  #${id} .hcla-menu-icon::before { top: 0; }
  #${id} .hcla-menu-icon::after { bottom: 0; }
  #${id} .hcla-brand, #${id} .hcla-brand:visited { justify-self: center; color: inherit; font-family: var(--hcla-font-headline); font-size: clamp(22px,3vw,34px); letter-spacing: 0.18em; line-height: 1; text-align: center; text-decoration: none; text-transform: uppercase; }
  #${id} .hcla-header-actions { display: flex; align-items: center; justify-content: flex-end; gap: 16px; }
  #${id} .hcla-header-phone { color: rgba(255,255,255,0.9); font-family: var(--hcla-font-headline); font-size: 15px; letter-spacing: 0.12em; text-decoration: none; white-space: nowrap; }
  #${id} .hcla-header-actions .hcla-button { min-height: 40px; padding: 9px 16px 7px; font-size: 12px; }
  #${id} .hcla-nav-panel { position: absolute; top: 82px; left: var(--hcla-page-pad); width: min(360px, calc(100vw - (var(--hcla-page-pad) * 2))); padding: 24px; border: 1px solid rgba(230,218,193,0.72); background: rgba(242,242,237,0.98); box-shadow: 0 12px 30px rgba(33,33,33,0.12); color: var(--hcla-ink); opacity: 0; transform: translateY(-8px); visibility: hidden; transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease; }
  #${id} .hcla-nav-panel.is-open { opacity: 1; transform: translateY(0); visibility: visible; }
  #${id} .hcla-nav-panel a { display: block; padding: 12px 0 10px; border-bottom: 1px solid rgba(140,115,66,0.18); color: var(--hcla-ink); font-family: var(--hcla-font-headline); font-size: 17px; letter-spacing: 0.13em; text-decoration: none; text-transform: uppercase; }
  #${id} .hcla-nav-panel a:hover, #${id} .hcla-nav-panel a:focus { color: var(--hcla-gold); }
  #${id} .hcla-nav-phone { margin: 20px 0 0; color: var(--hcla-muted); font-size: 15px; }

  #${id} .hcla-hero { position: relative; min-height: clamp(440px, 58vh, 640px); overflow: hidden; color: var(--hcla-white); background: #1d1b17; }
  #${id} .hcla-hero::before { content: ""; position: absolute; inset: 0; background-image: var(--hcla-hero-bg); background-position: center; background-size: cover; opacity: 0.62; }
  #${id} .hcla-hero::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.52), rgba(0,0,0,0.32) 42%, rgba(0,0,0,0.56)); }
  #${id} .hcla-hero-content { position: relative; z-index: 2; display: flex; min-height: clamp(440px, 58vh, 640px); align-items: flex-end; padding: 132px 0 var(--hcla-space-xl); }
  #${id} .hcla-hero-copy { width: min(920px, 100%); }
  #${id} .hcla-hero-copy p:not(.hcla-eyebrow) { max-width: 680px; margin-bottom: 28px; color: rgba(255,255,255,0.92); font-size: clamp(19px,2vw,24px); }
  #${id} .hcla-hero-actions { display: flex; flex-wrap: wrap; gap: 14px; }
  #${id} .hcla-section { padding: var(--hcla-space-xxl) 0; }
  #${id} .hcla-section-soft { background: var(--hcla-ivory); }
  #${id} .hcla-section-green { background: var(--hcla-deep-green); color: var(--hcla-white); }
  #${id} .hcla-section-green h2, #${id} .hcla-section-green h3, #${id} .hcla-section-green .hcla-eyebrow { color: var(--hcla-white); }
  #${id} .hcla-section-green p, #${id} .hcla-section-green li { color: rgba(255,255,255,0.92); }
  #${id} .hcla-section-green .hcla-centered p { color: rgba(255,255,255,0.92); }
  #${id} .hcla-centered { text-align: center; }
  #${id} .hcla-centered p { max-width: 760px; margin-right: auto; margin-left: auto; color: var(--hcla-muted); font-size: 20px; }
  #${id} .hcla-section-green .hcla-centered p, #${id} .hcla-section-green .hcla-content p { color: rgba(255,255,255,0.92); }
  #${id} .hcla-section-green .hcla-link, #${id} .hcla-section-green .hcla-price { color: var(--hcla-champagne); }
  #${id} .hcla-grid-2, #${id} .hcla-grid-3, #${id} .hcla-grid-4 { display: grid; gap: 1px; margin-top: var(--hcla-space-lg); background: var(--hcla-border); border: 1px solid var(--hcla-border); }
  #${id} .hcla-grid-2 { grid-template-columns: repeat(2,minmax(0,1fr)); }
  #${id} .hcla-grid-3 { grid-template-columns: repeat(3,minmax(0,1fr)); }
  #${id} .hcla-grid-4 { grid-template-columns: repeat(4,minmax(0,1fr)); }
  #${id} .hcla-card { display: flex; flex-direction: column; padding: clamp(28px,4vw,44px); background: var(--hcla-white); }
  #${id} .hcla-card p, #${id} .hcla-card li { color: var(--hcla-muted); }
  #${id} .hcla-card ul { display: grid; gap: 9px; margin: 18px 0 0; padding: 0; list-style: none; }
  #${id} .hcla-card li { position: relative; padding-left: 18px; }
  #${id} .hcla-card li::before { content: ""; position: absolute; top: 0.75em; left: 0; width: 8px; height: 1px; background: var(--hcla-gold); }
  #${id} .hcla-testimonial-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1px; margin-top: var(--hcla-space-lg); background: var(--hcla-border); border: 1px solid var(--hcla-border); }
  #${id} .hcla-testimonial-grid-wide { grid-template-columns: repeat(2,minmax(0,1fr)); }
  #${id} .hcla-testimonial-card { display: flex; flex-direction: column; min-width: 0; min-height: 100%; background: var(--hcla-white); }
  #${id} .hcla-testimonial-card-content { display: flex; flex: 1; flex-direction: column; padding: clamp(28px,4vw,44px); }
  #${id} .hcla-testimonial-media { display: block; overflow: hidden; aspect-ratio: 16 / 10; background: var(--hcla-ivory); color: inherit; text-decoration: none; }
  #${id} .hcla-testimonial-media img { width: 100%; height: 100%; object-fit: cover; transition: transform 220ms ease; }
  #${id} .hcla-testimonial-media:hover img, #${id} .hcla-testimonial-media:focus img { transform: scale(1.03); }
  #${id} .hcla-testimonial-quote { margin-bottom: 18px; color: var(--hcla-ink); font-family: var(--hcla-font-headline); font-size: clamp(24px,2.4vw,34px); line-height: 1.18; }
  #${id} .hcla-testimonial-body { color: var(--hcla-muted); }
  #${id} .hcla-testimonial-person { margin: 0 0 3px; color: var(--hcla-ink); font-weight: 600; }
  #${id} .hcla-testimonial-title { margin: 0 0 20px; color: var(--hcla-gold); font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; }
  #${id} .hcla-testimonial-card .hcla-link { margin-top: auto; padding-top: 22px; }
  #${id} .hcla-profile-card { overflow: hidden; padding: 0; }
  #${id} .hcla-profile-card-content { display: flex; flex: 1; flex-direction: column; padding: clamp(28px,4vw,44px); }
  #${id} .hcla-profile-photo { overflow: hidden; margin: 0; aspect-ratio: 4 / 5; background: var(--hcla-ivory); }
  #${id} .hcla-profile-photo img { width: 100%; height: 100%; object-fit: cover; }
  #${id} .hcla-profile-photo-winnie img, #${id} .hcla-profile-photo-jay img { object-position: center 42%; }
  #${id} .hcla-award-media { margin: 0; overflow: hidden; background: rgba(0,0,0,0.14); }
  #${id} .hcla-award-media img { width: 100%; height: clamp(320px,42vw,520px); object-fit: cover; }
  #${id} .hcla-award-media figcaption { padding: 14px 16px; color: rgba(255,255,255,0.82); font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; }
  #${id} .hcla-section-green .hcla-grid-2, #${id} .hcla-section-green .hcla-grid-3, #${id} .hcla-section-green .hcla-grid-4 { background: rgba(255,255,255,0.22); border-color: rgba(255,255,255,0.22); }
  #${id} .hcla-section-green .hcla-card { background: rgba(0,0,0,0.12); }
  #${id} .hcla-section-green .hcla-card p, #${id} .hcla-section-green .hcla-card li { color: rgba(255,255,255,0.9); }
  #${id} .hcla-section-green .hcla-card li::before { background: var(--hcla-champagne); }
  #${id} .hcla-price { margin: 2px 0 18px; color: var(--hcla-gold); font-family: var(--hcla-font-headline); font-size: 24px; }
  #${id} .hcla-editorial { display: grid; grid-template-columns: minmax(0,1fr) minmax(320px,0.78fr); align-items: center; gap: clamp(36px,6vw,86px); }
  #${id} .hcla-editorial p { color: var(--hcla-muted); }
  #${id} .hcla-section-green .hcla-editorial p { color: rgba(255,255,255,0.92); }
  #${id} .hcla-media-frame { position: relative; overflow: hidden; min-height: 430px; background: var(--hcla-ivory); }
  #${id} .hcla-media-frame img { width: 100%; height: 100%; min-height: inherit; object-fit: cover; }
  #${id} .hcla-band { border-top: 1px solid var(--hcla-border); border-bottom: 1px solid var(--hcla-border); background: var(--hcla-ivory); }
  #${id} .hcla-band-inner { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1px; background: var(--hcla-border); }
  #${id} .hcla-band-item { min-height: 112px; padding: 24px; background: var(--hcla-ivory); }
  #${id} .hcla-band-item strong { display: block; color: var(--hcla-gold); font-family: var(--hcla-font-headline); font-size: 22px; font-weight: 400; }
  #${id} .hcla-band-item span { display: block; margin-top: 6px; color: var(--hcla-muted); font-size: 15px; }
  #${id} .hcla-placeholder { padding: clamp(28px,4vw,44px); border: 1px dashed rgba(140,115,66,0.52); background: rgba(255,255,255,0.58); color: var(--hcla-muted); }
  #${id} .hcla-placeholder strong { display: block; color: var(--hcla-ink); font-family: var(--hcla-font-headline); font-size: 24px; font-weight: 400; }
  #${id} .hcla-section-green .hcla-placeholder { border-color: rgba(230,218,193,0.52); background: rgba(0,0,0,0.14); color: rgba(255,255,255,0.9); }
  #${id} .hcla-section-green .hcla-placeholder strong { color: var(--hcla-white); }
  #${id} .hcla-accordion { display: grid; gap: 12px; margin-top: var(--hcla-space-lg); }
  #${id} .hcla-accordion-item { border: 1px solid var(--hcla-border); background: var(--hcla-white); }
  #${id} .hcla-accordion-button { display: flex; align-items: center; justify-content: space-between; width: 100%; min-height: 64px; padding: 18px 22px; border: 0; background: transparent; color: var(--hcla-ink); cursor: pointer; font-family: var(--hcla-font-headline); font-size: 22px; text-align: left; }
  #${id} .hcla-accordion-button::after { content: "+"; color: var(--hcla-gold); font-family: var(--hcla-font-body); }
  #${id} .hcla-accordion-button[aria-expanded="true"]::after { content: "-"; }
  #${id} .hcla-accordion-panel { display: none; padding: 0 22px 22px; color: var(--hcla-muted); }
  #${id} .hcla-accordion-panel.is-open { display: block; }
  #${id} .hcla-logo-wall { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); gap: 1px; margin-top: var(--hcla-space-lg); background: var(--hcla-border); border: 1px solid var(--hcla-border); }
  #${id} .hcla-logo-item { display: grid; place-items: center; min-height: 112px; padding: 22px; background: var(--hcla-white); }
  #${id} .hcla-logo-item img { max-width: 155px; max-height: 58px; object-fit: contain; filter: grayscale(1); opacity: 0.78; }
  #${id} .hcla-final-cta { position: relative; overflow: hidden; background: #1b1b18; color: var(--hcla-white); }
  #${id} .hcla-final-cta::before { content: ""; position: absolute; inset: 0; background-image: url("../../images/generated/hcla-homepage-class-detail-placeholder.png"); background-position: center; background-size: cover; opacity: 0.22; }
  #${id} .hcla-final-cta::after { content: ""; position: absolute; inset: 0; background: rgba(0,0,0,0.52); }
  #${id} .hcla-final-cta .hcla-wrap { position: relative; z-index: 2; }
  #${id} .hcla-final-cta h2 { color: var(--hcla-white); }
  #${id} .hcla-final-cta p { color: rgba(255,255,255,0.82); }
  #${id} .hcla-site-footer { padding: 44px 0; background: var(--hcla-ivory); color: var(--hcla-muted); font-size: 15px; }
  #${id} .hcla-footer-grid { display: grid; grid-template-columns: minmax(220px,0.8fr) minmax(0,1.2fr); gap: 30px; }
  #${id} .hcla-footer-brand { color: var(--hcla-ink); font-family: var(--hcla-font-headline); font-size: 24px; letter-spacing: 0.16em; text-transform: uppercase; }
  #${id} .hcla-footer-links { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 10px 20px; }
  #${id} .hcla-footer-links a { color: var(--hcla-muted); text-decoration-color: rgba(140,115,66,0.42); text-underline-offset: 3px; }
  #${id} .hcla-footer-copy { grid-column: 1 / -1; margin: 18px 0 0; padding-top: 18px; border-top: 1px solid var(--hcla-border); font-size: 13px; }

  @media (max-width: 1040px) {
    #${id} .hcla-grid-4, #${id} .hcla-band-inner, #${id} .hcla-logo-wall { grid-template-columns: repeat(2,minmax(0,1fr)); }
    #${id} .hcla-testimonial-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    #${id} .hcla-editorial { grid-template-columns: 1fr; }
    #${id} .hcla-media-frame { min-height: 360px; }
  }
  @media (max-width: 780px) {
    #${id} { font-size: 17px; }
    #${id} h1 { max-width: 10.5ch; font-size: clamp(34px,8.8vw,44px); }
    #${id} h2 { font-size: clamp(30px,8vw,38px); }
    #${id} h3 { font-size: clamp(23px,6.6vw,30px); }
    #${id} .hcla-centered p { max-width: 32ch; font-size: 18px; }
    #${id} .hcla-header-inner { grid-template-columns: auto 1fr; min-height: 72px; gap: 12px; }
    #${id} .hcla-brand { font-size: 20px; letter-spacing: 0.1em; }
    #${id} .hcla-header-actions, #${id} .hcla-menu-button span:last-child { display: none; }
    #${id} .hcla-nav-panel { top: 72px; }
    #${id} .hcla-hero, #${id} .hcla-hero-content { min-height: 540px; }
    #${id} .hcla-hero-content { padding-top: 110px; padding-bottom: 48px; }
    #${id} .hcla-hero-actions { align-items: flex-start; flex-direction: column; }
    #${id} .hcla-hero-actions .hcla-button { width: min(100%,260px); }
    #${id} .hcla-grid-2, #${id} .hcla-grid-3, #${id} .hcla-grid-4, #${id} .hcla-testimonial-grid, #${id} .hcla-band-inner, #${id} .hcla-logo-wall, #${id} .hcla-footer-grid { grid-template-columns: 1fr; }
    #${id} .hcla-footer-links { justify-content: flex-start; }
  }
  @media (max-width: 480px) {
    #${id} { --hcla-page-pad: 18px; }
    #${id} .hcla-brand { display: block; max-width: 150px; font-size: 16px; letter-spacing: 0.08em; line-height: 1.1; }
    #${id} .hcla-hero-copy p:not(.hcla-eyebrow) { max-width: 32ch; }
  }
</style>`;
}

function header(id) {
  return `<header class="hcla-site-header" aria-label="Heart Center LA site header">
    <div class="hcla-wrap hcla-header-inner">
      <button class="hcla-menu-button" type="button" aria-expanded="false" aria-controls="${id}-nav">
        <span class="hcla-menu-icon" aria-hidden="true"></span>
        <span>Menu</span>
      </button>
      <a class="hcla-brand" href="/" aria-label="Heart Center LA homepage">Heart Center LA</a>
      <div class="hcla-header-actions">
        <a class="hcla-header-phone" href="tel:+12138561293">(213) 856-1293</a>
        <a class="hcla-button hcla-button-light" href="/find-a-class">Book a Class</a>
      </div>
    </div>
    <nav id="${id}-nav" class="hcla-nav-panel" aria-label="Primary navigation">
      <a href="/">Home</a>
      <a href="/new-student">New Student</a>
      <a href="/classes">Classes</a>
      <a href="/teachers">Teachers</a>
      <a href="/testimonials">Testimonials</a>
      <a href="/faq">FAQ</a>
      <a href="/contact">Contact</a>
      <p class="hcla-nav-phone">heartcenterla1@gmail.com<br>(213) 856-1293</p>
    </nav>
  </header>`;
}

function footer(id) {
  return `<footer class="hcla-site-footer">
    <div class="hcla-wrap hcla-footer-grid">
      <div>
        <div class="hcla-footer-brand">Heart Center LA</div>
        <p>heartcenterla1@gmail.com<br>(213) 856-1293<br>2801 E. Foothill Blvd., Pasadena CA 91107</p>
      </div>
      <nav class="hcla-footer-links" aria-label="Footer navigation">
        <a href="/">Home</a><a href="/new-student">New Student</a><a href="/classes">Classes</a><a href="/teachers">Teachers</a><a href="/testimonials">Testimonials</a><a href="/faq">FAQ</a><a href="/contact">Contact</a>
      </nav>
      <p class="hcla-footer-copy">&copy; 2026 Heart Center LA. All rights reserved.</p>
    </div>
  </footer>`;
}

function hero(eyebrow, title, body, primary, secondary) {
  return `<section class="hcla-hero" aria-label="${title}">
      <div class="hcla-wrap hcla-hero-content">
        <div class="hcla-hero-copy">
          <p class="hcla-eyebrow">${eyebrow}</p>
          <h1>${title}</h1>
          <p>${body}</p>
          <div class="hcla-hero-actions">
            ${primary ? `<a class="hcla-button hcla-button-light" href="${primary.href}">${primary.label}</a>` : ""}
            ${secondary ? `<a class="hcla-button hcla-button-secondary" href="${secondary.href}">${secondary.label}</a>` : ""}
          </div>
        </div>
      </div>
    </section>`;
}

function finalCta(title, body, primary = { href: "/find-a-class", label: "Book a Class" }, secondary = { href: "/new-student", label: "New Student" }) {
  return `<section class="hcla-section hcla-final-cta" aria-labelledby="hcla-final-title">
      <div class="hcla-wrap">
        <div class="hcla-content hcla-centered">
          <p class="hcla-eyebrow">Begin here</p>
          <h2 id="hcla-final-title">${title}</h2>
          <div class="hcla-divider"></div>
          <p>${body}</p>
          <div class="hcla-hero-actions" style="justify-content:center;">
            <a class="hcla-button hcla-button-light" href="${primary.href}">${primary.label}</a>
            <a class="hcla-button hcla-button-secondary" href="${secondary.href}">${secondary.label}</a>
          </div>
        </div>
      </div>
    </section>`;
}

function accordion(items) {
  return `<div class="hcla-accordion">
          ${items.map((item, index) => `<div class="hcla-accordion-item">
            <button class="hcla-accordion-button" type="button" aria-expanded="${index === 0 ? "true" : "false"}">${item.q}</button>
            <div class="hcla-accordion-panel${index === 0 ? " is-open" : ""}"><p>${item.a}</p></div>
          </div>`).join("\n          ")}
        </div>`;
}

function script(id) {
  return `<script>
  (function () {
    var root = document.getElementById('${id}');
    if (!root) return;

    function hclaPreviewHref(href) {
      if (!href || href.charAt(0) !== "/" || href.indexOf("//") === 0) return href;
      if (!/(^|\\.)github\\.io$/.test(window.location.hostname)) return href;
      if (href === "/") return "../../";
      return "../../" + href.replace(/^\\/+/, "");
    }

    Array.prototype.slice.call(root.querySelectorAll('a[href^="/"]')).forEach(function (link) {
      link.setAttribute("href", hclaPreviewHref(link.getAttribute("href")));
    });

    var heroBg = root.getAttribute('data-ghl-hero-bg');
    if (heroBg && heroBg.indexOf('{{') === -1) {
      root.style.setProperty('--hcla-hero-bg', 'url("' + heroBg + '")');
    }
    Array.prototype.slice.call(root.querySelectorAll('[data-ghl-src]')).forEach(function (img) {
      var ghlSrc = img.getAttribute('data-ghl-src');
      if (ghlSrc && ghlSrc.indexOf('{{') === -1) img.setAttribute('src', ghlSrc);
    });
    var menuButton = root.querySelector('.hcla-menu-button');
    var navPanel = root.querySelector('#${id}-nav');
    if (menuButton && navPanel) {
      menuButton.addEventListener('click', function () {
        var expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!expanded));
        navPanel.classList.toggle('is-open', !expanded);
      });
      navPanel.addEventListener('click', function (event) {
        if (event.target && event.target.tagName === 'A') {
          menuButton.setAttribute('aria-expanded', 'false');
          navPanel.classList.remove('is-open');
        }
      });
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          menuButton.setAttribute('aria-expanded', 'false');
          navPanel.classList.remove('is-open');
        }
      });
    }
    Array.prototype.slice.call(root.querySelectorAll('.hcla-accordion-button')).forEach(function (button) {
      button.addEventListener('click', function () {
        var expanded = button.getAttribute('aria-expanded') === 'true';
        var panel = button.nextElementSibling;
        button.setAttribute('aria-expanded', String(!expanded));
        if (panel) panel.classList.toggle('is-open', !expanded);
      });
    });
  })();
</script>`;
}

function page(def) {
  return `<!-- Heart Center LA | ${def.title} | Route: ${def.route} | GHL custom-code block -->
${commonCss(def.id)}

<section id="${def.id}" class="hcla-page ${def.id}" data-hcla-page="${def.slug}"${def.ghlHeroBg ? ` data-ghl-hero-bg="${def.ghlHeroBg}"` : ""}${def.heroBg ? ` style="--hcla-hero-bg: url('${def.heroBg}');"` : ""}>
  ${header(def.id)}
  <main>
    ${hero(def.eyebrow, def.h1, def.subhead, def.primary, def.secondary)}
    ${def.body}
    ${def.final || finalCta("Reserve a class and give the pattern a place to move", "Choose the class tier that matches your capacity today. If you are new, start with Refresh or Reset and let the practice show you what comes next.")}
  </main>
  ${footer(def.id)}
</section>

${script(def.id)}
`;
}

const classCards = `
        <div class="hcla-grid-4">
          <article class="hcla-card"><h3>Refresh</h3><div class="hcla-price">$35</div><p>A light renewal for when you are still functional, but tired.</p><ul><li>Energy lifts</li><li>Mental clarity improves</li><li>Emotional load lightens</li></ul><p><a class="hcla-button hcla-button-secondary" href="/find-a-class?tier=refresh">Start with Refresh</a></p></article>
          <article class="hcla-card"><h3>Reset</h3><div class="hcla-price">$84</div><p>A conscious interruption of a pattern so you can clear and re-orient.</p><ul><li>Habits are interrupted</li><li>Focus returns</li><li>Nervous system state shifts</li></ul><p><a class="hcla-button hcla-button-secondary" href="/find-a-class?tier=reset">Book Reset</a></p></article>
          <article class="hcla-card"><h3>Restore</h3><div class="hcla-price">$196</div><p>Repair for something that has been depleted, damaged, or worn down.</p><ul><li>Capacity rebuilds</li><li>Stability returns</li><li>Longer-held stress is addressed</li></ul><p><a class="hcla-button hcla-button-secondary" href="/find-a-class?tier=restore">Begin Restore</a></p></article>
          <article class="hcla-card"><h3>Revitalize</h3><div class="hcla-price">$238/mo</div><p>A full month of classes for the kind of renewal that changes how you see yourself.</p><ul><li>Identity shifts</li><li>Purpose becomes clearer</li><li>New vitality has room to emerge</li></ul><p><a class="hcla-button hcla-button-secondary" href="/find-a-class?tier=revitalize">Start Revitalize</a></p></article>
        </div>`;

const testimonialStories = `
    <section class="hcla-section" aria-labelledby="testimonial-stories">
      <div class="hcla-wrap">
        <div class="hcla-centered">
          <p class="hcla-eyebrow">Student voices</p>
          <h2 id="testimonial-stories">What people say after the room has held them</h2>
          <div class="hcla-divider"></div>
          <p>Collected from previous Heart Center LA testimonial materials, including video comments and written reflections.</p>
        </div>

        <div class="hcla-testimonial-grid" aria-label="Video testimonials">
          <article class="hcla-testimonial-card">
            <a class="hcla-testimonial-media" href="https://www.youtube.com/watch?v=twcIh-b1ol8" target="_blank" rel="noopener" aria-label="Watch Rob Kalwarowsky's testimonial on YouTube">
              <img src="https://img.youtube.com/vi/twcIh-b1ol8/hqdefault.jpg" alt="Rob Kalwarowsky video testimonial thumbnail">
            </a>
            <div class="hcla-testimonial-card-content">
              <h3 class="hcla-testimonial-quote">&ldquo;It&rsquo;s a good way to start off the day.&rdquo;</h3>
              <p class="hcla-testimonial-body">Sometimes when I wake up and feel upset, it&rsquo;s a great way to get back to inner peace.</p>
              <p class="hcla-testimonial-person">Rob Kalwarowsky</p>
              <p class="hcla-testimonial-title">International Speaker, Entrepreneur and Executive Coach</p>
              <a class="hcla-link" href="https://www.youtube.com/watch?v=twcIh-b1ol8" target="_blank" rel="noopener">Watch video</a>
            </div>
          </article>

          <article class="hcla-testimonial-card">
            <a class="hcla-testimonial-media" href="https://www.youtube.com/watch?v=fJvBm5R_xzo" target="_blank" rel="noopener" aria-label="Watch Dr. Nicole Tetreault's testimonial on YouTube">
              <img src="https://img.youtube.com/vi/fJvBm5R_xzo/hqdefault.jpg" alt="Dr. Nicole Tetreault video testimonial thumbnail">
            </a>
            <div class="hcla-testimonial-card-content">
              <h3 class="hcla-testimonial-quote">&ldquo;Hip feels good, it doesn&rsquo;t have a (pain) number.&rdquo;</h3>
              <p class="hcla-testimonial-person">Dr. Nicole Tetreault</p>
              <p class="hcla-testimonial-title">Neuroscientist and Meditation Teacher</p>
              <a class="hcla-link" href="https://www.youtube.com/watch?v=fJvBm5R_xzo" target="_blank" rel="noopener">Watch video</a>
            </div>
          </article>

          <article class="hcla-testimonial-card">
            <a class="hcla-testimonial-media" href="https://www.youtube.com/watch?v=5252cz1yQgY" target="_blank" rel="noopener" aria-label="Watch Diliana Joy's testimonial on YouTube">
              <img src="https://img.youtube.com/vi/5252cz1yQgY/hqdefault.jpg" alt="Diliana Joy video testimonial thumbnail">
            </a>
            <div class="hcla-testimonial-card-content">
              <h3 class="hcla-testimonial-quote">&ldquo;You made me laugh which is not an easy feat for those who may know me!&rdquo;</h3>
              <p class="hcla-testimonial-person">Diliana Joy</p>
              <p class="hcla-testimonial-title">Former Coordinator, Refugee Mental Health Project at CAMH</p>
              <a class="hcla-link" href="https://www.youtube.com/watch?v=5252cz1yQgY" target="_blank" rel="noopener">Watch video</a>
            </div>
          </article>
        </div>

        <div class="hcla-testimonial-grid hcla-testimonial-grid-wide" aria-label="Written testimonials">
          <article class="hcla-testimonial-card">
            <div class="hcla-testimonial-media">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2QHwBS5pAPsicJG2LXIP/media/67ce83ef04d659b37a3754fc.jpeg" alt="Nicole testimonial image">
            </div>
            <div class="hcla-testimonial-card-content">
              <h3 class="hcla-testimonial-quote">&ldquo;A lovely gem of a space&rdquo;</h3>
              <p class="hcla-testimonial-person">Nicole</p>
              <p class="hcla-testimonial-title">VP at Trans Astronautica Corporation</p>
              <p class="hcla-testimonial-body">A lovely gem of a space for connection and soulful support. Winnie is so knowledgeable so strongly tapped into her heart. She is authentically loving, and her intuition is on fire - she is SO quick to grasp and articulate deep insights about me and the people around her. I joined the community for the first time at a lunar new year event and also joined several of the Tao calligraphy sessions. The partnership with Jay beautifully balance the masculine and feminine form and energies. They each have profound insights and attunement that create a powerfully healing space that is accessible and inviting to All. It is a community service at the highest level.</p>
            </div>
          </article>

          <article class="hcla-testimonial-card">
            <div class="hcla-testimonial-media">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2QHwBS5pAPsicJG2LXIP/media/67ce839c04d6597d0e3754ae.jpeg" alt="Melea testimonial image">
            </div>
            <div class="hcla-testimonial-card-content">
              <h3 class="hcla-testimonial-quote">&ldquo;Walked out pain free!&rdquo;</h3>
              <p class="hcla-testimonial-person">Melea</p>
              <p class="hcla-testimonial-title">Speech Pathologist</p>
              <p class="hcla-testimonial-body">Heart Center LA has given me hope &amp; compassionate learning opportunities to push myself forward in my healing journey. Winnie Wang is amazing, full of bright light &amp; extraordinary healing skills. After my 1st individual session, I walked out pain free with an open mindset of resiliency &amp; hope. In only a few individual sessions I&rsquo;ve shifted even more to an open heart with less fear in taking risks &amp; understanding my pain. The group sessions at the HEART CENTER LA are oh so special &amp; genuinely unique, while offering compassion &amp; a collective unity. Love love love, thank you, thank you, thank you.</p>
            </div>
          </article>

          <article class="hcla-testimonial-card">
            <div class="hcla-testimonial-media">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2QHwBS5pAPsicJG2LXIP/media/68f1835ed82b8e38cef4143b.jpeg" alt="Addison testimonial image">
            </div>
            <div class="hcla-testimonial-card-content">
              <h3 class="hcla-testimonial-quote">&ldquo;Beautiful Location&rdquo;</h3>
              <p class="hcla-testimonial-person">Addison</p>
              <p class="hcla-testimonial-title">Licensed Acupuncturist</p>
              <p class="hcla-testimonial-body">Heart Center is a beautiful location where I can go to escape the noise of city life and find peace of mind. The acupuncture room feels like a cove one million miles away.</p>
            </div>
          </article>

          <article class="hcla-testimonial-card">
            <div class="hcla-testimonial-media">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/2QHwBS5pAPsicJG2LXIP/media/6870a1c750e32668e0a83dd9.jpeg" alt="Pamela testimonial image">
            </div>
            <div class="hcla-testimonial-card-content">
              <h3 class="hcla-testimonial-quote">&ldquo;Healing feels real&rdquo;</h3>
              <p class="hcla-testimonial-person">Pamela</p>
              <p class="hcla-testimonial-title">High School Instructor</p>
              <p class="hcla-testimonial-body">The Heart Center is where healing feels real. Winnie and Jay hold a sacred space where mind, body, and soul remember harmony. Winnie&rsquo;s intuition, Tao calligraphy, and song awaken love that melts blockages. Jay&rsquo;s 3rd-eye insights bring clarity and deep peace. Through breath, tracing, and gentle conversation, they reveal the root causes of pain and guide healing from within. I came to Winnie with osteoporosis - six months later, my bones improved beyond the diagnosis. Every session uplifts, transforms, and reminds us: love is the safest medicine.</p>
            </div>
          </article>
        </div>
      </div>
    </section>`;

const pages = [
  {
    slug: "classes",
    id: "hcla-classes",
    title: "Classes",
    route: "/classes",
    eyebrow: "Healing classes",
    h1: "Choose the depth of support your system is ready for",
    subhead: "Refresh, Reset, Restore, and Revitalize classes in Pasadena.",
    primary: { href: "/find-a-class", label: "Book a Class" },
    secondary: { href: "/new-student", label: "New Student" },
    body: `
    <section class="hcla-band" aria-label="Class tiers">
      <div class="hcla-wrap hcla-band-inner">
        <div class="hcla-band-item"><strong>Refresh</strong><span>$35 / light renewal</span></div>
        <div class="hcla-band-item"><strong>Reset</strong><span>$84 / pattern interruption</span></div>
        <div class="hcla-band-item"><strong>Restore</strong><span>$196 / deeper repair</span></div>
        <div class="hcla-band-item"><strong>Revitalize</strong><span>$238/mo / full month</span></div>
      </div>
    </section>

    <section class="hcla-section" aria-labelledby="classes-tiers">
      <div class="hcla-wrap">
        <div class="hcla-centered"><p class="hcla-eyebrow">The class pathway</p><h2 id="classes-tiers">Each level meets a different need</h2><div class="hcla-divider"></div><p>Start where your capacity actually is. The work deepens as your system has more room to respond.</p></div>
        ${classCards}
      </div>
    </section>

    <section class="hcla-section hcla-section-soft" aria-labelledby="class-room">
      <div class="hcla-wrap hcla-editorial">
        <div><p class="hcla-eyebrow">What happens in class</p><h2 id="class-room">A prepared space. A guided rhythm. A real next step.</h2><div class="hcla-divider hcla-divider-left"></div><p>Each class follows the same rhythm: notice what is happening, let the body respond, choose what comes next. You do not need to explain everything before you arrive. The practice gives the pattern a place to move.</p><a class="hcla-link" href="/find-a-class">Find a class</a></div>
        <figure class="hcla-media-frame"><img src="../../images/generated/hcla-prepared-guided-room.png" alt="Prepared class room with guided materials"></figure>
      </div>
      <div class="hcla-wrap">
        <div class="hcla-grid-3">
          <article class="hcla-card"><p class="hcla-eyebrow">Arrive</p><h3>Settle the room</h3><p>Breath, attention, and simple orientation help the nervous system arrive.</p></article>
          <article class="hcla-card"><p class="hcla-eyebrow">Release</p><h3>Let the body respond</h3><p>Movement, breathwork, and bodywork help release what has been held.</p></article>
          <article class="hcla-card"><p class="hcla-eyebrow">Choose</p><h3>Practice outside the room</h3><p>Each class closes with one next step you can carry into daily life.</p></article>
        </div>
      </div>
    </section>

    <section class="hcla-section hcla-section-green" aria-labelledby="class-facilitator">
      <div class="hcla-wrap hcla-editorial">
        <div><p class="hcla-eyebrow">Facilitated by Winnie</p><h2 id="class-facilitator">Clinical training with somatic depth</h2><div class="hcla-divider hcla-divider-left"></div><p>Dr. Winnie Chan Wang brings acupuncture, Oriental Medicine, Tao Calligraphy practice, the Jaw-Gut-Pelvis method, and decades of healing arts experience into the class container.</p><a class="hcla-button hcla-button-light" href="/teachers">Meet the Teachers</a></div>
        <figure class="hcla-media-frame"><img src="Dr. Winnie Chan Wang.jpeg" alt="Dr. Winnie Chan Wang"></figure>
      </div>
    </section>

    <section class="hcla-section" aria-labelledby="classes-faq">
      <div class="hcla-wrap hcla-content"><p class="hcla-eyebrow">Questions</p><h2 id="classes-faq">Before you reserve</h2>${accordion([
        { q: "Which tier should I start with?", a: "If you are new, start with Refresh or Reset. Restore and Revitalize are better when you already know you need deeper support." },
        { q: "Are these therapy or medical treatment?", a: "No. Classes are healing and educational spaces. They do not replace medical care, psychotherapy, or emergency support." },
        { q: "Do I need experience with breathwork?", a: "No. The class is guided and paced so first-time students can follow." },
        { q: "Can I book monthly?", a: "Yes. Revitalize is the monthly option for students ready for a fuller class rhythm." }
      ])}</div>
    </section>`
  },
  {
    slug: "teachers",
    id: "hcla-teachers",
    title: "Teachers",
    route: "/teachers",
    eyebrow: "Teachers",
    h1: "Clinical depth, relational intelligence, and lived practice",
    subhead: "Meet Dr. Winnie Chan Wang and Dr. Jay Dubois, PhD.",
    primary: { href: "/find-a-class", label: "Book a Class" },
    secondary: { href: "/contact", label: "Institutional Inquiry" },
    heroBg: "../../images/Homepage Images/On top Hero Image, Jay and Winnie.png",
    ghlHeroBg: "{{HCLA_HOMEPAGE_FOUNDERS_IMAGE_URL}}",
    body: `
    <section class="hcla-section hcla-section-green" aria-labelledby="teachers-award">
      <div class="hcla-wrap hcla-editorial">
        <div><p class="hcla-eyebrow">Recognition</p><h2 id="teachers-award">World Cultural Harmony Award, 2026</h2><div class="hcla-divider hcla-divider-left"></div><p>Dr. Winnie Chan Wang and Dr. Jay Dubois, PhD received the World Cultural Harmony Award on May 21, 2026 from the World Cultural Harmony Council and the International Alliance of Civilization.</p><p>The award recognizes healing that starts in the body and reaches into communities, cultures, and the spaces between people.</p></div>
        <figure class="hcla-award-media">
          <img data-ghl-src="{{HCLA_AWARD_GROUP_IMAGE_URL}}" src="../../images/Homepage Images/UN Award/UN Group Photo.jpeg" alt="World Cultural Harmony Award group photo with Dr. Jay Dubois and Dr. Winnie Chan Wang">
          <figcaption>World Cultural Harmony Award, 2026</figcaption>
        </figure>
      </div>
    </section>

    <section class="hcla-section" aria-labelledby="teacher-profiles">
      <div class="hcla-wrap"><div class="hcla-centered"><p class="hcla-eyebrow">The founders</p><h2 id="teacher-profiles">Two teachers, one healing ecosystem</h2><div class="hcla-divider"></div></div>
        <div class="hcla-grid-2">
          <article class="hcla-card hcla-profile-card"><figure class="hcla-profile-photo hcla-profile-photo-winnie"><img data-ghl-src="{{HCLA_WINNIE_PROFILE_IMAGE_URL}}" src="../../images/Homepage Images/Winnie Profile Picture/Replace Winnie Profile Picture.jpeg" alt="Dr. Winnie Chan Wang"></figure><div class="hcla-profile-card-content"><h3>Dr. Winnie Chan Wang</h3><p class="hcla-eyebrow">Clinical anchor and class facilitator</p><p>Winnie leads the healing classes, daily sacred breathwork, private somatic sessions, and the somatic depth of Heart Center LA's practice.</p><ul><li>Licensed acupuncturist</li><li>Creator of the Jaw-Gut-Pelvis method</li><li>MIT (dual BS), NYU (MS), Master of Science in Oriental Medicine</li><li>Founder, Compassionate Transformation Community</li><li>World Cultural Harmony Award recipient</li></ul></div></article>
          <article class="hcla-card hcla-profile-card"><figure class="hcla-profile-photo hcla-profile-photo-jay"><img data-ghl-src="{{HCLA_JAY_PROFILE_IMAGE_URL}}" src="../../images/Homepage Images/Jay Profile Picture/Jay Profile Picture.png" alt="Dr. Jay Dubois, PhD"></figure><div class="hcla-profile-card-content"><h3>Dr. Jay Dubois, PhD</h3><p class="hcla-eyebrow">Public voice and relational facilitator</p><p>Jay hosts Conscious Connections, leads the podcast, teaches people to recognize relational patterns, and facilitates institutional healing experiences.</p><ul><li>PhD in Anthropology, specializing in human interaction</li><li>Professor at CSU San Bernardino and CSU Northridge</li><li>Author of <em>Stop Leaking Power</em></li><li>Executive Director, Compassionate Transformation Community</li><li>World Cultural Harmony Award recipient</li></ul></div></article>
        </div>
      </div>
    </section>

    <section class="hcla-section hcla-section-soft" aria-labelledby="division">
      <div class="hcla-wrap"><div class="hcla-centered"><p class="hcla-eyebrow">How they hold the work</p><h2 id="division">Clear roles inside one practice</h2><div class="hcla-divider"></div></div>
        <div class="hcla-grid-3">
          <article class="hcla-card"><h3>Classes and breathwork</h3><p>Led by Winnie, supported by the Heart Center LA method and class container.</p></article>
          <article class="hcla-card"><h3>Connection and podcast</h3><p>Led by Jay, focused on relational patterns, letters, and public teaching.</p></article>
          <article class="hcla-card"><h3>Institutions and retreats</h3><p>Co-led by Winnie and Jay for hospitals, teams, cultural institutions, and community partners.</p></article>
        </div>
      </div>
    </section>`
  },
  {
    slug: "conscious-connections",
    id: "hcla-conscious-connections",
    title: "Conscious Connections",
    route: "/conscious-connections",
    eyebrow: "Conscious Connections",
    h1: "A different kind of Thursday night",
    subhead: "Conscious dating and relational practice in Pasadena.",
    primary: { href: "{{HCLA_EVENT_TICKET_URL}}", label: "Reserve a Ticket" },
    secondary: { href: "/classes", label: "Explore Classes" },
    body: `
    <section class="hcla-band" aria-label="Event details">
      <div class="hcla-wrap hcla-band-inner">
        <div class="hcla-band-item"><strong>Date</strong><span>{{HCLA_NEXT_EVENT_DATE}}</span></div>
        <div class="hcla-band-item"><strong>When</strong><span>Thursday nights</span></div>
        <div class="hcla-band-item"><strong>Where</strong><span>Atelier by Artmingo, Pasadena</span></div>
        <div class="hcla-band-item"><strong>Tickets</strong><span>$45-65</span></div>
      </div>
    </section>
    <section class="hcla-section" aria-labelledby="event-format">
      <div class="hcla-wrap"><div class="hcla-centered"><p class="hcla-eyebrow">The format</p><h2 id="event-format">Connection with a room that can hold it</h2><div class="hcla-divider"></div><p>This is not a mixer with better lighting. The room is structured so people can arrive, breathe, ask better questions, and notice how they connect.</p></div>
        <div class="hcla-grid-4">
          <article class="hcla-card"><h3>Arrival</h3><p>Beverages, settling, and a gentle transition into the room.</p></article>
          <article class="hcla-card"><h3>Breathwork</h3><p>A communal grounding practice shifts the energy from performance to presence.</p></article>
          <article class="hcla-card"><h3>Guided rounds</h3><p>Prompt-driven conversations rotate and deepen across the night.</p></article>
          <article class="hcla-card"><h3>Conscious dating</h3><p>Structured connection with questions that help patterns become visible.</p></article>
        </div>
      </div>
    </section>
    <section class="hcla-section hcla-section-green" aria-labelledby="event-arc">
      <div class="hcla-wrap"><div class="hcla-centered"><p class="hcla-eyebrow">ARC in the room</p><h2 id="event-arc">See. Name. Change.</h2><div class="hcla-divider"></div></div>
        <div class="hcla-grid-3">
          <article class="hcla-card"><h3>See</h3><p>Breathwork and intention-setting surface what you carry into connection.</p></article>
          <article class="hcla-card"><h3>Name</h3><p>Guided rounds make patterns visible through live interaction.</p></article>
          <article class="hcla-card"><h3>Change</h3><p>You leave with something named: a pattern seen, a connection felt, a next step clear.</p></article>
        </div>
      </div>
    </section>
    <section class="hcla-section hcla-section-soft" aria-labelledby="event-bridge"><div class="hcla-wrap hcla-editorial"><div><p class="hcla-eyebrow">After the event</p><h2 id="event-bridge">If the pattern moved, keep working with it</h2><div class="hcla-divider hcla-divider-left"></div><p>Conscious Connections is a doorway. If something opens in the room, the healing classes are where that insight can become practice.</p><a class="hcla-link" href="/find-a-class">Book a class</a></div><div class="hcla-placeholder"><strong>Event media slot</strong><p>Replace with a GHL-hosted event photo using {{HCLA_EVENT_IMAGE_URL}} when available.</p></div></div></section>`,
    final: finalCta("Reserve your place in the room", "Come for connection. Leave with language for what you notice in yourself.", { href: "{{HCLA_EVENT_TICKET_URL}}", label: "Reserve a Ticket" }, { href: "/new-student", label: "New Student" })
  },
  {
    slug: "heart-center-connection",
    id: "hcla-heart-center-connection",
    title: "Heart Center Connection",
    route: "/heart-center-connection",
    eyebrow: "Podcast",
    h1: "Real letters. Pattern-level answers.",
    subhead: "A weekly podcast where listener questions become a public practice.",
    primary: { href: "#submit-letter", label: "Submit a Letter" },
    secondary: { href: "/classes", label: "Explore Classes" },
    body: `
    <section class="hcla-section" aria-labelledby="podcast-how">
      <div class="hcla-wrap"><div class="hcla-centered"><p class="hcla-eyebrow">How it works</p><h2 id="podcast-how">Write to us about the pattern you cannot stop repeating</h2><div class="hcla-divider"></div><p>Jay reads or paraphrases listener letters and walks through what is visible, what may be held underneath, and what choice becomes possible next.</p></div>
        <div class="hcla-grid-3">
          <article class="hcla-card"><h3>The letter</h3><p>You describe the situation in your own words. Details can be anonymized.</p></article>
          <article class="hcla-card"><h3>The pattern</h3><p>Jay names what he hears happening relationally, emotionally, and in the body.</p></article>
          <article class="hcla-card"><h3>The bridge</h3><p>If you hear yourself in an episode, the next step is an event or a class.</p></article>
        </div>
      </div>
    </section>
    <section id="submit-letter" class="hcla-section hcla-section-soft" aria-labelledby="letter-form"><div class="hcla-wrap hcla-editorial"><div><p class="hcla-eyebrow">Submit a letter</p><h2 id="letter-form">Tell us the pattern you keep meeting</h2><div class="hcla-divider hcla-divider-left"></div><p>Use the form slot for listener letters. Include consent language in GHL so submissions can be reviewed safely before recording.</p></div><div class="hcla-placeholder"><strong>Podcast letter form</strong><p>{{HCLA_LETTER_FORM_EMBED}}</p></div></div></section>
    <section class="hcla-section hcla-section-green" aria-labelledby="episode-types"><div class="hcla-wrap"><div class="hcla-centered"><p class="hcla-eyebrow">Episode formats</p><h2 id="episode-types">A public demonstration of the method</h2><div class="hcla-divider"></div></div><div class="hcla-grid-3"><article class="hcla-card"><h3>Diagnostic Round</h3><p>Three letters, each answered in a short pattern-level walkthrough.</p></article><article class="hcla-card"><h3>Deep Dive</h3><p>One letter receives the full ARC arc from awareness into choice.</p></article><article class="hcla-card"><h3>On-Air Session</h3><p>A real session format, anonymized and consented before release.</p></article></div></div></section>`
  },
  {
    slug: "testimonials",
    id: "hcla-testimonials",
    title: "Testimonials",
    route: "/testimonials",
    eyebrow: "Testimonials",
    h1: "Student stories, collected with care",
    subhead: "Proof belongs here only when people have clearly consented to share it.",
    primary: { href: "/find-a-class", label: "Book a Class" },
    secondary: { href: "#share-feedback", label: "Share Feedback" },
    body: `
    ${testimonialStories}
    <section class="hcla-section hcla-section-green" aria-labelledby="verified-proof"><div class="hcla-wrap"><div class="hcla-centered"><p class="hcla-eyebrow">Verified proof</p><h2 id="verified-proof">Recognition and relationships</h2><div class="hcla-divider"></div><p>Dr. Winnie Chan Wang and Dr. Jay Dubois, PhD received the World Cultural Harmony Award on May 21, 2026. Heart Center LA also works alongside healthcare, cultural, and community organizations across Los Angeles.</p></div>${logoWall()}</div></section>
    <section id="share-feedback" class="hcla-section hcla-section-soft" aria-labelledby="feedback-form"><div class="hcla-wrap hcla-editorial"><div><p class="hcla-eyebrow">Share feedback</p><h2 id="feedback-form">Collect stories with consent</h2><div class="hcla-divider hcla-divider-left"></div><p>Use this form slot for post-class or post-event feedback. GHL should include a consent checkbox before any quote is used publicly.</p></div><div class="hcla-placeholder"><strong>Testimonial form</strong><p>{{HCLA_TESTIMONIAL_FORM_EMBED}}</p></div></div></section>`
  },
  {
    slug: "find-a-class",
    id: "hcla-find-a-class",
    title: "Find a Class",
    route: "/find-a-class",
    eyebrow: "Book a class",
    h1: "Reserve the level of support you need today",
    subhead: "Choose a tier, find a time, and let the practice show you what comes next.",
    primary: { href: "#class-calendar", label: "View Calendar" },
    secondary: { href: "/new-student", label: "New Student" },
    body: `
    <section class="hcla-section" aria-labelledby="booking-tiers"><div class="hcla-wrap"><div class="hcla-centered"><p class="hcla-eyebrow">Choose first</p><h2 id="booking-tiers">Four class levels</h2><div class="hcla-divider"></div><p>If you are new, Refresh or Reset is usually the easiest doorway.</p></div>${classCards}</div></section>
    <section id="class-calendar" class="hcla-section hcla-section-soft" aria-labelledby="calendar"><div class="hcla-wrap hcla-editorial"><div><p class="hcla-eyebrow">Calendar</p><h2 id="calendar">Select your class time</h2><div class="hcla-divider hcla-divider-left"></div><p>Paste the GHL calendar embed here or place a native GHL calendar element directly below this custom-code section and anchor it as <strong>class-calendar</strong>.</p><p>Classes are based in Pasadena, CA. Confirm timezone and location in the GHL calendar settings before launch.</p></div><div class="hcla-placeholder"><strong>Class calendar embed</strong><p>{{HCLA_CLASS_CALENDAR_EMBED}}</p></div></div></section>
    <section class="hcla-section hcla-section-green" aria-labelledby="manual-help"><div class="hcla-wrap hcla-content hcla-centered"><p class="hcla-eyebrow">Need help choosing?</p><h2 id="manual-help">Start with the doorway, not the whole journey</h2><div class="hcla-divider"></div><p>Email heartcenterla1@gmail.com or call (213) 856-1293 if the calendar is not enough context.</p><a class="hcla-button hcla-button-light" href="/contact">Contact Us</a></div></section>`
  },
  {
    slug: "contact",
    id: "hcla-contact",
    title: "Contact",
    route: "/contact",
    eyebrow: "Contact",
    h1: "Start the right conversation",
    subhead: "Classes, private sessions, institutional facilitation, and general questions.",
    primary: { href: "#contact-form", label: "Send a Message" },
    secondary: { href: "/find-a-class", label: "Book a Class" },
    body: `
    <section class="hcla-section" aria-labelledby="contact-paths"><div class="hcla-wrap"><div class="hcla-centered"><p class="hcla-eyebrow">Inquiry paths</p><h2 id="contact-paths">What do you need?</h2><div class="hcla-divider"></div></div><div class="hcla-grid-3"><article class="hcla-card"><h3>Private sessions</h3><p>For Winnie-led somatic sessions, acupuncture, or deeper class-related support.</p></article><article class="hcla-card"><h3>Institutional facilitation</h3><p>For hospitals, teams, cultural institutions, and community organizations.</p></article><article class="hcla-card"><h3>General questions</h3><p>For class logistics, Conscious Connections, podcast letters, or partnership questions.</p></article></div></div></section>
    <section id="contact-form" class="hcla-section hcla-section-soft" aria-labelledby="form"><div class="hcla-wrap hcla-editorial"><div><p class="hcla-eyebrow">Message us</p><h2 id="form">Use the form and choose your inquiry type</h2><div class="hcla-divider hcla-divider-left"></div><p>GHL should branch this form by inquiry type: private session, institutional booking, class question, event question, podcast question, or general.</p></div><div class="hcla-placeholder"><strong>Contact form embed</strong><p>{{HCLA_CONTACT_FORM_EMBED}}</p></div></div></section>
    <section class="hcla-section hcla-section-green" aria-labelledby="location"><div class="hcla-wrap hcla-content hcla-centered"><p class="hcla-eyebrow">Pasadena</p><h2 id="location">Heart Center LA</h2><div class="hcla-divider"></div><p>2801 E. Foothill Blvd., Pasadena CA 91107<br>heartcenterla1@gmail.com<br>(213) 856-1293</p></div></section>`
  },
  {
    slug: "new-student",
    id: "hcla-new-student",
    title: "New Student",
    route: "/new-student",
    eyebrow: "New student",
    h1: "Arrive without needing to know everything",
    subhead: "A first class is a doorway, not a test.",
    primary: { href: "/find-a-class", label: "Book a Class" },
    secondary: { href: "/classes", label: "Choose a Tier" },
    body: `
    <section class="hcla-section" aria-labelledby="expect"><div class="hcla-wrap"><div class="hcla-centered"><p class="hcla-eyebrow">What to expect</p><h2 id="expect">The room does not require performance</h2><div class="hcla-divider"></div><p>You will be guided through breath, attention, body-based practice, and reflection. You can participate at the level your system can handle that day.</p></div><div class="hcla-grid-3"><article class="hcla-card"><h3>Before class</h3><p>Wear comfortable clothing, hydrate, and give yourself enough time to arrive.</p></article><article class="hcla-card"><h3>During class</h3><p>You will be guided. You can pause, rest, or modify if something feels like too much.</p></article><article class="hcla-card"><h3>After class</h3><p>Leave space for integration. Notice what changed and what next step feels real.</p></article></div></div></section>
    <section class="hcla-section hcla-section-soft" aria-labelledby="choose-tier"><div class="hcla-wrap hcla-editorial"><div><p class="hcla-eyebrow">Choosing a tier</p><h2 id="choose-tier">Start where your capacity is today</h2><div class="hcla-divider hcla-divider-left"></div><p>Refresh is the gentlest entry. Reset is for a loop you are ready to interrupt. Restore is for deeper repair. Revitalize is for a month of practice when you are ready for a larger shift.</p><a class="hcla-link" href="/classes">Compare classes</a></div><figure class="hcla-media-frame"><img src="../../images/generated/hcla-homepage-class-detail-placeholder.png" alt="Prepared class materials in a serene studio"></figure></div></section>
    <section class="hcla-section hcla-section-green" aria-labelledby="safety"><div class="hcla-wrap hcla-content hcla-centered"><p class="hcla-eyebrow">Safety note</p><h2 id="safety">Healing classes are not emergency care</h2><div class="hcla-divider"></div><p>Classes are educational and healing spaces. They do not replace medical care, psychotherapy, crisis support, or emergency services. If you are in immediate danger or crisis, contact local emergency support.</p></div></section>`
  },
  {
    slug: "faq",
    id: "hcla-faq",
    title: "FAQ",
    route: "/faq",
    eyebrow: "FAQ",
    h1: "Questions before you begin",
    subhead: "Practical answers about classes, safety, events, the podcast, and institutional work.",
    primary: { href: "/find-a-class", label: "Book a Class" },
    secondary: { href: "/contact", label: "Contact Us" },
    body: `
    <section class="hcla-section" aria-labelledby="faq-classes"><div class="hcla-wrap hcla-content"><p class="hcla-eyebrow">Classes</p><h2 id="faq-classes">Class questions</h2>${accordion([
      { q: "Which class should I book first?", a: "If you are new, begin with Refresh or Reset. They are designed as lower-friction doorways into the practice." },
      { q: "What happens in a class?", a: "Every class uses the same rhythm: notice what is happening, let the body respond, and choose what comes next." },
      { q: "Are classes in person?", a: "Heart Center LA is based in Pasadena. Confirm location and online/in-person details in the GHL calendar before booking." },
      { q: "Is this medical treatment?", a: "No. Classes are healing and educational spaces and do not replace medical care, psychotherapy, or emergency support." }
    ])}</div></section>
    <section class="hcla-section hcla-section-soft" aria-labelledby="faq-offers"><div class="hcla-wrap hcla-content"><p class="hcla-eyebrow">Events and podcast</p><h2 id="faq-offers">Other doorways</h2>${accordion([
      { q: "What is Conscious Connections?", a: "A Thursday night conscious dating and relational practice event in Pasadena, structured around breathwork and guided connection." },
      { q: "How do I submit a podcast letter?", a: "Use the letter submission form on the Heart Center Connection page. Submissions should include consent language and can be anonymized." },
      { q: "Can organizations book Jay and Winnie?", a: "Yes. Use the contact page for institutional facilitation inquiries for hospitals, teams, cultural institutions, and community organizations." }
    ])}</div></section>
    <section class="hcla-section hcla-section-green" aria-labelledby="faq-help"><div class="hcla-wrap hcla-content hcla-centered"><p class="hcla-eyebrow">Still unsure?</p><h2 id="faq-help">Ask before you book</h2><div class="hcla-divider"></div><p>Use the contact page if you need help choosing the right doorway.</p><a class="hcla-button hcla-button-light" href="/contact">Contact Us</a></div></section>`
  }
];

for (const def of pages) {
  const outPath = path.join(root, "pages", def.slug, `ghl-${def.slug}-v3-custom-code.html`);
  fs.writeFileSync(outPath, page(def), "utf8");
  console.log(`wrote ${path.relative(root, outPath)}`);
}
