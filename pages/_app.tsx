import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { theme } from "@/app/theme";
import apolloClient from "@/lib/apollo-client";
import GlobalStyle from "@/styles/globalstyles";

import "../index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
}
