// Code here!

document.querySelector('nav').children[0].innerText='Start';
document.querySelector('nav').children[2].innerText='Mail Us';

document.querySelector('footer section article').children[3].innerText='Mail Us';

document.querySelector('.art-2 h2').innerText = 'Sinus Hoodie';
document.querySelector('.art-2 h3').innerText = 'Forest';
document.querySelector('.art-2 p').innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.';

document.querySelector('.art-1 button').innerText = 'Select';
document.querySelector('.art-1 button').style.backgroundColor ='#999999';

document.querySelector('.art-1 figure').style.backgroundColor = '#999999';

document.querySelector('footer section article:nth-child(2) p').innerHTML=
'Smålandsgatan 16<br> 111 46, Stockholm';

const allParagraph=document.querySelectorAll('p');
allParagraph.forEach(paragraph => {
paragraph.style.color='#008080';    
});

const allButtoms=document.querySelectorAll('button');
allButtoms.forEach(button => {
    button.innerText='add to cart';    
});

document.querySelector('header nav a:nth-child(1)').classList.add('active');

console.log(document.querySelector('header img').className);
document.querySelector('.logo').classList.remove('logo');
console.log(document.querySelector('header img').className);

const newMenuOption = document.createElement('a');
newMenuOption.href = '#';
newMenuOption.innerText = 'New Option';
document.querySelector('header nav').appendChild(newMenuOption);

const newProductHTML = `
    <article class="art-4">
        <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
        <h2>Sinus Hoodie</h2>
        <h3>Forrest</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
        <button>add to cart</button>
    </article>
`;

document.querySelector('main').insertAdjacentHTML('beforeend', newProductHTML);

document.querySelector('header img').addEventListener('click', ()=>{
    console.log('Found you!');
});


const allArticles = document.querySelectorAll('article');
allArticles.forEach(article => {
    article.addEventListener('click', function() {
        const productName = this.querySelector('h3').innerText;
        console.log(`Hi, I'm article ${productName}`);
    });
});


