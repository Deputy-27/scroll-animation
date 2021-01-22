const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes () {
    const triggerBottom = window.innerHeight / 5 * 4 /*calculation for trigger point
    basically when to activate class show or deactivate*/

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top /*rectangle top position or div box position*/

        if (boxTop < triggerBottom){ /*if box top position is less than */
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}