import React, { useEffect } from "react";
import LivecycleSDK from "@livecycle/sdk";

import { LayoutProps } from "./Layout";

const Layout: React.FunctionComponent<LayoutProps> = ({
    children,
}): JSX.Element => {
    useEffect(() => {
        LivecycleSDK.init();
    }, []);
    return <div className="layout">{children}</div>;
};

export { Layout };
