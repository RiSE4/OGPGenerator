import React, { useState } from "react";
import OGPGenerator from "./components/OGPGenerator";
import OGPHelmet from "./components/OGPHelmet";

function App() {
  const [ogpUrl, setOgpUrl] = useState("");

  return (
    <div className="App">
      {ogpUrl && <OGPHelmet ogpUrl={ogpUrl} />}
      <h1 className="text-center text-2xl">OGP画像ジェネレーター</h1>
      <OGPGenerator setOgpUrl={setOgpUrl} />
      {ogpUrl && (
        <div className="mt-4">
          <p>OGP画像が生成されました！以下のURLをSNSにシェアできます。</p>
          <a
            href={ogpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {ogpUrl}
          </a>
          <div>
            <img
              src={ogpUrl}
              alt="OGP Preview"
              className="mt-4 border rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
