import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Get the latest news
        </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
        </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>CBM <p style={ { fontSize: 'medium' } }>integrated software Inc.</p></h2>
                        <p> adapts specialized methods, processes, and techniques of software engineering to the project scope, and employs project management as its vehicle to deliver quality results.</p>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Quicks Links</h2>
                        <Link to='/'>About CBM</Link>
                        <Link to='/'>Partnership</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Training</Link>
                        <Link to='/'>Internship</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Links</h2>
                        <Link to='/'>Terms of Use</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Pricing</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>MY ACCOUNT</h2>
                        <Link to='/'>Career Tracks</Link>
                        <Link to='/'>Courses</Link>
                        <Link to='/'>Projects</Link>
                        <Link to='/'>Assessments</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            CBM integrated software Inc.
                        </Link>
                    </div>
                    <small class='website-rights'>CBM © 2020</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default Footer;
