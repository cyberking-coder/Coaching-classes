import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClassesOverview from './components/ClassesOverview';
import Courses from './components/Courses';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Recognition from './components/Recognition';
import FreeCounselling from './components/FreeCounselling';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClassesOverview />
      <Courses />
      <Team />
      <Testimonials />
      <Recognition />
      <FreeCounselling />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
