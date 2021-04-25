Aplicação de podcasts, desenvolvida no NLW5 evento criado e orientado pela [Rocketseat](https://github.com/Rocketseat)

criando um projeto em react
1. npx create-react-app nomedoProjeto
	ele vai baixar o pacote create react app e criar o projeto
2. acessar a pasta do projeto, e abrir no vscode(cd; code .)
3. no terminal do vscode deve ser executado o comando yarn start
	que vai dá inicio ao projeto no browser
4. deletar coisas que não vão ser usadas, bem como: readme.md; arquivos css; arquivo de teste; logo; reportweb; setuptests; deixando apenas index e app; na pasta public é deletado tudo menos o index
5. remover tudo no index.html removento tudo desde viewport até title

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
 
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div> //div root está vazio 
    
  </body>
</html>



6. index.js remover report; react.StrictNode, import que foram excluidos
	vai ficar só <App />, document.getElementByid('root')

import React from 'react';
import ReactDOM from 'react-dom'; //biblioteca raiz. integração do react com o browse; arvore de elemento;
import App from './App'; //importando o app

ReactDOM.render( //função de dentro do react-dom, que mostra em tela oq é pedido
    <App />, //mostra o app
  document.getElementById('root') //aqui dentro dessa div
);




7. remover tudo em App.js deixando apenas a function; o return colocando dentro um h1 com hello word; export default App;


function App() { //componente: função que retorna html
  return (
    <h1>Hello Word</h1>
  );
}

export default App;


	 o bom do react é que é atualizado automaticamente




8. conceitos de react 
propriedades: é uma informação repassada de um componente para outro; ex: caminho da imagem
explicou o uso da tag em branco <></> chamada de fragmento 

explicação sobre uso de propriedades
 cria um arquivo chamado Button.js

export default function Button(props){//recebe props, que são as propriedades
	return(
		<button>{props.title}</button>
	)
}


dentro do App.js 

import Button from "./Button";
function App() {
	return (
	<>
		<Button title="Button1"/>
		<Button title="Button2"/>
	</>
  );
}

export default App;


propriedade global--> 
import Button from "./Button";
function App() {
	return (
	<>
		<Button>Button 1</Button>
		<Button>Button 2</Button>
	</>
  );
}




export default function Button(props){//recebe props, que são as propriedades
	return(
		<button>{props.children}</button>
	)
}


conceito de estado

export default function Button(props){//recebe props, que são as propriedades

	let  counter =1;

	function increment(){
		counter = counter +1;
		console.log(counter);
}
	return(
		<>
			<span>{counter}</span>//como se toda vez q cliclasse no botão aumentasse 1
			<button onClick={increment}>{props.children}</button>

		<>
	)
}

isso escrito dessa forma não faz com que mostre na tela somente no console para isso vai acontecer vai ser feito da seguinte forma, usando o Estado

import {useState} from 'react';
export default function Button(props){//recebe props, que são as propriedades

	const  [counter, setCounter] = useState(1); //devolve um array com estado e valor a ser alterado

	function increment(){
		setCounter(counter +1);
}
	return(
		<>
			<span>{counter}</span>//como se toda vez q cliclasse no botão aumentasse 1
			<button onClick={increment}>{props.children}</button>

		<>
	)
}

-tentar entender melhor depois 
server side rendering
static site generation

criando projeto com o next

terminal
sair da pagina podcastr
colocar npx create-next-app podcastnext
entrar na pasta e abrir no vscode


deletar readme; styles-pasta; na pasta page deixa só index.js e _app.js; deixa a pasta public vazia

dentro do arquivo index deleta tudo deixando somente 

export default function Home() {
  return (
   	<h1>Hello</h1>
  )
}


_app.js
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp



no terminal roda yarn dev
e pesquisa no google o localhost:3000

diferenças entre

primeira se o javascript fosse desabilitado anteriormente ele sumiu, já com o next não acontece isso, interface igual
next trás mais complexidade.



AULA 02
typescript --> linguagem tipada 

criar um arquivo novo com linguagem typescript
//retornar o texto do rodapé do site

function createWelcomeMessage(user){
	return 'Boas-vindas, ${user.name}!'
} 

como faria se quisesse colocar a cidade do usuario 

type User ={
	name:string;
	adress: {
		city: string;
		state:string;
	}
}

function createWelcomeMessage(user: User){
	return 'Boas-vindas, ${user.name}. Cidade: ${user.adress.city} - ${user.adress.state}!'
} 


ajuda muito na hora da chamada da função

const WelcomeMessage = createWelcomeMessage({
	name:'abc',
	adress: {
		city: 'abc',
		state:'abc'
	}
})



typescript ajuda muito a não cometer erros e ajuda muito na hora da manutenção do projeto

configurando typescript no next
abrir outro trminal no vs para instalar programas

yarn add typescript @types/react @types/node -D
depois de instalado vamos fazer a conversão do js para tsx


tsx = typescript + jsx(xml no javascript)


vai ser criada uma nova pasta chamada src e dentro dela vamos colocar a pagina pages
a pagina pages só pode existir dentro do src ou da raiz
dentro de src vamos criar a pagina styles e dentro dela o arquivo global.css

apos deve ser importato o global dentro do _app.tsx
import '../styles/global.css'


utilizando o sass--> muito bom para o encadeamento do css
instalar o sass yarn add sass

apos instalado vamos converter o css para scss

import '../styles/global.scss'

dentro desse arquivo vai ser adicionado as variaveis de cor que vão ser usadas

:root {
  --white: #FFF;

  --gray-50: #F7F8FA;
  --gray-100: #E6E8EB;
  --gray-200: #AFB2B1;
  --gray-500: #808080;
  --gray-800: #494D4B;

  --green-500: #04D361;
  
  --purple-300: #9F75FF;
  --purple-400: #9164FA; 
  --purple-500: #8257E5;
  --purple-800: #6F48C9;
}

regra de acessibilidade 
rem ele é basicamente equivalente ao tamanho do root 

trabalhando com pixel a aplicação não sofre alteração 
e com o rem a aplicação se modifica conforme as indicações do telefone



agora vamos configurar a fonte do projeto
entrando no google fonts
https://fonts.google.com/
as utilizadas foram a lexend 500 e 600
inter 400

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet">


o lado ruim de colocar as fontes no app é pq demora na busca, para isso vamor criar _document.tsx dentro da pages

import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}


