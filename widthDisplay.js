function getX (y) {
    return y * 3 / 4
}

function getY (x) {
    return x * 4 / 3
}

function portraitWidth (viewportW) {
    let x = viewportW * 3 / 10;
    return x;
}

function landscapeWidth (viewportW) {
    let y = portraitW(viewportW) * 4 / 3;
    return y;
}

