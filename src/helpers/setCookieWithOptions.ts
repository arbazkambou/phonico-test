import Cookies from "js-cookie";

interface SetCookieInputTypes {
  key: string;
  value: string;
  options: {
    expires: number;
    secure: boolean | undefined;
  };
}
export function setCookieWithOptions({
  key,
  value,
  options,
}: SetCookieInputTypes) {
  Cookies.set(key, value, options);
}
