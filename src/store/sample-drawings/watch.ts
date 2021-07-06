const topStrap = [
  205, 206, 207, 208, 209, 210, 237, 238, 239, 240, 241, 242, 269, 270, 271,
  272, 273, 274, 301, 302, 303, 304, 305, 306,
];
const bottomStrap = [
  589, 590, 591, 592, 593, 594, 621, 622, 623, 624, 625, 626, 653, 654, 655,
  656, 657, 658, 685, 686, 687, 688, 689, 690,
];
const leftFace = [332, 363, 395, 427, 459, 491, 523, 556];
const rightFace = [339, 372, 404, 436, 468, 500, 532, 563];
const googleyEyes = [397, 434];
const hourHand = [462, 463, 464];
const minuteHand = [368, 400, 432];
const crown = [437, 469];

export const watch = {
  pixels: [
    ...topStrap,
    ...bottomStrap,
    ...leftFace,
    ...rightFace,
    ...googleyEyes,
    ...hourHand,
    ...minuteHand,
    ...crown,
  ],
};
