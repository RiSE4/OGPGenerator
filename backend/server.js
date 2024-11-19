const express = require("express");
const cors = require("cors");
const { createCanvas, loadImage } = require("canvas");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/api/generate-ogp", async (req, res) => {
  const text = req.query.text || "Default OGP Text";

  try {
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext("2d");

    // 背景を設定
    ctx.fillStyle = "#2D3748";
    ctx.fillRect(0, 0, 1200, 630);

    // テキストを描画
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 48px sans-serif";
    ctx.fillText(text, 100, 315);

    // 画像をBase64でエンコード
    const imageData = canvas.toDataURL("image/png");

    res.json({ imageUrl: imageData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "画像生成中にエラーが発生しました" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
