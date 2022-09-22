const exo1 = () => {
    let nbre;
    let Adeviner = 10*Math.random() + 10 ;
    Adeviner = Math.round(Adeviner);
    console.log(Adeviner);
    
    do {
        nbre = prompt(`Veuillez deviner le nombre`);
        if (nbre < 10) {
            alert(`Plus rand`);
        }
        else if (nbre > 20){
            alert(`Plus petit`);
        }
            
                    
    }while(nbre!=Adeviner)
    alert(`Bravo`)
}

const span = document.querySelector(".span");


const exo2 = () => {
    let depart;
    let nbre;
    console.log(span)
    depart = prompt('Veillez Saisir le nombr2e de depart');
    for(i=1;i<=10;i++){
        span.innerHTML += `
            <p> ${++depart} </p>
        `
    }
}


const exo3 = () => {
    let table;
    table = prompt("Donner la table que vous voulez")
    span.textContent=`la table de ${table}`
    for(i=1;i<=10;i++){
        span.innerHTML += `
        <p> ${table}x${i} = ${table*i} </p>
    `
    }
}

const exo4 = () => {
    let last,somme;
    somme = 0;
    last = prompt("Donner le dernier element de la suite")
    last=parseInt(last)
    span.textContent=`la somme  de 1 à ${last} est de :`
    for(i=1;i<=last;i++){
        somme = i + somme;
    }
    span.innerHTML += 
    `<p> ${somme} </p>`
}

const exo5 = () => {
    let fact;
    let resultat;
    resultat=1;
    fact = prompt("Donner le nombre que vous cercez la factorielle")
    fact=parseInt(fact)
    span.textContent=`la factorielle ${fact} est de :`
    for(i=1;i<=fact;i++){
        resultat = i*resultat;
        console.log(resultat);
    }
    span.innerHTML += 
    `<p> ${resultat} </p>`
}

const exo6 = () => {
    let more,tampon;
    more=less=0;
    for(i=1;i<=20;i++){
        tampon=prompt(`Donner le nombre ${i} :`)
        tampon = parseInt(tampon)
        console.log(tampon);
        if(tampon > more)
            more=tampon 
    }
    span.innerHTML += 
    `<p>Le plus rand est : ${more} </p>`
}

const exo7 = () => {
    let more,tampon,position;
    more=less=0;
    for(i=1;i<=20;i++){
        tampon=prompt(`Donner le nombre ${i} :`)
        tampon = parseInt(tampon)
        console.log(tampon);
        if(tampon > more){
            more=tampon 
            position=i
        }         
    }
    span.innerHTML += 
    `<p>Le plus rand est : ${more} et est à la position ${position} </p>`
}

const exo8 = () => {
    let more,tampon,i;
    more=less=0;
    i=1;
    do{
        tampon=prompt(`Donner le nombre ${i} :`)
        tampon = parseInt(tampon)
        if(tampon > more){
            more=tampon
        }
             
        i = i+1   
    } while(tampon != 0)
    span.innerHTML += 
    `<p>Le plus rand est : ${more} </p>`
}

const exo9 = () => {
    let i,note,moyenne,confirmation,tampon;
    
    i=note=moyenne=0;
    let tableau = []
    let superieur = []
    
    do{
        i = i+1 
        tampon=prompt(`Donner la tampon ${i} :`)
        tampon = parseInt(tampon)
        note = note + tampon
        tableau.push(`${tampon}`) 
        confirmation = confirm("Taper sur Ok si vous voulez ajouter un note")   
    } while(confirmation === true)
    moyenne=note/i

    span.innerHTML += 
    `<p>LA MOYENNE EST DE ${moyenne} :</p>`
    span.innerHTML += 
    `<p>Les notes superieures à la moyenne sont :</p>`

    for(j=0;j<=i;j++){
        tampon = tableau[j]
        if (tampon > moyenne ) 
            superieur.push(tampon)
    }
    for(j=0;j<=superieur.length-1;j++){       
        span.innerHTML += 
        `<p>${superieur[j]}  </p>`    
    }
}


const exo10 = () => {
    let taille,negatifs,positifs;
    negatifs=positifs=0;
    taille=prompt("Donner la taille du tableau")
    taille=parseInt(taille)
    let tableau=[];
    for(i=0;i<taille;i++){
        tableau[i]=prompt("La valeur est de:")
        if(tableau[i]<0)
            ++negatifs
        else
            ++positifs  
    }

    span.innerHTML += 
    `<p>Il y'a  ${negatifs} nombrre negatifs:</p>`
    span.innerHTML += 
    `<p>Il y'a ${positifs} nombre positifs :</p>`
}

