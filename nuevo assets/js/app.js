// tonote: i use typrescript syntax for vs code intellisense

function init() {
    // setup visibledata
    let items = undefined;
    // let items: Array = undefined;

    items = document.querySelectorAll('[data-visibledata]');

    items.forEach((el, id) => {
        // assumes the data is in the form 0,0,1
        let vizdata = el.dataset.visibledata.split(","),screen = ["small","medium","large"];
        let mid = 0,xclass = new Array();

        for (let x = 0; x < vizdata.length; x++) {
            let me = vizdata[x];
            let afix = parseInt(me) == 0 ? "hide" : "show";
            let wot = `w3-${afix}-${screen[x]}`;
            xclass.push(wot);
        }

        xclass.forEach(a => {
            el.classList.add(a);
        });
    })

    console.log(`done with visibledata, found ${items.length} ${plural("item",items.length)}`);

    // setup togglers
    items = document.querySelectorAll('[data-toggleme]');

    items.forEach((el, id) => {
        el.addEventListener('click',() => {
            if(el.dataset.displays == undefined){
                toggleShow(el.dataset.toggleme);
            } else {
                let dis = el.dataset.displays.split(",");
                toggleShowB(el.dataset.toggleme,dis[0],dis[1]);
            }
        })
    });

    console.log(`done with toggleme, found ${items.length} ${plural("item",items.length)}`);
}

window.addEventListener('load', () => {
    init();
})