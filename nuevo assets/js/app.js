// tonote: i use typrescript syntax for vs code intellisense

function init() {
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