const dragItem = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder');

placeholders.forEach(elem => {
    elem.addEventListener('dragover', dragOver);
    elem.addEventListener('dragleave', dragLeave);
    elem.addEventListener('dragenter', dragEnter);
    elem.addEventListener('drop', dragDrop);
});

dragItem.addEventListener('dragstart', dragStart);
dragItem.addEventListener('dragend', dragEnd);

function dragStart (e) {
    e.target.classList.add('hold');
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragOver (e) {
    e.preventDefault();
}

function dragLeave (e) {
    e.target.classList.remove('hovered');
}

function dragEnter (e) {
    e.target.classList.add('hovered');
    dragItem.classList.add('entered');
}

function dragDrop (e) {
    e.target.append(dragItem);
    e.target.classList.remove('hovered');
}

function dragEnd (e) {
    e.target.className = 'item';
}