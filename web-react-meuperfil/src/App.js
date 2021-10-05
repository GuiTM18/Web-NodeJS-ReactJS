import './App.css';

function App() {
  return (
    <div>

      <div className="App">
        <h1>Meu perfil</h1>
        <img src='https://avatars.githubusercontent.com/u/79342387?v=4' className='img' alt="logo" />
      </div>

      <div>
        <h2>Dados pessoais</h2>
          <p>Nome: Guilherme Gonçalves da Silva <br /></p>
          <p>Idade: 18 <br /></p>
          <p>E-mail: gui.soft18@gmail.com <br /></p>
          <p>Telefone: (13) 99706-4755<br /></p>

        <h2>Formação</h2>
          <p>Cursando Análise e desenvolvimento de sistemas</p>

        <h2>Experiência</h2>
          <p>Tecnologias WEB <br /></p>
          <p>Atendimento ao cliente</p>

        <h2>Projetos</h2>
          <p>Interligar ReactJS com Banco de dados atráves do node <br /></p>
          <p>Desenvolver api's<br /></p>
          <p>fazer apps em React Native <br /></p>
          <p>Desenvolver o PIM <br /></p>

      </div>
    </div>


  );
}

export default App;
