import { Component } from 'react';

import { Helmet } from 'react-helmet';

export default class PageNotFound extends Component {

    render() {
        return (
            <div className="flex flex-col items-center justify-center max-w-[1350px] h-[calc(100vh_-_96px)] mx-auto py-10">
                <Helmet>
                    <title>404 - PlayCover</title>
                </Helmet>
                <div className="text-center text-[150px] leading-[160px] font-semibold font-lufga">
                    404!
                </div>
                <div className="text-center font-itcavantgardestdmd text-xl md:pb-10">
                    Sorry, but the page you are looking for does not exist.
                </div>
            </div>
        )
    }
}