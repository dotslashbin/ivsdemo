(function () {
	// var retrieve = document.getElementById('retrieve'),
	// 		results = document.getElementById('results'),
	// 		toReadyStateDescription = function (state) {
	// 				switch (state) {
	// 				case 0:
	// 						return 'UNSENT';
	// 				case 1:
	// 						return 'OPENED';
	// 				case 2:
	// 						return 'HEADERS_RECEIVED';
	// 				case 3:
	// 						return 'LOADING';
	// 				case 4:
	// 						return 'DONE';
	// 				default:
	// 						return '';
	// 				}
	// 		};
	// retrieve.addEventListener('click', function (e) {
	// 		var bustCache = '?' + new Date().getTime(),
	// 				oReq = new XMLHttpRequest();
	// 		oReq.onload = function (e) {
	// 				var xhr = e.target;
	// 				console.log('Inside the onload event');
	// 				if (xhr.responseType === 'json') {
	// 						results.innerHTML = xhr.response.message;
	// 				} else {
	// 						results.innerHTML = JSON.parse(xhr.responseText).message;
	// 				}
	// 		};
	// 		oReq.onreadystatechange = function () {
	// 				console.log('Inside the onreadystatechange event with readyState: ' + toReadyStateDescription(oReq.readyState));
	// 		};
	// 		oReq.open('GET', e.target.dataset.url + bustCache, true);
	// 		oReq.responseType = 'json';
	// 		oReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	// 		oReq.setRequestHeader('x-vanillaAjaxWithoutjQuery-version', '1.0');
	// 		oReq.send();
	// });

	const email = document.getElementById('email_fld')
	const name = document.getElementById('name_fld')
	const notification = document.getElementById('notification')
	const registerForm = document.getElementById('signup_form')

	ajax = new XMLHttpRequest()

	ajax.onload = (e) => {
		var xhr = e.target

		apiResponse = JSON.parse(xhr.responseText)
		if(apiResponse.status == 422) {
			notification.innerHTML = apiResponse.error
			notification.style.color = 'red'
		}

		if(apiResponse.status === 200) {
			notification.innerHTML = apiResponse.message
			notification.style.color = 'green'
		}
	}

	
	registerForm.addEventListener('submit', (e) => {

		console.log('Submitting form ...')

		e.preventDefault()

		if(email && name) {

			ajax.open('POST', "http://localhost:3000/Sign-up", true)

			ajax.responseType = 'text';
			ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			ajax.setRequestHeader('Content-Type', 'application/json')
			ajax.send(JSON.stringify({
				name: name.value, 
				email: email.value 
			}))
		}

	})
}());