import { createRipples } from "react-ripples";
export const GreenRipple = createRipples({
    color: "#15686b",
    during: 1800,
  });
  const easing =[0.6,-.05,0.01,  0.99]
export const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing,
      type:"spring",
      stiffness:100
    },
  },
};
export const fadeInRight = {
  initial: {
    x: 30,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing,
      type:"spring",
      stiffness:100
    },
  },
};
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
export const fadeOut = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
};
export const animationVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
export const stagger = {
  animate :{
    transition:{
      staggerChildren:0.2
    }
  },
  initial: {
  },
}