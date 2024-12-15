import {useState} from "react"
function App() {
  const [color, setColor] = useState("purple")

  return (
    <div className="w-full h-screen duration-200 flex flex-col items-center justify-center" 
          style={{background: `linear-gradient(135deg, ${color}, #000)`}}>

      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-xl">

          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "red"}}>Red</button>

          <button onClick={() => setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor: "Yellow"}}>Yellow</button>

          <button onClick={() => setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "Green"}}>Green</button>

          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "blue"}}>Blue</button>

          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
           style={{backgroundColor: "pink"}}>Pink</button>

          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "orange"}}>Orange</button>

          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "purple"}}>Purple</button>

          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "black"}}>Black</button>

          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor: "white"}}>White</button>

          <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "olive"}}>Olive</button>

        </div>
      </div>
      <h1 
        className={`flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-full text-2xl font-bold 
          ${color === 'black' ? 'text-white' : 'text-black'}`} 
          style={{backgroundColor: color}}>MR. UMAIR ANSARI </h1>
    </div>
  )
}

export default App
