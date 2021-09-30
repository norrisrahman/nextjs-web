import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/custom.scss"
// // import "../public/vendor/bootstrap/css/bootstrap.min.css"
import "../public/vendor/animate/animate.css"
import "../public/vendor/css-hamburgers/hamburgers.min.css"
import "../public/vendor/animsition/css/animsition.min.css"
// import "../public/vendor/select2/select2.min.css"
// import "../public/vendor/daterangepicker/daterangepicker.css"
import "../public/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../public/fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
import "../styles/auth-css/utillogin.scss"
import "../styles/auth-css/mainlogin.scss"


function MyApp({ Component, pageProps }) {
  return (
    <>
    <head>
      <title>Web Portofolio</title>
    </head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
