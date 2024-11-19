import React, { useState } from "react";

function OGPGenerator({ setOgpUrl }) {
  const [text, setText] = useState("");

  const handleGenerateOGP = async () => {
    try {
      // デプロイしたバックエンドURLを設定
      const response = await fetch(
        `https://ogp-generator-navy.vercel.app/api/generate-ogp?text=${encodeURIComponent(
          text
        )}`
      );
      if (response.ok) {
        const { imageUrl } = await response.json();
        setOgpUrl(imageUrl);
      } else {
        console.error("OGP画像の生成に失敗しました");
      }
    } catch (error) {
      console.error("エラー:", error);
    }
  };

  return (
    <div className="ogp-generator">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="OGPに表示するテキスト"
        className="border p-2 rounded"
      />
      <button
        onClick={handleGenerateOGP}
        className="bg-blue-500 text-white p-2 rounded ml-2"
      >
        OGP画像を生成
      </button>
    </div>
  );
}

export default OGPGenerator;
