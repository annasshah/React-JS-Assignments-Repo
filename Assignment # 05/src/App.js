import './App.css';

import SliderMainSection from './components/SliderMainSection';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AfterSliderMain from './components/AfterSliderMain';
import { Box } from '@mui/system';
import Feaures from './components/Feaures';
import Sections from './components/Sections';
import WeeklyDealSection from './components/WeeklyDealSection';
import ProductCardsSection from './components/ProductCardsSection';
import TradeServiceSection from './components/TradeServiceSection';
import RegionSection from './components/RegionSection';
import AddBar from './components/AddBar';
import { Hidden } from '@mui/material';
import FooterSection from './components/FooterSection';

function App() {

  return (
    <>
      <Box sx={{ backgroundColor: '#f2f3f7', height: '100%' }}>


        <Navbar />

        <SliderMainSection />

        <AfterSliderMain />
        <Feaures />

        <Sections title={'CONSUMER ELECTRONICS'} BgImgUrl={'https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png'} imgTitle={'Selected Novelty Products'} />
        <Sections title={'APPAREL'} BgImgUrl={'https://img.alicdn.com/tfs/TB1ZXXNIgHqK1RjSZFkXXX.WFXa-300-320.jpg'} imgTitle={'Shopping Guide for Trending Styles'} />
        <Sections title={'VEHICLES & ACCESSORIES'} BgImgUrl={'https://img.alicdn.com/tfs/TB1uW2kv3HqK1RjSZFkXXX.WFXa-300-320.png'} imgTitle={'Diversified Procurement Solutions'} />


        <WeeklyDealSection />

        <ProductCardsSection />

        <TradeServiceSection />

        <RegionSection />

        <Hidden mdDown={true}>
          <AddBar />
        </Hidden>

      <FooterSection/>


      </Box>
    </>
  );
}

export default App;
