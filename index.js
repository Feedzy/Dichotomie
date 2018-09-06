var nombre_saisi, a; 
var nombre_convertit;
var nombre_aleatoire ;

nombre_aleatoire = Math.floor(Math.random() * 100)

for(a= 0; a< 6; a++)
{
    nombre_saisi = prompt('Veillez saisir un nombre compris entre 0 et 100');

    nombre_convertit = parseInt(nombre_saisi, 10);
    if (nombre_convertit == nombre_aleatoire) 
    {
        console.log("Vous avez trouvé, bravo ! \t"+nombre_aleatoire  );
        break;
    }
    else if(nombre_convertit< nombre_aleatoire)
     {
         console.log('Le nombre est trop petit \t'+ nombre_convertit);
     }
     else if(nombre_convertit > nombre_aleatoire)
     {
         console.log('Le nombre est trop grand \t'+ nombre_convertit);
     }
     else
     {
        console.log("Vous avez perdu");
     }
}
if(a== 6)
{
    console.log('Vous atteint nombre de tentative le nombre mystére etait \t'+ nombre_aleatoire);
}