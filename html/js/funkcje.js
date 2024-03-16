function oblicz()
{ //Słówko var - oznacza zmienną; typ tej zmiennej
//będzie zależał od jej wartości;
//Pobierz element o id=l1 do zmiennej l1:
	var l1=document.getElementById('l1');
//pobierz wartość (łańcuch tekstowy) wpisaną w polu
//formularza o id='l1':
	l1=l1.value;
//Przekonwertuj (jeśli się uda) l1 do wartości typu int:
	l1=parseInt(l1);
//Jeśli udała się próba konwersji to l1 zawiera wartość całkowitą
//Analogicznie realizujemy pobranie wartości z drugiego pola
// tekstowego, ale tym razem wszystko w jednej instrukcji:
	var l2=parseInt(document.getElementById('l2').value);
//Teraz już możemy obliczyć sumę i ustawić wartość pola tekstowego
//o id='suma':
	var s=document.getElementById('suma');
	s.value=l1+l2;
}

function obliczRata(){
	let k = parseFloat(document.getElementsByName('K')[0].value);
	let n = parseInt(document.getElementsByName('n')[0].value);
	let pr = parseFloat(document.getElementsByName('pr')[0].value);
	let rata_mies = document.getElementById('rata_mies');
	let kwota_odsetki = document.getElementById('kwota_odsetki');
	
	let pr_mc = pr/12;
	var rata = (k*pr_mc)/(1-1/((1+pr_mc)**n));
	if(isNaN(rata)/* || isFinite(rata)*/){
		rata_mies.value = 'Błędne dane';
		kwota_odsetki.value = '(float, int, float)';
		alert('Wprowadź poprawne dane');
	} else{
		rata_mies.value = rata;
		kwota_odsetki.value = k+k*(pr/100);
	}
	//console.log(k + ' ' + n + ' ' + pr + ' ' + rata);
}

function calculate(){
	var x = parseFloat(document.getElementById('x').value);
	var y = parseFloat(document.getElementById('y').value);
	var result = 0.0;
	
	let tab = document.getElementsByName('operator');
	let op;
	for(let i=0; i<tab.length; i++){
		if(tab[i].checked) op = tab[i].value;
	}
	switch(op){
		case 'pls':
			result = x+y;
		break;
		case 'mns':
			result = x-y;
		break;
		case 'mul':
			result = x*y;
		break;
		case 'div':
			result = x/y;
		break;
	}
	
	document.getElementById('wynik').value = result;
}


/* SPA */
function pokaz(id)
{
	var tresc="";
	
	switch (id){ 
		case 2: tresc += pokazGalerie();break;
		case 3: tresc += pokazPost(); break;
		case 4: tresc += pokazKontakt();break;
		default: tresc += pokazO();
	}
	
	document.getElementById('blok').innerHTML = tresc;
}

function pokazO(){
	tresc ='<h2><br>Pierwsze kroki</h2> ';
	
	tresc += '<p> W aplikacjach typu SPA ......</p>'+
	'<p class="srodek"><img src="images/full/baner.jpg" alt="Zdjęcie" /></p>'+
	'<article><h2>Wady SPA</h2><p>'+
	' Czas wytworzenia oraz nakład pracy ... </p></article>';
	
	return tresc;
}

function pokazGalerie()
{
	tresc='<h2><br>Moja galeria</h2>';
	
	tresc+=' <div class="galeria">';
	for(i=1;i<=10;i++)
	{
		tresc+='<div class="slajd"><img src="images/thumbnails/obraz'+i+'.jpg" alt="Obraz '+i+'"></div>';
	}
	tresc+='</div>';
	
	return tresc;
}

function pokazKontakt()
{
	tresc='<h2><br>Kontakt</h2>';
	
	tresc += 'VT';
	
	return tresc;
}

function pokazPost()
{
	tresc='<h2><br>Dodaj post</h2>';
	
	tresc+='<article class="srodek" ><form action="mailto:s99819@pollub.edu.pl" method="post" onsubmit="return pokazDane();">'+
	'Imię:<br> <input type="text" id="imie" name="imie" pattern="[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+( [A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)?" required /><br>'+
	'Email:<br> <input type="email" id="email" name="email" required /><br>'+
	'Telefon:<br> <input type="tel" id="telefon" name="telefon" required /><br>'+
	'Zainteresowania:<br> <input type="checkbox" name="zainteresowanie" value="spt" />Sport <input type="checkbox" name="zainteresowanie" value="mzk" />Muzyka <input type="checkbox" name="zainteresowanie" value="flm" />Film <input type="checkbox" name="zainteresowanie" value="inn" />Inne <br>'+
	'Wiek:<br> <input type="radio" name="wiek" value="lt" required />Mniej niż 10 <input type="radio" name="wiek" value="tw" />10-20 <input type="radio" name="wiek" value="th" />21-30 <input type="radio" name="wiek" value="fr" />31-40 <input type="radio" name="wiek" value="fv" />41-50 <input type="radio" name="wiek" value="gf" />Więcej niż 50<br>'+
	'Komentarz: <br><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea><br>'+
	'<input type="submit" name="wyslij" value="Wyślij" />'+
	'</form></article>';
	
	return tresc;
}

function pokazDane()
{
	var dane='Następujące dane zostaną wysłane:';
	
	dane+='\nImię: '+document.getElementById('imie').value+
	'\nEmail: '+document.getElementById('email').value+
	'\nTelefon: '+document.getElementById('telefon').value+
	'\nKomentarz: '+document.getElementById('wiadomosc').value;
	
	if (window.confirm(dane)) return true;
	else return false;
}