const got = require('got')

got('https://api.github.com/repos/milano-js/good-party-2017/issues', {
  json: true,
  headers: {
		accept: 'application/vnd.github.squirrel-girl-preview'
	}
})
.then(res => {
  const issues = res.body
  const reactions = issues
                      .map(issue => {
                        return {
                          title: issue.title,
                          url: issue.url,
                          reactions: issue.reactions['+1']
                        }
                      })
                      .sort((a, b) => b.reactions - a.reactions)

  console.log(reactions)
})