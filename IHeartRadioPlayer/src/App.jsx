/* Import ./styles/app.css */
import "./styles/App.css";
import Stations from "./components/Stations";

const App = () => (
  <div className="font-sans">
    <header className="flex justify-start items-center border-b-2 border-red-00 p-3 text-white bg-red-800">
      <h1 className="text-3xl font-semibold">iHeart Playerz</h1>
    </header>
    <main className="mt-5 grid grid-cols-2 gap-5 items-center justify-start w-full h-fit p-5">
      <Stations src="https://www.iheart.com/live/sunny-999-3188/?embed=true" />
      <Stations src="https://www.iheart.com/live/iheartclassical-6377/?embed=true" />
    </main>
  </div>
);

export default App;
