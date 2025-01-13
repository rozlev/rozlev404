const properties = [
    { 
        title: "Modern lakás a Budapesten", 
        description: "Kiváló állapotú, 2 szobás lakás nagy erkéllyel és modern berendezésekkel, közel a metróállomáshoz.", 
        price: 50000000, 
        location: "Budapest",
        image: "modern_lakas.png"
    },
    { 
        title: "Családi ház", 
        description: "Tágas családi ház nagy kerttel, három hálószobával és egy garázzsal. Csendes környék.", 
        price: 70000000, 
        location: "Debrecen",
        image: "csaladihaz.jfif"
    },
    { 
        title: "Luxus penthouse Budapesten", 
        description: "Lenyűgöző panorámás kilátás a Dunára, tetőterasz, saját lift és 4 hálószoba.", 
        price: 150000000, 
        location: "Budapest",
        image: "buapest.jfif"
    },
    { 
        title: "Kis lakás a belváros szívében", 
        description: "Ideális egyedülállóknak vagy fiatal pároknak, 1 hálószobás lakás modern konyhával.", 
        price: 35000000, 
        location: "Pécs",
        image: "pecs.jfif"
    },
    { 
        title: "Nyaraló a Balaton partján", 
        description: "Közvetlen vízparti hozzáféréssel rendelkező nyaraló, két hálószobával és egy nagy terasszal.", 
        price: 80000000, 
        location: "Balatonfüred",
        image: "balatoni_lakas.jfif"
    },
    { 
        title: "Új építésű társasház", 
        description: "Egy modern lakóparkban található, kényelmes 3 szobás lakás parkolóval és játszótérrel.", 
        price: 62000000, 
        location: "Győr",
        image: "gyor.jpg"
    },
    { 
        title: "Parasztház vidéken", 
        description: "Hagyományos stílusú parasztház felújított belsővel, hatalmas udvarral és kerti tóval.", 
        price: 28000000, 
        location: "Eger",
        image: "paraszthaz.jpg"
    },
    { 
        title: "Irodahelyiség", 
        description: "Ideális kisvállalkozások számára, tágas irodahelyiség és tárgyalóval.", 
        price: 100000000, 
        location: "Szeged",
        image: "irodahelyseg.jfif"
    },
    { 
        title: "Társasházi lakás", 
        description: "Nyugodt környezetben található, két hálószobás lakás, közel egy parkhoz.", 
        price: 42000000, 
        location: "Székesfehérvár",
        image: "tarasashaz.jfif"
    },
    { 
        title: "Felújított panel lakás", 
        description: "Frissen felújított, energiatakarékos panel lakás két hálószobával és új konyhabútorral.", 
        price: 30000000, 
        location: "Miskolc",
        image: "panellakas.jpg"
    },
    { 
        title: "Hegyi villa panorámával", 
        description: "Lélegzetelállító kilátás a hegyekre, tágas nappali, kandalló és nagy terasz.", 
        price: 120000000, 
        location: "Mátra",
        image: "https://i.szalas.hu/hotels/477635/original/17538340.jpg"
    },
    { 
        title: "Kertes családi ház garázzsal", 
        description: "Tágas kertes ház négy hálószobával, garázzsal és egy medencével.", 
        price: 95000000, 
        location: "Kecskemét",
        image: "https://th.bing.com/th/id/OIP.nKZIgmR6f3lDnZHqY8UpOgHaEo?rs=1&pid=ImgDetMain"
    }
];

const propertyContainer = document.querySelector(".properties");
const modal = document.getElementById("inquiry-modal");
const inquiryForm = document.getElementById("inquiry-form");
const closeModalButton = document.getElementById("close-modal-button");
const propertyForm = document.getElementById("property-form");

function displayProperties() {
    propertyContainer.innerHTML = ""; 
    properties.forEach((property, index) => {
        const propertyDiv = document.createElement("div");
        propertyDiv.classList.add("property");

        const imageSrc = property.image ? property.image : 'default-image.jpg'; 

        propertyDiv.innerHTML = `
            <img src="${imageSrc}" alt="${property.title}" class="property-image" />
            <h3>${property.title}</h3>
            <p>${property.description}</p>
            <p><strong>Ár:</strong> ${property.price} Ft</p>
            <p><strong>Helyszín:</strong> ${property.location}</p>
            <button onclick="openInquiryModal(${index})">Érdeklődés</button>
        `;
        propertyContainer.appendChild(propertyDiv);
    });
}

displayProperties();

propertyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const location = document.getElementById("location").value;

    if (title && description && price && location) {
        const newProperty = {
            title: title,
            description: description,
            price: parseInt(price),
            location: location,
            image: 'default-image.jpg' 
        };

        properties.push(newProperty);

        displayProperties();

        propertyForm.reset();
        alert("Új hirdetés sikeresen felvéve!");
    } else {
        alert("Kérlek, töltsd ki az összes mezőt!");
    }
});

function openInquiryModal(index) {
    window.currentPropertyIndex = index;
    modal.style.display = "block";
}

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

inquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("inquiry-name").value;
    const address = document.getElementById("inquiry-address").value;
    const phone = document.getElementById("inquiry-phone").value;

    if (name && address && phone) {
        const property = properties[window.currentPropertyIndex];
        const subject = encodeURIComponent(`Érdeklődés: ${property.title}`);
        const body = encodeURIComponent(`
            Név: ${name}
            Cím: ${address}
            Telefonszám: ${phone}
            Ingatlan: ${property.title}
            Ár: ${property.price} Ft
            Helyszín: ${property.location}
        `);
        const mailto = `mailto:rozlev404@hengersor.hu?subject=${subject}&body=${body}`;
        
        window.location.href = mailto;  

        modal.style.display = "none"; 
    } else {
        alert("Kérlek töltsd ki az összes mezőt!");
    }
});