import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Testimonial from './Testimonial'
import Newsletter from './Newsletter'
import Footer from './Footer'
export default function App() {
  return (
   <div className="bg-[url(/images/bg-tablet-pattern.svg)] bg-no-repeat bg-auto max-[600px]:bg-contain bg-[top_-1.6rem_left_2rem] md:bg-[top_-7rem_left_12rem] lg:bg-[top_-24rem_left_40rem] xl:bg-[top_-20rem_left_67rem] ">
    <Navigation/>
    <Hero/>
    <About/>
    <Testimonial/>
    <Newsletter/>
    <Footer/>
   </div>
 
  )
}