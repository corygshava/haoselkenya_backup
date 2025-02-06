document.addEventListener('DOMContentLoaded', () => {
    setupPopups();
})

function openmodal(x){
    // click on something
    let list = document.querySelectorAll('.collection');
    let thelist = list[x];

    // open a modal
    document.getElementById('id01').style.display='block'

    // get a list of items
    // hide everything
    for(let i = 0;i < list.length; i++){
        list[i].style.display = "none"
    }

    // show information at a certain ID
    thelist.style.display = "block"

    // simple animation for visual interest
    let items = thelist.querySelectorAll('.imgguy');
    let callbtn = document.querySelector('.callus').querySelector('a');
    let del = 300
    let timedata = {
        duration:1000,
        easing:"ease-out",
        fill:"forwards",
        delay: items.length * 200 + del
    }
    // let ob = {name: "hillary",skill: "coding"}

    // ob.skil

    items.forEach(el => {
        el.style.scale = 0;

        let timingdata = {
            duration: 400,
            easing: "ease-out",
            fill:"forwards",
            delay: del
        };
        el.animate([
            {scale: 0},
            {scale: 1}
        ],timingdata)

        del = del + 200
    })

    callbtn.style.scale = 0;
    callbtn.animate([
        {scale: 0},
        {scale: 1.5}
    ],timedata)
}

function cool(x){
    alert("COOL")
}

let curhead = 0;

function animateheader(){
    let header = document.querySelector('header');
    let h1 = header.querySelector('h1');
    let subtxt = header.querySelector('p');
    let texts = [
        {
            heading: "Haosail",
            text: "Worthy your trust"
        },

    ];
    let curtext = texts[curhead % texts.length];
    let timedata = {
        duration:700,
        easing:"ease-out",
        fill:"forwards",
        delay:  0
    };

    h1.innerHTML = curtext.heading;
    subtxt.innerHTML = curtext.text;

    h1.animate([
        {opacity: 0,translate: '0 20px'},
        {opacity: 1,translate: '0 0'}
    ],timedata)
    subtxt.animate([
    {opacity: 0,translate: '0 -20px'},
    {opacity: 1,translate: '0 0'}
    ],timedata)

    curhead += 1;
}

setInterval(() => {
    animateheader();
}, 4200);

function setupPopups(){
    const phoneNumber = '254757748894';

    const imgguyElements = document.querySelectorAll('.imgguy');
    const talklink = document.querySelector('.callus').querySelector('a');
    let whatsappLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}`;
    let txt = "";

    // Iterate over each element and add the data-mylink property
    imgguyElements.forEach(element => {
        txt = `Hello, im interested in **${element.querySelector('h5').textContent}**`;
        let thelink = `${whatsappLink}&text=${encodetxt(txt)}`;
        element.setAttribute('data-mylink', whatsappLink);

        element.addEventListener('click',e => {
            gohere(thelink);
        })

        element.style.cursor = "pointer";
    });

    txt = `Hello, I wanted to inquire about your services`;
    talklink.href = `${whatsappLink}&text=${encodetxt(txt)}`;
    talklink.innerHTML = `<i class="fa fa-whatsapp"></i> lets talk`;
    talklink.target = "_blank";
}

function gohere(link){
    window.open(link,'_blank');
}

function encodetxt(txt) {
    return encodeURIComponent(txt);
}
