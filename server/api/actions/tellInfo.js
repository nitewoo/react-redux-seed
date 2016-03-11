export default function tellInfo(req) {
  const locationInfo = req.query.location || '[unknown place]'

  return Promise.resolve({
    message: 'Your current location is ' + locationInfo
  })
}
