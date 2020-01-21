import React from 'react';

interface IProps {
    title: string,
    alt:   string,
    image: string,
};

export default class ListingCardSkill extends React.Component<IProps> {
    render() {
        return (
            <div className="c-listings__skill-card u-hidden u-card" data-animate="listings-skills">
                <img className="c-listings__skill-image" src={this.props.image} alt={this.props.alt}/>
                <p className="c-listings__skill-title">{this.props.title}</p>
            </div>
        );
    }
}
