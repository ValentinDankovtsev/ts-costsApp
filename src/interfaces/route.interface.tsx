import React, { FunctionComponent } from "react";

export default interface IRoute {
    path: string;
    exact: boolean;
    component: Function;
    name: string; // Used to update page infon and title. 
    protected: boolean; // This will defines if the route is proteted or not
}