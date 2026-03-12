export const setClientCookie = async (cKey: string, cValue: string) => {
  let expires = "max-age=" + 24 * 60 * 60;
  document.cookie = cKey + "=" + cValue + ";" + expires + ";path=/";
};

export const eraseCookie = (key: string) => {
  document.cookie = key + "=; max-age=0";
};
