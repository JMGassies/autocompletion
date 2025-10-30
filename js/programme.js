"use strict";

// INITIALISATION DES VARIABLES ET RECUPERATION DES ELEMENTS DE LA PAGE HTML
        let iptTexte = document.getElementById("inputTexte");
        let iptListe = document.getElementById("idListe");
        let adresse = "impasse du hérisson";
        let lst_Option=document.getElementById("liste_option");




// // CREATION CONNEXION API   
        const URL = `https://data.geopf.fr/geocodage/completion/?text=${adresse}&maximumResponses=15`;
        
            // const URL='https://data.geopf.fr/geocodage/completion/?text=du%20texte&maximumResponses=15';
    fetch(URL)
         .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}`);
        }
        return response.json(); // Convertit le corps de la réponse en JSON
    })
    .then(lstAdresse => {
        for(let i=0; i<15; i++){
            console.log(lstAdresse.results[i].fulltext);
            lst_Option.innerHTML+="<option value="+lstAdresse.results[i].fulltext+">"+lstAdresse.results[i].fulltext+"</option>";

        }
    })
    .catch(error => {
        console.error('Une erreur s\'est produite :', error.message);
    });
        



// // ECOUTE DU CHAMP DE SAISIE





// ACCES A L'API GEOSERVICES IGN

