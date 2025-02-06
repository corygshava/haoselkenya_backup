document.addEventListener('DOMContentLoaded', () => {
    setupExtras();
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

function setupExtras() {
    let xtra = `
        <!-- the popup -->
        <div class="w3-container">
            <div id="id01" class="w3-modal">
                <button onclick="document.getElementById('id01').style.display = 'none'" class="w3-right w3-button w3-black"><i class="fa fa-times"></i></button>
                <div class="w3-modal-content w3-animate-zoom">
                    <div class="collection auto_repair">
                        <h1>Auto repair</h1>
                        <div class="holder w3-row">
                            <div class="w3-card imgguy">
                                <img src="images/auto(66).jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Spray booth</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/cccccccc.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Compressor</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/zzzzzzzzz.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Auto Body Frame Machine</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/auto (5).jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Two post</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/wheel aa.jpg" style="width:100%">
                                <div class="w3-container">
                                            <h5>Wheel alignment/Fourpost</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="collection Construction_Machinery">
                        <h1>woodwork</h1>
                        <div class="holder w3-row">
                            <div class="w3-card imgguy">
                                <img src="images/band sawmail.png" style="width:100%">
                                <div class="w3-container">
                                    <h5>Band sawmail</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/woodworking2.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Woodworking Blade Sharpener</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/wood-working-heavy-duty-single-webp.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>wood-working-heavy-duty-single</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/wood-cutting-panel-saw114.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>wood-cutting-panel saw</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/wod.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Edge Banding Machine</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collection Woodwork">
                        <h1>construction Machinery</h1>
                        <div class="holder w3-row">
                            <div class="w3-card imgguy">
                                <img src="images/zpppl.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Panel lifting truck</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/zzblock.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Block Making Machine</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/zzmortar-mixer-machine.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Mortar Mixer</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/zzroller.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Vibratory Roller</h5>
                                </div>
                            </div>
                            <div class="w3-card imgguy">
                                <img src="images/small-slabs-lifting-crane.jpg" style="width:100%">
                                <div class="w3-container">
                                    <h5>Lift crane</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="callus">
                        <a href="tel:254757748894">lets talk</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.innerHTML += xtra;
}
