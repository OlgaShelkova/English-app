import './App.css';
import Table from './components/table/Table';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Content from './content/Content';


function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Form />
      <Content/>
    </div>
  );
}

export default App;
