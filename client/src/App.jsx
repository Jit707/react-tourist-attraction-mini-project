import "./App.css";

function App() {
	
	
	return (
    <>
		<div className="flex flex-col items-center font-Prompt">เที่ยวไหนดี</div>

    <label htmlFor="searchPlace">ค้นหาที่เที่ยว</label>
    <input
    className="border-solid border-2" 
    type="text" />

    <div className="flex flex-col items-center">
    <div className="border-solid border-2 w-2/3">
      <div className="flex flex-row justify-center items-center gap-24">
        <div className="bg-blue-500">Pic</div>
        <div className="flex flex-col">
          <div>title</div>
          <div>description</div>
          <div>tag</div>
          <div className="flex flex-row gap-12">
            <div>pic1</div>
            <div>pic2</div>
            <div>pic3</div>
          </div>
        </div>

      </div>
    </div>
    </div>

    </>
	);
}

export default App

