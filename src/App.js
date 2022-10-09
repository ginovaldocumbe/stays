import './App.css';
import Pesquisa from './components/pesquisa/pesquisa'
import Info from './components/info/info'
import Cad from './components/mycard/mycard'
import Im from './components/imagem/logo.png'
import St from './files/stays.json'

function App() {

  const extrair = St.map(
    (st) => {
      return (
        <Cad
          titulo={st.title}
          tipo ={st.type}
          camas={st.beds}
          sp ={st.superHost}
          ava = {st.rating}
          foto = {st.photo}
        />
      )
    }
  )

  return (
    <div className="h-screen px-5">
      <div>
        <img src={Im} />
      </div>
      <Pesquisa />
      <Info />
      <div className='grid md:grid-cols-3 md:gap-10'>
        {extrair}
      </div>
    </div>
  );
}

export default App;
