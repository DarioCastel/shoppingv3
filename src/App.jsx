import './App.css'
import zapa1 from './img/1.png'
import zapa2 from './img/2.png'
import zapa3 from './img/3.png'
import zapa4 from './img/4.png'
import zapa5 from './img/5.png'


function App() {

  return (
    <div className="container">
      <div className="cards">
        <div className="card-img">
          <img src={zapa1} alt=".." />
        </div>
        <div className="container-info">
          <h3>zapa gym</h3>
          <p>la dsdsdsdsdsdsdsdsdsdsddddd 1</p>
        </div>
        <button className='btn-carro'>agregar al cayito</button>
      </div>
      <div className="cards">
        <div className="card-img">
        <img src={zapa2} alt=".." />
        </div>
        <div className="container-info">
        <h3>zapa gym</h3>
        <p>la zapa 2</p>
        </div>
        <button className='btn-carro'>agregar al cayito</button>
      </div>
      <div className="cards">
        <div className="card-img">
        <img src={zapa3} alt=".." />
        </div>
        <div className="container-info">
        <h3>zapa gym</h3>
        <p>la zapa 3</p>
        </div>
        <button className='btn-carro'>agregar al cayito</button>
      </div>
      <div className="cards">
        <div className="card-img">
        <img src={zapa4} alt=".." />
        </div>
        <div className="container-info">
        <h3>zapa gym</h3>
        <p>la zapa 4</p>
        </div>
        <button className='btn-carro'>agregar al cayito</button>
      </div>
      <div className="cards">
        <div className="card-img">
        <img src={zapa5} alt=".." />
        </div>
        <div className="container-info">
        <h3>zapa gym</h3>
        <p>la zapa 5</p>
        </div>
        <button className='btn-carro'>agregar al cayito</button>
      </div>
    </div>
  )
}

export default App
