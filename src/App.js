import './App.css';

import A from './components/A'
import B from './components/B'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <A />
        <B />
{/* className'i 2 components kullanıyor ise sonradan atanan components geçerli olur. */}
      </header>
    </div>
  );
}

export default App;
