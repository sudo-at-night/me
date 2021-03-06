import React from 'react';

interface IProps {
    leftTitle: string;
    leftSubtitle: string;
    rightTitle: string;
    rightSubtitle: string;
}

export default class ListingCardJob extends React.Component<IProps> {
    render() {
        return (
            <div className="c-listings__listing-card u-card u-container" data-animate="listings-jobs">
                <div className="c-listings__card-column-container">
                    <p className="c-listings__card-title">{this.props.leftTitle}</p>
                    <p className="c-listings__card-subtitle">{this.props.leftSubtitle}</p>
                </div>
                <div className="c-listings__card-column-container">
                    <p className="c-listings__card-title">{this.props.rightTitle}</p>
                    <p className="c-listings__card-subtitle">{this.props.rightSubtitle}</p>
                </div>
            </div>
        );
    }
}
