import React, { Component } from 'react'
import Breadcrumb from '../elements/breadcrumb/index'

export default class ExampleBreadcrumb extends Component {
    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: ""},
            { pageTitle: "House Details", pageHref: ""},
        ];

        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-auto">
                        <Breadcrumb data={breadcrumb} />
                    </div>
                </div>
            </div>
        );

    }
}
