import  NavBar  from "./components/NavBar" 
import Main from "./components/Main"

function App() {
 
   

  return (
     <div className="h-screen w-full flex justify-center items-center">
      <div className="w-2/3 h-[550px] shadow-md rounded- flex">
        <NavBar />
        <Main />
      </div>
     </div>
  )
}

export default App
