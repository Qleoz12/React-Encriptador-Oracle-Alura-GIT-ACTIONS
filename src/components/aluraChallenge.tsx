import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const AluraChallenge = () => {

    const [count, setCount] = useState(0)
    const [texto, setTexto] = useState('')
    const inputSaidaRef = useRef(null)

    const matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ]

    function criptografar(stringEncriptada: string) {
        stringEncriptada = stringEncriptada.toLowerCase()
        matrizCodigo.forEach(([original, codificado]) => {
            if (stringEncriptada.includes(original)) {
                stringEncriptada = stringEncriptada.replaceAll(original, codificado)
            }
        })
        return stringEncriptada
    }

    function descriptografar(stringDescriptada: string) {
        stringDescriptada = stringDescriptada.toLowerCase()
        matrizCodigo.forEach(([original, codificado]) => {
            if (stringDescriptada.includes(codificado)) {
                stringDescriptada = stringDescriptada.replace(new RegExp(codificado, 'g'), original)
            }
        })
        return stringDescriptada
    }

    function botaoCriptografar() {
        const textoEncriptado = criptografar(texto)
        inputSaidaRef.current.value = textoEncriptado
    }

    function botaoDescriptografar() {
        const textoDescriptado = descriptografar(texto)
        inputSaidaRef.current.value = textoDescriptado
    }

    function copiarTexto() {
        inputSaidaRef.current.select()
        document.execCommand("copy")
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
            <div className="card">
                <button onClick={() => setCount(count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the logos to learn more
            </p>

            <header className="flex">
                {/* <div className="m-8">
        <p>Language</p>
        <label className="select" htmlFor="slct">
          <select id="slct" required onChange={(e) => console.log(e.target.value)}>
            <option value="" disabled selected>Select option</option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </label>
      </div> */}
            </header>

            <main>
                <section className="container">
                    <div className="entrada">
                        <div className="digite-texto">
                            <textarea
                                value={texto}
                                onChange={(e) => setTexto(e.target.value)}
                                cols="30"
                                rows="13"
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
                                cols="30"
                                rows="20"
                                readOnly
                            ></textarea>
                            <button className="copiar" onClick={copiarTexto}>Copy</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}