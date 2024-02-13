import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Main from './components/Main/index.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
