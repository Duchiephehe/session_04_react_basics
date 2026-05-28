import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import ProductInfo from './components/ProductInfo';
import LifecycleDemo from './components/LifecycleDemo';
import BadCounter from './components/BadCounter';
import GoodCounter from './components/GoodCounter';
import FlowDemo from './components/FLowDemo';
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section style={{ padding: '2rem', borderBottom: '2px dashed #ccc', marginBottom: '2rem' }}>
          <h2>Kết quả bài 0.2:</h2>
          <UserProfile />
          <hr style={{ margin: '2rem 0' }} />
          <ProductInfo />
          <hr style={{ margin: '2rem 0' }} />
          <LifecycleDemo />
          <hr style={{ margin: '2rem 0' }} />
          <BadCounter />
          <GoodCounter />
          <FlowDemo />
        </section>

        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//     return (
//         <div>
//             <h1>Tên của bạn ở đây</h1>
//             <p>Hôm nay là ngày đẹp trời</p>
//             <ul>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>JavaScript</li>
//                 <li>React</li>
//             </ul>
//         </div>
//     );
// }

// export default App;