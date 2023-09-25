import React from 'react';
import Deal_screen from '../DEAL_SCREEN/Deal_screen';
import Main from '../main/main';
import Nav_bar from '../Nav_Bar/Nav_bar';
import Popular_items from '../Popular items/Popular_items';
import Popular_sales from '../popular sales/popular_sales';
import Section from '../Section/section';
import Top_categories from '../Top Categories/Top_categories';
import Top_rate from '../Top Rate/top_rate';
import Footer from '../Footer/footer';

const Home = () => {
    return (
        <div className='home'>
            <Nav_bar/>
            <div className='container'>
                <Main/>
                
            </div>
            <Section/>
            <div className='container'>
                <Popular_items/>
                <Top_rate/>
                <Popular_sales/>
            </div>
            <Deal_screen/>
            <div className='container'>
                <Top_categories/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
