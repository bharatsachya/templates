import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectGallery from "@/components/project-gallery"

export default function ProjectsPage() {
  const waterSportsImages = [
    { src: "/placeholder.svg?height=600&width=800", alt: "Boat tour" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Kayaking" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Canoeing" },
  ]

  const winterSportsImages = [
    { src: "/placeholder.svg?height=600&width=800", alt: "Skiing" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Ski lift" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Snowboarding" },
  ]

  const campingImages = [
    { src: "/placeholder.svg?height=600&width=800", alt: "Tent camping" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Camping at sunrise" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Mountain camping" },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Lake landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <Header />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">OUR PROJECTS</h1>
        </div>
      </section>

      {/* Water Sports Project */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <span className="text-rose-500 font-medium">Adventure</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">WATER SPORTS</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.
          </p>

          <ProjectGallery images={waterSportsImages} />
        </div>
      </section>

      {/* Winter Sports Project */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <span className="text-rose-500 font-medium">Snow Adventure</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">WINTER SPORTS</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.
          </p>

          <ProjectGallery images={winterSportsImages} />
        </div>
      </section>

      {/* Camping Project */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <span className="text-rose-500 font-medium">Forest Tours</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">CAMPING</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.
          </p>

          <ProjectGallery images={campingImages} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

