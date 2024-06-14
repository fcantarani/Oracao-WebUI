import HeaderComponent from "./components/header";
import PrayersPage from "./pages/prayers";

export default function App() {
  return (
    <>
      <HeaderComponent />
      <div className="mx-auto">
        <PrayersPage />
      </div>
    </>
  );
}
