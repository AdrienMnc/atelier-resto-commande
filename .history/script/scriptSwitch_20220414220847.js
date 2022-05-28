//  variable / constante

const PLAT = 20;
const BOISSON_ALCOOLISEE = 8;
const BOISSON_NON_ALCOOLISEE = 5;

let age = prompt("Saisissez votre age:");
console.log(age);
let credit = prompt("Creditez votre compte");
console.log(credit);

function recupererChoixPossible(credit) {
  if (credit >= 20) {
    return "Que voulez vous commander : 1/ Plat 2/ Boisson Alcoolisée 3/ Boisson Non Alcoolisé 4/ Sortir";
  } else if (credit >= 8 && credit < 19) {
    return "Que voulez vous commander : 2/ Boisson Alcoolisée 3/ Boisson Non Alcoolisé 4/ Sortir";
  } else if (credit >= 5 && credit < 8) {
    return "Que voulez vous commander : 3/ Boisson Non Alcoolisé 4/ Sortir";
  } else {
    return "vous n'avez pas assez de credit";
  }
}
// BOUCLE DEMANDE CHOIX CLIENT TANT QU IL Y A ARGENT
let choix = "";
while (credit >= 5 && choix != "4") {
  choix = prompt(
    "Que voulez vous commander : 1/ Plat 2/ Boisson Alcoolisée 3/ Boisson Non Alcoolisé 4/ Sortir"
  );
  console.log(choix);
switch (choix) {
    case "1":
        if (credit >= PLAT) {
            credit = credit - PLAT;
            console.log(
              `Commande accepté voici votre plat il vous reste ${credit} euros`
            );
          } else {
            console.log("Vous n'avez pas assez d'argent commandez autre chose.");
          }
        
        break;
    case "2":
        if (age < 18) {
            console.log(
              "Vous n'êtes pas majeur vous ne pouvez pas commander d'alcool"
            );
          } else if (credit < BOISSON_ALCOOLISEE) {
            console.log("Vas au travail pour gagner plus d'argent !");
          } else {
            credit = credit - BOISSON_ALCOOLISEE;
            console.log(`A la tienne il vous reste ${credit} euros `);
          }
        break;
    default:
        break;
}
    

 

  // BOISSON NON ALCOOLISEE
  else if (choix == "3") {
    if (credit >= BOISSON_NON_ALCOOLISEE) {
      credit = credit - BOISSON_NON_ALCOOLISEE;
      console.log(
        `Commande accepté voici votre soda il vous reste ${credit} euros `
      );
    } else {
      console.log("Vous n'avez pas assez d'argent commandez autre chose.");
    }
  }

  // TOUS LES AUTRES CAS
  else {
    console.log("Veuillez réessayer");
  }
  console.log(recupererChoixPossible(credit));
}
