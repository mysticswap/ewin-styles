import "./App.css";
import { MysticSdk } from "mystic-sdk-1";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <div className="sdk_wrapper">
        <MysticSdk token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGQyMWQzMGUyMjkxNDdiNjY1ZGM3YSIsImlhdCI6MTY5MjIxMzcxNX0.2RZ8He93TUUMeW0t3aqpt5KxNlo1r1fjMNtaBYyP9rI" />
      </div>

      <Footer />
    </>
  );
}

export default App;
