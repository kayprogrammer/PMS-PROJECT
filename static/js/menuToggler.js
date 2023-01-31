
let ToggleFullMenuStatus = false;
const ToggleFullMenu = () => {
    let option = document.querySelector("#toggle-full-menu");
    let mainPage = document.querySelector("#mainPageDiv");

    if (!ToggleFullMenuStatus) {
        document.querySelector('#menu-wo-icons').style.display = 'block';
        document.querySelector('#menu-w-icons').style.display = 'none';

        //console.log(`Screen width: ${screen.width}`);
        screen.width >= 1024 && screen.width < 1280 ? mainPage.style.marginLeft == "-10rem" : mainPage.style.marginLeft;
        screen.width >= 1280 ? mainPage.style.marginLeft = "-20rem" : mainPage.style.marginLeft;

        mainPage.style.width = "90vw";
        mainPage.style.padding = ".5rem";

    }
    else {
        document.querySelector('#menu-w-icons').style.display = 'block';
        document.querySelector('#menu-wo-icons').style.display = 'none';

        mainPage.style.marginLeft = "0";
        mainPage.style.width = "80vw";
        mainPage.style.padding = "1.5rem";
    }
    ToggleFullMenuStatus = !ToggleFullMenuStatus;
}

let TogglePersMenuStatus = false;
let ToggleCseMenuStatus = false;
let TogglePostingMenuStatus = false;
let TogglePromotionMenuStatus = false;
let ToggleSeparationMenuStatus = false;
let ToggleGalleryMenuStatus = false;
let ToggleConfigMenuStatus = false;
let ToggleRptMenuStatus = false;

const ToggleSubListingMenu = (toggler) => {
    switch (toggler) {
        case 'pers':
            togglerArrowDirection(TogglePersMenuStatus, toggler);
            TogglePersMenuStatus = !TogglePersMenuStatus;
            break;
        case 'rpt':
            togglerArrowDirection(ToggleRptMenuStatus, toggler);
            ToggleRptMenuStatus = !ToggleRptMenuStatus;
            break;
        case 'cse':
            togglerArrowDirection(ToggleCseMenuStatus, toggler);
            ToggleCseMenuStatus = !ToggleCseMenuStatus;
            break;
        case 'posting':
            togglerArrowDirection(TogglePostingMenuStatus, toggler);
            TogglePostingMenuStatus = !TogglePostingMenuStatus;
            break;
        case 'promotion':
            togglerArrowDirection(TogglePromotionMenuStatus, toggler);
            TogglePromotionMenuStatus = !TogglePromotionMenuStatus;
            break;
        case 'separation':
            togglerArrowDirection(ToggleSeparationMenuStatus, toggler);
            ToggleSeparationMenuStatus = !ToggleSeparationMenuStatus;
            break;
        case 'gallery':
            togglerArrowDirection(ToggleGalleryMenuStatus, toggler);
            ToggleGalleryMenuStatus = !ToggleGalleryMenuStatus;
            break;
        case 'config':
            togglerArrowDirection(ToggleConfigMenuStatus, toggler);
            ToggleConfigMenuStatus = !ToggleConfigMenuStatus;
            break;
        default:
            break;
    }
}

const togglerArrowDirection = (statusCheck, toggler) => {
    if (!statusCheck) {
        document.querySelector(`.${toggler}-menu-toggle-on`).style.display = 'block';
        document.querySelector(`.${toggler}-menu-toggle-off`).style.display = 'none';
        return;
    }

    document.querySelector(`.${toggler}-menu-toggle-on`).style.display = 'none';
    document.querySelector(`.${toggler}-menu-toggle-off`).style.display = 'block';
};