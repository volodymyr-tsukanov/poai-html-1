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