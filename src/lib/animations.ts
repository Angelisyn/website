/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Animation Library
 * -----------------------------------------------------------------------------
 *
 * Shared Framer Motion animation variants used throughout the website.
 */

import type { Transition, Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/* Transition                                                                  */
/* -------------------------------------------------------------------------- */

export const transition: Transition = {
    duration: 0.45,
    ease: [0.16, 1, 0.3, 1],
};

/* -------------------------------------------------------------------------- */
/* Fade                                                                        */
/* -------------------------------------------------------------------------- */

export const fade: Variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition,
    },

    exit: {
        opacity: 0,
        transition,
    },
};

/* -------------------------------------------------------------------------- */
/* Fade Up                                                                     */
/* -------------------------------------------------------------------------- */

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 32,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition,
    },

    exit: {
        opacity: 0,
        y: 32,
        transition,
    },
};

/* -------------------------------------------------------------------------- */
/* Fade Down                                                                   */
/* -------------------------------------------------------------------------- */

export const fadeDown: Variants = {
    hidden: {
        opacity: 0,
        y: -32,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition,
    },

    exit: {
        opacity: 0,
        y: -32,
        transition,
    },
};

/* -------------------------------------------------------------------------- */
/* Fade Left                                                                   */
/* -------------------------------------------------------------------------- */

export const fadeLeft: Variants = {
    hidden: {
        opacity: 0,
        x: 32,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition,
    },
};

/* -------------------------------------------------------------------------- */
/* Fade Right                                                                  */
/* -------------------------------------------------------------------------- */

export const fadeRight: Variants = {
    hidden: {
        opacity: 0,
        x: -32,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition,
    },
};

/* -------------------------------------------------------------------------- */
/* Scale                                                                       */
/* -------------------------------------------------------------------------- */

export const scale: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },

    visible: {
        opacity: 1,
        scale: 1,
        transition,
    },
};

/* -------------------------------------------------------------------------- */
/* Zoom                                                                        */
/* -------------------------------------------------------------------------- */

export const zoom: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.85,
    },

    visible: {
        opacity: 1,
        scale: 1,
        transition,
    },
};

/* -------------------------------------------------------------------------- */
/* Stagger Container                                                           */
/* -------------------------------------------------------------------------- */

export const staggerContainer: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

export const navbar: Variants = {
    hidden: {
        y: -100,
        opacity: 0,
    },

    visible: {
        y: 0,
        opacity: 1,
        transition,
    },
};

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const hero: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ...transition,
            delay: 0.2,
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Card Hover                                                                  */
/* -------------------------------------------------------------------------- */

export const cardHover = {
    whileHover: {
        y: -6,
        scale: 1.02,
        transition: {
            duration: 0.2,
        },
    },

    whileTap: {
        scale: 0.98,
    },
};

/* -------------------------------------------------------------------------- */
/* Button                                                                      */
/* -------------------------------------------------------------------------- */

export const buttonHover = {
    whileHover: {
        scale: 1.03,
    },

    whileTap: {
        scale: 0.97,
    },
};

/* -------------------------------------------------------------------------- */
/* Floating                                                                    */
/* -------------------------------------------------------------------------- */

export const floating = {
    animate: {
        y: [0, -8, 0],

        transition: {
            duration: 4,

            repeat: Infinity,

            ease: "easeInOut",
        },
    },
};

/* -------------------------------------------------------------------------- */
/* Rotation                                                                    */
/* -------------------------------------------------------------------------- */

export const rotate = {
    animate: {
        rotate: 360,

        transition: {
            duration: 30,

            repeat: Infinity,

            ease: "linear",
        },
    },
};