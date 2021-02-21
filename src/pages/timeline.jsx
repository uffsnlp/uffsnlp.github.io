import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

import { Timeline, TimelineItem } from "../components/Timeline";

class TimelinePage extends Component {
    render () {
        return (
            <MainLayout>
                <Navbar />

                <div class="p-5"></div>

                <h1>Cronograma do Grupo de Estudos</h1>

                <div className="d-sm-block d-none">
                    <Timeline>
                        {/* <TimelineItem
                            title="Great Title"
                            description="Sint ullamco aliquip est et ut aute laborum nostrud qui est non."
                        />

                        <TimelineItem
                            title="Great Title"
                            description="Sint ullamco aliquip est et ut aute laborum nostrud qui est non."
                        />

                        <TimelineItem
                            title="Great Title"
                            description="Sint ullamco aliquip est et ut aute laborum nostrud qui est non."
                        />

                        <TimelineItem
                            title="Great Title"
                            description="Sint ullamco aliquip est et ut aute laborum nostrud qui est non."
                        /> */}
                    </Timeline>
                </div>
            </MainLayout>
        );
    }
}

export default TimelinePage;