function createArticle() {

	let article = document.createElement('article');
	let h3 = document.createElement('h3');
	let p = document.createElement('p');

	let lable = document.getElementById('createTitle');
	let textarea = document.getElementById('createContent');
	let section = document.getElementById('articles');


	if (lable === null || textarea === null || section === null) {
		throw new Error('ERROR');
	}
	if(lable.value === '' || textarea.value === ''){
		return ;
	}
	h3.innerHTML = lable.value;
	p.innerHTML = textarea.value;

	
	section.appendChild(article);
	article.appendChild(h3);
	article.appendChild(p);
	
	lable.value = '';
	textarea.value = '';
}
	
// document.body.innerHTML = `
// <h4>Create a functionality which creates articles and appends them into some article section.</h4>
// <div id="createArticle">
//     <label for="createTitle">Title</label>
//     <input id="createTitle"/><br>
//     <label for="createContent">Content</label>
//     <textarea id="createContent"></textarea>
//     <button>Create</button>
// </div>
// <section id="articles">
//     <h1>Articles List</h1>
// </section>
// `;

// document.getElementById("createTitle").value = "JavaScript Title Test";

// result();

// let articlesCount = document.querySelectorAll('#articles article').length;

// expect(articlesCount).to.equal(0);