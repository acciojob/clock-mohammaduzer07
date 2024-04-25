//your JS code here. If required.

let time = document.getElementById('timer');

function currentTime() {
	
	let date = new Date();
	
	let hr = date.getHours();
	let sec = date.getSeconds();
	sec = (sec <= 9 ) ? "0"+sec : sec;
	let min = date.getMinutes();
	min = (min <= 9) ? "0" + min : min;
	
	let year = date.getFullYear();
	let month = date.getMonth()+1;
	let dayDate = date.getDate();
	let am_pm;
	
	if(hr == 0){
		hr = 12;
		am_pm = "AM";
	} else if(hr < 12){
		am_pm = "AM";
	}else if(hr == 12){
		am_pm = "PM";
	}
	else if(hr > 12){
		hr = hr - 12;
		am_pm = "PM"
	}

	// time.innerText = `${month}/${dayDate}/${year}, ${hr}/${min}/${sec} ${am_pm}`
}

// setInterval(currentTime, 1000)
