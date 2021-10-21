const elements = document.getElementsByTagName('h1');
for (let element of elements) {
    element.style.color = "red";
}

const testcat = document.createElement('div');
testcat.classList.add('test_cat', 'hidden');

const button = document.createElement('button');
button.classList.add('test_cat_button');
button.innerText = 'Click here to show a cat image or close it';


document.body.append(testcat);
document.body.append(button);

testcat.innerHTML = `<img src='https://cataas.com/cat' alt='Тут котики говорят, что ты что-то нажал'>`;
const catimg = testcat.getElementsByTagName('img');


button.addEventListener('click', function (e) {
    testcat.classList.toggle('hidden');
});

chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.message === "clicked_browser_action") {
            const firstHref = 'https://en.wikipedia.org/wiki/Cat';

            console.log(firstHref);

            const clicked = document.createElement('div');
            clicked.classList.add('clicked_el');
            clicked.innerHTML = '<img src="https://cs9.pikabu.ru/post_img/2016/09/28/7/og_og_1475058027296168031.jpg" alt="click">'
            document.body.append(clicked);

            chrome.runtime.sendMessage({ "message": "open_new_tab", "url": firstHref });
        }
    }
);