const delay = 0

const duration = 1;

export const fadeLeftVariant = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration,
    },
  },
};
export const fadeRightVariant = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration,
    },
  },
};
export const fadeTopVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration,
    },
  },
};
export const fadeBottomVariant = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration,
    },
  },
};
export const fadeInVariant = {
  hidden: { scale: .7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay,
      duration,
    },
  },
};

export const pageVariant = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      delay,
      duration,
    },
  },
}