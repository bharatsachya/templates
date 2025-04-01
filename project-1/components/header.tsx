import Link from "next/link"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white font-bold text-xl">
            <span className="block">OUTDOOR</span>
            <span className="block text-sm tracking-widest">ADVENTURE</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white font-medium hover:text-rose-400 transition">
            Home
          </Link>
          <Link href="/about" className="text-white font-medium hover:text-rose-400 transition">
            About
          </Link>
          <Link href="/services" className="text-white font-medium hover:text-rose-400 transition">
            Services
          </Link>
          <Link href="/projects" className="text-white font-medium hover:text-rose-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="text-white font-medium hover:text-rose-400 transition">
            Contact
          </Link>
        </nav>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-medium transition">
          TAKE ACTION
        </button>
      </div>
    </header>
  )
}

