import { Component } from 'react';

import { fetchJson } from '../utils/utils';
import { Helmet } from 'react-helmet';

import ReactMarkdown from 'react-markdown';

import Button from '../components/ui/Button';
import remarkGfm from 'remark-gfm';
import clsx from 'clsx';

export default class Changelog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            changelog: [],
        }
    }

    componentDidMount() {
        this.mounted = true;

        const checkTime = localStorage.getItem("timeChangelog");

        if(checkTime == null || Date.now() - Number.parseFloat(checkTime) > 600000) { // Store for 10 minutes.
            fetchJson('https://api.github.com/repos/PlayCover/PlayCover/releases', s => {
                if (this.mounted)
                    this.setState({changelog: s});

                localStorage.setItem("timeChangelog", Date.now() + "");
                localStorage.setItem("changelog", JSON.stringify(s));
            }, () => {
                if (this.mounted)
                    this.setState({changelog: undefined});
            }, 'GET');
        } else {
            if(this.mounted)
                this.setState({changelog: JSON.parse(localStorage.getItem("changelog"))});
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return (
            <div className="max-w-7xl mx-auto pb-6 px-4 lg:px-6 xl:px-0">
                <Helmet>
                    <title>Changelog - PlayCover</title>
                </Helmet>
                {this.state.changelog !== undefined && this.state.changelog !== null && (
                    <div className="flex-wrap flex-col overflow-auto pl-2">
                        {this.state.changelog.map((release, i) => (
                            <div key={i} className="flex space-x-10 px-4 lg:px-6 xxl:px-0">
                                <div className={clsx(this.state.changelog.length === i + 1 ? "h-0" : "-mb-[14px]", "mt-[60px] border-l-2 min-h-fit border-gray-300 dark:border-gray-600/40")}>
                                    <svg aria-hidden="true" height="35" viewBox="0 0 24 24" version="1.1" width="35" data-view-component="true" className="absolute -ml-[18px] -mt-[40px] text-gray-400 dark:text-gray-500/40">
                                        <path fill="currentColor" fillRule="evenodd" d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"></path>
                                    </svg>
                                </div>
                                <div className="">
                                    <div>
                                        <div className="flex items-center my-4">
                                            <img src={release.author.avatar_url} alt={release.author.login} title={release.author.login} className="border-2 rounded-full mt-1 h-8 w-8"/>
                                            <span className="ml-2.5 mt-1 text-2xl font-itcavantgardestdmd bg-clip-text text-transparent bg-gradient-to-r from-pc-g to-pc-b">{release.name}</span>
                                        </div>
                                        <div className="">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]} children={release.body} components={{
                                                li: props => <div className="whitespace-pre-wrap"><span className="text-xl font-bold">•</span> {props.children}</div>,
                                                p: props => <div className="py-2.5">{props.children}</div>,
                                                h2: props => <p className="font-semibold text-lg py-3">{props.children}</p>,
                                                a: props => <a href={props.href} className="text-blue-400">{props.children}</a>,
                                            }}/>
                                        </div>
                                    </div>
                                    <div className="pt-5 pb-1.5">
                                        <a href={release.html_url} target="_blank" rel="noreferrer">
                                            <Button name="Read more" size="sm"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}