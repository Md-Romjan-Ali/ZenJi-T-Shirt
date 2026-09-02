import Link from "next/link";
import { 
  FaTiktok, 
  FaInstagram, 
  FaFacebookF 
} from "react-icons/fa";

export default function Footer() {
  const footerSections = [
    {
      title: "DROPS",
      links: [
        { name: "Home", href: "/" },
        { name: "Drop", href: "/drop" },
        { name: "Collection", href: "/collection" },
      ],
    },
    {
      title: "EXPLORE",
      links: [
        { name: "Lookbook", href: "/lookbook" },
        { name: "Our Story", href: "/our-story" },
        { name: "Collection", href: "/collection" },
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        { name: "TikTok", href: "https://tiktok.com", external: true },
        { name: "Instagram", href: "https://instagram.com", external: true },
        { name: "Facebook", href: "https://facebook.com", external: true },
      ],
    },
    {
      title: "CONTACT",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Review", href: "/reviews" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms", href: "/terms" },
        { name: "Help", href: "/help" },
        { name: "Return Policy", href: "/returns" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden w-full bg-white dark:bg-[#050505] text-neutral-800 dark:text-white transition-colors duration-300 font-mono pt-16 pb-12 px-6 sm:px-10 lg:px-16 border-t border-neutral-200 dark:border-neutral-900">
      
      {/* Background Watermark Text ("ZENJI") */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-black tracking-tighter text-neutral-200/40 dark:text-neutral-900/40 leading-none">
          ZENJI
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Brand & Bio */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="text-4xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white flex items-center gap-1">
                ZJ
              </div>
            </Link>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm font-sans">
              Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every drop limited. No restocks. Ever.
            </p>

            {/* Social Media CTA */}
            <div className="space-y-3 pt-2">
              <span className="block text-[10px] font-bold tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase">
                FOLLOW THE LORE
              </span>

              {/* Social Brand Buttons */}
              <div className="flex flex-wrap gap-3">
                
                {/* TikTok Button */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black px-4 py-2.5 rounded text-xs font-semibold tracking-wider transition-colors shadow-sm"
                >
                  <FaTiktok className="w-4 h-4" />
                  <span>TikTok</span>
                </a>

                {/* Instagram Gradient Button */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white px-4 py-2.5 rounded text-xs font-semibold tracking-wider transition-opacity shadow-sm"
                >
                  <FaInstagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                {/* Facebook Button */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1877F2] hover:bg-blue-600 text-white px-4 py-2.5 rounded text-xs font-semibold tracking-wider transition-colors shadow-sm"
                >
                  <FaFacebookF className="w-4 h-4" />
                  <span>Facebook</span>
                </a>

              </div>
            </div>
          </div>

          {/* Right Columns: Dynamic Link Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-xs font-bold tracking-[0.25em] text-neutral-500 dark:text-neutral-400 uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                        className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-sans"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-900/80 flex items-center justify-center text-xs text-neutral-500 dark:text-neutral-400 font-sans">
          <p>© {new Date().getFullYear()} ZENJI. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}