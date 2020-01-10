import React from 'react';
import anime from 'animejs';
import ListingCardNetwork from './ListingCardNetwork';
import ListingCardJob from './ListingCardJob';
import ListingCardSkill from './ListingCardSkill';
import VueLogo from '~/assets/vue.png';
import ReactLogo from '~/assets/react.png';
import WebpackLogo from '~/assets/webpack.png';
import SASSLogo from '~/assets/sass.png';
import GitHubLogo from '~/assets/github.png';
import GitLabLogo from '~/assets/gitlab.png';
import LinkedInLogo from '~/assets/li.png';

export default class Listings extends React.Component {
    componentDidMount() {
        const easing = 'cubicBezier(0.4, 0.0, 0.2, 1)';
        const elementsTitles = document.querySelectorAll('.c-listings__title');
        const elementsNetworkListings = document.querySelectorAll('.c-listings__network-link');
        const elementsJobListings = document.querySelectorAll('.c-listings__listing-card');
        const elementsSkillsListings = document.querySelectorAll('.c-listings__skill-card');
        // Titles animation
        anime({
            targets: elementsTitles,
            opacity: 1,
            easing,
            delay: anime.stagger(600),
            duration: 1500,
        });
        // Skills animation
        let skillsDelay = 800;
        const observer = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) {
                skillsDelay = 0;
                return;
            }
            observer.disconnect();
            anime({
                targets: elementsSkillsListings,
                opacity: 1,
                translateX: 0,
                easing,
                delay: anime.stagger(600, {start: skillsDelay}),
                duration: 1000,
            });
        });
        observer.observe(elementsSkillsListings[0]);
        // Networks animation
        anime.set(elementsNetworkListings, {
            translateX: 50,
        });
        anime({
            targets: elementsNetworkListings,
            opacity: 1,
            translateX: 0,
            easing,
            delay: anime.stagger(600, {start: 400}),
            duration: 1000,
        });
        // Job listings animation
        anime.set(elementsJobListings, {
            translateY: 100,
        });
        anime({
            targets: elementsJobListings,
            opacity: 1,
            translateY: 0,
            easing,
            delay: 200,
            duration: 1000,
        });
        anime.set(elementsSkillsListings, {
            translateX: 100,
        });
    }
    render() {
        return (
            <div className="c-listings">
                <h3 className="c-listings__title u-hidden u-container">My Network:</h3>
                <div className="c-listings__networks-list-container">
                    <ul className="c-listings__networks-list">
                        {networks.map((network, index) => (
                            <li className="c-listings__network-list-item" key={index}>
                                <ListingCardNetwork
                                    title={network.title}
                                    image={network.image}
                                    href={network.href}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <h3 className="c-listings__title u-hidden u-container">Currently helping the world of E-Commerce at:</h3>
                <ul>
                    <li>
                        <ListingCardJob
                            leftTitle="Divante"
                            leftSubtitle="2017 - Frontend Developer"
                            rightTitle="What I create"
                            rightSubtitle={DivanteJobDescription}/>
                    </li>
                </ul>
                <h3 className="c-listings__title u-hidden u-container">Technologies I use and love:</h3>
                <div className="c-listings__skills-list-container">
                    <ul className="c-listings__skills-list">
                        {skills.map((skill, index) => (
                            <li key={index}>
                                <ListingCardSkill
                                    title={skill.title}
                                    alt={skill.alt}
                                    image={skill.image}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

const DivanteJobDescription = `Enchancing CMS experiences on a good day, creating Single Page Applications on the best days.

Everything powered by combined solutions of VueJS and other Open Source powerhouses such as Symfony, Contentful or Pimcore.`

const networks = [
    {
        title: 'GitHub',
        image: GitHubLogo,
        href: 'https://github.com/sudo-at-night',
    },
    {
        title: 'GitLab',
        image: GitLabLogo,
        href: 'https://gitlab.com/patpist',
    },
    {
        title: 'LinkedIn',
        image: LinkedInLogo,
        href: 'https://linkedin.com/in/patryk-mazur-dev',
    },
];

const skills = [
    {
        title: 'VueJS',
        alt: 'VueJS',
        image: VueLogo,
    },
    {
        title: 'React',
        alt: 'React',
        image: ReactLogo,
    },
    {
        title: 'Webpack',
        alt: 'Webpack',
        image: WebpackLogo,
    },
    {
        title: 'SASS/SCSS',
        alt: 'SASS SCSS',
        image: SASSLogo,
    }
];
