// <div class="card">
//   <div class="inner-card">
//     <img src="../images/cardiology/alkhali_b.jpg" alt="photo of Dr. Alkhalil">
//     <h2>Bassel Alkhalil, MD</h2>
//     <p>201 Abraham Flexner Way <br>Suite 1101</p>
//     <p>Louisville, KY 40202</p>
//       <p>P 502-581-1951</p>
//       <p>F 502-540-5137</p>
//   </div>
// </div>

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		console.log(xhr.responseText);
	}
};

xhr.open('GET', '../data.json');

xhr.send();