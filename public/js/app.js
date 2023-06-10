// declaration des variables
let btn_form = document.querySelector("#btn_form");
let input_text = document.querySelector("#input_text");
let div_main = document.querySelector("#main");



btn_form.addEventListener("click", (e) => {
    e.preventDefault();

// ---------------------------------- Creation des element --------------------------------------
    if (input_text.value == "") {
        alert("Aucun élément insérer !");
    } else {
        let element = `
        <div class="element" >
            <div class="contenu-element" >
                <p class="paragraphe" > ${input_text.value} </p>
                <div class="icone">
                    <i class=" valider fa-solid fa-check" value="done"> </i>
                    <i class=" modifier fa-solid update fa-pen-to-square"></i>
                    <i class=" suprimer fa-regular sup fa-circle-xmark"></i>
                </div>
            </div>
        </div>
    `;
        div_main.innerHTML += element;
        input_text.value = "";
    }
// ---------------------------------------- end Creation des element -------------------------------------

// -------------------- Validations, Modification et suprition des elements --------------------------
    
    // Validier Element
    let all_iV = document.querySelectorAll(".valider");
    for (let index = 0; index < all_iV.length; index++) {
        all_iV[index].addEventListener("click", () => {
            console.log(11111111);
            all_iV[index].parentElement.parentElement.classList.toggle("greeen");
        });
    }

    // Modifier Element
    let all_iM = document.querySelectorAll(".modifier");
    for (let index = 0; index < all_iM.length; index++) {
        all_iM[index].addEventListener("click", () => {

            let pro = prompt(`Modifier la valeur de : ${all_iM[index].parentElement.previousElementSibling.textContent}`);
            if (pro.length == 0) {
                all_iM[index].parentElement.previousElementSibling.textContent = all_iM[index].parentElement.previousElementSibling.textContent;
            } else {
                all_iM[index].parentElement.previousElementSibling.textContent = pro;
            }
        });    }

    // Supprimer Element
    let all_iS = document.querySelectorAll(".suprimer");
    for (let index = 0; index < all_iS.length; index++) {
        all_iS[index].addEventListener("click", () => {
            all_iS[index].parentElement.parentElement.parentElement.remove();
        });
    }
// ----------------- end Validations, Modification et suprition des elements --------------------------












});

