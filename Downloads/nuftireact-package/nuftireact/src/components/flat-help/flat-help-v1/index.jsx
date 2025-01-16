import React, {useState} from 'react';
import PropTypes from 'prop-types';
Flathelp.propTypes = {
    data : PropTypes.array,
};

function Flathelp (props) {
    const {classection} = props;
    const [dataTitle] = useState(
        {   
            title : 'Have Any Help to Newsletter.',
        }
    )
    return (
        <div className={`${classection}`}>
        <div className="themes-container3 style-container">
            <div className="row">                  
                <div className="col-lg-5 col-md-5">
                    <div className="title-help">
                        <h2>{dataTitle.title}</h2>
                    </div>                           
                </div>
                <div className="col-lg-7 col-md-7">
                    <div className="widget-subcribe">
                        <div className="form-subcribe">
                            <form id="subscribe-form" action="#" method="GET" acceptCharset="utf-8" className="form-submit">
                                <input name="email" className="email" type="email" placeholder="Enter Your Email..." required />
                                <button id="submit" name="submit" type="submit"><i className="far fa-long-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Flathelp;