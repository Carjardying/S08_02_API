const allOffersUrl = 'https://www.codepassport.dev/api/offers';



async function loadOffers() {
    const response = await fetch(allOffersUrl);
    const allOffers = await response.json();
    // for (const element of allOffers) { // pour afficher tous les elements
    //     document.body.innerHTML += `<h1>${element.titre}</h1>`;
    //     document.body.innerHTML += `<h3>${element.technologie}</h3>`;
    // }

    // allOffers.forEach(element => {  //autre façon d'afficher tous les éléments
    // document.body.innerHTML += `<h1>${element.titre}</h1>`; 
    // document.body.innerHTML += `<p>${element.description}</p>`;
    // });
    document.body.innerHTML += `<h1>${allOffers[3].titre}</h1>`;
    document.body.innerHTML += `<h2>Stack technique : ${allOffers[3].technologie} </h2>`;
    document.body.innerHTML += `<p>${allOffers[3].description}</p>`;

    console.log(allOffers[3].titre);

}

loadOffers()

// COURS EXEMPLE
// async function logPosts() {
// 	const res = await fetch('https://www.dummyjson.com/posts');
	
// 	// on récupère les posts au format json
// 	const data = await res.json();
	
//     // on modifier le HTML du body en fonction des données récupérées
// 	document.body.innerHTML = `<h1> Il y a actuellement ${data.posts.length} Posts </h1>`;
	
// 	for (const post of data.posts) {
// 		// on ajoute à la suite le HTML correspondant à chaque post
// 		document.body.innerHTML += `<h3>${post.title}</h3>`;
// 		document.body.innerHTML += `<p>${post.body}</p>`;
// 	}
// 	// console.log(`Il y a ${data.posts.length} posts différents sur cette api`);
// 	// console.log(`Le titre du premier post est " ${data.posts[0].title} "`);
// }
// logPosts(); // on oublie pas d'appeler la fonction ;)