let inputText = document.querySelector('#inputText')
let button = document.querySelector('#btn')
let parentBox = document.querySelector('.messages-wrapper')



button.onclick = function () {
	if (inputText.value != "") {
	let yangiDiv = document.createElement('div')
	let yangiTime = document.createElement('time')
	let yangiParagraph = document.createElement('p')

	yangiTime.textContent = getTimer()
	yangiParagraph.textContent = inputText.value

	yangiDiv.appendChild(yangiTime)
	yangiDiv.appendChild(yangiParagraph)

	yangiDiv.classList.add('msg-wrapper')
	yangiDiv.classList.add('msg-left')

	parentBox.appendChild(yangiDiv)
	inputText.value = null
	// console.log(button)
  }
	
	
}

function getTimer () {
	let time = new Date()
	let hours = time.getHours()
	let minutes = time.getMinutes()
	let readyTime = hours + ":" + minutes
	return readyTime
}


let inputPhoto = document.querySelector('#inputPhotoURL')
let buttonPhoto = document.querySelector('#btnPhoto')
let parentBox2 = document.querySelector('.messages-wrapper')


buttonPhoto.onclick = function () {
	if (inputPhoto.value != "") {
	let yangiDiv = document.createElement('div')
	let yangiTime = document.createElement('time')    
	let yangiRasm = document.createElement('img')

	yangiTime.textContent = getTimer()
	yangiTime.setAttribute("datetime",getTimer())
	yangiRasm.setAttribute("src",inputPhoto.value)

	yangiDiv.appendChild(yangiTime)
	yangiDiv.appendChild(yangiRasm)
	// yangiDiv2.img.setAttribute = inputUrl.value
	yangiDiv.classList.add('msg-wrapper')
	yangiDiv.classList.add('msg-right')

	parentBox2.appendChild(yangiDiv)
	inputPhoto.value = null
	// console.log(yangiTime)	
  }

}

 function getTimer () {
	let time = new Date()
	let hours = time.getHours()
	let minutes = time.getMinutes()
	let readyTime = hours + ":" + minutes
	return readyTime
}


