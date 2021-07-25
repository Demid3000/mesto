import { nameInput, jobInput } from "../utils/constants";

export default class UserInfo {
  constructor(profileTitle, profileSubTitle) {
    this._profileTitle = profileTitle;
    this._profileSubTitle = profileSubTitle;
  }
  getUserInfo() {
    nameInput.value = this._profileTitle.textContent;
    jobInput.value = this._profileSubTitle.textContent;
  }
  setUserInfo() {
    this._profileTitle.textContent = nameInput.value;
    this._profileSubTitle.textContent = jobInput.value;
  }
}