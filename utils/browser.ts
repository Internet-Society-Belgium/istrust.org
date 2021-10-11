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
