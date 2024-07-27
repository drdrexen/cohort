

function App() {


  return (<>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ backgroundColor: "red" }}>hi</div>
      <div style={{ backgroundColor: "blue" }}>hi</div>
      <div style={{ backgroundColor: "green" }}>hi</div>
    </div>

    // using tailwind
    <div className="flex justify-between ">
      <div className="bg-pink-800">Nischal</div>
      <div className="bg-red-500">Nischal2</div>
      <div className="bg-green-500">Nischal3</div>

    </div>

    <br /><br /><br />
    {/* grid  */}
    <div className="grid grid-cols-5" >
      <div className="bg-pink-800 col-span-1">Div 1</div>
      <div className="bg-red-500 col-span-1">Div 2</div>
      <div className="bg-green-500 col-span-3">Div 3</div>

    </div>
  </>
  )
}

export default App
