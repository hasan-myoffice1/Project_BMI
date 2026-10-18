export default function BrandLogo({ className = '' }) {
  return (
    <a
      href="#top"
      aria-label="myBMI Result home"
      className={`inline-flex h-12 w-fit shrink-0 items-center rounded-full bg-white px-5 shadow-soft ${className}`}
    >
      <img src="/logo.png" alt="myBMI Result" className="h-8 w-auto" />
    </a>
  );
}
