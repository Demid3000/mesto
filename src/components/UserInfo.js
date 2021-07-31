import { nameInput, jobInput } from "../utils/constants";

export default class UserInfo {
  constructor(profileInfoName, profileInfoText) {
    this._profileInfoName = profileInfoName;
    this._profileInfoText = profileInfoText;
  }
  getUserInfo() {
    return{
      nameInput: this._profileInfoName.textContent,
      jobInput: this._profileInfoText.textContent
    };
  }
  setUserInfo() {
    this._profileInfoName.textContent = nameInput.value;
    this._profileInfoText.textContent = jobInput.value;
  }
}