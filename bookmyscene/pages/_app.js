import "tailwindcss/tailwind.css";
import "./_globals.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./mapbox-gl.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
