import React from 'react';
import Face from '~/assets/face.jpg'
import WidgetLocation from '~/js/components/WidgetLocation';
import Listings from '~/js/components/Listings';

export default class ViewHome extends React.Component {
    render() {
        return (
            <div>
                <header className="c-main-header u-card u-container">
                    <img className="c-main-header__face" src={Face} alt="Patryk Mazur"/>
                    <div className="c-main-header__text-container">
                        <div className="c-main-header__text-wrapper">
                            <h1 className="c-main-header__title">Software Engineer</h1>
                            <h2 className="c-main-header__name">Patryk Mazur</h2>
                            <p className="c-main-header__email">E-Mail: <a href="mailto:patytmaz@gmail.com">patytmaz@gmail.com</a></p>
                        </div>
                        <div className="c-main-header__location-widget">
                            <WidgetLocation/>
                        </div>
                    </div>
                </header>
                <main>
                    <Listings/>
                </main>
            </div>
        );
    }
}
