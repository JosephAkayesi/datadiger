import React, { Component } from 'react'
import twitter from '../../images/tw.png'
import facebook from '../../images/fb.png'
import instagram from '../../images/ig.png'
import icon from '../../images/icon.png'
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className='bgImg'>
                <div className='centered text-center align-items-center justify-content-center'>
                <img src={icon} className='' alt="twitter" style={{ width: '100px', height: '100px' }} />
                    <h1 className='brandName'>Data Diger Group</h1>
                    <p>Building cross-platform intelligent applications.</p>
                    <div className='pt-5'>
                        <a href="https://twitter.com/DataDiger" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} className='social mx-1' alt="twitter" />
                        </a>
                        <a href="https://www.facebook.com/groups/datadiger/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} className='social mx-1' alt="facebook" />
                        </a>
                        <a href="https://instagram.com/datadiger" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} className='social mx-1' alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;