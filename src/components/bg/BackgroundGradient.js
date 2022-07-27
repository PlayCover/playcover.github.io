import { Component } from 'react';

import PropTypes from 'prop-types';

import GradientLeftDark from '../../assets/gradient/gradient-left-dark.svg';
import GradientRightDark from '../../assets/gradient/gradient-right-dark.svg';

import GradientLeftLight from '../../assets/gradient/gradient-left-light.svg';
import GradientRightLight from '../../assets/gradient/gradient-right-light.svg';

import clsx from 'clsx';

export default class BackgroundGradient extends Component {

    render() {
        return (
            <img onMouseDown={e => e.preventDefault()} src={this.props.location === 'left' ? (this.props.theme === 'light' ? GradientLeftLight : GradientLeftDark) : (this.props.theme === 'light' ? GradientRightLight : GradientRightDark)} className={clsx("block fixed duration-200 max-w-full pointer-events-none", this.props.location === 'left' ? "left-[-10%] bottom-[-50%] right-[-50%]" : "xxl:top-[-50%] xxl:right-[-50%]")} alt={`Gradient ${this.props.location} ${this.props.theme}`}/>
        );
    }
}

BackgroundGradient.propTypes = {
    location: PropTypes.oneOf(["left", "right"]),
    theme: PropTypes.oneOf(["light", "dark"])
}