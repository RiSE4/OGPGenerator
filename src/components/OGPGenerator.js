import React, { useRef, useState } from "react";

const OGPGenerator = () => {
  const canvasRef = useRef(null);
  const [text, setText] = useState("");

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "ogp-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const backgroundImage = new Image();
    backgroundImage.src = "/background.png"; // パブリックフォルダに配置した画像
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, 1200, 630);
      ctx.font = "48px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    };
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="テキストを入力"
        className="border rounded px-4 py-2 mb-4"
      />
      <canvas
        ref={canvasRef}
        width="1200"
        height="630"
        className="border"
      ></canvas>
      <button
        onClick={() => {
          drawCanvas();
          handleDownload();
        }}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        画像を生成してダウンロード
      </button>
    </div>
  );
};

export default OGPGenerator;
