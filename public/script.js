console.log("poopfart");

const showCrafts = async () => {
    try {
        let response = await fetch("/api/crafts");
        let craftJSON = await response.json();
        let craftDiv = document.getElementById("craft-list");

        craftDiv.innerHTML = ""; 

        craftJSON.forEach((craft) => {
            let section = document.createElement("section");
            craftDiv.append(section);

            let img = document.createElement("img");
            img.src = craft.image;
            img.className = "craft-image";
            img.onclick = () => showModal(craft);
            section.append(img);
        });

        let addCraftButton = document.createElement("button");
        addCraftButton.textContent = "Add New Craft";
        addCraftButton.onclick = openAddCraftModal;
        craftDiv.append(addCraftButton);
    } catch (error) {
        console.error("Error fetching crafts:", error);
    }
};

function showModal(craft, editMode = false) {
    const modal = document.getElementById('myModal');
    const craftName = modal.querySelector('#craft-name');
    const craftImage = modal.querySelector('#craft-image');
    const craftDescription = modal.querySelector('#craft-description');
    const craftForm = modal.querySelector('#craft-form');
    const saveButton = modal.querySelector('button[type="submit"]');
    const editButton = modal.querySelector('#edit-button');

    craftForm.style.display = 'none';

    if (editMode) {
        const nameInput = craftForm.querySelector('#name');
        const descriptionInput = craftForm.querySelector('#description');
        nameInput.value = craft.name;
        descriptionInput.value = craft.description;

        saveButton.textContent = 'Update';
        saveButton.onclick = () => saveCraft(event, craft._id);

        editButton.style.display = 'none';
    } else {
        craftName.textContent = craft.name;
        craftImage.src = craft.image;
        craftDescription.textContent = craft.description;

        saveButton.textContent = 'Save';
        saveButton.onclick = saveCraft;

        editButton.style.display = 'block';
    }

    modal.style.display = 'block';
};

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
};

async function saveCraft(event, craftId) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fetchOptions = {
        method: 'PUT',
        body: formData
    };

    try {
        const response = await fetch(`/api/crafts/${craftId}`, fetchOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        closeModal();
        showCrafts();
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

function openAddCraftModal() {
    const modal = document.getElementById('myModal');
    const craftForm = modal.querySelector('#craft-form');
    const saveButton = modal.querySelector('button[type="submit"]');
    
    craftForm.reset();
    saveButton.textContent = 'Save';

    modal.style.display = 'block';
};

function toggleEditMode(craftId) {
    const modal = document.getElementById('myModal');
    const craftForm = modal.querySelector('#craft-form');
    const saveButton = modal.querySelector('button[type="submit"]');
    const editButton = modal.querySelector('#edit-button');

    editButton.style.display = 'none';
    craftForm.style.display = 'block';

    saveButton.textContent = 'Update';
    saveButton.onclick = () => saveCraft(event, craftId);
};

window.onload = () => {
    showCrafts();
};
