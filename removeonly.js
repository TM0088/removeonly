(function () {
	function onMouseOver(event) {
		var elem = event.target || event.srcElement;
		elem.style.outline = '2px solid red';
		selectedElement = elem;
	}

	function onMouseOut(event) {
		var elem = event.target || event.srcElement;
		elem.style.outline = '';
	}

	function onClick(event) {
		var elem = event.target || event.srcElement;
		elem.style.display = 'none';
	}

	function onKeydown(event) {
		if (event.key === "F8") {
			selectedElement.style.outline = '';
            cleanupEventListeners();
		} else if (event.key === "Escape") {
            selectedElement.style.display = 'none';
        }
	}

    function onWheel(event) {
        selectedElement.style.outline = '';
        event.preventDefault();
        if (event.deltaY < 0) {
            selectedElement = selectedElement.parentElement;
            selectedElement.style.outline = '2px solid red';
        } else {
            var childElement = selectedElement.querySelector(":hover");
            if (childElement) {
                selectedElement = childElement;
                selectedElement.style.outline = '2px solid red';
            }
        }
    }

    function cleanupEventListeners() {
        document.removeEventListener("mouseover", onMouseOver);
        document.removeEventListener("mouseout", onMouseOut);
        document.removeEventListener("click", onClick);
        document.removeEventListener("wheel", onWheel);
    }

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("wheel", onWheel, { passive: false });
})();
