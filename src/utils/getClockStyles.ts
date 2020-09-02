const dayLightStyles = {
  firstClockStyle: {
    lightShadow: {
      blur: 30,
      spread: 10,
      offsetX: -10,
      offsetY: -10,
      opacity: 0.7
    },
    darkShadow: {
      blur: 30,
      spread: 0,
      offsetX: 20,
      offsetY: 10,
      opacity: 0.2
    }
  },

  secondClockStyle: {
    lightShadow: {
      blur: 0,
      spread: 0,
      offsetX: 0,
      offsetY: 0,
      opacity: 0.3
    },
    darkShadow: {
      blur: 20,
      spread: 1,
      offsetX: 7,
      offsetY: 5,
      opacity: 0.2
    }
  }
};

const nightStyles = {
  firstClockStyle: {
    lightShadow: {
      blur: 30,
      spread: 10,
      offsetX: 10,
      offsetY: -5,
      opacity: 0.7
    },
    darkShadow: {
      blur: 20,
      spread: 5,
      offsetX: -10,
      offsetY: 0,
      opacity: 0.2
    }
  },

  secondClockStyle: {
    lightShadow: {
      blur: 0,
      spread: 0,
      offsetX: 0,
      offsetY: 0,
      opacity: 0.3
    },
    darkShadow: {
      blur: 20,
      spread: 1,
      offsetX: 7,
      offsetY: 5,
      opacity: 0.2
    }
  }
};

export default function getClockStyles(dayLightSaving: boolean) {
  return dayLightSaving ? dayLightStyles : nightStyles;
}
