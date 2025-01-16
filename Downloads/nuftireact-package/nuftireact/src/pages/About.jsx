import React , {useState} from 'react';
import '../scss/components/section.scss';
import Header from '.././components/header/header.jsx';
import PageTitle from '../components/page-title/page-title-v1';
import Blog from '../components/blog/blog-v1';
import dataBlog from '../assets/fake-data/data-blog';
import Brand from '../components/brand/brand-v1';
import dataBrand from '../assets/fake-data/data-brand';
import Flathelp from '../components/flat-help';
import Footer from '../components/footer/footer-v1';
import dataFooter from '../assets/fake-data/data-footer';
import Bottom from '../components/bottom';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-video">
            <div className="overlay" onClick={() => props.setTrigger(false)}></div>
            <div className='popup-inner'>
                <div className="popup-inner-content">
                <div className="mfp-iframe-scaler">
                    <ReactPlayer url='https://www.youtube.com/watch?v=i7EMACWuErA'   
                                        playing={false}
                                        controls={false} className="popup-youtube">
                                        <span className="icon-play"></span>
                    </ReactPlayer>
                    <button className='close-btn' onClick={() => props.setTrigger(false)}><i className="far fa-times"></i></button>
                        {props.children}
                </div>
                    
                </div>
            </div>
        </div>
    ) :"";
}


