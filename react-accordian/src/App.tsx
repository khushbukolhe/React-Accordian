import { Accordian } from './accordian';
import './App.css';

function App() {
  return (
    <div className="App">
     
        <p>
         React Accordian
</p>       
<Accordian items={[
  { id: 1, title: 'Section 1', content: 'Content 1' },
  { id: 2, title: 'Section 2', content: 'Content 2' },
  { id: 3, title: 'Section 3', content: 'Content 3' },
]} />
    </div>
  );
}

export default App;
