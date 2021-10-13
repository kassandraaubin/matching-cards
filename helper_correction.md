Je me suis toutefois posé la question à savoir quel était leur niveau à chacun, par exemple pour trouver l'extension du fichier, j'aurai pu parler des Regex, mais je me suis dit qu'en fonction de leur niveau il ne fallait peut être pas tous les pousser là dessus.


# Corrections 

Hello ! Tu trouveras (non pas Natasha St-Pier ni Pascal Obispo -si t'as pas la ref, c'est que je suis trop veille-), la correction des exercices ci-dessous.

---------------------------
### Student 1 : 
#### Test 1 : 
Bien joué !

#### Test 2 : 
Bien joué ! Tu avais cependant la possibilité de simplifier ton code en évitant le if / else en partant du principe où ce qu'il y a dans la condition que tu viens vérifier "(int%2 === 0)" est un booléen et renverra true ou false en fonction de l'entier passé à la fonction. 

#### Test 3 : 
Bravo ! Tu pouvais aussi utiliser la méthode pop() pour aller plus vite.
function extraction(str){
    let extension = str.split('.').pop();
    return('l\'extension de votre fichier est ' + extension);
}
#### Test 4 :
Super !

#### Test 5 :
Ton code ne prend pas en compte les tableaux imbriqués. Avant de penser à additionner chaque élément de ton tableau il faut penser à les mettre tous au même niveau. Tu peux faire une boucle dans une boucle pour celà, ou bien directement utiliser la méthode flat() native à JavaScript.

---------------------------

### Student 2 :
#### Test 1 :
Bien joué !

#### Test 2 : 
Bien joué !

#### Test 3 : 
Bravo ! Tu pouvais aussi utiliser la méthode pop() pour aller plus vite.
function extraction(str){
    let extension = str.split('.').pop();
    return('l\'extension de votre fichier est ' + extension);
}

#### Test 4 :
C'est excellent ! Pense à commenter ton code pour que tes collègues pouvant y avoir accès et ayant moins de facilitées puisse le comprendre.

#### Test 5 :
Parfait ! Bravo ! Pense cependant à commenter ton code.
Une solution encore plus courte s'offrait à toi, en suivant ta logique :

let sum = arr => arr.flat(Infinity).reduce((a,b)=> a+b, 0)

---------------------------

### Student 3 :

#### Test 1 : 
Bien joué !

#### Test 2 : 
Le code est fonctionnel, fais cependant attention à ton indentation, comme ceci :
function isEven(int) {
    if (int%2==0) {
        return true
    }else{
        return false
    }
}
Ca facilite la relecture, la maintenabilité de ton code.

#### Test 3 : 
Bien joué ! Tu obtiens le résultat attendu, mais tu te compliques un petit peu la tâche, la prochaine fois pense à regarder du côté des méthodes split et pop. 

#### Test 4 :
Ton code est fonctionnel, bravo ! 

#### Test 5 :
Bien joué !

---------------------------

### Student 4

#### Test 1 :

La fonction est bonne cependant effectuer un console.log de ta fonction sans y insérer d'arguments n'est pas utile. Actuellement si tu testes ta fonction à vide, elle te retournera "not a number" puisqu'elle attent un entier à pouvoir doubler.

#### Test 2 :

Bien que ton code soit fonctionnel, la bonne pratique voudrait que tu ne donne pas un nom de variable équivalent au nom attribué au paramètre de ta fonction. Tu pouvais, pour garder ton code le plus clair et concis possible, effectuer directement un return de "int % 2 == 0;". 

#### Test 3 :
Les paramètres passés à ta fonction lastIndexOf ne sont pas bon ce qui te donne d'emblée une erreur dans la console. Syntaxiquement voilà ce qui est attendu avec l'utilisation de cette fonction :
str.lastIndexOf(valeurRecherchée[, indiceDébut])  (source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)

Pour réaliser cet exercice, tu aurais pu chercher du côté des méthodes split et pop, regarde sur MDN et n'hésites pas à me poser des questions si tu as besoin de plus de renseignements.

#### Test 4 :
Que n'as-tu pas compris dans cet exercice ?
Je t'invite à revoir le cours sur les tableaux, tu peux aussi utiliser des ressources en ligne, telles que MDN : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

Ici, nous te demandions de retourner la chaîne de caractère la plus longue du tableau. 
Par exemple, un tableau tel que : 
let array1 = ['toto', 'tata', 'tulipe'];

Devra retourner : 'tulipe'. 

Il va donc te falloir passer sur chaque élément du tableau et récupérer la longueur de chacun d'entre eux afin de pouvoir les comparer.
Essaie à nouveau et reviens vers moi si besoin.

#### Test 5 :
Que n'as-tu pas compris dans cet exercice ? 
Il faut que tu regardes la documentation pour flat et reduce sur MDN :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Puisque tu fais face à un tableau imbriqué (nested arrays), il faut dans un premier temps "applatir" / mettre au même niveau le tout, pour que l'addition puisse se faire correctement. C'est flat qui permet de faire ça. Essaie à nouveau avec ces pistes et reviens vers moi si tu as des questions. Bon courage !