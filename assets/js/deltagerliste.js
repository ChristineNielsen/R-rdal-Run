let deltager;
let text = "";
let list = document.getElementById('liste');


window.onload = fetch_deltager()

function fetch_deltager(){
    const api = `https://api.mediehuset.net/rordal/registrations`;
    fetch(api, {
     headers: {   /*Sendes med, da man ellers ville blive nægtet adgang*/ 
    'Content-Type': 'application/json',} })
    .then(resp => resp.json())
    .then(function (api){
      deltager = api.items;
      for(let item in deltager){
        text += "<div>" + "<p>" + deltager[item].firstname + "</p>" + "<p>" + deltager[item].lastname + "</p>" + "<p>" + deltager[item].zipcode + "</p>" + "</div>"
      }
      list.innerHTML = text 

    });
  };

  function sorter(){
    let option = document.getElementById('sort-by').value;  /*Finder hvad man har valgt i selectoren*/ 
    let deltager2 = deltager
    text = "";
    console.log(option, deltager2)
    switch (option) {
        case "Firstname": 
            {
                deltager2.sort(function(low, high){ /* low-high = a-å */
                    if (low.firstname.toLowerCase() < high.firstname.toLowerCase()) { 
                        return -1;
                    }
                    else if (low.firstname.toLowerCase() > high.firstname.toLowerCase()) {
                        return 1;
                    }
                    else{
                    return 0;    
                    }
                })
                break;
            }
            case "Lastname":
                {
                    deltager2.sort(function(low, high){ /* low-high = a-å */
                        if (low.lastname.toLowerCase() < high.lastname.toLowerCase()) { 
                            return -1;
                        }
                        else if (low.lastname.toLowerCase() > high.lastname.toLowerCase()) {
                            return 1;
                        }
                        else{
                        return 0;    
                        }
                    })
                    break;
                }
                case "zipcodea":
                    {
                        deltager2.sort(function(a, b){
                         return a.zipcode - b.zipcode
                            
                        });
                        break;
                    }
                    case "zipcodeb":
                        {
                            deltager2.sort(function(a, b){
                             return b.zipcode - a.zipcode
                                
                            });
                            break;
                        }
    }
    for(let item in deltager2){
        console.log(deltager2[item].firstname)
        text += "<div>" + "<p>" + deltager[item].firstname + "</p>" + "<p>" + deltager[item].lastname + "</p>" + "<p>" + deltager[item].zipcode + "</p>" + "</div>"
    }
    list.innerHTML = text 

  }

function search(){
    text = "";
    let keyword = document.getElementById('search').value;  /*Finder hvad man har valgt i selectoren*/ 
    const api = `https://api.mediehuset.net/rordal/search/${keyword}`;
    fetch(api, {
     headers: {   /*Sendes med, da man ellers ville blive nægtet adgang*/ 
    'Content-Type': 'application/json',} })
    .then(resp => resp.json())
    .then(function (api){
      deltager = api.items;
      for(let item in deltager){
        text += "<div>" + "<p>" + deltager[item].firstname + "</p>" + "<p>" + deltager[item].lastname + "</p>" + "<p>" + deltager[item].zipcode + "</p>" + "</div>"
      }
      list.innerHTML = text 

    });
}