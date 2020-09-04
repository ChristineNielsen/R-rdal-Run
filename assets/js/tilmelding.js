
//POST METHOD
const button = document.getElementById('send');

button.onclick = function() {
let run = document.getElementById('program').value;
let firstname = document.getElementById('firstname').value;
let lastname = document.getElementById('lastname').value;
let adresse = document.getElementById('adresse').value;
let postnummer = document.getElementById('postnummer').value;
let by = document.getElementById('by').value;
let email = document.getElementById('email').value;
let telefon = document.getElementById('number').value;
let birth = document.getElementById('birth').value;
let birth2 = new Date(birth).getTime() / 1000; //Konvertere datoen til epoch timestamp
let gender = document.querySelector('input[name="gender"]:checked').value; //Læser værdien i et felt ud fra feltets id
let comment = document.getElementById('comment').value;


let data = new URLSearchParams(); //Sætter den information, som vi vil sende til api'en til en form, som api'en kan forstå
data.append('run_id', run); //Sender indputet (fra HTMLen) til variablet data
data.append('firstname', firstname);
data.append('lastname', lastname);
data.append('address', adresse);
data.append('zipcode', postnummer);
data.append('city', by);
data.append('email', email);
data.append('phone', telefon);
data.append('birthdate', birth2);
data.append('gender', gender);
data.append('comment', comment);

let requestOptions = { 
  method: 'POST', //Laver fetchen til en "post"
  body: data, //Variablet data skal være i fetch'ens body
  redirect: 'follow' 
};

fetch(`https://api.mediehuset.net/rordal/registrations`, requestOptions) //Variablet requestOptions er de ekstra informationer som skal med på fetchen
.then(response => response.json())
.then(result => {
    if (result.item) {
        
        /* Kører funktionen, der udskriver logout knap i HTML'en*/
        logoutpage();

    }
})
.catch(error => console.log('error', error))

}

  /*Funktion til at udskrive logout knap i HTML'en*/
  function logoutpage() { 
    const html = `
    <div class="styling">
    <h2>Du er nu Tilmeldt!</h2>
      <div>
    <a href="/"><button type="button" >Tilbage til forsiden!</button></a>
            </div>
      </div>
      `;
      document.getElementById('grid').innerHTML = html;
  }

