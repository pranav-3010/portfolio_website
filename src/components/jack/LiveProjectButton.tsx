export function LiveProjectButton({
  href,
  onClick,
  label = "Live Project",
}: {
  href?: string;
  onClick?: () => void;
  label?: string;
}) {
  const className = "inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer text-center";

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        {label}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </a>
  );
}
