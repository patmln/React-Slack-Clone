export const getAuth = res => {
  const auth = {}
  for (const [key, value] of res.headers.entries()) {
    switch (key) {
      case 'access-token':
        auth['access-token'] = value
        break
      case 'client':
        auth['client'] = value
        break
      case 'expiry':
        auth['expiry'] = value
        break
      case 'uid':
        auth['uid'] = value
        break
    }
  }
  return auth
}
