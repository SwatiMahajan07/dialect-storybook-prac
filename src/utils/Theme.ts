// Type definitions
type ColorScale = {
  100: string;
  90: string;
  80: string;
  70: string;
  60: string;
  50: string;
  40: string;
  30: string;
  20: string;
  10: string;
};

type ResponsiveValue = {
  desktop: string;
  tablet: string;
  mobile: string;
};

// Color utility function
const createColorScale = (baseColor: string): ColorScale => ({
  100: `${baseColor}FF`,
  90: `${baseColor}E6`,
  80: `${baseColor}CC`,
  70: `${baseColor}B3`,
  60: `${baseColor}99`,
  50: `${baseColor}80`,
  40: `${baseColor}66`,
  30: `${baseColor}4D`,
  20: `${baseColor}33`,
  10: `${baseColor}1A`,
});

export const theme = {
  colors: {
    primary: createColorScale("#E86C00"),
    secondary: createColorScale("#FDCC4A"),

    neutral: {
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        1: "#2C3A4B",
        2: "#394452",
        3: "#545D69",
        4: "#6D7580",
        5: "#858C94",
        6: "#A5ABB3",
        7: "#DADEE3",
        8: "#EBEEF2",
        9: "#F4F6F9",
      },
    },

    state: {
      error: "#DA1414",
      warning: "#B95000",
      info: "#2E5AAC",
      success: "#287D3C",
      background: {
        error: "#FEEFEF",
        warning: "#FFF4EC",
        info: "#EEF2FA",
        success: "#EDF9F0",
      },
    },

    action: {
      primary: {
        default: "#E86C00",
        hover: "#CC5F00",
        active: "#B25300",
        disabled: "#E86C0080",
        hover10: "#CC5F001A",
        active20: "#B2530033",
      },
      secondary: {
        default: "#19AB4F",
        hover: "#0C9E42",
        active: "#009236",
        disabled: "#19AB4F80",
        hover10: "#0C9E421A",
        active20: "#00923633",
      },
      neutral: {
        default: "#9098A1",
        hover: "#858C94",
        active: "#798087",
        disabled: "#9098A180",
        hover10: "#858C941A",
        active20: "#79808733",
      },
      inverted: "#FFFFFF",
      visited: "#5E38BA",
    },

    accent: {
      1: { base: "#ECB2F2", alpha: "#ECB2F247" },
      2: { base: "#2D6A6A", alpha: "#2D6A6A1A" },
      3: { base: "#E9AD8C", alpha: "#E9AD8C3B" },
      4: { base: "#221874", alpha: "#2218741A" },
      5: { base: "#7CC6D6", alpha: "#7CC6D640" },
      6: { base: "#E1604D", alpha: "#E1604D26" },
    },
  },

  breakpoints: {
    mobile: "0px",
    tablet: "576px",
    desktop: "1200px",
  },

  typography: {
    fontWeights: {
      light: 300,
      normal: 400,
      semibold: 600,
    },

    createResponsiveSize: (
      desktop: string,
      tablet: string,
      mobile: string
    ): ResponsiveValue => ({
      desktop,
      tablet,
      mobile,
    }),

    display: {
      large: {
        fontSize: { desktop: "69px", tablet: "51px", mobile: "41px" },
        lineHeight: { desktop: "76px", tablet: "56px", mobile: "48px" },
      },
      small: {
        fontSize: { desktop: "57px", tablet: "44px", mobile: "36px" },
        lineHeight: { desktop: "64px", tablet: "48px", mobile: "40px" },
      },
    },

    heading: {
      1: {
        fontSize: { desktop: "48px", tablet: "38px", mobile: "32px" },
        lineHeight: { desktop: "52px", tablet: "44px", mobile: "36px" },
      },
      2: {
        fontSize: { desktop: "40px", tablet: "33px", mobile: "29px" },
        lineHeight: { desktop: "44px", tablet: "36px", mobile: "32px" },
      },
      3: {
        fontSize: { desktop: "33px", tablet: "28px", mobile: "26px" },
        lineHeight: { desktop: "36px", tablet: "32px", mobile: "32px" },
      },
      4: {
        fontSize: { desktop: "28px", tablet: "24px", mobile: "23px" },
        lineHeight: { desktop: "32px", tablet: "28px", mobile: "24px" },
      },
      5: {
        fontSize: { desktop: "23px", tablet: "21px", mobile: "20px" },
        lineHeight: { desktop: "24px", tablet: "24px", mobile: "24px" },
      },
      6: {
        fontSize: { desktop: "19px", tablet: "18px", mobile: "18px" },
        lineHeight: { desktop: "20px", tablet: "20px", mobile: "20px" },
      },
    },

    paragraph: {
      large: {
        fontSize: { desktop: "23px", tablet: "21px", mobile: "20px" },
        lineHeight: { desktop: "36px", tablet: "32px", mobile: "28px" },
      },
      base: {
        fontSize: { desktop: "16px", tablet: "16px", mobile: "16px" },
        lineHeight: { desktop: "24px", tablet: "24px", mobile: "24px" },
      },
      small: {
        fontSize: { desktop: "13px", tablet: "13px", mobile: "13px" },
        lineHeight: { desktop: "20px", tablet: "20px", mobile: "20px" },
      },
      xSmall: {
        fontSize: { desktop: "11px", tablet: "11px", mobile: "11px" },
        lineHeight: { desktop: "16px", tablet: "16px", mobile: "16px" },
      },
      tiny: {
        fontSize: { desktop: "9px", tablet: "9px", mobile: "9px" },
        lineHeight: { desktop: "12px", tablet: "12px", mobile: "12px" },
      },
    },

    smallCaps: {
      large: {
        fontSize: { desktop: "14px", tablet: "14px", mobile: "14px" },
        lineHeight: { desktop: "20px", tablet: "20px", mobile: "20px" },
      },
    },

    action: {
      button: {
        large: { fontSize: "18px", lineHeight: "28px" },
        medium: { fontSize: "16px", lineHeight: "24px" },
        small: { fontSize: "14px", lineHeight: "20px" },
      },
      link: {
        large: { fontSize: "20px", lineHeight: "28px" },
        medium: { fontSize: "16px", lineHeight: "24px" },
        small: { fontSize: "14px", lineHeight: "20px" },
      },
    },
  },

  elevation: {
    tight: {
      1: "0px 1px 3px 0px rgba(0, 0, 0, 0.3)",
      2: "0px 1.25px 4px 0px rgba(0, 0, 0, 0.25)",
      3: "0px 2px 6px 0px rgba(0, 0, 0, 0.22)",
      4: "0px 2px 7px 0px rgba(0, 0, 0, 0.24)",
      5: "0px 3px 12px 0px rgba(0, 0, 0, 0.2)",
      6: "0px 3.5px 14px 0px rgba(0, 0, 0, 0.2)",
      7: "0px 7px 18px 0px rgba(0, 0, 0, 0.17)",
      8: "0px 12px 28px 0px rgba(0, 0, 0, 0.2)",
      9: "0px 13px 36px 0px rgba(0, 0, 0, 0.22)",
    },
    fluffy: {
      1: "0px 5px 15px 0px rgba(0, 0, 0, 0.15)",
      2: "0px 6.25px 20px 0px rgba(0, 0, 0, 0.125)",
      3: "0px 10px 30px 0px rgba(0, 0, 0, 0.11)",
      4: "0px 10px 35px 0px rgba(0, 0, 0, 0.12)",
      5: "0px 15px 60px 0px rgba(0, 0, 0, 0.12)",
      6: "0px 17.5px 70px 0px rgba(0, 0, 0, 0.12)",
      7: "0px 35px 90px 0px rgba(0, 0, 0, 0.135)",
    },
  },

  imageSizes: {
    small: 24,
    medium: 32,
    large: 40,
    xlarge: 48,
  },

  pixelSizes: {
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
    20: "20px",
    24: "24px",
    32: "32px",
    40: "40px",
    48: "48px",
  },
};
