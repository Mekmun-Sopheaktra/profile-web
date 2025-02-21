const draggable = document.querySelector('.portfolio-girl-menu-main');

function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener('mousedown', function (e) {
        isDragging = true;
        // Calculate offset
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;

        element.classList.add('dragging');
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            // Update the element's position based on the mouse position
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;

            // Apply new left and top values
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
        }
    });

    document.addEventListener('mouseup', function () {
        if (isDragging) {
            isDragging = false;
            element.classList.remove('dragging');
        }
    });
}

// Apply draggable functionality to the portfolio-girl-menu-main
makeDraggable(draggable);
