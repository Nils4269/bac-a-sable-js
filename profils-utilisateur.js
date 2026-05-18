fetch("user.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        // a ce niveau on devrait avoir dans la console les données renvoyé par l'API
        console.log(data)
        afficheUtilisateur(data.users)
    });


//role : récupérer les utilisateurs 1 par 1 et de les afficher dans le dom 
// parametre : du tableau d'utilisateur 
// return. : rien car elle affiche 

function afficheUtilisateur(tableauUtilisateurs) {
    tableauUtilisateurs.forEach(utilisateur => {
        let utilisateurCard = `<div class="card large-30">

        <div class="flex space-between">

            <img src="users-images/users-images (1)/${utilisateur.image}" alt="" class="large-30">

            <div>
                <h3>${utilisateur.nom}</h3>
                <h3>${utilisateur.prenom}</h3>
                <p>Age : ${utilisateur.age}</p>
                <p>Poste :${utilisateur.poste}</p>
                        <p class="mt-20 flex align-center gap-12"><i class="ph ph-envelope-simple"></i> email :juliette@gmail.com</p>
            </div>
        </div>
            `
            document.querySelector("#users-container").innerHTML += utilisateurCard;
    })
}