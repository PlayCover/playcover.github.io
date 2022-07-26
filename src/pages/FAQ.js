import { Component } from 'react';

import { Helmet } from 'react-helmet';

import Button from '../components/ui/Button';

import Collapse from '../components/ui/Collapse';

const faqs = [
    {
        id: 'playcover',
        question: "What is PlayCover?",
        answer: "PlayCover is a tool that allows you easily launch iPhone and iPad apps on your Mac, a feature Apple took away from us!"
    },
    {
        id: 'partnered',
        question: "Are you partnered with Apple?",
        answer: 'PlayCover is not affiliated with Apple and is a completely seperate project developed with the intent to bring back the feature which Apple removed.'
    },
    {
        id: 'intel',
        question: 'Does PlayCover work for Intel-Based Mac Devices?',
        answer: 'PlayCover only runs on ARM Powered Devices on MacOS Monterey or later at the moment.'
    },
    {
        id: 'updates',
        question: 'When will the next version of PlayCover be released?',
        answer: 'Join our Discord server to be notified about new updates; in the meantime check out the nightly builds on out GitHub.'
    },
    {
        id: 'banned',
        question: 'Will I get banned on Genshin for using this?',
        answer: 'While it is not confirmed that you won\'t be banned, tens of thousands of people have tried this and have not been banned.'
    },
    {
        id: 'app',
        question: 'Does specific app work on PlayCover?',
        answer: 'While PlayCover has been tested by many people, we haven\'t been able to test all applications; it\'s just not possible. Therefore, if it doesn\'t work, try disabling SIP.'
    },
    {
        id: 'captcha',
        question: 'The captcha on Genshin Impact won\'t appear! Why?',
        answer: 'Please make sure that you disabled SIP and activated your NVram Arguments. After you login you may enable SIP again which resets NVram too.'
    },
    {
        id: '3rd-party',
        question: 'How do I login with Google or 3rd party services?',
        answer: 'Switch the default browser of your Mac to Safari. This may be reverted upon login. Please note this does not apply to Genshin.'
    },
    {
        id: 'ipas',
        question: 'Where can I find decrypted IPAs for applications?',
        answer: <>You can find IPAs in the Decrypted IPAs channel (found in the PlayCover server under the #🌟・decrypted-ipas channel) or from trusted sources such as <a className="text-blue-400" href="https://armconverter.com/decryptedappstore" target="_blank" rel="noreferrer">https://armconverter.com/decryptedappstore</a>.</>
    },
    {
        id: 'source',
        question: 'Where can I find the Source Code?',
        answer: <>PlayCover is completely open-source and can be found under <a className="text-blue-400" href="https://github.com/PlayCover/PlayCover/releases" target="_blank" rel="noreferrer">https://github.com/PlayCover/PlayCover/releases</a>.</>
    },
    {
        id: 'discord',
        question: 'How do I join the Discord Server?',
        answer: <>The Discord Server can be joined at <a className="text-blue-400" href="https://discord.gg/playcover" target="_blank" rel="noreferrer">https://discord.gg/playcover</a> (or <a className="text-blue-400" href="https://discord.gg/VkFWFHyGdz" target="_blank" rel="noreferrer">https://discord.gg/VkFWFHyGdz</a> if the vanity URL ever gets revoked)</>
    }
]

export default class FAQ extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: undefined,
            search: (new URLSearchParams(window.location.search).get("search") || "").replaceAll("+", " "),
            hash: window.location.hash.replaceAll("#", "").split("?")[0].split("&")[0]
        }

        this.hashChange = this.hashChange.bind(this);
    }

    hashChange() {
        this.setState({hash: window.location.hash.replaceAll("#", "").split("?")[0].split("&")[0]});
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.hashChange);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.hashChange);
    }

    getText(obj) {
        if(typeof obj === 'string')
            return obj;
        const list = [];

        if(obj.props.children instanceof Array) {
            for (let i = 0; i < obj.props.children.length; i++) {
                const prop = obj.props.children[i];

                if (typeof prop === 'string') {
                    list.push(prop);
                } else {
                    list.push(prop.props.children);
                }
            }
        }

        return list.join("");
    }

    render() {
        return (
            <div className="max-w-7xl mx-auto pb-6 px-4 lg:px-6 xl:px-0 overflow-hidden">
                <Helmet>
                    <title>FAQ - PlayCover</title>
                </Helmet>
                <div className="text-center mt-8 mb-5">
                    <input value={this.state.search} onChange={(e) => this.setState({search: e.target.value})} className="md:w-3/5 py-3 px-6 text-lg outline-none focus:ring-1 focus:ring-pc-g font-itcavantgardestdmd dark:text-white bg-black/10 dark:bg-black/30 rounded-full" placeholder="Search..."/>
                </div>
                <div className="pt-10 space-y-4 md:space-y-6 mx-auto md:w-4/5">
                    {faqs.filter(f => this.state.search === "" || (this.getText(f.answer).toLowerCase().includes(this.state.search.toLowerCase()) || f.question.toLowerCase().includes(this.state.search.toLowerCase()))).map(faq => (
                        <Collapse key={faq.id} id={faq.id} title={faq.question} dropdown={faq.answer} defaultOpen={this.state.hash === faq.id}/>
                    ))}
                </div>
                <div className="md:ml-24 lg:ml-32 my-6">
                    <a href="https://github.com/PlayCover/PlayCover/wiki" target="_blank" rel="noreferrer">
                        <Button name="More questions?"/>
                    </a>
                </div>
            </div>
        )
    }
}