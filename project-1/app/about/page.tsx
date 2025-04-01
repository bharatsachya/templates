import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Mountain landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <Header />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">WHO WE ARE?</h1>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">OUR MISSION</h2>
              <div className="w-16 h-1 bg-rose-500 mb-6"></div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.
                </p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                  mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Person with backpack at waterfall"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience and Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Extraordinary Experiences */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Extraordinary Experiences</h2>
              <div className="w-16 h-1 bg-rose-500 mb-6"></div>
              <div className="space-y-4">
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                  mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            {/* Our Core Values */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Core Values</h2>
              <div className="w-16 h-1 bg-rose-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar dapibus leo.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">—</span>
                  <span className="text-gray-600">Locavit liberioris possedi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">—</span>
                  <span className="text-gray-600">Diremit mundi mare undae</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">—</span>
                  <span className="text-gray-600">Spectent tortrusa mutastis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

