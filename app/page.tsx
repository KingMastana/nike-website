import Nav from './components/Nav'
import {CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality} from './sections'

function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section id='products' className="padding">
        <PopularProducts />
      </section>
      <section id='about-us' className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default Home