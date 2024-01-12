import { useState } from 'react'
import FormInputData from './components/FormInputData';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">CRUD-Firebase-react-tailwind</h1>
      <br />
      <FormInputData />
    </>
  );
}

export default App
