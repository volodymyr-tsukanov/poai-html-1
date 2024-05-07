//utworzenie obiektu xhr:
const xhr = new XMLHttpRequest();

function pobierzDane(nazwaPliku)
{
	if (xhr) {
		var url = "http://localhost/testajax/dane/" + nazwaPliku + ".txt";
		xhr.open("GET", url);
		xhr.addEventListener("readystatechange", function () {
			if (xhr.readyState === 4) {
				document.getElementById("s1").innerHTML = xhr.responseText;
			}
		});
		xhr.send(null);
	}
}