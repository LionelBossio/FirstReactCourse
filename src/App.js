import ImgPeriodica from './img/img-home.jpg'
import './App.css';
import { useState } from 'react';
import Elements from './components/Elements';

function App() {
  const [element, setElement] = useState(null);

  const Apireq = async () => {
    const api = await fetch("https://neelpatel05.pythonanywhere.com");
    const ElementApi = await api.json();
    setElement(ElementApi);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Tabla Periodica</h1>
        {element ? (
          <Elements element={element} setElement={setElement}/>
        ) : (
          <>
            <img src={ImgPeriodica} alt='TablaPeriodica' className='img-home'></img>
            <button onClick={Apireq} className='btn-search'>Ver Elementos</button>
          </>
        )}
        
        
      </header>
    </div>
  );
}

export default App;
