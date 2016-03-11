export default function greet(req) {
  let userName = req.body.userName || 'stranger'

  return Promise.resolve({
    message: 'Hello ' + userName
  })
}
