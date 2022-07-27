import { Component } from 'react';

import { shuffle } from '../utils/utils';
import { NavLink } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import Button from '../components/ui/Button';
import clsx from 'clsx';

const links = [
        {
            name: 'Lineage 2M',
            link: 'https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/94/07/6a/94076a2c-ad81-c118-9b77-bd79054017d5/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp',
            classes: 'rounded-xl'
        },
        {
            name: 'FINAL FANTASY BRAVE EXVIUS',
            link: 'https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/ca/16/86/ca1686a8-f7e5-c5ae-b109-5b7bef8ae61e/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp',
            classes: 'rounded-xl'
        },
        {
            name: 'Apex Legends Mobile',
            link: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/b0/ac/a6/b0aca646-5e61-a362-46a7-c0e21f76ceb3/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp',
            classes: 'rounded-xl'
        },
        {
            name: 'Cookie Run Kingdom',
            link: 'https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/0b/1b/34/0b1b341e-b897-30a1-f932-8b7df1d09f2b/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
            classes: 'rounded-xl'
        },
        {
            name: 'Princess Connect! Re: Dive',
            link: 'https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/83/80/f3/8380f3cd-4cb5-c33f-49be-3c1dcfc4c4c4/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
            classes: 'rounded-xl'
        },
        {
            name: 'Honkai Impact 3rd',
            link: 'https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/e5/78/4c/e5784c43-a932-5718-41e5-31f88d652de3/AppIcon-1x_U007emarketing-0-9-0-0-85-220.png/460x0w.webp',
            classes: 'rounded-xl'
        },
        {
            name: 'PUBG Mobile',
            link: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/c7/4a/80/c74a801f-8301-13ee-90a9-0fcdb982673a/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-8.png/460x0w.webp',
            classes: 'rounded-[21%]'
        },
        {
            name: 'Call of Duty Mobile',
            link: 'https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/f7/db/58/f7db5888-a695-719a-3f73-c587a0c05c8f/AppIcon-1x_U007emarketing-0-9-0-85-220.png/460x0w.webp',
            classes: 'rounded-xl'
        },
        {
            name: 'Genshin Impact',
            link: 'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/fa/76/14/fa761407-4ba2-396e-630e-0dd0b5ffeeee/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/460x0w.webp',
            classes: 'rounded-xl'
        }
];


export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            links: shuffle(links)
        }
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Home - PlayCover</title>
                </Helmet>
                <section className="flex flex-wrap items-center justify-center h-auto py-[60px] px-[40px] h-auto lg:h-[90vh]">
                    <div className="items-center justify-center items-start mx-auto max-w-[1250px]">
                        <div className="flex flex-col lg:flex-row justify-center relative">
                            <div className="pb-10 xxs:pb-8 sm:pb-0">
                                <h1 className="font-lufga text-4xl sm:text-5xl lg:text-6xl font-semibold lg:w-3/5">
                                    Run <span className="text-[#7587F5]">iOS</span> games and apps <span className="text-[#66D6D7]">natively</span> on your Mac.
                                </h1>
                                <h1 className="pt-4 text-gray-700 dark:text-gray-300 font-lufga text-lg sm:text-xl">
                                    Apple took this feature away, so we brought it back!
                                </h1>
                                <div className="mt-10">
                                    <NavLink to="/faq">
                                        <Button name="Learn More" size="lg"/>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="relative mx-auto lg:absolute flex-[0_0_auto] max-w-[310px] xxs:max-w-[460px] w-[469px] left-auto lg:top-[-55%] h-[535px] right-[0] bottom-0">
                                <img className={clsx("shadow-2xl z-50 h-[82px] w-[82px] xxs:h-[100px] xxs:w-[100px] absolute left-[22px] top-[6%] xxs:left-[66px] xxs:top-[4%] right-auto bottom-auto animate-hover-short", links[0].classes || "")} src={links[0].link} alt={links[0].name} title={links[0].name}/>
                                <img className={clsx("shadow-2xl z-50 h-[100px] w-[100px] xxs:h-[144px] xxs:w-[144px] absolute left-auto top-0 right-[60px] xxs:right-[49px] bottom-auto animate-hover-medium", links[1].classes || "")} src={links[1].link} alt={links[1].name} title={links[1].name}/>
                                <img className={clsx("shadow-2xl z-50 h-[90px] w-[90px] xxs:h-[124px] xxs:w-[124x] absolute left-auto xxs:w-auto top-[28%] xxs:top-[32%] right-[-3%] bottom-0 animate-hover-long", links[2].classes || "")} src={links[2].link} alt={links[2].name} title={links[2].name}/>
                                <img className={clsx("shadow-2xl z-50 h-[125px] w-[125px] xxs:h-[182px] xxs:w-[182px] absolute left-[-2%] xxs:left-0 top-[27%] xxs:top-[31%] right-auto bottom-[29%] animate-hover-medium", links[3].classes || "")} src={links[3].link} alt={links[3].name} title={links[3].name}/>
                                <img className={clsx("shadow-2xl z-50 h-[70px] w-[70px] xxs:h-[90px] xxs:w-[90px] absolute left-[8%] xxs:left-[15%] top-auto right-auto bottom-[31%] xxs:bottom-[10%] animate-hover-short", links[4].classes || "")} src={links[4].link} alt={links[4].name} title={links[4].name}/>
                                <img className={clsx("shadow-2xl z-50 h-[85px] w-[85px] xxs:h-[110px] xxs:w-[110px] absolute left-[41%] xxs:left-[44%] top-auto right-auto bottom-[40%] xxs:bottom-[23%] animate-hover-long", links[5].classes || "")} src={links[5].link} alt={links[5].name} title={links[5].name}/>
                                <img className={clsx("shadow-2xl z-50 h-[75px] w-[75px] xxs:h-[84px] xxs:w-[84px] absolute left-auto top-auto right-0 xxs:right-[6%] bottom-[34%] xxs:bottom-[8%] animate-hover-short", links[6].classes || "")} src={links[6].link} alt={links[6].name} title={links[6].name}/>
                                <img className={clsx("shadow-2xl z-50 h-[100px] w-[100px] absolute left-[34%] xxs:left-[42%] top-auto right-0 bottom-[18%] xxs:bottom-0 animate-hover-medium", links[7].classes || "")} src={links[7].link} alt={links[7].name} title={links[7].name}/>
                                <img className={clsx("shadow-2xl z-50 h-[65px] w-[65px] xxs:h-[75px] xxs:w-[75px] absolute left-auto top-[25%] xxs:top-[35%] right-[34%] bottom-[33%] animate-hover-long", links[8].classes || "")} src={links[8].link} alt={links[8].name} title={links[8].name}/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}