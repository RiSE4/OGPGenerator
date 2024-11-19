import React, { useState } from "react";

const OGPGenerator = ({ setOgpUrl }) => {
  const [text, setText] = useState("");

  const handleGenerateOGP = async () => {
    try {
      const response = await fetch(
        `/api/generate-ogp?text=${encodeURIComponent(text)}`
      );
      if (response.ok) {
        const { imageUrl } = await response.json();
        setOgpUrl(imageUrl); // 親コンポーネントにOGP URLを渡す
      } else {
        console.error("OGP画像の生成に失敗しました");
      }
    } catch (error) {
      console.error("エラー:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="OGPに表示するテキストを入力"
        className="border rounded px-4 py-2 mb-4"
      />
      <button
        onClick={handleGenerateOGP}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        OGP画像を生成
      </button>
    </div>
  );
};

export default OGPGenerator;
