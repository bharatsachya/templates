import {Link} from 'react-router-dom';
export default function About() {
  return <header className="absolute top-0 left-0 right-0 z-10">
  <div className="container mx-auto px-4 py-6 flex items-center justify-between">
    <div className="flex items-center">
      <h1 className="font-bold text-xl">
        <span className="bg-gray-300">OUTDOOR</span>
        <span className="block text-sm tracking-widest">ADVENTURE</span>
      </h1>
    </div>
    <nav className="hidden md:flex items-center space-x-6">
      <Link to="/" className="font-medium hover:text-rose-400 transition">
        Home
      </Link>
      <Link to="/about" className="font-medium hover:text-rose-400 transition">
        About
      </Link>
      <Link to="/services" className="font-medium hover:text-rose-400 transition">
        Services
      </Link>
      <Link to="/projects" className="font-medium hover:text-rose-400 transition">
        Projects
      </Link>
      <Link to="/contact" className="font-medium hover:text-rose-400 transition">
        Contact
      </Link>
    </nav>
    <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-medium transition">
      TAKE ACTION
    </button>
  </div>
  </header>
  
}
