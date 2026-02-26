import { useState } from "react";
import WelcomePopup from "./components/WelcomePopup";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Kelas Maya Demo</h1>
        <button
          onClick={() => setShowPopup(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Show Welcome Popup
        </button>
      </div>

      {showPopup && (
        <WelcomePopup onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default App;
