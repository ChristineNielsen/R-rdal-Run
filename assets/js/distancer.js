function fetch_detaljer(id){
    const api = `https://api.mediehuset.net/rordal/run/${id}`;
    fetch(api, {
     headers: {   /*Sendes med, da man ellers ville blive nægtet adgang*/ 
    'Content-Type': 'application/json',} })
    .then(resp => resp.json())
    .then(function (api){
      console.log(api);
  
  
  // Sætter de fetchede data ind i html'en
      title = api.item.title; 
      document.getElementById('title').innerHTML = title;
      beskrivelse = api.item.description; 
      document.getElementById('beskrivelse').innerHTML = beskrivelse;

    })
  };