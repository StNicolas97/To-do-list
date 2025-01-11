let maliste = document.getElementById('myList');
let saisiUser = document.getElementById('liste');
let radios = document.getElementsByName('couleur');


saisiUser.addEventListener('keydown', ajouter);

function ajouter(event) {
    if (event.key === 'Enter') {

        let texte = saisiUser.value.trim();
        if (texte == '') {
            alert('Veuillez entrer un élément correct');
            return;
        }

        // Récupérer la couleur sélectionnée
        let valeur = '';
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                valeur = radios[i].value;
                break;
            }
        }

        // Cette partie gère l'ajout et la fonction du bouton supprimer
        let itemlist = document.createElement('li');
        let itemContent = document.createElement('span');
        let icone = document.createElement('img');
        icone.src = "./Images/delete.png";
        icone.style.width = '15px';
        icone.style.height = '15px';
        icone.style.cursor = 'pointer';
        itemContent.textContent = texte + ' ';
        itemContent.style.color = valeur;
        itemlist.appendChild(itemContent);
        itemlist.appendChild(icone);
        maliste.appendChild(itemlist);

        saisiUser.value = '';

        icone.addEventListener('click', function () {
            maliste.removeChild(itemlist);
        });

        // Cette partie gère la modification d'un élément de la liste
        let boutonModif = document.createElement('img');
        boutonModif.src = './Images/modifier.png';
        boutonModif.style.width = '15px';
        boutonModif.style.height = '15px';
        boutonModif.style.cursor = 'pointer';
        itemlist.appendChild(boutonModif);

        boutonModif.addEventListener('click', modifier);

        function modifier() {
            let inputModif = document.createElement('input');
            inputModif.type = 'text';
            inputModif.value = itemlist.textContent;
            inputModif.id = 'modifier';
            inputModif.style.color = 'black';
            itemlist.appendChild(inputModif);

            inputModif.addEventListener('keydown', changer);

            function changer(event) {
                if (event.key === 'Enter') {
                    let texteModif = inputModif.value.trim();
                    if (texteModif == '') {
                        alert('Veuillez entrer un élément correct');
                        return;
                    }

                    itemContent.textContent = texteModif + ' ';
                    itemlist.appendChild(itemContent);
                    itemlist.appendChild(icone);
                    itemlist.appendChild(boutonModif);
                    itemlist.removeChild(inputModif);
                }
            }
        }
    }

    let search = document.getElementById('search');
    search.addEventListener('click', recherche);

    function recherche() {
        let tabCherche = document.querySelectorAll('span');
        let elementCherche = new RegExp(saisiUser.value.trim(), "i");
        let itemcherche = false;

        for (let j = 0; j < tabCherche.length; j++) {
            itemcherche = elementCherche.test(tabCherche[j].textContent);
            if (itemcherche) {
                tabCherche[j].style.textDecoration = 'underline';
                tabCherche[j].style.textDecorationColor = 'yellow';
            } else {
                tabCherche[j].style.textDecoration = 'none';
            }
        }
    }

}
