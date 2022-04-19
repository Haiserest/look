import React from 'react'
import './AppFooter.css'

function AppFooter(){
    return(
        <footer className='App-Footer'>
            <div className='footer-contents'>
                <h5>Contents</h5>
                <ul class="footer-content">
                    <li><a class="footer-item" href="#">Content...</a></li>
                    <li><a class="footer-item" href="#">Content...</a></li>
                </ul>
                </div>
                <div className='footer-contents'>
                <h5>Contents</h5>
                <ul class="footer-content">
                    <li><a class="footer-item" href="#">Content...</a></li>
                    <li><a class="footer-item" href="#">Content...</a></li>
                </ul>
                </div>
                <div className='footer-contents'>
                <h5>Contents</h5>
                <ul class="footer-content">
                    <li><a class="footer-item" href="#">Content...</a></li>
                    <li><a class="footer-item" href="#">Content...</a></li>
                </ul>
                </div>
                <div className='footer-contents'>
                <h5>About</h5>
                <ul class="footer-content">
                    <li><a class="footer-item" href="#">Content...</a></li>
                    <li><a class="footer-item" href="#">Content...</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default AppFooter;