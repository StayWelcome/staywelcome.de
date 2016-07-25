import Snap from 'snapsvg';

const WINGS_PAUSE_MIN_MILLIS = 2000;
const WINGS_PAUSE_MAX_MILLIS = 10000;

const WINGS_NUM_SUCCESSIVE_FLAPS_MIN = 1;
const WINGS_NUM_SUCCESSIVE_FLAPS_MAX = 5;

const FLAP_DURATION_MIN_MILLIS = 100;
const FLAP_DURATION_MAX_MILLIS = 200;

const identityMatrix = new Snap.Matrix();

const leftWingTransform = new Snap.Matrix();
leftWingTransform.scale(0.3, 0.8, 33.0184, 0);

const rightWingTransform = new Snap.Matrix();
rightWingTransform.scale(0.3, 0.8, 33.0184, 0);

const bodyTransform = new Snap.Matrix();
bodyTransform.scale(1.1);
bodyTransform.translate(-4, -1, 33.0184, 0);

const getRandomNumber = (from, to) => Math.random() * (to - from) + from;

function flapWings(leftWing, rightWing, body, flaps) {
    if (flaps <= 0) {
        const timeout = getRandomNumber(WINGS_PAUSE_MIN_MILLIS, WINGS_PAUSE_MAX_MILLIS);
        const flaps = getRandomNumber(WINGS_NUM_SUCCESSIVE_FLAPS_MIN, WINGS_NUM_SUCCESSIVE_FLAPS_MAX);

        window.setTimeout(
            flapWings.bind(null, leftWing, rightWing, body, flaps),
            timeout
        );
    } else {
        const time = getRandomNumber(FLAP_DURATION_MIN_MILLIS, FLAP_DURATION_MAX_MILLIS);

        leftWing.animate({ transform: leftWingTransform }, time, mina.easeout, openWings.bind(null, leftWing, rightWing, body, flaps, time));
        rightWing.animate( { transform: rightWingTransform }, time, mina.easeout );
        body.animate( { transform: bodyTransform }, time, mina.easeout );
    }
}

function openWings(leftWing, rightWing, body, flaps, time) {
    leftWing.animate( { transform: identityMatrix }, time / 2, mina.easein, flapWings.bind(null, leftWing, rightWing, body, --flaps));
    rightWing.animate( { transform: identityMatrix }, time / 2, mina.easein );
    body.animate( { transform: identityMatrix }, time / 2, mina.easein );
}

export default function (svgElement) {
    if (typeof svgElement !== 'undefined') {
        const logo = new Snap(svgElement);
        const wingLeft = logo.select('#wing-left');
        const wingRight = logo.select('#wing-right');
        const body = logo.select('#body');

        flapWings(wingLeft, wingRight, body, 0);
    }
};