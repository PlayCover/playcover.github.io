import { Component } from 'react';

import { ChevronDownIcon, LinkIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import PropTypes from 'prop-types';

export default class Collapse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: props.defaultOpen || false
        };
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { open } = this.state;
        const { id, title, dropdown } = this.props;

        return (
            <div className="flex flex-col justify-center w-full" id={id}>
                <div className="flex items-center justify-between py-3.5 px-6 font-itcavantgardestdmd bg-black/5 dark:bg-white/5 rounded-xl w-full cursor-pointer" onClick={this.toggle}>
                    <div className="flex items-center space-x-2 lg:text-lg">
                        <NavLink to={`#${id}`} onClick={(e) => e.stopPropagation()}>
                            <LinkIcon className="w-4 h-4"/>
                        </NavLink>
                        <div>{title}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                        <ChevronDownIcon className={clsx(open && "rotate-90 duration-300", "w-5 h-5 duration-300")}/>
                    </div>
                </div>
                <div className="pt-3.5 md:pt-5 mx-8">
                    {open && (
                        <div className="font-itcavantgardestdmd font-medium text-[14px] md:text-base space-y-2">
                            <div>{dropdown}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Collapse.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    defaultOpen: PropTypes.bool,
    dropdown: PropTypes.any.isRequired
}