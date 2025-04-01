import Image from "next/image"
import { Quote } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Mountain lake with person"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <Header />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-lg mb-2">Explore The Colourful World</p>
          <div className="w-20 h-1 bg-rose-500 mb-6"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">A WONDERFUL GIFT</h2>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-sm font-medium transition">
            LEARN MORE
          </button>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Quote className="w-16 h-16 text-gray-200 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            "Fuerat aetatis carererem habenita spectent tortrusa mutastis locant liberioris."
          </p>
          <p className="text-gray-500">- Adam Sendler</p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">UPCOMING EVENTS</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Everest Camp Trek"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Everest Camp Trek</h3>
                <p className="text-gray-600 mb-4">
                  Fuerat aetatis carererem habenita spectent tortrusa mutastis locant liberioris invera possedi.
                </p>
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-medium transition flex items-center">
                  LEARN MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Walking Holidays"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Walking Holidays</h3>
                <p className="text-gray-600 mb-4">
                  Fuerat aetatis carererem habenita spectent tortrusa mutastis locant liberioris invera possedi.
                </p>
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-medium transition flex items-center">
                  LEARN MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the World Section */}
      <section className="relative py-24">
        <div className="relative h-[500px]">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Explorer with backpack"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center max-w-lg px-4 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">EXPLORE THE WORLD</h2>
            <p className="text-white/80 mb-8">
              Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi, fert hic. Recusent mentes
              praecipites locum caligine sui egens erat. Silvas caeli regna.
            </p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-sm font-medium transition w-fit">
              LEARN MORE →
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Tours Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">UPCOMING TOURS & DESTINATION</h2>
              <div className="w-20 h-1 bg-rose-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Fuerat aetatis carererem habenita spectent tortrusa mutastis locant liberioris. Sinistro possedi libra
                ut cataractagae. Secuant corporyore perveniunt ambitio! Corrupti conspexit capit sublime finis moles.
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-medium transition">
                LEARN MORE
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Skiing"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Skiing"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Mountain biking"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Hiking"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

