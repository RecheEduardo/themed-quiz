import { useState } from 'react'
import './App.css'
import Index from './components/homePage/Index'
import Choose from './components/chooseQuiz/Choose';

function App() {

  const [currentIndex , setCurrentIndex] = useState(0);

  const homestate = [
    <Index handleAdvance={() => setCurrentIndex((prevState) => prevState + 1)}/>, 
    <Choose/>
  ];

  return (
    <>
      <section className="site">
        {homestate[currentIndex]}
      </section>
      <div className="brand-links popUp">
        <a href="https://www.linkedin.com/in/eduardorechemartins/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/RecheEduardo" target='_blank'><i className="fa-brands fa-github"></i></a>
      </div>
    </>
  )
}

export default App;