no global ficara assim
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    --white: #FFF;
  
    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;
  
    --green-500: #04D361;
    
    --purple-300: #9F75FF;
    --purple-400: #9164FA; 
    --purple-500: #8257E5;
    --purple-800: #6F48C9;
}


@media (max-width: 1080px) {
    html{
        font-size: 93.75%;
    }
}
@media (max-width: 728px) {
    html{
        font-size: 87.5%;
    }
}
body{
    background-color: var(--gray-50);
}
body, input, textarea, button{
    font: 500 1rem Inter, sans-serif;
    color: var(--gray-500);
}
h1, h2, h3, h4, h5, h6{
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: var(--gray-800);
}
h1{
    font-size: 2rem;
}
h2{
    font-size: 1.5rem;
}
button{
    cursor: pointer;
}




dentro da pasta src vamos criar uma pasta chamada componentes e dentro vai ter outra pasta Header e dentro vai ser criado dois documentos  styles.module.scss e o index.tsx 

baixei as imagens que iriam ser utilizadas e movi pra pasta public 

dentro do index.tsx fiz isso

export function Header(){
    return(
        <header>
            <img src = "/logo.svg" alt= "Podcastr"/> 
            <p>O melhor para você ouvir, sempre </p>

            <span>Qua, 21 abril</span>
        </header>
    );
}


styles.module.scss

.headerContainer{
    background: var(--white);
    height: 6.5rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;

    border-bottom: 1px solid var(--gray-100);
}

index.tsx

import './styles.module.scss';
export function Header(){
    return(
        <header className= "headerContainer">
            <img src = "/logo.svg" alt= "Podcastr"/> 
            <p>O melhor para você ouvir, sempre </p>

            <span>Qua, 21 abril</span>
        </header>
    );
}


index.tsx

import styles from './styles.module.scss';
export function Header(){
    return(
        <header className = {styles.headerContainer}>
            <img src = "/logo.svg" alt= "Podcastr"/> 
            <p>O melhor para você ouvir, sempre </p>

            <span>Qua, 21 abril</span>
        </header>
    );
}


styles.module.scss

.headerContainer{
    background: var(--white);
    height: 6.5rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;

    border-bottom: 1px solid var(--gray-100);
    p{
        margin-left: 2rem;
        padding: 0.25rem 0 0.25rem 2rem;
        border-left: 1px solid var(--gray-100);
    }
    span{
        margin-left: auto;
        text-transform: capitalize;
    }
}

