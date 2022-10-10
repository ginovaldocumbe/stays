import './App.css';
import Pesquisa from './components/pesquisa/pesquisa'
import Info from './components/info/info'
import Cad from './components/mycard/mycard'
import Im from './components/imagem/logo.png'
import St from './files/stays.json'
import Nav from './components/nav/nav'
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

function App() {

  const [abrir, setAbrir] = useState(false);
  function AbrirNav() {
    setAbrir(!abrir);
  }

  if (abrir) {
    document.body.classList.add("active-modal");
  }

  const extrair = St.map(
    (st) => {
      return (
        <Cad
          titulo={st.title}
          tipo={st.type}
          camas={st.beds}
          sp={st.superHost}
          ava={st.rating}
          foto={st.photo}
        />
      )
    }
  )

  return (
    <div>
      {abrir && (
        <div className='overflow-y-hidden'>
          <Nav />
          <div onClick={AbrirNav} className=' fixed right-5 top-3 text-black text-2xl font-bold'>
            <AiOutlineClose />
          </div>
        </div>
      )}

      <div className="h-screen px-5 ">
        <div>
          <img src={Im} />
        </div>
        <div onClick={AbrirNav} className='h-fit'>
          <Pesquisa />
        </div>
        <Info />
        <div className='grid md:grid-cols-3 md:gap-10'>
          {extrair}
        </div>
      </div>
    </div>
  );
}

export default App;
