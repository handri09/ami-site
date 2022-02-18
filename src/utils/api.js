export function addAction (action) {
	return fetch('https://ugbdxf.deta.dev',{
		method: 'POST',
		headers: {
    		'X-Deepseek-Api-Key': 'a0bbqsrh_c2bH4it9HCzFC5r6GPbqRtq2EXrR46Jx',
    		'Content-Type': 'application/json',
    	}, 
    	body: JSON.stringify({
    		name: action.name,
    		picture: action.picture,
        story: action.story,
    	})
	})
		.then(action => action.json())
		.then(action => console.log(action))
}

export function getActions () {
	return fetch('https://ugbdxf.deta.dev',{
		method: 'GET',
		headers: {
    		'X-Deepseek-Api-Key': 'a0bbqsrh_c2bH4it9HCzFC5r6GPbqRtq2EXrR46Jx',
    		'Content-Type': 'application/json',
    	}
	})
		.then(actions => actions.json())
		.then(actions => actions[0])
    .then(actions => actions)
}

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}