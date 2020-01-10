import React from 'react';

export default class ListingCardNetwork extends React.Component {
    render() {
        return (
            <a className="c-listings__network-link u-hidden" href={this.props.href} title={this.props.title}>
                <img className="c-listings__network-image" src={this.props.image} alt={this.props.title}/>
            </a>
        );
    }
}
