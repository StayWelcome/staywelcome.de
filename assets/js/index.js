import animateLogo from './animation';
import {evaluateStickyHeader} from './header';
import {startToListenForScroll} from './scrolling';

window.addEventListener('load', e => {

    evaluateStickyHeader();

    const logoObject = document.getElementById('logoObject');

    if (typeof logoObject !== 'undefined') {
        const svgDocument = logoObject.contentDocument;

        if (svgDocument !== 'undefined') {
            const svgElement = svgDocument.getElementById('staywelcome-logo');

            animateLogo(svgElement);
        }
    }
});

startToListenForScroll([evaluateStickyHeader], 100);
