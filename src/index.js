import './less/index.less'

// Your code goes here!

function setHighlight(el) {
    el.classList.remove('no-over')
    el.classList.add('over')
}

function noHighlight(el) {
    el.classList.remove('over')
    el.classList.add('no-over')
    const overInfo = el.querySelector('.overInfo')
    if (overInfo) { overInfo.remove() }
    // console.log(overInfo)
}

function isP(ev) {
    const isP = ev.srcElement.localName === 'p'
    return isP
}

function doContentEditable(ev) {
    // const isP = ev.srcElement.localName === 'p'
    // console.log(ev)
    if (isP(ev)) {
        ev.srcElement.contentEditable = true
        console.log('entro a crear', ev.srcElement.dataset.info)

        if (ev.srcElement.dataset.info) {
            ev.srcElement.setAttribute('data-info', true)

            const overInfo = document.createElement('div')
            overInfo.classList.add('overInfo')
            overInfo.textContent = 'double click to edit text'
            ev.srcElement.parentNode.insertBefore(overInfo, ev.srcElement)
            // overInfo.removeEventListener('mouseover' ,onMouseOver )
            // 
            // console.log(ev.srcElement.parentNode)
        }

    }
}

function onMouseOver(ev) {
    const isBody = ev.srcElement.localName === 'body'
    const isOverInfo = document.activeElement.querySelector('.overInfo')
    ev.srcElement.setAttribute('data-info', false)
    if (!isBody || !isOverInfo) {
        setHighlight(ev.target)
        // doContentEditable(ev)
    }
    if (!isOverInfo ) {
        // setHighlight(ev.target)
        doContentEditable(ev)
    }

    console.log(isOverInfo)

}

function onMouseOut(ev) {
    ev.srcElement.setAttribute('data-info', false)
    noHighlight(ev.target)
}

function onkeyDown(ev) {
    // console.log(ev.key)
}

function onDblclick(ev) {
    console.log(ev.target.textContent)
}

document.addEventListener('mouseover', onMouseOver)
document.addEventListener('mouseout', onMouseOut)
document.addEventListener('keydown', onkeyDown)
document.addEventListener('dblclick', onDblclick)

