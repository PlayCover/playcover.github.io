import { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';

import Button from '../ui/Button';
import ThemeToggle from '../../hooks/ThemeToggle';

import logo from '../../assets/images/play-cover.png';

const pages = [
    {
        name: 'Home', url: '/'
    },
    {
        name: 'Team', url: '/team'
    },
    {
        name: 'Changelog', url: '/changelog'
    },
    {
        name: 'FAQ', url: '/faq'
    },
    {
        name: 'Discord', url: '/discord'
    },
];

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    componentDidMount() {
        this.listener = this.props.history.listen(() => this.setState({open: false}));
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <div className="max-w-[1350px] md:mx-auto">
                <div className="flex items-center justify-between h-24 mx-4 xxl:mx-0">
                    <div className="flex flex-shrink-0 items-center space-x-10">
                        <div>
                            <img src={logo} className="h-12 w-12 rounded-xl" alt="PlayCover"/>
                        </div>
                        <div className="hidden md:flex items-center space-x-10 font-itcavantgardestdmd font-medium">
                            {pages.map((page, i) => (
                                <NavLink exact={page.url === "/"} to={page.url} key={i} className="-mb-0.5 border-b border-transparent" activeClassName="border-black dark:border-white">
                                    {page.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <div>
                            <ThemeToggle/>
                        </div>
                        <NavLink to="download">
                            <Button name="Download" size="lg"/>
                        </NavLink>
                    </div>
                    <div className="block md:hidden mr-3">
                        <MenuIcon className="cursor-pointer h-6 w-6" onClick={() => this.setState(prevState => ({open: !prevState.open}))}/>
                    </div>
                </div>
                {this.state.open && (
                    <div className="absolute md:hidden bg-light dark:bg-dark z-50 w-full border-b border-b-gray-400/20 dark:border-b-gray-200/5">
                        <div className="flex flex-col text-lg items-center font-itcavantgardestdmd font-medium space-y-4 pt-2 pb-10">
                            {pages.map((page, i) => (
                                <NavLink exact={page.url === "/"} to={page.url} key={i} className="-mb-0.5 border-b border-transparent" activeClassName="border-black dark:border-white">
                                    {page.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}