import { AppShell, MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CampaignDetails from "./pages/CampaignDetails";
import CreateCampaign from "./pages/CreateCampaign";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
// importing the context
import { AssetPriceContext, useAssetPrice } from '../src/context/AssetPriceContext';
import { EthBalance } from '../src/pages/EthBalance';
import { NFTList } from "./components/Nft/DisplayNFT";
import OmniGovernDao from "./pages/Dao";
import { AccountAbstractionProvider } from "./context/accountAbstractionContext";
import { ThemeProvider } from "./context/themeContext";
import CssBaseline from '@mui/material/CssBaseline'

const App = () => {
  const assetPrice = useAssetPrice();

  return (
    <div>
      <ThemeProvider>
        <>
        <CssBaseline />
        <AccountAbstractionProvider>
          <AssetPriceContext.Provider value={assetPrice}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/*"
                element={
                  <AppShell padding="md" navbar={<Navbar />} header={<Header />}>
                    <Routes>
                      <Route path="/dashboard" element={<Home />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/campaign" element={<CreateCampaign />} />
                      <Route path="/campaign-details/:id" element={<CampaignDetails />} />
                      <Route path="/analyse" element={<EthBalance />} />
                      <Route path="/allnfts" element={<NFTList />} />
                      <Route path="/dao" element={<OmniGovernDao />} />
                    </Routes>
                  </AppShell>
                }
              />
            </Routes>
          </AssetPriceContext.Provider>
        </AccountAbstractionProvider>
        </>
      </ThemeProvider>
    </div>
  );
};

export default App;
