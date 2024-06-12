import HeaderComponent from "./components/header";
import HomePage from "./pages/home";

export default function App() {
  return (
    <>
      <HeaderComponent />
      <div className="mx-auto">
        <HomePage />
      </div>
    </>
  );
}
