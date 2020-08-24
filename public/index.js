let dde = document.documentElement;

dde.addEventListener("mousemove", e => {
    let ow = dde.offsetWidth;
    let oh = dde.offsetHeight;
    dde.style.setProperty('--mouseX', e.clientX * 50 / ow + "%");
    dde.style.setProperty('--mouseY', 100 * e.clientY  / oh + "%");
});
