import './App.css';
import {useState} from 'react';

function Header(props){
  console.log('props', props);
  return <header>
      <h1><a href="/" onClick={event => {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1> 
    </header>
}
function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/html/'+t.id} onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a></li>)
  }
  return <nav>
      <ol>
        {lis}
      </ol>
     </nav>
}
function Article(props){
 
  return <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>

}
function Create(props){
  return<article>
    <h2>CREATE</h2>
    <form onSubmit={(event)=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" /></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <input type="submit" value="create"/> 
    </form>
  </article>
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'react', body:'react is ...'}
]);
  const [nextId, setNextId] = useState(4);
  let content = null;
  let title, body = null; 
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ'){
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
       console.log(topics[i].id, id);
       title = topics[i].title;
       body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  } else if(mode === 'CREATE'){
    content = <Create onCreate={(title, body)=>{
      const newTopic = {id: nextId, title: title, body: body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1)
    }}></Create>
  }

  return (
    <div className="App">
     <Header title="WEB" onChangeMode={()=>{
      setMode('WELCOME');
     }}></Header>
     <Nav topics={topics} onChangeMode={(id)=>{
      setMode('READ');
      setId(id);
     }}></Nav>
     {content}
     <a href="/create" onClick={(event)=>{
      event.preventDefault();
      setMode('CREATE');
     }}>Create</a>
    </div>
  );
}

export default App;
