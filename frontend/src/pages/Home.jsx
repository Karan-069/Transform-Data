import reactLogo from "../assets/react.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navIndtoSo = () => {
    navigate("/api/v1/indent-to-so");
  };
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold">Transform Data</h1>
      <div className="card">
        <button onClick={navIndtoSo}>Indent to Sales Order</button>
      </div>
    </>
  );
};

export default Home;
