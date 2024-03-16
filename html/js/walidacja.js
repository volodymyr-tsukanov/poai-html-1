function sprawdzPole(pole_id,obiektRegex) {
//Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
//pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
//Parametry funkcji:
//pole_id - id sprawdzanego pola tekstowego
//obiektRegex - wyrażenie regularne
//---------------------------------
	var obiektPole = document.getElementById(pole_id);
	
	if(!obiektRegex.test(obiektPole.value)) return (false);
	else return (true);
}

function sprawdzRadio(nazwa_radio){
//Funkcja sprawdza czy wybrano przycisk radio
//z grupy przycisków o nazwie nazwa_radio
//---------------------------------------
	var obiekt=document.getElementsByName(nazwa_radio);
	
	for (i=0; i<obiekt.length; i++){
		wybrany=obiekt[i].checked;
		if (wybrany) return true;
	}
	return false;
}

function sprawdzBox(box_id)
{//Funkcja sprawdza czy przycisk typu checkbox
//o identyfikatorze box_id jest zaznaczony
//----------------------------------------
	var obiekt=document.getElementById(box_id);
	
	if (obiekt.checked) return true;
	else return false;
}

function sprawdz()
{ //Funkcja realizujaca sprawdzanie całego fomularza
//wykorzystując funkcje pomocnicze
//--------------------------------
	var ok=true; //zmienna informująca o poprawnym wypełnieniu formularza
//Definicje odpowiednich wyrażeń regularnych dla sprawdzenia
//poprawności danych wprowadzonych do pól tekstowych
	obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska
	obiektEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
	obiektWiek=/^[1-9][0-9]{1,2}$/;
//Sprawdzanie kolejnych pól formularza.
//w przypadku błędu - pojawia się odpowiedni komunikat
	if (sprawdzPole('nazw',obiektNazw))
		document.getElementById('nazw_error').innerHTML='';
	else{
		ok=false;
		document.getElementById('nazw_error').innerHTML='Wpisz poprawnie nazwisko!';
	}
	if (sprawdzPole('wiek',obiektWiek))
		document.getElementById('wiek_error').innerHTML='';
	else{
		ok=false;
		document.getElementById('wiek_error').innerHTML='Wpisz poprawnie wiek!';
	}
	if (sprawdzPole('email',obiektEmail))
		document.getElementById('email_error').innerHTML='';
	else{
		ok=false;
		document.getElementById('email_error').innerHTML='Wpisz poprawnie email!';
	}
	if (!(sprawdzBox('php') || sprawdzBox('c') || sprawdzBox('java'))){
		ok=false;
		document.getElementById('produkt_error').innerHTML='Wybierz produkt!';
	} else document.getElementById('produkt_error').innerHTML='';
	if (sprawdzRadio('zaplata'))
		document.getElementById('zaplata_error').innerHTML='';
	else{
		ok=false;
		document.getElementById('zaplata_error').innerHTML='Wybierz metodę płatności!';
	}
	
	return ok;
}