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
	var actionPath, formData = '' 

	ajax = new XMLHttpRequest()

	ajax.onload = (e) => {
		var xhr = e.target

		apiResponse = JSON.parse(xhr.responseText)
		if(apiResponse.status == 422) {
			notification.innerHTML = apiResponse.error
			notification.style.color = 'red'
		}

		if(apiResponse.status === 200) {

		}
	}

	
	registerForm.addEventListener('submit', (e) => {
		if(email && name) {
			e.preventDefault()

			formData = new FormData(registerForm)
			actionPath = registerForm.getAttribute('action')

			console.log(formData)

			ajax.open('POST', actionPath, true)
			ajax.send(formData)
			// ajax.responseType = 'text';
			// ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			// ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
			// ajax.send(JSON.stringify({
			// 	name: name.value, 
			// 	email: email.value 
			// }))
		}
	})

	console.log('The main js func is running')
}());