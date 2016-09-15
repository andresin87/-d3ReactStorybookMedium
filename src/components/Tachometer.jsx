// Tachometer.jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class Tachometer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: props.val,
            basePath: {
                d: `M0,50 l100,0`,
                id: 'basePath'
            },
            arrowPath: {
                d:`M50,0 l0,50`,
                id: 'arrowPath'
            }
        };
    }

    componentWillEnter(callback) {
        let node = d3.select(ReactDOM.findDOMNode(this));
        console.log(ReactDOM.findDOMNode(this));
        console.log(node);
    }

    componentWillLeave(callback) {
        let node = d3.select(ReactDOM.findDOMNode(this));
        console.log(ReactDOM.findDOMNode(this));
        console.log(node);
        console.log(node.node());

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.i != nextProps.i) {
            let node = d3.select(ReactDOM.findDOMNode(this));
        }
        let node = d3.select(ReactDOM.findDOMNode(this));
        this.state.svg = node.node().getBBox();
        this.state.parent = node.node().parentNode;
        console.log(ReactDOM.findDOMNode(this));
        console.log(node);
        console.log(node.node().getBBox());

        console.log(this.state);
    }

    render() {
        return (
            <svg
                width={this.state.svg ? this.state.svg.width : '100%'}
                height={this.state.svg ? this.state.svg.height : '600'}
            >
                <g>
                    <path
                        d={this.state.basePath.d}
                        id="base-path"
                        fill="black"
                        stroke="red"
                    />
                    <path
                        d={this.state.arrowPath.d}
                        id="arrow-path"
                        fill="black"
                        stroke="red"
                    />
                </g>
            </svg>
        );
    }
};

Tachometer.propTypes = {
    val: React.PropTypes.number,
    colors: React.PropTypes.array
};
Tachometer.defaultProps = {
    val: 0
};

export default Tachometer;
