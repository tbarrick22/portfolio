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
