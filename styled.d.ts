import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHoverColor: string;
      primaryHoverColorRgb: string;
      primaryHoverBorderColor: string;
      linkColor: string;
      secondary: string;
    };

    body: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
      color: string;
      bgColor: string;
    };

    heading: {
      color: string;
      fontFamily: string;
      lineHeight: number;
    }
  }
}
