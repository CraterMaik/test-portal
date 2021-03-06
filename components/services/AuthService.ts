import CookieService from "./CookieService";
const expiresAt = 60 * 360;

class AuthService {
  handleLoginSuccess(response, remember){
    if(!remember) {
      const options = { path: "/", secure: true };
      CookieService.set("access_token", response.access_token, options);
      return true;
      
    }
    
    let date = new Date();
    date.setTime(date.getTime() + expiresAt * 60 * 1000);
    const options = { path: "/", secure: true };
    CookieService.set("access_token", response.access_token, options);
    return true;

  }
}

export default new AuthService();