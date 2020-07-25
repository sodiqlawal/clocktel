import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from './types';

export default function ClockIcon(props: IconProps) {
  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="26px" height="23px" viewBox="0 0 26 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Shape</title>
    <defs>
        <rect id="path-1" x="0" y="0" width="414" height="896" rx="42"></rect>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="All-Screens" transform="translate(-374.000000, -958.000000)">
            <g id="Group-12" transform="translate(189.000000, 163.000000)">
                <g id="Oval">
                    <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                    </mask>
                    <g id="Mask">
                        <use fill="#ECF1FD" xlink:href="#path-1"></use>
                        <use fill="#F7F9FC" xlink:href="#path-1"></use>
                    </g>
                </g>
                <g id="Group-9" transform="translate(0.000000, 770.000000)">
                    <rect id="Rectangle" fill="#F7F9FC" x="0" y="0" width="414" height="77"></rect>
                    <g id="Group" transform="translate(41.000000, 23.000000)" stroke="${props.fillColor}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.86199977">
                        <path d="M153.155722,3.95454545 L168,3.95454545 M153.155722,13.5 L168,13.5 M153.155722,23.0454545 L168,23.0454545 M145.733583,3.95454545 L146.197467,3.95454545 M145.733583,13.5 L146.197467,13.5 M145.733583,23.0454545 L146.197467,23.0454545" id="Shape"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
  
`;

  return <SvgCss xml={xml} width="80%" height="80%" {...props} />;
}
