import React from 'react';
import Face from '~/assets/face.jpg';
import { iniAnimations } from '~/js/utils/animations';
import WidgetLocation from '~/js/components/WidgetLocation';
import Listings from '~/js/components/Listings';

// META PATH: "/"
// META TITLE: "Patryk Mazur | Software Engineer"
// META LIST START
// <meta name="description" content="I'm a software engineer currently living in Wrocław, Poland.">
// <meta name="title" content="Patryk Mazur | Software Engineer">
// <meta property="og:type" content="website">
// <meta property="og:url" content="https://sudo-at-night.com/">
// <meta property="og:title" content="Patryk Mazur | Software Engineer">
// <meta property="og:description" content="I'm a software engineer currently living in Wrocław, Poland.">
// <meta property="og:image" content="https://sudo-at-night.com/meta/meta-homepage.png">
// <meta property="twitter:card" content="summary_large_image">
// <meta property="twitter:url" content="https://sudo-at-night.com/">
// <meta property="twitter:title" content="Patryk Mazur | Software Engineer">
// <meta property="twitter:description" content="I'm a software engineer currently living in Wrocław, Poland.">
// <meta property="twitter:image" content="https://sudo-at-night.com/meta/meta-homepage.png"></meta>
// META LIST END
export default class ViewHome extends React.Component {
    componentDidMount() {
        iniAnimations();
    }
    render() {
        return (
            <div>
                <header className="c-main-header u-card u-container" data-animate="main-header">
                    <img className="c-main-header__face" src={Face} alt="Patryk Mazur" />
                    <div className="c-main-header__text-container">
                        <div className="c-main-header__text-wrapper">
                            <h1 className="c-main-header__title">Software Engineer</h1>
                            <h2 className="c-main-header__name">Patryk Mazur</h2>
                            <p className="c-main-header__email">
                                E-Mail: <a href="mailto:patytmaz@gmail.com">patytmaz@gmail.com</a>
                            </p>
                        </div>
                        <div className="c-main-header__location-widget">
                            <WidgetLocation />
                        </div>
                    </div>
                </header>
                <div className="c-bio u-container u-quote-block" data-animate="bio">
                    I started programming in 2015. I created a social network for car enthusiasts and quickly fell in love with creating websites and applications people can enjoy over the internet.
                    Since then I've jumped at every opportunity to learn about all the things that comprise a sound experience for the end-user, but also for developers.
                    <br />
                    <br />
                    While I'm focused on the front-end, I also keep delving into topics of <strong>Continuous Integration and Delivery</strong>, <strong>Infrastructure as Code</strong>,
                    <strong> containerization</strong> and others alike. I'd rather focus on the business logic problems, automating everything that can be safely automated.
                </div>
                <main>
                    <Listings />
                </main>
            </div>
        );
    }
}
