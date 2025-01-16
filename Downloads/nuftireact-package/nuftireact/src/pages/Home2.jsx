import React from 'react';
import '../scss/components/section.scss';
import Header from '.././components/header/header.jsx'
import Banner from '../components/banner/banner-v2';
import dataBanner from '../assets/fake-data/data-banner';
import Liveaution from '../components/liveauctions/liveauction-v3';
import dataLiveaution from '../assets/fake-data/data-liveaution';
import Friendly from '../components/friendly/flat-friendly-v1';
import dataFriendly from '../assets/fake-data/data-friendly';
import Category from '../components/cetagories/cetagorie-v2';
import dataCategory from '../assets/fake-data/data-category';
import Liveaution2 from '../components/liveauctions/liveauction-v4';
import dataLiveaution2 from '../assets/fake-data/data-liveaution';
import Brand from '../components/brand/brand-v1';
import dataBrand from '../assets/fake-data/data-brand';
import Seller from '../components/seller/seller-v2';
import dataSeller from '../assets/fake-data/data-seller';
import Feature from '../components/featured/featured-v1';
import dataFeature from '../assets/fake-data/data-featured';
import Collection from '../components/collection/collection-v1';
import dataCollection from '../assets/fake-data/data-collection';
import Flathelp from '../components/flat-help/flat-help-v1';
import Footer from '../components/footer/footer-v2';
import dataFooter from '../assets/fake-data/data-footer';
import Bottom from '../components/bottom';
function Home2(props) {

    return (
        <div className='wrapper-style' id='wrapper'>
            {<Header />}
            {<Banner data={dataBanner}/>}
            {<Liveaution classection='tf-section flat-auctions live-auctions home2' data={dataLiveaution}/>}
            {<Friendly data={dataFriendly}/>}
            {<Category data={dataCategory}/>}
            {<Liveaution2 data={dataLiveaution2}/>}
            {<Brand classection='flat-brand home2' data={dataBrand}/>}
            {<Seller data={dataSeller}/>}
            {<Feature classection='tf-section flat-featured home2' data={dataFeature}/>}
            {<Collection classection='flat-collection home2' data={dataCollection}/>}
            {<Flathelp classection='tf-section flat-help home2' />}
            {<Footer data={dataFooter}/>}
            {<Bottom classection='widget-social-footer home2'/>}
        </div>
    );
}

export default Home2;