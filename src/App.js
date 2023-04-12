// Imports
import "./App.css";
import "../src/components/Header.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

// App Function with Components
function App() {
  return (
    <>
      <Header>Journal</Header>
      <Main />
    </>
    /* 
    
    <Main> 
      <EntryForm />
      <EnriesSection />
    </Main>
    <Footer />
    */
  );
}

export default App;
