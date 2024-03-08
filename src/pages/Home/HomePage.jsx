import {Hero,FeaturedProducts, Testimonials, Faq} from "./components"

export const HomePage = () => {
    return (
      <main>     
            <Hero/>
            <FeaturedProducts/>
            <Testimonials/>
            <Faq/>
      </main>
    )
  }