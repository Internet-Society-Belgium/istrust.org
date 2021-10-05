export type Browser = 'Firefox' | 'Chrome' | 'Edge' | 'Opera'

export function getBrowser(userAgent: string): Browser | undefined {
  if (userAgent.includes('Firefox')) return 'Firefox'

  if (userAgent.includes('Chrome')) {
    if (userAgent.indexOf('Edg')) return 'Edge'
    return 'Chrome'
  }

  if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera'
}
