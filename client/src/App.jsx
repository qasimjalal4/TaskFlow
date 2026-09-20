import  NavBar  from "./components/NavBar" 
import Main from "./components/Main"

function App() {
 
   

  return (
     <div className="h-screen w-full flex justify-center items-center">
      <div className="w-3/4 flex">
        <NavBar />
        <Main />
      </div>
     </div>
  )
}

export default App
