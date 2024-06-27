(function () {
	function onMouseOver(event) {
		var elem = event.target || event.srcElement;
		elem.style.outline = '2px solid red';
		prevEl = elem;
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
		if (event.key === "Escape") {
			prevEl.style.outline = '';
            cleanupEventListeners();
		}
	}
    
    function cleanupEventListeners() {
        document.removeEventListener("mouseover", onMouseOver);
        document.removeEventListener("mouseout", onMouseOut);
        document.removeEventListener("click", onClick);
    }

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeydown);
})();
