const x = document.querySelector("#items")
const butt = document.querySelector("#button")
fetch('http://localhost:5000/test').then(res => res.json()).then(body => x.innerHTML = `<li>${body['text']}</li>`)
const getDirs = () => {
    fetch('http://localhost:5000/drive_mad')
        .then(res => res.json())
        .then(body => body['loose'].forEach(el => console.log(el)))
};
butt.addEventListener('click', getDirs)
