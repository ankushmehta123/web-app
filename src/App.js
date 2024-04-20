import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.Age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      
      <Person name={'Ankush'} lastName={'Mehta'} Age={70} />

    </div>
  );
}

export default App;
