import React from "react";
import { Helmet } from "react-helmet";

function OGPHelmet({ ogpUrl }) {
  return (
    <Helmet>
      <meta property="og:image" content={ogpUrl} />
      <meta property="og:title" content="OGP Generator" />
      <meta
        property="og:description"
        content="動的に生成されたOGP画像を共有しよう！"
      />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default OGPHelmet;
