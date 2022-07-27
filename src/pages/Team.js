import { Component } from 'react';

import { fetchJson } from '../utils/utils';

import { Helmet } from 'react-helmet';

import Avatar from '../components/ui/Avatar';

const websiteMaintainers = [
    {
        name: "EazyFTW",
        url: "https://github.com/EazyFTW",
        avatar: "https://avatars.githubusercontent.com/u/13033307?v=4"
    },
    {
        name: "roeegh",
        url: "https://github.com/roeegh",
        avatar: "https://avatars.githubusercontent.com/u/62909766?v=4"
    }
]

export default class Team extends Component {

    constructor(props) {
        super(props);

        this.state = {
            maintainers: undefined,
        }
    }

    componentDidMount() {
        this.mounted = true;

        const checkTime = localStorage.getItem("timeContributors");

        if(checkTime == null || Date.now() - Number.parseFloat(checkTime) > 600000) { // Store for 10 minutes.
            fetchJson('https://api.github.com/repos/PlayCover/PlayCover/contributors?anon=1', s => {
                if (this.mounted)
                    this.setState({maintainers: s});

                localStorage.setItem("timeContributors", Date.now() + "");
                localStorage.setItem("contributors", JSON.stringify(s));
            }, () => {
                if (this.mounted)
                    this.setState({maintainers: undefined});
            }, 'GET');
        } else {
            if(this.mounted)
                this.setState({maintainers: JSON.parse(localStorage.getItem("contributors"))});
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return (
            <div className="max-w-7xl mx-auto">
                <Helmet>
                    <title>Team - PlayCover</title>
                </Helmet>
                {this.state.maintainers !== undefined && this.state.maintainers !== null && (
                    <>
                        <div className="mt-4 pb-8">
                            <span className="text-2xl mx-4 xl:mx-0 font-itcavantgardestdmd bg-clip-text text-transparent bg-gradient-to-r from-pc-g to-pc-b">Maintainers</span>
                        </div>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 pb-2">
                            {this.state.maintainers.filter(c => c.contributions > 19).map((c, i) => (
                                <div key={i} className="font-lufga text-lg mx-auto text-center truncate">
                                    <a href={c.html_url} target="_blank" rel="noreferrer">
                                        <Avatar url={c.avatar_url} name={c.login} size="mx-auto w-10 h-10 lg:w-16 lg:h-16 mb-3"/>
                                        {c.login}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pb-8">
                            <span className="text-2xl mx-4 xl:mx-0 font-itcavantgardestdmd bg-clip-text text-transparent bg-gradient-to-r from-pc-g to-pc-b">Major Contributors</span>
                        </div>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 pb-2">
                            {this.state.maintainers.filter(c => c.contributions > 11 && c.contributions < 20).map((c, i) => (
                                <div key={i} className="font-lufga text-lg mx-auto text-center truncate">
                                    <a href={c.html_url} target="_blank" rel="noreferrer">
                                        <Avatar url={c.avatar_url} name={c.login} size="mx-auto w-10 h-10 lg:w-16 lg:h-16 mb-3"/>
                                        {c.login}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pb-8">
                            <span className="text-2xl mx-4 xl:mx-0 font-itcavantgardestdmd bg-clip-text text-transparent bg-gradient-to-r from-pc-g to-pc-b">Minor Contributors</span>
                        </div>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 pb-2">
                            {this.state.maintainers.filter(c => c.contributions < 11).map((c, i) => (
                                <div key={i} className="font-lufga text-lg mx-auto text-center truncate">
                                    <a href={c.html_url} target="_blank" rel="noreferrer">
                                        <Avatar url={c.avatar_url} name={c.login} size="mx-auto w-10 h-10 lg:w-16 lg:h-16 mb-3"/>
                                        {c.login}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </>
                )}
                <div className="mt-4 pb-8">
                    <span className="text-2xl mx-4 xl:mx-0 font-itcavantgardestdmd bg-clip-text text-transparent bg-gradient-to-r from-pc-g to-pc-b">Website Maintainers</span>
                </div>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 pb-10">
                    {websiteMaintainers.map((c, i) => (
                        <div key={i} className="font-lufga text-lg mx-auto text-center truncate">
                            <a href={c.url} target="_blank" rel="noreferrer">
                                <Avatar url={c.avatar} name={c.name} size="mx-auto w-10 h-10 lg:w-16 lg:h-16 mb-3"/>
                                {c.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}