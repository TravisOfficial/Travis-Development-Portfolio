
// =====================================
// TRAVIS RAMIREZ - PORTFOLIO JAVASCRIPT
// =====================================

// MOBILE NAVIGATION

function toggleMenu() {
    document.getElementById("nav").classList.toggle("open");
}


// EDIT WEBSITE

let editMode = false;

function toggleEdit() {

    editMode = !editMode;

    const editableElements = document.querySelectorAll(
        ".hero-content p, .hero-content h1, .hero-content h3, .about-grid p, .project-info h3, .project-info p, .contact-container p, .hero-footer b"
    );

    editableElements.forEach(element => {
        element.contentEditable = editMode;

        if (editMode) {
            element.style.outline = "1px dashed #efa51c";
            element.style.outlineOffset = "4px";
        } else {
            element.style.outline = "none";
        }
    });

    if (editMode) {
        alert("Edit mode enabled! Click the highlighted text to edit it. Click EDIT WEBSITE again when finished.");
    } else {
        saveChanges();
        alert("Changes saved!");
    }
}


// SAVE TEXT CHANGES

function saveChanges() {

    const editableElements = document.querySelectorAll(
        ".hero-content p, .hero-content h1, .hero-content h3, .about-grid p, .project-info h3, .project-info p, .contact-container p, .hero-footer b"
    );

    const content = [];

    editableElements.forEach(element => {
        content.push(element.innerHTML);
    });

    localStorage.setItem(
        "portfolioContent",
        JSON.stringify(content)
    );
}


// LOAD SAVED TEXT

function loadChanges() {

    const savedContent = localStorage.getItem("portfolioContent");

    if (!savedContent) return;

    const content = JSON.parse(savedContent);

    const editableElements = document.querySelectorAll(
        ".hero-content p, .hero-content h1, .hero-content h3, .about-grid p, .project-info h3, .project-info p, .contact-container p, .hero-footer b"
    );

    editableElements.forEach((element, index) => {

        if (content[index] !== undefined) {
            element.innerHTML = content[index];
        }

    });

}


// CHANGE PROFILE PHOTO

function changePhoto(event) {

    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please select an image.");
        return;
    }

    if (file.size > 4 * 1024 * 1024) {
        alert("Please select an image smaller than 4 MB.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

        const photo = document.getElementById("profilePhoto");

        photo.src = e.target.result;
        photo.style.display = "block";

        document.getElementById("photoPlaceholder").style.display = "none";

        localStorage.setItem("profilePhoto", e.target.result);

    };

    reader.readAsDataURL(file);

}


// LOAD PROFILE PHOTO

function loadPhoto() {

    const savedPhoto = localStorage.getItem("profilePhoto");

    if (savedPhoto) {

        document.getElementById("profilePhoto").src = savedPhoto;

        document.getElementById("profilePhoto").style.display = "block";

        document.getElementById("photoPlaceholder").style.display = "none";

    }

}


// PROFILE PHOTO UPLOAD CONTROL

function createPhotoUpload() {

    const input = document.createElement("input");

    input.type = "file";
    input.accept = "image/png,image/jpeg,image/webp";
    input.style.display = "none";

    input.addEventListener("change", changePhoto);

    document.body.appendChild(input);

    const editButton = document.querySelector(".edit-button");

    editButton.addEventListener("contextmenu", function(event) {

        event.preventDefault();

        input.click();

    });

}


// CURRENT YEAR

document.getElementById("year").textContent = new Date().getFullYear();


// INITIALIZE

document.addEventListener("DOMContentLoaded", function() {

    loadChanges();
    loadPhoto();
    createPhotoUpload();

});