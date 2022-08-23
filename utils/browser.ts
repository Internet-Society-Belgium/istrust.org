export const browsers = [
  {
    name: 'Chrome',
    icon: 'chrome.svg',
    link: 'https://chrome.google.com/webstore/detail/istrust/kinlknncggaihnhdcalijdmpbhbflalm',
    reviews:
      'https://chrome.google.com/webstore/detail/istrust/kinlknncggaihnhdcalijdmpbhbflalm/reviews',
  },
  {
    name: 'Firefox',
    icon: 'firefox.svg',
    link: 'https://addons.mozilla.org/firefox/addon/istrust/?utm_source=istrust.org',
    reviews: 'https://addons.mozilla.org/firefox/addon/istrust/reviews/',
  },
  {
    name: 'Edge',
    icon: 'edge.svg',
    link: 'https://microsoftedge.microsoft.com/addons/detail/cphlaknpjmlpfaejjabjlgnekfkebeoo',
    reviews:
      'https://microsoftedge.microsoft.com/addons/detail/cphlaknpjmlpfaejjabjlgnekfkebeoo',
  },
]

export type Browser =
  | 'Chrome'
  | 'Safari'
  | 'Firefox'
  | 'Edge'
  | 'Opera'
  | 'Vivaldi'
  | 'Brave'

export function getBrowser(userAgent: string): Browser | undefined {
  if (userAgent.includes('Firefox')) return 'Firefox'

  if (userAgent.includes('Chrome') || userAgent.includes('Chromium')) {
    if (userAgent.includes('Edg')) return 'Edge'
    if (userAgent.includes('Brave')) return 'Brave'
    if (userAgent.includes('Vivaldi')) return 'Brave'

    return 'Chrome'
  }

  if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera'
}
