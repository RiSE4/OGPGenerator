import React from "react";
import { Helmet } from "react-helmet";

const OGPHelmet = ({ ogpUrl }) => {
  return (
    <Helmet>
      <meta property="og:title" content="OGP画像ジェネレーター" />
      <meta
        property="og:description"
        content="好きなテキストを入力してOGP画像を生成できます。"
      />
      <meta property="og:image" content={ogpUrl} />
      <meta
        property="og:url"
        content="https://your-vercel-domain.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default OGPHelmet;
