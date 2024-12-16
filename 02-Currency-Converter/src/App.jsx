import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Simple Currency Converter</h1>
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;