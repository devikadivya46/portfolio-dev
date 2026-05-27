import React from "react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-slate-200/20 dark:border-slate-800 relative z-10" id="footer">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-display text-center md:text-left">
          Copyright © 2024 Devika S. N. <span className="text-solar-orange mx-2 select-none">✦</span> Handcrafted with celestial magic.
        </div>
        
        <div className="flex gap-12">
          <a
            className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-solar-orange transition-colors flex items-center gap-2 font-display"
            href="#hero"
            onClick={handleScrollToTop}
          >
            Back to top
            <span className="material-icons-outlined text-sm">north</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
