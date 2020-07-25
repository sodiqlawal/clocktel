import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from './types';

export default function ClockIcon(props: IconProps) {
  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>setting</title>
    <defs>
        <rect id="path-1" x="0" y="0" width="414" height="896" rx="42"></rect>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="All-Screens" transform="translate(-500.000000, -954.000000)">
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
                        <g id="setting" transform="translate(272.331521, 0.000000)">
                            <path d="M2.94719415,15.6358879 C2.90983337,15.2623288 2.89070168,14.8833987 2.89070168,14.5 C2.89070168,14.1166013 2.90983337,13.7376712 2.94719415,13.364112 L8.66862138e-13,10.0405263 L3.22222222,4.4594737 L7.57415544,5.35003123 C8.18689311,4.90766066 8.84584037,4.52532453 9.54237582,4.21164425 L10.9462572,0 L17.3907017,0 L18.7945831,4.21164425 C19.4911185,4.52532453 20.1500659,4.90766066 20.7628035,5.35003123 L25.1147366,4.4594737 L28.3369589,10.0405263 L25.3897648,13.364112 C25.4271256,13.7376712 25.4462572,14.1166013 25.4462572,14.5 C25.4462572,14.8833987 25.4271256,15.2623288 25.3897648,15.6358879 L28.3369589,18.9594737 L25.1147366,24.5405263 L20.7628035,23.6499688 C20.1500659,24.0923393 19.4911185,24.4746755 18.7945831,24.7883558 L17.3907017,29 L10.9462572,29 L9.54237582,24.7883558 C8.84584037,24.4746755 8.18689311,24.0923393 7.57415544,23.6499688 L3.22222222,24.5405263 L8.66862138e-13,18.9594737 L2.94719415,15.6358879 Z" id="Path"></path>
                            <circle id="Oval" cx="14.1684795" cy="14.5" r="1.61111111"></circle>
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
