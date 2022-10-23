import "../styles/globals.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/LineIcons.2.0.css";
// import "../public/assets/css/font-awesome.min.css";
import "../public/assets/fonts/flaticon.css";
import "../public/assets/css/animate.css";
import "../public/assets/css/tiny-slider.css";
import "../public/assets/css/glightbox.min.css";
import "../public/assets/css/typography.css";
import "../public/assets/style.css";

import { Provider } from "jotai";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