const exo11 = () => {
   let a,b,quotientEntier,quotientReel,reste;
    a=prompt("Saisir la valeur de a")
    b=prompt("Saisir la valeur de b")
    quotientEntier=parseInt(a/b)
    quotientReel=a/b
    reste= a-b*quotientEntier
    span.innerHTML += 
    `<p>Le quotient entier est  ${quotientEntier} :</p>`
    span.innerHTML += 
    `<p>Le quotient réel est ${quotientReel} :</p>`
    span.innerHTML += 
    `<p>Le reste est ${reste} :</p>`
}

const exo12 = () => {
    let b,somme;
    somme = 0
    for(i=0;i<5;i++){
        b=prompt("La valeur est de:")
        somme = parseInt(b)+somme
    }
    span.innerHTML += 
    `<p>La somme est de: ${somme} :</p>`
}


const exo13 = () => {
    let a,b,c,delta;
    alert("Ce proramme permet de resoudre les équations du sencond derés dans R")
    a=parseInt(prompt("LA valeur de a"))
    b=parseInt(prompt("LA valeur de b"))
    c=parseInt(prompt("LA valeur de c"))
    delta=b*b -4*a*c
    if (delta > 0 ){
        span.innerHTML += 
    `<p>Les solutions sont: ${(-b-Math.sqrt(delta))/(2*a)} et  ${(-b+Math.sqrt(delta))/(2*a)}:</p>`
    }
    else{
        if(delta==0){
            span.innerHTML += 
            `<p>On n'a une solution double: ${-b/(2*a)}:</p>`
        }
        else{
            span.innerHTML += 
            `<p>PAs de solution dans R</p>`
        } 
    }
    console.log(delta);
}

const exo14 = () => {
    let a,b,operateur,resultat;
    a=prompt("Donner la valeur de a")
    operateur=prompt("Donner  l'operateur")
    b=prompt("Donner la valeur de b")
    resultat = `${a}${operateur}${b}`
    resultat=eval(resultat)
    span.textContent = `Le resultat est ${resultat}`

    
}


const exo15 = () => {
    let jour,mois,annee;
    jour=prompt("Donner la valeur de jour")
    mois=prompt("Donner le mois")
    annee=parseInt(prompt("Donner la valeur de l'année")) 
    if(annee%4 == 0){
        if(annee%100 == 0){
            if(annee%400 == 0){
                span.textContent = `L'année est bissectile`    
            }
            else{
                span.textContent = `L'année n'est pas bissectile`
        }
        }
        else{
            span.textContent = `L'année est bissectile`
            
        }
    }
    else{
        span.textContent = `L'année n'est bissectile`
    }         
}


const exo16 = () => {
    let nbre,Adeviner;
    Adeviner = parseInt(prompt("Joueur1: Donner l'entier à deviner"));
    do {
        nbre = parseInt(prompt(`Joueur2: Veuillez deviner le nombre`));
        if (nbre < Adeviner) {
            alert(`Plus rand`);
        }
        else if (nbre > Adeviner){
            alert(`Plus petit`);
        }                
    }while(nbre != Adeviner)
    alert(`Bravo`) 
}


const exo17 = () => {
    let nbre,Adeviner;
    Adeviner = parseInt(prompt("Joueur1: Donner l'entier à deviner"));
    do {
        nbre = parseInt(prompt(`Joueur2: Veuillez deviner le nombre`));
        if (nbre < Adeviner) {
            alert(`Plus rand`);
        }
        else if (nbre > Adeviner){
            alert(`Plus petit`);
        }                
    }while(nbre != Adeviner)
}

const exo18 = () => {
   let croissant,decroissant,tampon,n,i,confirmation;
   i=1;
   croissant=decroissant=0
   tampon = parseInt(prompt("La valeur 1 est :"))
   do{
        ++i
        n = parseInt(prompt(`La valeur ${i} est :`))
        if (tampon > n){
            ++croissant
        }   
        else if (tampon < n){
            ++decroissant
        } 
        tampon=n
        confirmation=confirm("voulez-vous voulez contiuer")
   }while(confirmation===true)
   if(croissant==0)
        span.textContent=`La suite est croissante`
    else if(decroissant==0)
        span.textContent=`La suite est decroissante`
    else
    span.textContent=`La suite est quelconque`
}