function About(props) {
    const [dataTab] = useState(
        [
            {
                id: 1,
                title: "Great Strategy",
            },
            {
                id: 2,
                title: "Amazing Ideas",
            },
            {
                id: 3,
                title: "Creative Deals",
            },
            {
                id: 4,
                title: "Quick Support",
            },
        ]
    )
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className='wrapper-style' id='wrapper'>
            {<Header />}
            <PageTitle title='About Us'  />
            <div className="tf-section flat-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5">
                            <div className="wrap-img">                           
                                <div className="media">
                                    <img src={require ('../assets/images/box-item/about-1.jpg')} alt="Nufti"/> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div className="post">
                                <h4 className="sub-title fs-18 font text-color-4">About Us</h4>
                                <h2 className="title-about text-t">That's why we're on list of favorites.</h2>
                                <div className="title-text fs-18 fw-4 text-color-3">Proin massa dui, maximus vitae massa in, ullamcorper euismod justo. Ut condimentum ipsum.</div>
                                <p className="text-1">Proin massa dui, maximus vitae massa in, ullamcorper euismod justo. Ut condimentum ipsum id nibh suscipit, eget iaculis 
                                    mi mollis. Proin quis turpis odio. Suspendisse non ex a leo lobortis tincidunt condimentum quis sem. Sed ornare nunc vel mi eleifend.</p>
                                <div className="box">
                                    <div className="media">
                                        <img className="img-1" src={require ('../assets/images/box-item/about-2.jpg')} alt="Nufti"/> 
                                        <img className="img-2" src={require ('../assets/images/box-item/about-3.png')} alt="Nufti"/> 
                                    </div>
                                </div>
                            </div>                                               
                        </div>
                    </div>
                </div>
            </div>
            <div className="flat-counter tf-counter">
                <div className="container">
                    <div className="row row-counter">
                        <div className="col-lg-7 col-md-12">
                            <div className="wrap">
                                <h2 className="text-t">230,00+ Businesses
                                    with <span className="text-color-3">trusted clients.</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="counter-box box-1">
                                <div className="content wow fadeInUp">
                                    <div className="number number-one">31.2K</div>
                                    <p className="heading">Website Visitor Per Day Using Out Tools.</p>
                                   
                                </div>                                
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="counter-box box-2">
                                <div className="content wow fadeInUp">
                                    <div className="number number-two">2.3M</div>
                                    <p className="heading">Downloaded Total In 2018-2022.</p>                
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flat-about2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <Tabs>
                                    <TabList className="menu-tab tab-title">
                                        {
                                            dataTab.map(data=> (
                                                <Tab key={data.id} >
                                                    <h3 className="inner">{data.title}</h3>
                                                </Tab>
                                            ))
                                        }
                                    </TabList>
                                <TabPanel>
                                    <div className="provenance">
                                            <p>Maecenas pharetra sem ut metus dignissim, ac tincidunt purus fringilla. Integer ultrices enim at enim ultricies pharetra. 
                                                Nam mollis pretium mi, at sagittis neque blandit id. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                                                fames ac turpis egestas. Phasellus tempor commodo velit sit amet porttitor. Integer id lectus ut arcu posuere pharetra id 
                                                eget lorem. Suspendisse a sollicitudin turpis, ut fringilla lorem. Nam tincidunt libero vel gravida porttitor.</p>

                                            <p> Maecenas pharetra sem ut metus dignissim, ac tincidunt purus fringilla. Integer ultrices enim at enim ultricies pharetra. 
                                                Nam mollis pretium mi, at sagittis neque blandit id. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                                                fames ac turpis egestas. Phasellus tempor commodo velit sit amet porttitor. Integer id lectus ut arcu posuere pharetra id 
                                                eget lorem. Suspendisse a sollicitudin turpis, ut fringilla lorem. Nam tincidunt libero vel gravida porttitor.</p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="provenance">
                                            <p>Maecenas pharetra sem ut metus dignissim, ac tincidunt purus fringilla. Integer ultrices enim at enim ultricies pharetra. 
                                                Nam mollis pretium mi, at sagittis neque blandit id. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                                                fames ac turpis egestas. Phasellus tempor commodo velit sit amet porttitor. Integer id lectus ut arcu posuere pharetra id 
                                                eget lorem. Suspendisse a sollicitudin turpis, ut fringilla lorem. Nam tincidunt libero vel gravida porttitor.</p>

                                            <p> Maecenas pharetra sem ut metus dignissim, ac tincidunt purus fringilla. Integer ultrices enim at enim ultricies pharetra. 
                                                Nam mollis pretium mi, at sagittis neque blandit id. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                                                fames ac turpis egestas. Phasellus tempor commodo velit sit amet porttitor. Integer id lectus ut arcu posuere pharetra id 
                                                eget lorem. Suspendisse a sollicitudin turpis, ut fringilla lorem. Nam tincidunt libero vel gravida porttitor.</p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                        <div className="provenance">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                </TabPanel>
                                <TabPanel>
                                        <div className="provenance">
                                            <p>Maecenas pharetra sem ut metus dignissim, ac tincidunt purus fringilla. Integer ultrices enim at enim ultricies pharetra. 
                                                Nam mollis pretium mi, at sagittis neque blandit id. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                                                fames ac turpis egestas. Phasellus tempor commodo velit sit amet porttitor. Integer id lectus ut arcu posuere pharetra id 
                                                eget lorem. Suspendisse a sollicitudin turpis, ut fringilla lorem. Nam tincidunt libero vel gravida porttitor.</p>
                                        </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flat-video">
                <div className="themes-container">                    
                    <div className="video">
                        <div className="post-video">
                            <img className="img-2" src={require ('../assets/images/box-item/img-video.jpg')} alt="Nufti" /> 
                            <Link to="#" className="lightbox-image" onClick={() => setButtonPopup(true)}>
                               <span> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.6491 10.6225L13.0259 1.28804C11.8057 0.560466 10.3618 0.12229 8.85441 0.0221033C7.34702 -0.0780839 5.835 0.163632 4.48602 0.720449C3.13703 1.27727 2.00379 2.12742 1.21196 3.17666C0.420123 4.22589 0.000632158 5.4332 0 6.66471V25.3337C0.000269838 26.5658 0.419785 27.7737 1.21199 28.8234C2.00419 29.8731 3.13809 30.7235 4.48786 31.2803C5.83763 31.8371 7.35046 32.0785 8.85847 31.9776C10.3665 31.8768 11.8107 31.4377 13.0308 30.709L28.654 21.3745C29.6911 20.7553 30.5345 19.9458 31.1158 19.0117C31.6971 18.0775 32 17.0451 32 15.9979C32 14.9507 31.6971 13.9182 31.1158 12.9841C30.5345 12.05 29.6911 11.2405 28.654 10.6212L28.6491 10.6225ZM26.7101 19.2236L11.0869 28.5581C10.3549 28.9936 9.48917 29.2558 8.58552 29.3155C7.68187 29.3752 6.77556 29.2301 5.9669 28.8963C5.15825 28.5625 4.47879 28.053 4.00374 27.4243C3.52869 26.7955 3.27658 26.0719 3.27531 25.3337V6.66471C3.26622 5.92508 3.51358 5.19837 3.98896 4.56808C4.46434 3.93779 5.14846 3.4295 5.9627 3.1016C6.65525 2.81475 7.4211 2.6649 8.1981 2.66421C9.23947 2.66745 10.2521 2.94276 11.0869 3.44964L26.7101 12.7841C27.3316 13.1558 27.8369 13.6413 28.1852 14.2015C28.5335 14.7616 28.715 15.3807 28.715 16.0085C28.715 16.6364 28.5335 17.2554 28.1852 17.8156C27.8369 18.3758 27.3316 18.8613 26.7101 19.2329V19.2236Z" fill="#7759F3"/>
                                    </svg> </span>
                                <i className="ripple"></i>
                            </Link>
                        </div>
                    </div>    
                
                </div>
                
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} className="popup-youtube">
                <span className="icon-play">abc</span>
            </Popup>  
            {<Blog classection='tf-section flat-blog home3 page' data={dataBlog}/>}
            {<Brand classection='tf-section flat-brand' data={dataBrand}/>}
            {<Flathelp />}
            {<Footer data={dataFooter}/>}
            {<Bottom classection='widget-social-footer'/>}
        </div>
    );
}

export default About;