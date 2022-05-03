import React from 'react';
export interface ModuleLinkI{
    text: string;
    path: string;
    icon?: React.Component,
    needAuth?: string
}