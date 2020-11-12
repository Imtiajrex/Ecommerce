import React from "react";
import TopProducts from "./contents/TopProducts";
import TextContent from "./contents/TextContent";
import Recommended from "./contents/Recommended";
import Featured from "./contents/Featured";
function Index() {
    return (
        <div className="contents">
            <TopProducts />
            <Featured />
            <Recommended />
            <TextContent />
        </div>
    );
}

export default Index;
