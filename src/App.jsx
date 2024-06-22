import { useState } from 'react'
import './App.css'
import PasswordForm from './components/PasswordForm'
import PasswordDisplay from './components/PasswordDisplay'

function App() {
  const [password, setPassword] = useState("")

  const handlePasswordGenerate = async(length, special) => {
    try {
      const response = await fetch(`http://localhost:8081/api/passwords?length=${length}&special=${special}`);
      const data = await response.json();
      setPassword(data);
      await navigator.clipboard.writeText(data.password);
    } catch (error) {
      console.log('Error fetching password:', error);
    }
  }
  return (
    <>
   
    <div className="flex justify-center items-center h-screen bg-mypurple-bg">
      <PasswordForm onGenerate={handlePasswordGenerate} />
      <PasswordDisplay password={password} />
    </div>
    </>

  )
}

export default App
