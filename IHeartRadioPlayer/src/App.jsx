/* Import ./styles/app.css */
import "./styles/App.css";
import Stations from "./components/Stations";

const App = () => (
  <div className="font-sans">
    <header className="flex justify-start items-center border-b-2 border-red-00 p-3 text-white bg-red-800">
      <h1 className="text-3xl font-semibold">iHeart Player</h1>
    </header>
    <main className="mt-5 grid grid-cols-2 gap-5 items-center justify-start w-full h-fit p-5">
      <Stations src="https://www.iheart.com/live/sunny-999-3188/?embed=true" />
      <Stations src="https://www.iheart.com/live/iheartclassical-6377/?embed=true" />
      <Stations src="https://www.iheart.com/live/exa-983-el-paso-8632/?embed=true" />
      <Stations src="https://www.iheart.com/live/radio-formula-juarez-1460-am-8573/?embed=true" />
      <Stations src="https://www.iheart.com/live/iheart80s-5060/?embed=true" />
      <Stations src="https://www.iheart.com/live/big-classic-hits-4455/?embed=true" />
        <Stations src="https://www.iheart.com/live/iheartcountry-4418/?embed=true" />
        <Stations src="https://www.iheart.com/live/hit-nation-4422/?embed=true" />
    </main>
  </div>
);

export default App;
