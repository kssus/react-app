import logo from './logo.svg';
import './App.css';

function Header(){
  return <header>
  <hi><a href="/">WEB</a></hi>
</header>
}

function Nav(){
  return <nav>
  <ol>
    <li><a href="/read/1"></a>html</li>
    <li><a href="/read/2"></a>css</li>
    <li><a href="/read/3"></a>js</li>
  </ol>
</nav>
}

function Article(){
  return <article>
  <h2>Welcome</h2>
  Hello, WEB
</article>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
