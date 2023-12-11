import { getLogedToken, getLogedUserId, getLogedUsername, isAuthenticated, login } from "./login";
import { logOut } from "./logout";

export const authenticationLogic = {
    login,
    getLogedToken,
    getLogedUserId,
    getLogedUsername,
    isAuthenticated,
    logOut
}