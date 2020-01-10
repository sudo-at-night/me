import React from 'react';

export default class WidgetLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: getTime() };
    }
    tick() {
        this.setState(() => ({
            time: getTime(),
        }));
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="o-location-widget">
                <p className="o-location-widget__location">Wrocław</p>
                <p className="o-location-widget__time">{this.state.time}</p>
            </div>
        );
    }
}

const getTime = () => new Date().toLocaleDateString("en-GB", {
    hourCycle: 'h24',
    formatMatcher: 'best fit',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
}).split(',')[1].trim();
