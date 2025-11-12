import Cookies from "universal-cookie";
import moment from "moment";

const cookies = new Cookies();

class SessionProvider {
  static cookiename = "__appid";
  static appid = "appid";

  static async start(token: string, menu = null) {
    this.destroy();
    this.set(token);
    if (menu) {
      this.setMenu(menu);
    }
  }

  static destroy() {
    cookies.remove(`${this.cookiename}__menu`);
    cookies.remove(this.cookiename);
  }

  static setCookie(key: string, value: string, options = { path: "/" }) {
    cookies.set(key, value, options);
    return true;
  }

  static getCookie(key: string) {
    return cookies.get(key);
  }

  static removeCookie(key: string) {
    cookies.remove(key);
    return true;
  }

  static set(jwt: string) {
    this.setCookie(this.cookiename, jwt);
  }

  static setMenu(menu: any) {
    this.setCookie(`${this.cookiename}__menu`, JSON.stringify(menu));
  }

  static setMode(mode: string) {
    this.setCookie(`${this.cookiename}__mode`, mode);
  }

  static get() {
    const jwt: string = this.getCookie(this.cookiename);
    let session: any = null;
    try {
      if (jwt) {
        const base64Url = jwt.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        session = JSON.parse(window.atob(base64));
      }
    } catch (error) {
      console.log(error);
    }
    return session;
  }

  static getMenu() {
    const menu = this.getCookie(`${this.cookiename}__menu`);
    return menu ? menu : [];
  }

  static getMode() {
    const mode: string = this.getCookie(`${this.cookiename}__mode`);
    return mode || "agent";
  }

  static isValid() {
    const session: any = this.get();
    if (session?.time) {
      const expiry = new Date(session.time);
      expiry.setHours(expiry.getHours() + parseInt(session.expiresIn));
      return moment(expiry).isSame() || moment(expiry).isAfter();
    }
    return false;
  }

  // return the token from the session storage
  static getToken() {
    return this.getCookie(this.cookiename) || null;
  }
}

export default SessionProvider;
