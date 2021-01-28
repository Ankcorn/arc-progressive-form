const arc = require('@architect/functions');

exports.handler = async function http (req) {
  const payload = arc.http.helpers.bodyParser(req);
  console.log(payload);
  const { accounts } = await arc.tables()
  await accounts.put({ email: payload.email, created: Date.now() })
  return {
    statusCode: 302,
    headers: {
      location: `/success?email=${payload.email}`
    }
  }
}
