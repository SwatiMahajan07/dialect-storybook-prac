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

// export const colors = {
//   // Primary colors
//   primary100: '#E86C00FF',
//   primary90: '#E86C00E6',
//   primary80: '#E86C00CC',
//   primary70: '#E86C00B3',
//   primary60: '#E86C0099',
//   primary50: '#E86C0080',
//   primary40: '#E86C0066',
//   primary30: '#E86C004D',
//   primary20: '#E86C0033',
//   primary10: '#E86C001A',

//   // Secondary colors
//   secondary100: '#FDCC4AFF',
//   secondary90: '#FDCC4AE6',
//   secondary80: '#FDCC4ACC',
//   secondary70: '#FDCC4AB3',
//   secondary60: '#FDCC4A99',
//   secondary50: '#FDCC4A80',
//   secondary40: '#FDCC4A66',
//   secondary30: '#FDCC4A4D',
//   secondary20: '#FDCC4A33',
//   secondary10: '#FDCC4A1A',

//   // Neutral colors
//   gray1: '#2C3A4B',
//   gray2: '#394452',
//   gray3: '#545D69',
//   gray4: '#6D7580',
//   gray5: '#858C94',
//   gray6: '#A5ABB3',
//   gray7: '#DADEE3',
//   gray8: '#EBEEF2',
//   gray9: '#F4F6F9',

//   // State colors and state background colors
//   errorBg: '#FEEFEF',
//   warningBg: '#FFF4EC',
//   infoBg: '#EEF2FA',
//   successBg: '#EDF9F0',

//   // Action colors
//   actionPrimaryDisabled: '#E86C0080',
//   actionPrimaryHover10: '#CC5F001A',
//   actionPrimaryActive20: '#B2530033',

//   actionSecondaryDisabled: '#19AB4F80',
//   actionSecondaryHover10: '#0C9E421A',
//   actionSecondaryActive20: '#00923633',

//   actionNeutralDisabled: '#9098A180',
//   actionNeutralHover10: '#858C941A',
//   actionNeutralActive20: '#79808733',

//   // Accent colors
//   accent128: '#ECB2F247',
//   accent210: '#2D6A6A1A',
//   accent323: '#E9AD8C3B',
//   accent410: '#2218741A',
//   accent525: '#7CC6D640',
//   accent615: '#E1604D26',

// };

// export const breakpoints = {
//   mobile: '0px',
//   tablet: '576px',
//   desktop: '1200px',
// };

// export const fontSizes = {
//   // Text sizes
//   displayLargeDesktop: '69px',
//   displayLargeTablet: '51px',
//   displayLargeMobile: '41px',

//   displaySmallDesktop: '57px',
//   displaySmallTablet: '44px',
//   displaySmallMobile: '36px',

//   heading1Desktop: '48px',
//   heading1Tablet: '38px',
//   heading1Mobile: '32px',

//   heading2Desktop: '40px',
//   heading2Tablet: '33px',
//   heading2Mobile: '29px',

//   heading3Desktop: '33px',
//   heading3Tablet: '28px',
//   heading3Mobile: '26px',

//   heading4Desktop: '28px',
//   heading4Tablet: '24px',
//   heading4Mobile: '23px',

//   heading5Desktop: '23px',
//   heading5Tablet: '21px',
//   heading5Mobile: '20px',

//   heading6Desktop: '19px',
//   heading6Tablet: '18px',
//   heading6Mobile: '18px',

//   paragraphLargeDesktop: '23px',
//   paragraphLargeTablet: '21px',
//   paragraphLargeMobile: '20px',

//   paragraphBaseDesktop: '16px',
//   paragraphBaseTablet: '16px',
//   paragraphBaseMobile: '16px',

//   paragraphSmallDesktop: '13px',
//   paragraphSmallTablet: '13px',
//   paragraphSmallMobile: '13px',

//   paragraphXSmallDesktop: '11px',
//   paragraphXSmallTablet: '11px',
//   paragraphXSmallMobile: '11px',

//   paragraphTinyDesktop: '9px',
//   paragraphTinyTablet: '9px',
//   paragraphTinyMobile: '9px',

//   smallCapsDesktop: '14px',
//   smallCapsTablet: '14px',
//   smallCapsMobile: '14px',

//   actionButtonLarge: '18px',
//   actionButtonMedium: '16px',
//   actionButtonSmall: '14px',

//   actionLinkLarge: '20px',
//   actionLinkMedium: '16px',
//   actionLinkSmall: '14px',

// };

// export const lineHeights = {
//     displayLargeDesktop: '76px',
//     displayLargeTablet: '56px',
//     displayLargeMobile: '48px',

//     displaySmallDesktop: '64px',
//     displaySmallTablet: '48px',
//     displaySmallMobile: '40px',

//     heading1Desktop: '52px',
//     heading1Tablet: '44px',
//     heading1Mobile: '36px',

//     heading2Desktop: '44px',
//     heading2Tablet: '36px',
//     heading2Mobile: '32px',

//     heading3Desktop: '36px',
//     heading3Tablet: '32px',
//     heading3Mobile: '32px',

//     heading4Desktop: '32px',
//     heading4Tablet: '28px',
//     heading4Mobile: '24px',

//     heading5Desktop: '24px',
//     heading5Tablet: '24px',
//     heading5Mobile: '24px',

//     heading6Desktop: '20px',
//     heading6Tablet: '10px',
//     heading6Mobile: '10px',

//     paragraphLargeDesktop: '36px',
//     paragraphLargeTablet: '32px',
//     paragraphLargeMobile: '28px',

//     paragraphBaseDesktop: '24px',
//     paragraphBaseTablet: '24px',
//     paragraphBaseMobile: '24px',

//     paragraphSmallDesktop: '20px',
//     paragraphSmallTablet: '20px',
//     paragraphSmallMobile: '20px',

//     paragraphXSmallDesktop: '16px',
//     paragraphXSmallTablet: '16px',
//     paragraphXSmallMobile: '16px',

//     paragraphTinyDesktop: '12px',
//     paragraphTinyTablet: '12px',
//     paragraphTinyMobile: '12px',

//     smallCapsDesktop: '20px',
//     smallCapsTablet: '20px',
//     smallCapsMobile: '20px',

//     actionButtonLarge: '28px',
//     actionButtonMedium: '24px',
//     actionButtonSmall: '20px',

//     actionLinkLarge: '28px',
//     actionLinkMedium: '24px',
//     actionLinkSmall: '20px',
// }
// export const fontWeights = {
//   light: 300,
//   normal: 400,
//   semibold: 600,
// };
