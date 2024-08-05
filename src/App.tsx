import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [texto, setTexto] = useState('')
  const [history, setHistory] = useState<{ input: string; output: string; type: 'encrypt' | 'decrypt'; }[]>([]);
  const inputSaidaRef = useRef<HTMLTextAreaElement>(null);

  const matrizCodigo = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  
  function criptografar(stringEncriptada: string): string {
    stringEncriptada = stringEncriptada.toLowerCase();
    const originalArray = stringEncriptada.split("");
  
    matrizCodigo.forEach(([original, codificado]) => {
        for (let i = 0; i < originalArray.length; i++) {
            if (originalArray[i] === original) {
                originalArray[i] = codificado;
            }
        }
    });
  
    return originalArray.join("");
}
  
function descriptografar(stringDescriptada: string): string {
    stringDescriptada = stringDescriptada.toLowerCase();
  
    matrizCodigo.forEach(([original, codificado]) => {
        stringDescriptada = stringDescriptada.split(codificado).join(original);
    });
  
    return stringDescriptada;
}
  function botaoCriptografar() {
    const textoEncriptado = criptografar(texto)
    if (inputSaidaRef.current) {
      inputSaidaRef.current.value = textoEncriptado;
  }

  // Append new entry into history
  setHistory([...history, { input: texto, output: textoEncriptado, type: 'encrypt' }]);
}

  function botaoDescriptografar() {
    const textoDescriptado = descriptografar(texto)
    if (inputSaidaRef.current) {
      inputSaidaRef.current.value = textoDescriptado
    }
    setHistory([...history, { input: texto, output: textoDescriptado, type: 'decrypt' }]);
  }

  function copiarTexto() {
    inputSaidaRef.current?.select()
    document.execCommand("copy")
  }

  interface HistoryItem {
    input: string;
    output: string;
    type: 'encrypt' | 'decrypt';
  }

  function handleHistoryClick(item: HistoryItem) {
    setTexto(item.input);
    // Fix using null check
    if (inputSaidaRef.current) {
      inputSaidaRef.current.value = item.output;
    }
  }

  return (
    <>
      <div>
        <a href="https://oracle.com" target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/patrickwebsdev/Encriptador-Oracle-Alura/master/img/one.png" className="logo" alt="Oracle logo" />
        </a>
        <a href="https://alura.com.br" target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/Lisaazulada5/Encriptador-Oracle-Alura/main/assets/img/alura-logo.png" className="logo" alt="Alura logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>OracleOne+Alura+Vite+React</h1>
      
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>

      <header className="flex">
      </header>

      <main>
        <section className="container">
          <div className="entrada">
            <div className="digite-texto">
              <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                cols={30}
                rows={5}
                placeholder="Digite..."
              ></textarea>
            </div>
            <p className="instruction"></p>
            <div className="botoes">
              <button className="encrypt" onClick={botaoCriptografar}>Encrypt</button>
              <button className="decrypt" onClick={botaoDescriptografar}>Decrypt</button>
            </div>
          </div>

          <div className="saida">
            <div className="conteudo-resultado-vazio">
              <img id="img" src="assets/img/woman.png" alt="" width="60%" />
              <p id="p-resultado"></p>
            </div>
            <div className="conteudo-resultado-ok">
              <textarea
                ref={inputSaidaRef}
                cols={30}
                rows={5}
                readOnly
              ></textarea>
              
            </div>
            <div className="botoes">
              <button className="encrypt" onClick={copiarTexto}>copy</button>
            </div>
          </div>
        </section>

        <section className="history">
          <h2>History</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index} onClick={() => handleHistoryClick(item)}>
                <strong>{item.type === 'encrypt' ? 'Encrypted' : 'Decrypted'}</strong>: {item.input} → {item.output}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App

