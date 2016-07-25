import languageSwitch from './language-switch';
import animateLogo from './animation';

languageSwitch();

window.addEventListener('load', e => {

    const logoObject = document.getElementById('logoObject');
    if (typeof logoObject !== 'undefined') {
        const svgDocument = logoObject.contentDocument;
        if (svgDocument !== 'undefined') {
            const svgElement = svgDocument.getElementById('staywelcome-logo');
            animateLogo(svgElement);
        }
    }
});