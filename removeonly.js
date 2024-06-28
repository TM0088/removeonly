(function () {
    const h = [];

	function onMouseOver(event) {
		var elem = event.target || event.srcElement;
		elem.style.outline = '2px solid red';
		s = elem;
	}

	function onMouseOut(event) {
		var elem = event.target || event.srcElement;
		elem.style.outline = '';
	}

	function onRClick(event) {
        event.preventDefault();
		s.style.display = 'none';
        h.push(s);
	}

	function onClick(event) {
        event.preventDefault();
        s.style.outline = '';
        cleanupEventListeners();
	}

	function onKeydown(event) {
		if (event.key === "F8") {
            event.preventDefault();
			s.style.outline = '';
            cleanupEventListeners();
		} else if (event.key === "F2") {
            event.preventDefault();
            s.style.display = 'none';
            h.push(s);
        } else if (event.key === "Escape") {
            event.preventDefault();
            let hl = h.length;
            for (i = 0; i < hl; i++) {
                h.pop().style.display = '';
            }
        }
	}

    function onWheel(event) {
        s.style.outline = '';
        event.preventDefault();
        if (event.deltaY < 0) {
            s = s.parentElement;
            s.style.outline = '2px solid red';
        } else {
            var childElement = s.querySelector(":hover");
            if (childElement) {
                s = childElement;
                s.style.outline = '2px solid red';
            }
        }
    }

    function cleanupEventListeners() {
        document.removeEventListener("mouseover", onMouseOver);
        document.removeEventListener("mouseout", onMouseOut);
        document.removeEventListener("click", onRClick);
        document.removeEventListener("wheel", onWheel);
    }

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("click", onClick);
    document.addEventListener("contextmenu", onRClick);
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("wheel", onWheel, { passive: false });
})();
