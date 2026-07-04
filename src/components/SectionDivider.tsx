export default function SectionDivider() {
  return (
    <div className="container mx-auto px-4 sm:px-6 pointer-events-none select-none" aria-hidden>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E0D8D0] to-transparent" />
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF7C00] opacity-35" />
          <div className="w-1 h-1 rounded-full bg-[#FF8A4B] opacity-22" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF7C00] opacity-35" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E0D8D0] to-transparent" />
      </div>
    </div>
  );
}
