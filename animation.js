import { animate } from "popmotion";
// const popmotion = require('popmotion')
const ball = document.querySelector(".ball");

animate({
    from: "0px",
    to: "100px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate(update) {
        ball.style.left = update;
    },

});