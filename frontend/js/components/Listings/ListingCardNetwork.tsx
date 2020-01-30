import React from 'react';

interface IProps {
    href: string;
    title: string;
    image: string;
}

export default class ListingCardNetwork extends React.Component<IProps> {
    render() {
        return (
            <a className="c-listings__network-link" href={this.props.href} title={this.props.title} data-animate="listings-network-links">
                <img className="c-listings__network-image" src={this.props.image} alt={this.props.title} />
            </a>
        );
    }
}
