// declaration des variables
let btn_form = document.querySelector("#btn_form");
let input_text = document.querySelector("#input_text");
let div_main = document.querySelector("#main");
let div_hestorique = document.querySelector(".hestorique");

let div_box_todo=document.querySelector("#box_todo");


btn_form.addEventListener("click", (e) => {
    e.preventDefault();

    // ---------------------------------- Creation des element --------------------------------------
    if (input_text.value == "") {
        alert("Aucun élément insérer !");
    } else {

        let element = `
        <div class="element todo" >
                <div class="contenu-element" id="select_elment">
                
                    <p class="paragraphe" > ${input_text.value} </p>
                    <div class="icone">
                        <i class=" valider fa-solid fa-check" value="done"  > </i>
                        <i class=" modifier fa-solid update fa-pen-to-square" ></i>
                        <i class=" suprimer fa-regular sup fa-circle-xmark" ></i>
                        <div class="div_select">
                            <select name="" id="do_select" class="do_select">
                                <option></option>
                                <option>Doing </option>
                                <option>Done </option>
                            </select>
                            <button class="btn-do_select" id="btn_do_select">
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
    `;
        div_main.innerHTML += element;


            input_text.value = "";







        div_hestorique.classList.add('show');

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
        });
    }

    // Supprimer Element
    let all_iS = document.querySelectorAll(".suprimer");
    for (let index = 0; index < all_iS.length; index++) {
        all_iS[index].addEventListener("click", () => {
            all_iS[index].parentElement.parentElement.parentElement.remove();
        });
    }
    // ----------------- end Validations, Modification et suprition des elements --------------------------


    // -------------------------------------------- do select ----------------------------

    let btn_do_select = document.querySelectorAll("#btn_do_select");
    let do_select = document.querySelectorAll("#do_select");
    // div
    let box_todo = document.querySelector("#box_todo");
    let box_doing = document.querySelector("#box_doing");
    let box_done = document.querySelector("#box_done");


    // tableaux
    let tab_todo = [];
    let tab_doing = [];
    let tab_done = [];



    for (let index = 0; index < btn_do_select.length; index++) {

        btn_do_select[index].addEventListener("click", () => {
            let divshoxbox=document.querySelector("#shoxbox");
            divshoxbox.classList.add('show');


            let selctV = do_select[index].value;
            let classElement = do_select[index].parentElement.parentElement.parentElement.parentElement;
            console.log(selctV);
            console.log(classElement);
            switch (selctV) {
                
                case "Doing":
                    if (!classElement.className.includes("doing")) {
                        classElement.classList.add("doing");
                        classElement.classList.remove("done");
                        classElement.classList.remove("todo");
                        let nom_element = classElement.firstElementChild.firstElementChild.textContent;
                        let index_sup_todo = tab_todo.indexOf(nom_element);
                        let index_sup_done = tab_done.indexOf(nom_element);
                        tab_todo.splice(index_sup_todo, 1);
                        tab_done.slice(index_sup_done, 1);
                        tab_doing.push(nom_element);
                    }
                    break;
                case "Done":
                    if (!classElement.className.includes("done")) {
                        classElement.classList.remove("doing");
                        classElement.classList.add("done");
                        classElement.classList.remove("todo");
                        let nom_element = classElement.firstElementChild.firstElementChild.textContent;
                        let index_sup_todo = tab_todo.indexOf(nom_element);
                        let index_sup_doing = tab_doing.indexOf(nom_element);
                        console.log("emplacement doing " + index_sup_doing);
                        console.log("emplacement todo " + index_sup_todo);
                        tab_todo.splice(index_sup_todo, 1);
                        tab_doing.splice(index_sup_doing, 1);
                        tab_done.push(nom_element);
                    }
                    break;
                default:
                    break;
            }
            console.log("tab_todo " + tab_todo);
            console.log("tab_doing " + tab_doing);
            console.log("tab_done " + tab_done);

            // --------------------------- creation de box ---------------
            switch (selctV) {
                case "Doing":

                box_doing.innerHTML = "";

                    for (let index = 0; index < tab_doing.length; index++) {
                        let element = tab_doing[index];

                        let box_contenu=`
                        <div class="element" >
                            <div class="contenu-element dowingV">
                                <p class="paragraphe" > ${element} </p>
                                <i class="fa-solid fa-hourglass-half"></i>                                
                            </div>                        
                        </div>                    
                        `;
                        box_doing.innerHTML += box_contenu;                        
                    }

                    break;
                case "Done":

                box_done.innerHTML = "";

                    for (let index = 0; index < tab_done.length; index++) {
                        let element = tab_done[index];

                        let box_contenu=`
                        <div class="element" >
                            <div class="contenu-element doneV">
                                <p class="paragraphe" > ${element} </p>
                                <i class="fa-solid fa-check-double"></i>                                
                            </div>                        
                        </div>                    
                        `;
                        box_done.innerHTML += box_contenu;                        
                    }

                    break;

                default:
                    break;
            }
            // --------------------------- creation de box ---------------


        })
    }
    // ------------------------------------------ end do select ----------------------------

});

// -------------------------------- select --------------------------
let select_option = document.querySelector("#select");
let btn_select = document.querySelector("#btn_select");
let div_hestorique_main = document.querySelector("#div_hestorique_main");

btn_select.addEventListener("click", (eoo) => {
    eoo.preventDefault();


    let all_element = document.querySelectorAll("#select_elment");
    let all_nom_element = [];
    let all_nom_elementV = [];
    let all_nom_elementNonV = [];

    for (let index = 0; index < all_element.length; index++) {
        let element = all_element[index];
        all_nom_element.push(element.firstElementChild.textContent);
        if (element.className.includes("greeen")) {
            all_nom_elementV.push(element.firstElementChild.textContent);

        } else {
            all_nom_elementNonV.push(element.firstElementChild.textContent);

        }
    }
    console.log("all " + all_nom_element);
    console.log("V " + all_nom_elementV);
    console.log("Non " + all_nom_elementNonV);

    console.log(select_option.value);

    switch (select_option.value) {
        case "All":
            div_hestorique_main.innerHTML = "";

            for (let index = 0; index < all_nom_element.length; index++) {
                let element = all_nom_element[index];
                let elem_select = `
                    <div class="element" >
                        <div class="contenu-element" >
                            <p > ${element} </p>                        
                        </div>
                    </div>
                `;
                div_hestorique_main.innerHTML += elem_select;
            }
            break;
        case "Non valider":
            div_hestorique_main.innerHTML = "";

            for (let index = 0; index < all_nom_elementNonV.length; index++) {
                let element = all_nom_elementNonV[index];
                let elem_select = `
                        <div class="element" >
                            <div class="contenu-element" >
                                <p > ${element} </p>                        
                            </div>
                        </div>
                    `;
                div_hestorique_main.innerHTML += elem_select;
            }
            break;
        case "Valider":
            div_hestorique_main.innerHTML = "";

            for (let index = 0; index < all_nom_elementV.length; index++) {
                let element = all_nom_elementV[index];
                let elem_select = `
                            <div class="element " >
                                <div class="contenu-element " >
                                    <p > ${element} </p>                        
                                </div>
                            </div>
                        `;
                div_hestorique_main.innerHTML += elem_select;
            }
            break;

        default:
            break;
    }
});
// ------------------------------ end select --------------------------

// --------------------------------------------- todo list 2 -----------------------------------------------------------------




// --------------------------------------------- end todo list 2 -----------------------------------------------------------------