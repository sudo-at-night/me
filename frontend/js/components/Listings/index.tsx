import React from 'react';
import VueLogo from '~/assets/vue.png';
import ReactLogo from '~/assets/react.png';
import WebpackLogo from '~/assets/webpack.png';
import SASSLogo from '~/assets/sass.png';
import GitHubLogo from '~/assets/github.png';
import GitLabLogo from '~/assets/gitlab.png';
import LinkedInLogo from '~/assets/li.png';
import ListingCardNetwork from './ListingCardNetwork';
import ListingCardJob from './ListingCardJob';
import ListingCardSkill from './ListingCardSkill';

export default class Listings extends React.Component {
    render() {
        return (
            <div className="c-listings">
                <h3 className="c-listings__title u-container" data-animate="listings-title">My Network:</h3>
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
                <h3 className="c-listings__title u-container" data-animate="listings-title">Currently helping the world of E-Commerce at:</h3>
                <ul>
                    <li>
                        <ListingCardJob
                            leftTitle="Divante"
                            leftSubtitle="2017 - Frontend Developer"
                            rightTitle="What I create"
                            rightSubtitle={DivanteJobDescription}/>
                    </li>
                </ul>
                <h3 className="c-listings__title u-container" data-animate="listings-title">Technologies I use and love:</h3>
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