instalar uma biblioteca para trabalhar com datas 
yarn add date-fns


index.tsx
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';
export function Header(){
    const currentDate = format(new Date(), 'EEEEEE, d MMM',{
        locale: ptBR,
    });
    return(
        <header className = {styles.headerContainer}>
            <img src = "/logo.svg" alt= "Podcastr"/> 
            <p>O melhor para você ouvir, sempre </p>

            <span>{currentDate}</span>
        </header>
    );
}
ISSO ANTERIORMENTE ERA A CRIAÇÃO DO HEADER A PARTE DE CIMA DA APLICAÇÃO.
AGORA VOU CRIAR O PLAYER

pode ser copiada a pasta Header e onde tiver Header substituir por player











---quando eu tenho uma coisa que vai está presente em todas as páginas como o caso do Header eu devo colocar a chamada dele dentro do _app


pages/index.tsx
vai disso 

import { Header } from "../componentes/Header";

export default function Home() {
  return (
    <Header/>
  )
}

pra isso

export default function Home() {
  return (
    <h1>Index</h1>
  )
}

_app.tsx antes
import '../styles/global.scss'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

depois

import { Header } from '../componentes/Header'
import '../styles/global.scss'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

nisso o Header vai estar em todas as paginas






dentro da pasta styles é criado um arquivo app.module.scss pq o player vai precisar ser estilizado de uma forma diferente do header e ele vai ser importado dentro do _app.tsx
import styles from '../styles/app.module.scss'

com isso dentro da div do _app a gente vai criar uma className

import { Header } from '../componentes/Header'
import '../styles/global.scss'

import styles from '../styles/app.module.scss'
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

e agora vamos configurar o app.module
dentro da aplicação acima ficou assim

import '../styles/global.scss'
import { Header } from '../componentes/Header'
import { Player } from '../componentes/Player'

import styles from '../styles/app.module.scss'
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>
      <Player/>
    </div>
  )
}

export default MyApp


pq o app.module.scss tava assim 

.wrapper{
    display: flex;

    main{
        flex: 1;
    }
}




o index.tsx da pasta Player vai ficar assim

import styles from './styles.module.scss';
export function Player(){
    return(
        <div className={styles.playerContainer}>

        </div>
    );
}

e o styles.module.scss vai ser configurado 


.playerContainer{
    padding: 3rem 4rem;
    width: 26.5rem;
    height: 100vh;

    background: var(--purple-500);
    color: var(--white);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
player/index.tsx
import styles from './styles.module.scss';
export function Player(){
    return(
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt = "tocando agora" />
                <strong>Tocando agora</strong>
            </header>

            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer></footer>
        </div>
    );
}

Player/styles.module.scss
.buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;

    button{
        background: transparent;
        border: 0;
        font-size: 0;

        &.playButton{
            width: 4rem;
            height: 4rem;
            border-radius: 1rem;
            background: var(--purple-400);
        }
    }
}
//gap é legal pq pode ser utilizada pra colocar espacamento


criar um arquivo server.json e colocar os exemplos de podcast

mas nos vamos utilijar a aplicação json.server que pega o arquivo json e trasforma em API-FAKE FAKE
serve para quando tá construindo o front e ainda não tem o end

para instalar
yarn add json-server -D

depois de instalado no arquivo package.json vamos criar um script

antes 
 "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },


depois
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "server": "json-server server.json -w -d 750 -p 3333"
  },


e roda yarn server

e nisso ele já vai entender que a aplicação tem uma rota








mostrando como fazer de cada forma, pgç
//SPA-> roda apenas no javascript do browser
//SSR->primeiro carregamento é feito pelo next e não pelo browser
//SSG->só funciona em produção, é a que vai ser usada em pages/index.tsx

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    props:{
      episodes:data,
    },
    revalidate: 60 * 60 * 8,
  }
}


criando build do projeto
para a aplicação e executa
yarn build

após terminado, vamos executar o projeto com yarn start
deu problema, porém quando em executei cada um em um terminal diferente deu certo

AULA03
vamos codar a home page da aplicação anteriormente estava sendo feito de uma forma não acomplado, agora vamos fazer de forma explixita 

todas as funçoes get StaticProps possui um formato dentro do next. acima aparece como que a função era anteriormente



