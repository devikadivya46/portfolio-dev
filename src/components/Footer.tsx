import React from "react";
import { socialLinks } from "../data";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Works", href: "#projects" },
    { label: "Journey", href: "#glimpses" },
    { label: "Awards", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative z-10 border-t border-[#E8E0D7] bg-[#F7F4EF]" id="footer">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 space-y-5">
            <a
              href="#hero"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-2 font-serif italic text-3xl text-[#1C1310]"
            >
              Devika.
            </a>
            <p className="max-w-md text-sm sm:text-base leading-7 text-[#5F5650]">
              B.Tech CSE student at VTU — building clean, purposeful digital products with React, Node.js, and a sharp eye for design.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-[#E8E0D7] bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5F5650] transition-colors hover:border-[#D84C1B] hover:text-[#D84C1B]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#D84C1B] font-display">Quick Links</p>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#1C1310] hover:text-[#D84C1B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 rounded-[28px] bg-white/70 border border-[#E8E0D7] shadow-[0_16px_40px_rgba(28,19,16,0.06)] p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#D84C1B] font-display">Let's Connect</p>
            <h3 className="mt-3 text-2xl font-serif text-[#1C1310] leading-tight">
              Open for internships, collaborations, and thoughtful builds.
            </h3>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1C1310] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between border-t border-[#E8E0D7] pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#7B736B]">
          <p>Copyright © 2026 Devika S. N.</p>
          <a
            className="inline-flex items-center gap-2 hover:text-[#D84C1B] transition-colors"
            href="#hero"
            onClick={handleScrollToTop}
          >
            Back to top
            <span className="material-icons-outlined text-sm">north</span>
          </a>
        </div>
          <div className="border-t border-white/6 mt-6 pt-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm opacity-80">© {new Date().getFullYear()} Devika — All rights reserved.</div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/devikadivya46" className="text-sm opacity-90 hover:opacity-100 transition">GitHub</a>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 transition">Dribbble</a>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 transition">Twitter</a>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
}
