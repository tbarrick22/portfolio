// Make osil logo appear and dissapear
// Create event target:
const osilTarget = document.getElementById("osil-box");

// Create event handler function
const selectedOsil = () => {
	let logoDisplay = osilTarget.children[2].style.display;
	if (logoDisplay === "none" || logoDisplay === "") {
		osilTarget.children[2].style.display = "block";
	} else {
		osilTarget.children[2].style.display = "none";
	}
};

// Event handler registration
osilTarget.addEventListener("click", selectedOsil);

// Make footer note appear on hover
// Create event target:
const footTarget = document.querySelector("footer");
const footerNote = document.getElementById("footer-note");

// Create event handler function
const enterFoot = () => {
	footerNote.style.display = "inline";
};

const exitFoot = () => {
	footerNote.style.display = "none";
};

// Event handler registration
footTarget.addEventListener("mouseenter", enterFoot);
footTarget.addEventListener("mouseleave", exitFoot);