import {GetStaticProps} from 'next';

type Episode = {
  id: string;
  title:string;
  members: string;
}
type HomeProps = {
  episodes: Episode[];
}
export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ()=>{
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    props:{
      episodes:data,
    },
    revalidate: 60 * 60 * 8,
  }
}

anteriormente estavamos buscando todos os episodios de uma unica vez, a seguir vamos carregar um numero especifico de ep e a ordem de acordo com o mais recente 
const response = await fetch('http://localhost:3333/episodes?_limit=12&_sort=published_at&_order=desc')
 
será necessario instalar →`yarn add axios`

→ O axios basicamente mexe com a URL do seu projeto. É ele quem organizar o back-end do seu projeto diretamente no front-end de acordo com a URL dele.
faz requisições http assim como fetch que vem dentro do browser 
na pasta src vamos criar uma pasta chamada services e dentro um arquivo api.ts 

import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3333/'
}) 





import {GetStaticProps} from 'next';
import { api } from '../services/api';

type Episode = {
  id: string;
  title:string;
  members: string;
}
type HomeProps = {
  episodes: Episode[];
}
export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ()=>{
  const {data} = await api.get('episodes',{
    params:{
      _limite: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })
  
  return{
    props:{
      episodes:data,
    },
    revalidate: 60 * 60 * 8,
  }
}




formatação dos dados, quando trabalha com front é necessario exibir dados diferentes de como tá armazenado no banco, muitas vezes 
em react existe diversas formas 

import {GetStaticProps} from 'next';
import {format, parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../services/api';

type Episode = {
  id: string;
  title:string;
  members: string;
  published_at: string;
}
type HomeProps = {
  episodes: Episode[];
}
export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ()=>{
  const {data} = await api.get('episodes',{
    params:{
      _limite: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })
  
  const episodes = data.map(episode =>{
    return{
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishesAt: format(parseISO(episode.published_at), 'd MMM YY', {locale: ptBR}),
      duration: Number(episode.description),
      url: episode.file.url,
    };
  })
  return{
    props:{
      episodes:data,
    },
    revalidate: 60 * 60 * 8,
  }
}


bom agora para criar a função de converter segundos em  minutos, vamos precisar criar outra pasta dentro de src de nome utils e dentro dela vamos criar o arquivo convertDurationToTime.ts

export function convertDurationToTimeString(duration: number){
    const hours = Math.floor(duration/3600);
    const minutes = Math.floor((duration % 3600)/60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')

    return timeString;
}


testando

import {GetStaticProps} from 'next';
import {format, parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTime';

type Episode = {
  id: string;
  title:string;
  members: string;
  published_at: string;
}
type HomeProps = {
  episodes: Episode[];
}
export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ()=>{
  const {data} = await api.get('episodes',{
    params:{
      _limite: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })
  
  const episodes = data.map(episode =>{
    return{
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishesAt: format(parseISO(episode.published_at), 'd MMM yy', {locale: ptBR}),
      duration: Number(episode.description),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
    };
  })
  return{
    props:{
      episodes,
    },
    revalidate: 60 * 60 * 8,
  }
}


melhor formatação


type Episode = {
  id: string;
  title:string;
  thumbnail: string;
  members: string;
  publishesAt: string;
  duration: number;
  durationAsString: string;
  description:string;
  url: string;
}
type HomeProps = {
  episodes: Episode[];
}

dentro da pasta pages vamos criar um arquivo home.module.scss apos isso vamos personalizar uma classe que foi crada dentro da div da function Home no arquivo index.tsx, nesse arquivo index vamos fazer a importação do styles
import styles from './home.module.scss'


dentro do next existe umafuncionalidade usada para image é para ser utilizado no lugar de img png ou jpg, já passando um tamanho e altura certo
que serão carregado de acordo com a tela
import Image from 'next/image';

antes 
<img src={episode.thumbnail} alt={episode.title}/>
 
depois 
<Image 
                  width={192} 
                  height={192} 
                  src={episode.thumbnail} 
                  alt={episode.title}
                  objectFit = "cover"
                />
  
isso vai dá erro pq ainda não foi não se tem um local exato de onde estão as imagens, para resolver isso vamos criar dentro da pasta raiz um arquivo next.config.js

module.exports = {
    images: {
        domains: ['storage.googleapis.com'], //vai usar o enderço de onde estão as imagens
    }
};


hora da estilização dentro do home.module


overflow-y: scroll só dentro do container

página home finalizada ficou assim

o arquivo index.tsx
import {GetStaticProps} from 'next';
import Image from 'next/image';
import {format, parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTime';

import styles from './home.module.scss';

type Episode = {
  id: string;
  title:string;
  thumbnail: string;
  members: string;
  publishesAt: string;
  duration: number;
  durationAsString: string;
  description:string;
  url: string;
}
type HomeProps = {
  latesEpisodes: Episode[];
  allEpisodes: Episode[];
}
export default function Home({latesEpisodes, allEpisodes}:HomeProps) {
  return (
    <div className={styles.homepage}>
      <section className={styles.latesEpisodes}>
        <h2>Últimos lançamentos</h2>
        <ul> 
          {latesEpisodes.map(episode =>{
            return(
              <li key={episode.id}>
                <Image 
                  width={192} 
                  height={192} 
                  src={episode.thumbnail} 
                  alt={episode.title}
                  objectFit = "cover"
                />
  
                <div className = {styles.episodeDetails}>
                  <a href="">{episode.title}</a>
                  <p>{episode.members}</p>
                  <span >{episode.publishesAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                <button type = "button">
                  <img src="/play-green.svg" alt="tocar episodio"/>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <section className={styles.allEpisodes}>
          <h2>Todos episódios</h2>

          <table cellSpacing={0}>
            <thead>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </thead>
            <tbody>
              {allEpisodes.map(episode =>{
                return(
                  <tr key={episode.id}>
                    <td style={{width:72}}>
                      <Image
                        width={120}
                        height={120}
                        src={episode.thumbnail}
                        alt={episode.title}
                        objectFit="cover"
                      />
                    </td>
                    <td>
                      <a href="">{episode.title}</a>
                    </td>
                    <td>{episode.members}</td>
                    <td style={{width:100}}>{episode.publishesAt}</td>
                    <td>{episode.durationAsString}</td>
                    <td>
                      <button type="button">
                        <img src="/play-green.svg" alt="Tocar episodio"/>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </section>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async ()=>{
  const {data} = await api.get('episodes',{
    params:{
      _limite: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })
  
  const episodes = data.map(episode =>{
    return{
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishesAt: format(parseISO(episode.published_at), 'd MMM yy', {locale: ptBR}),
      duration: Number(episode.description),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
    };
  })

  const latesEpisodes = episodes.slice(0,2);
  const allEpisodes = episodes.slice(2, episodes.length);
  return{
    props:{
      latesEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  }
}









e o module assim

.homepage{
    padding: 0 4rem;
    height: calc(100vh - 6.5rem);
    overflow-y: scroll;

    h2{ 
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }
}
.latesEpisodes{
    ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;

        li{
            background: var(--white);
            border: 1px solid var(--gray-100);
            padding: 1.25rem;
            border-radius: 1.5rem;
            position: relative;

            display: flex;
            align-items: center;

            img{
                width: 6rem;
                height: 6rem;
                border-radius: 1rem;
            }

            .episodeDetails{
                flex: 1;
                margin-left: 1rem;

                a{
                    display: block;
                    color: var(--gray-800);
                    font-family: Lexend, sans-serif;
                    font-weight: 600;
                    text-decoration: none;
                    line-height: 1.4rem;

                    &:hover{
                        text-decoration: underline;
                    }
                }
                p{
                    font-size: 0.875rem;
                    margin-top: 0.5rem;
                    max-width: 70%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                span{
                    display: inline-block;
                    margin-top: 0.5rem;
                    position: relative;

                    &:last-child{
                        margin-left: 0.5rem;
                        padding-left: 0.5rem;
                        position: relative;
                        &::before{
                            content: "";
                            width: 4px;
                            height: 4px;
                            border-radius: 2px;
                            background: #DDD;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }
                }

            }
            button{
                position: absolute;
                right: 2rem;
                bottom: 2rem;

                width: 2.5rem;
                height: 2.5rem;
                background: var(--white);
                border: 1px solid var(--gray-100);
                border-radius: 0.675rem;
                font-size: 0;

                transition: filter 0.2s;

                img{
                    width: 1.5rem;
                    height: 1.5rem;
                }

                &:hover{
                    filter: brightness(0.9);
                }
            }
        }
    }
}
.allEpisodes{
    padding-bottom: 2rem;

    table{
        width: 100%;

        th,td{
            padding: 0.75rem 1rem;
            border-bottom: 1px solid var(--gray-100);
        }
        th{
            color: var(--gray-200);
            text-transform: uppercase;
            font: 500 0.75rem Lexend, sans-serif;
            text-align: left;
        }
        td{
            font-size: 0.875rem;

            img{
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 0.5rem;
            }
            a{
                color: var(--gray-800);
                font-family: Lexend, sans-serif;
                font-weight: 600;
                text-decoration: none;
                line-height: 1.4rem;
                font-size: 1rem;

                &:hover{
                    text-decoration: underline;
                }
            }

            button{
                width: 2rem;
                height: 2rem;
                background: var(--white);
                border: 1px solid var(--gray-100);
                border-radius: 0.5rem;
                font-size: 0;

                transition: filter 0.2s;

                img{
                    width: 1.25rem;
                    height: 1.25rem;
                }

                &:hover{
                    filter: brightness(0.9);
                }
            }
        }
    }
}



agora vai ser falado sobre roteamento no Next

dentro da pasta pages vamos criar uma pagina episode e dentro dela vamos criar um arquivo [slug].tsx


um dos grandes beneficios do react é o reaproveitamento da página sem precisar do recarregamento

para isso vamos fazer o import Link from 'next/link';
e vamos colocar por volta da ancora 
antes
<a href={'/episodes/${episode.id}'}>{episode.title}</a>

depois
                  <Link href={`/episodes/${episode.id}`}>
                    <a >{episode.title}</a>
                  </Link>


isso em toda img com a no index


criando slug
ssg
pq é algo que não vai mudar com frequencia 


import {format, parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {GetStaticProps} from 'next';
import {GetStaticPaths} from 'next';
import {useRouter} from 'next/router';
import {api} from '../../services/api';
import { convertDurationToTimeString } from '../../utils/convertDurationToTime';


type Episode = {
    id: string;
    title:string;
    thumbnail: string;
    members: string;
    publishesAt: string;
    duration: number;
    durationAsString: string;
    url: string;
    description: string;
};

type EpisodeProps = {
    episode: Episode;
}

export default function Episode({episode}: EpisodeProps){
    return(
        <h1>{episode.title}</h1>
    )
}


export const getStaticPaths: GetStaticPaths = async () =>{
    return{
        paths: [],
        fallback: 'blocking'
    }
}
export const getStaticProps: GetStaticProps = async (ctx) =>{
    const {slug} = ctx.params;

    const{data} =await api.get(`/episodes/${slug}`)

    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        members: data.members,
        publishesAt: format(parseISO(data.published_at), 'd MMM yy', {locale: ptBR}),
        duration: Number(data.description),
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
        description: data.description,
        url: data.file.url,
    };

    return{
        props: {
            episode,
        },
        revalidate: 60 * 60 *24,
    }
}


agora vamos criar o scss da página
dentro da pasta episodes episode.module.scss
e vai ser feito o import dentro do [slug]

import styles from './episode.module.scss';






----------------------------------------------------
DIA 4

context api funcionaliade react que permite o compartilhamento de dados

getStaticPaths é obrigatorio quando se usa arquivo dentro de []


export const getStaticPaths: GetStaticPaths = async () =>{
    return{
        paths: [],//como aqui dentro está vazio o build não entende e o next não gera nada statico
        fallback: 'blocking'
    }
}


dentro da pasta src vamos criar uma pasta denominada context e dentro dessa pasta um arquivo denominado PlayerContext.ts

pois o <PlayerContest.Provider vai ser criado dentro desse arquivo e ele vai ter que ser colocado por volta dos arquivos que vão usar o player


para o slide ficar passando vai ser necessario instalar uma biblioteca do react
yarn add rc-slider

dentro do index da pasta player
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


adicionando audio, ele pode ser colocado em qualquer lugar dentro do index.tsx no Player


Aula05

existe um pacote de icones no react chamado react-icons que é possivel estilizar de qualquer jeito


colocando um favicon na barra de busca
dentro do arquivo _documentos vamos colocar

<link rel ="shortcut icon" href="/favicon.png" type= "image/png" />

colocando titulos
vamos importa dentro do index 
import Head from 'next/head';

<Head>
	<title>Home | Podcastr</title>
</Head>
vamos renomear todos os arquivos tsx
slug



next pwa 
permite transformar web como app

omni transformar em temas



















