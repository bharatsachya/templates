import Image from "next/image"
import { Facebook, Twitter, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Forest landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <Header />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">CONTACT US</h1>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">WE'RE READY, LET'S TALK.</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-gray-100 border border-gray-200 rounded"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 bg-gray-100 border border-gray-200 rounded"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full p-4 bg-gray-100 border border-gray-200 rounded"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-sm font-medium transition"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">CONTACT INFO</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">123 Fifth Avenue, NY 10160, New York, USA</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600">800-123-456</p>
                </div>
                <div className="pt-4">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 hover:bg-rose-500 hover:text-white transition"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 hover:bg-rose-500 hover:text-white transition"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 hover:bg-rose-500 hover:text-white transition"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

