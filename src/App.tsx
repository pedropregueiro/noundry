import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import "@fontsource/press-start-2p/400.css";
import { Route, Routes } from "react-router-dom";
import { Editor } from "./components/pages/Editor";
import { PaletteFixer } from "./components/pages/PaletteFixer";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { BraveDisclaimer } from "./components/BraveDisclaimer";
import { inject } from "@vercel/analytics";
import { CheckThisNoun } from "./components/pages/CheckThisNoun";

const App = () => {
  inject();
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ColorModeFixer />
      <BraveDisclaimer />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Editor />} />
          <Route path="palette" element={<PaletteFixer />} />
          <Route path="check-this-noun/:id" element={<CheckThisNoun />} />
        </Routes>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

// @TODO Remove this. It's here to fix the color mode on local storage for people that opened the app before the color mode was (correctly) set to dark.
const ColorModeFixer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, [colorMode]);

  return <></>;
};

export default App;
