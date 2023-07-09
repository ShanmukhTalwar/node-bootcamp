import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard,Error,Landing,Register } from "./pages";
import UseState from './test-components/useState';
import MyComponent from './test-components/event-target';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/landing' element={<Landing></Landing>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
