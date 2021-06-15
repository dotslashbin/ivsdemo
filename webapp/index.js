(function () {
	const email = document.getElementById('email_fld')
	const name = document.getElementById('name_fld')

	const notification = document.getElementById('notification')

	ajax = new XMLHttpRequest()

	ajax.onload = (e) => {
		var xhr = e.target

		apiResponse = JSON.parse(xhr.responseText)
		if(apiResponse.status == 422) {
			notification.innerHTML = apiResponse.error
			notification.style.color = 'red'
		} else if(apiResponse.status === 200) {
			notification.innerHTML = apiResponse.message
			notification.style.color = 'green'
			
			document.getElementById('code-output').innerHTML = xhr.responseText

			if(apiResponse.data.id) {
				window.localStorage.setItem('token', apiResponse.data.authentication.token)
				window.localStorage.setItem('id', apiResponse.data.id)
			}	else if(apiResponse.data.length > 0) {
				const listItems = apiResponse.data.forEach(record => {

					var  li = document.createElement('li')
					li.className = 'list-item'
					li.id = 'member-' + record.id
					li.innerHTML = `<a href="#" style="pointer: cursor">${record.name}</a>`
					li.addEventListener('click', () => {
						const container = li.id.split('-')
						fetchOne(container[1])
					})

					document.getElementById('member-list-container').appendChild(li)

				})
			}
		}
	}

	const registerForm = document.getElementById('signup_form')
	registerForm.addEventListener('submit', (e) => {
		e.preventDefault()
		if(email && name) {
			ajax.open('POST', `http://10.6.0.7:3000/Sign-up`, true)
			ajax.responseType = 'text';
			ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			ajax.setRequestHeader('Content-Type', 'application/json')

			ajax.send(JSON.stringify({
				name: name.value, 
				email: email.value 
			}))
		}
	})

	const showAllButton = document.getElementById('showAll_btn')
	showAllButton.addEventListener('click', (e) => {
		e.preventDefault()
		ajax.open('GET', `http://10.6.0.7:3000/members`, true)
		ajax.responseType = 'text'
		ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		ajax.setRequestHeader(`Authorization`, `Bearer ${window.localStorage.getItem('token')}`)
		ajax.send()
	})

	
	const fetchOne = (id) => {
		ajax.open('GET', `http://10.6.0.7:3000/members/${id}`, true)
		ajax.responseType = 'text'
		ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		ajax.setRequestHeader(`Authorization`, `Bearer ${window.localStorage.getItem('token')}`)
		ajax.send()
	}
}());