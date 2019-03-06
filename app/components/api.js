const apiAddress = "https://audio.tricypolitain.com/api/";

export function apiCall(arg ,data={}) {

  let postData = Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&');
  return fetch(apiAddress + arg, {
    method: "POST",
    body: postData,
      headers:  { "Content-Type": "application/x-www-form-urlencoded" }
  });
}
export const address = apiAddress;

export function langList() {
  return [
    { id: "lv", title: "latvian" },
    { id: "ru", title: "russian" },
    { id: "fr", title: "frechn" },
    { id: "en", title: "english" }  ];
}
