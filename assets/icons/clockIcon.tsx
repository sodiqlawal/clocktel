import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from './types';

export default function ClockIcon(props: IconProps) {
  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="35px" height="33px" viewBox="0 0 35 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>clock</title>
    <defs>
        <rect id="path-1" x="0" y="0" width="414" height="896" rx="42"></rect>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="All-Screens" transform="translate(-239.000000, -954.000000)">
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
                    <g id="Group" transform="translate(41.000000, 23.000000)" stroke="${props.fillColor}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.37599992">
                        <g id="clock" transform="translate(11.000000, 0.000000)">
                            <circle id="Oval" cx="15.5" cy="15.05" r="13.95"></circle>
                            <polyline id="Path" points="15.5 9.3 15.5 17.05 20.15 21.7"></polyline>
                            <path d="M26.35,-1.15463195e-14 L31,4.65 M0,4.65 L4.65,-1.15463195e-14" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
  
`;

  return <SvgCss xml={xml} width="100%" height="100%" {...props} />;
}
