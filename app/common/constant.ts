let baseURL = 'https://www.omdbapi.com/';
let API_Key="a44a4bf0"
const AsyncStorageKey = {
  Lang: '@langApp',
  token: '@token',
  user: '@user',
};

const GOOGLE_PLACES_API_KEY = '';

enum PermissionValue {
  BLOCKED = 'blocked',
  LIMITED = 'limited',
  GRANTED = 'granted',
  DENIED = 'denied',
  UNAVALABLE = 'unavailable',
}

export {AsyncStorageKey, baseURL, GOOGLE_PLACES_API_KEY, API_Key,PermissionValue};
