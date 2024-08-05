<div align="center"><img src="https://raw.githubusercontent.com/patrickwebsdev/Encriptador-Oracle-Alura/master/img/one.png" width="200"/></div>

# 🚀 Challenge Encriptador | OracleOne+Alura+Vite+React
<p align="center" >
     <img src="">
</p>
<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-FEFF01?logo=javascript&logoColor=000000&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/HTML-EC6231?logo=html5&logoColor=FFFFFF&style=for-the-badge" />
    <img src="https://img.shields.io/badge/CSS-01A3D8?logo=css3&logoColor=FFFFFF&style=for-the-badge" />
    <!-- <img src="https://raw.githubusercontent.com/i18next/i18next-gitbook/master/assets/img/logo.svg" width=100/> -->
    <img src="https://a11ybadges.com/badge?logo=fontawesome" />
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000000&style=for-the-badge" />
</div>

# 📝 Descripción

Este proyecto es una aplicación que utiliza (HTML, CSS, JavaScript)->REACT para encriptar y desencriptar texto. La encriptación se realiza mediante la sustitución de ciertas letras por otras según un conjunto específico de reglas. La aplicación solo acepta letras minúsculas y no se permiten acentos ni caracteres especiales.

La página web cuenta con campos para que el usuario pueda ingresar el texto que desea encriptar o desencriptar y seleccionar la opción correspondiente. El resultado de la operación se muestra en la pantalla y existe la opción de copiar el texto encriptado o desencriptado al portapapeles mediante un botón de "copiar".

# 📒 Diccionarios
## 🔒 Diccionario de encriptacion
| 🔑 Llave | ✏️ Reemplazo |
|-----------|-----------|
| e | enter |
| i | imes |
| a | ai |
| o | ober |
| u | ufat |

---

## 🔓 Diccionario de desencriptacion
| 🔑 Llave | ✏️ Reemplazo |
|-----------|-----------|
| enter | e |
| imes | i |
| ai | a |
| ober | o |
| ufat | u |

# 📑 Requisitos

- ✅ Debe funcionar solo con letras minúsculas
- ✅ No deben ser utilizados letras con acentos ni caracteres especiales
- ✅ Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. (Ejemplos: "gato" => "gaitober" | "gaitober" => "gato")
- ✅ La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
- ✅ El resultado debe ser mostrado en la pantalla.
- ✅ Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

# Autor

[![Linkedin](https://img.shields.io/badge/Linkedin-0072b1?logo=linkedin&logoColor=white&style=for-the-badge)](https://www.linkedin.com/in/leonardo-sanchez-89590b127/)

[![GitHub](https://img.shields.io/badge/qleoz12-black?logo=github&logoColor=FFFFFF&style=for-the-badge)](https://github.com/Lisaazulada5)

<div align="center">
    <h2>⚜️ V I T E &nbsp; D E P L O Y ⚜️</h2>
</div>

<br />

#### 01. Create a vite react app
```npm
npm create vite@latest
```

#### 02. Create a new repository on GitHub and initialize GIT
```git
git init 
git add . 
git commit -m "add: initial files" 
git branch -M main 
git remote add origin https://github.com/[USER]/[REPO_NAME] 
git push -u origin main
```

#### 03. Setup base in *vite.config*
```js
base: "/[REPO_NAME]/"
```

#### 04. Create ./github/workflows/deploy.yml and add the code bellow
> [!WARNING]
> It is crucial that the `.yml` file has the exact code below. Any typing or spacing errors may cause deployment issues.
```yml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 16

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v2
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v2
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### 05. Push to GitHub
```git
git add . 
git commit -m "add: deploy workflow" 
git push
```

#### 06. Active workflow (GitHub)
```
Config > Actions > General > Workflow permissions > Read and Write permissions 
```
```
Actions > failed deploy > re-run-job failed jobs 
```
```
Pages > gh-pages > save
```

