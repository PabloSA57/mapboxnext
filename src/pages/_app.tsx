// import App from 'next/app'
import Layout from "@components/Layout/Layout"
import '../global.css'
import 'semantic-ui-css/semantic.min.css'
import CartProvider from "@store/Cart"
import {ThemeProvider} from 'styled-components';
import { useEffect, useState } from "react";
import {darkTheme, lightTheme, GlobalStyles} from '../../theme'
import { useDarkMode } from "hooks/useDarkMode";

function MyApp({ Component, pageProps }) {
    //Utiliza Providers - Context, Theme, data
    //Loyout
    const [theme, themeToggler, mountedComponent] = useDarkMode()
    const isDarkTheme = theme === 'light' ? lightTheme : darkTheme

    useEffect(() => {
        console.log(isDarkTheme)
        console.log(theme)
    }, [isDarkTheme, theme])

    return (
        <CartProvider>
                <ThemeProvider theme={isDarkTheme}>
                <GlobalStyles />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
        </ThemeProvider>
            </CartProvider>
    )
}

  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp