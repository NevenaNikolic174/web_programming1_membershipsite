console.log("Provera");
var url = window.location.pathname;

window.onload = function(){

    dinamickiMeni();
    footer();
    
     $("#mojNav ul").hide();
     $("#kliknaA").on("click", function(){
         $("ul").find("ul").slideToggle('slow');
     });
     
    if(url == "/" || url == "/index.html"){
        UcitavanjeIndex();
        changeTitle();
        document.getElementById("btnKlik").addEventListener("click", proveraForme);
        
       
        
    }
    if(url == "/autor.html"){
        changePicture();

    }
}

/*ddl lista */ 
function dinamickiMeni(){
    let ispisNavMeni = "";
    var nizHref = new Array("index.html","index.html#about", "index.html#services", "index.html#plans", "#contact");
    var nizTekst = new Array("Home", "About", "Services", "Plans", "Contact");
    var nizDDLHref = new Array("autor.html", "DokumentacijaWeb1.pdf");
    var nizDDLTekst = new Array("Author", "Dokumentacija");
    
    for(let indeks in nizTekst) {
        ispisNavMeni += `<li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="${nizHref[indeks]}">${nizTekst[indeks]}</a>
                        </li>`
    }
    ispisNavMeni += `<li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle"  id="kliknaA" data-bs-toggle="dropdown" aria-expanded="false" href="#">Drop</a>
    
                        <ul class="dropdown-menu" >`
    for(let indeks in nizDDLTekst) {
        ispisNavMeni += ` <li><a class="dropdown-item" class="linkoviMenija" href="${nizDDLHref[indeks]}">${nizDDLTekst[indeks]}</a></li>
                            <li><div class="dropdown-divider"></div></li>`
    }
    document.querySelector("#mojNav").innerHTML = ispisNavMeni;
}


function footer(){
    var nizLinkFooter = new Array("https://www.facebook.com/","https://twitter.com/","https://www.instagram.com/","../root/sitemap.xml");
    var nizIkonicaFooter = new Array("fab fa-facebook-f","fab fa-twitter","fab fa-instagram", "fa fa-sitemap");
    let ispisIkonicaFooter = "";
    for(let indeks in nizLinkFooter) {
        ispisIkonicaFooter += `<div class="me-3">
                                    <a href="${nizLinkFooter[indeks]}">
                                        <i class="${nizIkonicaFooter[indeks]} fa-2x py-2"></i>
                                    </a>
                                </div>`
    }
    
    document.querySelector("#ikoniceFooter").innerHTML = ispisIkonicaFooter;
    //Footer menu
    var nizH4 = ["Quick Links","Useful Links"];
    var quickLinks = ["About", "Services", "Plans", "Contact"];
    var quickLinksHref = ['index.html#about','index.html#services','index.html#plans','index.html#contact'];
    var userfulLinks = ["Privacy", "Terms", "Disclaimer", "FAQ"];
    var userfulLinksHref = ['#','#','#','#'];
    var ispisFootera = "";
    printFooterBlocks(quickLinks, quickLinksHref, "Quick Links", "ispisFooter1");
    printFooterBlocks(userfulLinks, userfulLinksHref, "Useful Links", "ispisFooter2");
    function printFooterBlocks(arr, arrHref, title, elBlock){
        let ispisFootera = `
                        <div>
                        <h4 class="py-2">${title}</h4>
                        `
        for(let i in arr) {
         ispisFootera += `<div class="d-flex align-items-center py-2">
                                <i class="fas fa-caret-right"></i>
                                <a href="${arrHref[i]}"><p class="ms-3">${arr[i]}</p></a>
                            </div>
                            `
        ispisFootera += "</div>";
    }
    document.querySelector(`#${elBlock}`).innerHTML = ispisFootera;
    }
}
function UcitavanjeIndex(){


//Information
let ispisSelekcije = "";
var ispisHTeksta = ["Download 1 GBPS", "99% Internet Uptime", "24/7 Support"];
var ispisPTeksta = ["Get the best WiFi for your home with the FineX Gateway. It's built to boost WiFi performance for all your devices by optimizing WiFi channels.", "Super speedy uploads and downloads for buffer-free streaming, lag-free gaming and uninterrupted video calls.", "Have questions? Instant support from caring humans — not bots. Our locally based experts canhelp with any connected device any time of day, and they’ll never try to sell you a thing."];
var iTagovi = ["fas fa-tachometer-alt fa-3x p-2","fas fa-clock fa-3x p-2","fas fa-headset fa-3x p-2"];
for(let vrednost in iTagovi) {

    ispisSelekcije += `<div class="col-lg-4 text-center p-5" data-aos="zoom-in">
                            <i class="${iTagovi[vrednost]}"></i>
                            <h4 class="py-3">${ispisHTeksta[vrednost]}</h4>
                            <p class="para-light">${ispisPTeksta[vrednost]}</p>
                        </div>`                   
}
document.querySelector("#selekcija").innerHTML = ispisSelekcije;

//About Us: 

let naslovAboutUs = document.querySelector(".noviTekst");
naslovAboutUs.innerHTML = "We are top internet <br> service company</br>";
var tekstAboutUs = document.getElementsByClassName("py-2 para-light")[0].innerHTML = `FINEX makes wholesale easy so our customers can be more successful. 
Our end-to-end platform serves the remarketing needs of the world’s largest OEMs, 
dealers, fleet operators, rental companies, and financial institutions.
We’re a technology company delivering next generation tools to accelerate and simplify remarketing.`;
var tekstAboutUs = document.getElementsByClassName("py-2 para-light")[1].innerHTML = `Our integrated digital marketplaces and vehicle logistics centers reduce risk, improve transparency and streamline 
the experience for customers in about 75 countries. KAR continues to make investments in innovation, strategic acquisitions,
and integrations to better serve our customers.`;
let slikaAboutUs = document.querySelector(".img-fluid1").alt = "About Us";

/*MouseOver Slike*/
slika1.addEventListener("mouseover", function() {

    slika1.src="./assets/images/telefon.png";
})
slika1.addEventListener("mouseout", function() {

    slika1.src="./assets/images/cardFinex.png";
})

//Services
let tekstServices = document.getElementById("tekstOurServices").textContent = "We also help protect your internet connection with comprehensive security solutions, troubleshoot operating system issues, set up wireless networks, parental controls and much more.";

var ispisIkonicaServices = new Array("fas fa-home fa-2x","fas fa-wifi fa-2x","fas fa-phone fa-2x","fas fa-mobile fa-2x","fas fa-home fa-2x","fas fa-tv fa-2x");
var ispisNaslovaServices = new Array("HOME BROADBAND","HOME WI-FI","SOCIAL","MOBILE CONNECTION","SECURITY","TV SETUP BOX");
var ispisTekstaServices = new Array("Save and take advantage of special discounts when you subscribe to a FineX internet plan and/or bundle it with TV.",
                                    "Our intelligent WiFi hub plugs into your home’s existing wiring and blankets your whole home in ultra-fast internet.",
                                    "Friendships and Relationships But perhaps most important, FineX's network offers you the opportunity to form strong friendships.",
                                    "FineX Business users can expect download speeds of up to 350 Mbps and latency of 20-40ms.",
                                    "Protect users, applications, and infrastructure by extending security to all points of connection across your network.",
                                    "From Netflix and YouTube to music apps, you can stream all your favorites and easily search across them using voice commands.");
var ispisBlokova = ""; 
for(let indeks in ispisIkonicaServices){
    ispisBlokova += `<div class="col-lg-4">
                        <div class="card bg-transparent">
                            <i class="${ispisIkonicaServices[indeks]}"></i>
                            <h4 class="py-2">${ispisNaslovaServices[indeks]}</h4>
                            <p class="para-light">${ispisTekstaServices[indeks]}</p>
                        </div>
                    </div>`
}
document.querySelector("#blokoviServices").innerHTML = ispisBlokova;

//OUR PLANS BUNDLES
var nizNaslovSelekcije = ["BASIC BUNDLE","BUSINESS BUNDLE","PREMIUM BUNDLE"];
var nizGlavnogTekstaSelekcije = ["12Mbps","20-50Mbps","100+ Mbps"];
var nizTekstaBundle1 = ["Strong, fast Wi-Fi to work and play.",
                        "Live TV, 40,000+ on-demand titles.",
                        "No annual contract.",
                        "HBO Max™, SHOWTIME®, STARZ®, EPIX®"];
var nizTekstaBundle2 = ["A winning combo of sports and news.",
                        "Live TV, 45,000+ on-demand titles.",
                        "Stream anytime, anywhere.",
                        "HBO Max™, SHOWTIME®, STARZ®, EPIX® and Cinemax®"];
var nizTekstaBundle3 = ["Get the essentials for non-stop entertainment.",
                        "Live TV, 50,000+ on-demand titles.",
                        "Watch your favorite entertainment in one place.",
                        "FINEX® ENTERTAINMENT package"];
var nizCene = ["$24/Month","$99/Month","$199/Month"];
                     
var ispisBlokovaSelekcije = "";

selekcijaBlokova(nizTekstaBundle1, "BASIC BUNDLE","12Mbps", "$24/Month", "selector1");
selekcijaBlokova(nizTekstaBundle2, "BUSINESS BUNDLE","20-50Mbps","$99/Month","selector2");
selekcijaBlokova(nizTekstaBundle3, "PREMIUM BUNDLE", "100+ Mbps", "$100+ Mbps/Month","selector3");
function selekcijaBlokova(arrTekstovi, naslov,glavniTekst, cene, poziv)
{
    let ispisBlokovaSelekcije = `<div class="card bg-transparent px-4">
                                <h4 class="py-2">${naslov}</h4>
                                <p class="py-3">${glavniTekst}</p>`
    for(let i in arrTekstovi)
    {
        ispisBlokovaSelekcije += `<div class="block d-flex align-items-center">
                                    <p class="pe-2"><i class="far fa-check-circle fa-1x"></i></p> 
                                    <p>${arrTekstovi[i]}.</p>
                                </div>`
    }
       ispisBlokovaSelekcije += `<h4 class="py-3">${cene}</h4>
                                <div class="my-3">
                                <a class="btn" href="#your-link" >View Plans</a>
                                </div></div>`       
document.querySelector(`#${poziv}`).innerHTML = ispisBlokovaSelekcije;               
}
//Work

var nizIkonicaWork = ["fas fa-briefcase fa-2x text-start","fas fa-award fa-2x","fas fa-users fa-2x","fas fa-clock fa-2x"];
var nizDataVal = ["825","1050","1180","650"];
var nizPWork = ["COOPERATION COMPLETED","AWARDS","CUSTOMER ACTIVE","GOOD REVIEWS"];

var ispisWork = "";
for(indeks in nizDataVal){

    ispisWork += `<div class="col-6 text-start">
                    <i class="${nizIkonicaWork[indeks]}"></i>
                    <h2 class="num" data-val="${nizDataVal[indeks]}" >000</h2>
                    <p>${nizPWork[indeks]}</p>
                </div>`
}
document.querySelector("#work1").innerHTML = ispisWork;

let vrednosti = document.querySelectorAll(".num");
let interval = 500;
vrednosti.forEach(vrednosti => {

    let pocetnaVrednost = 0;
    let poslednjaVrednost = parseInt(vrednosti.getAttribute("data-val")); //ovde sam uzela one vrednoti koje sam stavila u html-u
    
    let vreme = Math.floor(interval / poslednjaVrednost);
    let brojac = setInterval(function () {
        pocetnaVrednost+= 1;
        vrednosti.textContent = pocetnaVrednost;

        if(pocetnaVrednost == poslednjaVrednost){
            clearInterval(brojac);
        }
    }, vreme);
});
//Testimonial
var nizTekstaTestimonials = ["Our sales rep has been very helpful and has gone out of his way to make our transition to Broadband a painless process.",
                            "As a technical professional, I appreciated the approach of ‘this is how it is’ without the sales-man sugar coating techniques.",
                            "Your willingness to educate me, work to truly understand our business needs, and assistance in navigating thru this arena truly go above and beyond anything I ever expected.",
                            "Your help in every transition we make is fundamental and greatly appreciated."];
var nizSlikaTestimonials = ["testimonial-1.jpg","testimonial-2.jpg","testimonial-3.jpg","testimonial-4.jpg"];
var nizImenaTestimonials = ["Marlene Visconte","John Spiker","Stella Virtuoso","Mike tim"];
var nizKomentaraTestimonials = ["General Manager - Scouter","Team Leader - Vanquish","Design Chief - Upscale","Investor - TechGroww"];

let ispisTestimonials = "";

for(let i=0; i<nizTekstaTestimonials.length; i++){

    ispisTestimonials += `<div class=" testimonials" >
                                <div class="testimonial-card p-4">
                                    <p>${nizTekstaTestimonials[i]}</p>
                                
                                    <div class="d-flex pt-4">
                                        <div>
                                            <img class="avatar" src="./assets/images/${nizSlikaTestimonials[i]}" alt="testimonial">
                                        </div>
                                        <div class="ms-3 pt-2">
                                            <h6>${nizImenaTestimonials[i]}</h6>
                                            <p>${nizKomentaraTestimonials[i]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`

}
document.querySelector('#idTestimonials').innerHTML = ispisTestimonials;
$(document).ready(function() {
    var $roditeljSlider = $('#idTestimonials');
    var $slideri = $roditeljSlider.find('.testimonials');
    var brojSlajdera = $slideri.length;
    var trenutniSlider = 0;

    $slideri.hide();
    $slideri.eq(trenutniSlider).show();
 
    var $nextButton = $('.sledeci');
    var $prevButton = $('.prethodni');
  
    $nextButton.click(function() {
        trenutniSlider++;
      if (trenutniSlider >= brojSlajdera) {
        trenutniSlider = 0;
      }

      $slideri.hide();
      $slideri.eq(trenutniSlider).show();
    });

    $prevButton.click(function() {
   
        trenutniSlider--;

      if (trenutniSlider < 0) {
        trenutniSlider = brojSlajdera - 1;
      }
      $slideri.hide();
      $slideri.eq(trenutniSlider).show();
    });
  });

//Newsletter
regEmail = /^[a-z]{2,}[\.]?([a-z]|[0-1])*\@(gmail|yahoo|ict.edu|outlook)(.com|.rs)$/;;
document.querySelector("#btnPolje").addEventListener("click", function() {
    var objEmail;
    objEmail = document.querySelector("#poljeEmail");
 
    if(!regEmail.test(objEmail.value)) {
        objEmail.nextElementSibling.classList.add('prikaz');
        objEmail.nextElementSibling.nextElementSibling.classList.remove("prikaz2");
    }
    else {
        objEmail.nextElementSibling.classList.remove("prikaz");
        objEmail.nextElementSibling.nextElementSibling.classList.add("prikaz2");
        objEmail = objEmail.value;
        console.log(objEmail);
    }
});

//Contact forma
var inputTag = document.createElement('input'); //Kreiranje inputTag za FullName
inputTag.setAttribute("type", "text");
inputTag.setAttribute("class", "form-control form control-input");
inputTag.setAttribute("id", "imePrezime");
inputTag.setAttribute("placeholder", "Enter your FullName");
document.getElementById("inputImePrezime").appendChild(inputTag);

var inputTag2 = document.createElement('input'); // Kreiranje inputTag za Email
inputTag2.setAttribute("type", "email");
inputTag2.setAttribute("class", "form-control form control-input");
inputTag2.setAttribute("id", "mejl");
inputTag2.setAttribute("placeholder", "Enter your e-mail");
document.getElementById("inputMejl").appendChild(inputTag2);

var arrTextOptions = ["Aranđelovac","Beograd","Valjevo","Kragujevac","Čačak","Leskovac","Niš","Novi Sad","Pančevo","Šabac"];
var arrValueOptions = ["AR", "BG", "VA","KG", "ČA", "LE", "NI", "NS","PA","ŠA"];

//Node DDL
var tagSelect = document.createElement('select');
tagSelect.setAttribute("class", "form-select");
tagSelect.setAttribute("id", "lista");
tagSelect.setAttribute("aria-label","Default select example");

var glavniOption = document.createElement('option');
glavniOption.setAttribute("value", "0");
var tekstGlavnogOption = document.createTextNode("Choose your city");
glavniOption.appendChild(tekstGlavnogOption);

tagSelect.appendChild(glavniOption);

for(let i=0; i<arrTextOptions.length; i++) {
    var tagsOptions = document.createElement('option');
    tagsOptions.setAttribute("value", arrValueOptions[i]);
    var sadrzajOptions = document.createTextNode(arrTextOptions[i]);
    tagsOptions.appendChild(sadrzajOptions);
    tagSelect.appendChild(tagsOptions);
}
document.querySelector("#padajucaLista").appendChild(tagSelect);
//Node RadioButton
var tagInputValue = ["M","F"];
var textLabel = ["Male",  "Female"];
for(let i=0; i<tagInputValue.length; i++){
    var tagInputRadio = document.createElement('input');
    tagInputRadio.setAttribute("class", "form-check-input");
    tagInputRadio.setAttribute("type", "radio");
    tagInputRadio.setAttribute("name", "rbPol");
    tagInputRadio.setAttribute("value", tagInputValue[i]);

    var tagLabel = document.createElement('label');
    tagLabel.setAttribute("class", "form-check-label");
    tagLabel.setAttribute("for", "flexRadioDefault1");
    var tekstLabele = document.createTextNode(textLabel[i]);

    tagLabel.appendChild(tekstLabele);
    document.querySelector("#radio").appendChild(tagInputRadio);
    document.querySelector("#radio").appendChild(tagLabel);
}
//Node CheckBox
var arrTekstLabels = ["Instagram","Facebook","Nowhere"];
var arrInputValues = ["I", "F","N"];
for(let i=0; i<arrTekstLabels.length; i++) {
    var inputCheck = document.createElement('input');
    inputCheck.setAttribute("type", "checkbox");
    inputCheck.setAttribute("name", "cbBlock");
    inputCheck.setAttribute("value", arrInputValues[i]);
    document.querySelector("#cbLista").appendChild(inputCheck);

    var labelCheck = document.createElement('label');
    labelCheck.setAttribute("class", "form-check-label");
    labelCheck.setAttribute("for", "cbBlock");
    var textLabelCheck = document.createTextNode(arrTekstLabels[i]);
    labelCheck.appendChild(textLabelCheck);
    document.querySelector("#cbLista").appendChild(labelCheck);
}
// Obrada gresaka Forme
//btnKlik.addEventListener("click", proveraForme); 

//Location
var nizIkonicaLokacije = new Array("far fa-map fa-3x","fas fa-mobile-alt fa-3x",
                                    "far fa-envelope fa-3x","far fa-clock fa-3x");
var nizNaslovaLokacije = new Array("ADDRESS","CALL FOR QUERY","SEND US MESSAGE","OPENING HOURS");
var nizTekstaLokacije = new Array("Teuku Umar ST. 1919","(800) 265  216 2020",
                                "infodemofile@gmail.com","09:00 AM - 18:00 PM");
let ispisLokacije ="";
for(let indeks in nizIkonicaLokacije){
    ispisLokacije+=`<div class="col-lg-3 d-flex align-items-center" >
                        <div class="p-2"><i class="${nizIkonicaLokacije[indeks]}"></i></div>
                        <div class="ms-2">
                            <h6>${nizNaslovaLokacije[indeks]}</h6>
                            <p>${nizTekstaLokacije[indeks]}</p>
                        </div>
                    </div>`
}
document.getElementById("lokacijaID").innerHTML = ispisLokacije;
//Brojac karaktera za textarea
$('#tekstualnoPolje').keyup(function() {
    
var brojacKaraktera = $(this).val().length,
    trenutni = $('#trenutniBroj'),
    maksimalan = $('#maksimalanBroj'),
    brojac = $('#brojac');
      
    trenutni.text(brojacKaraktera);
   
if (brojacKaraktera < 100) {
    trenutni.css('color', '#556');
}
if (brojacKaraktera > 70 && brojacKaraktera < 90) {
    trenutni.css('color', '#6d5555');
}
if (brojacKaraktera > 100 && brojacKaraktera < 200) {
    trenutni.css('color', '#841c1c');
}
    
if (brojacKaraktera >= 180) {
    maksimalan.css('color', '#8f0001');
    trenutni.css('color', '#8f0001');
    brojac.css('font-weight','bold');
} else {
    maksimalan.css('color','#666');
    brojac.css('font-weight','normal');
}
});
} 
function changeTitle(){
    var rec = ["Broadband", "wi-fi", "dial-up"];
    let spanNaslov = document.querySelector("#changeNaslov");
    var brojac=0;
function promenaReci(){
    spanNaslov.innerHTML=rec[brojac];
    brojac++;
    if(brojac>2){
     brojac=0;
    }           
}
setInterval(promenaReci, 1500);
}
function changePicture(){

var menjanjeSlika = ["ict.jpg", "funny.jpg"];
let slikeAutora = document.querySelector("#slikaAutor1");
    var brojac=0;
function promenaSlike(){
    slikeAutora.src= `assets/images/${menjanjeSlika[brojac]}`;
    brojac++;

if(brojac>2){
    brojac=0;
    slikeAutora.src="assets/images/autor.jpg";
      } 
}
setInterval(promenaSlike, 3000);



}
function proveraForme() {
    var objFullName = document.getElementById("imePrezime");
    var objEmail = document.getElementById("mejl");
    var objGrad = document.getElementById("lista");
    var objPol = document.getElementsByName("rbPol");
    var objTextArea = document.getElementById("textArea");
    var objCheck = document.getElementsByName("cbBlock");
    var brGresaka = 0;
//Regularni izrazi za FullName i Email
 let = regFullName = /^([A-ZČĆŽŠĐ][a-zčćžšđ]{2,})(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,})*$/
let = regEmail = /^[a-z]{2,}[\.]?([a-z]|[0-1])*\@(gmail|yahoo|ict.edu|outlook)(.com|.rs)$/;

//Provera Ime i Prezime
    if(!regFullName.test(objFullName.value)) {
    
        objFullName.parentElement.nextElementSibling.classList.add('prikaz');
        objFullName.classList.add('greska');
        brGresaka++;
        objFullName.parentElement.nextElementSibling.nextElementSibling.classList.remove('prikaz2');
      }
        else {
        objFullName.parentElement.nextElementSibling.classList.remove('prikaz');
        objFullName.classList.remove('greska');
        objFullName.parentElement.nextElementSibling.nextElementSibling.classList.add('prikaz2');
        objFullName = objFullName.value;
        console.log(objFullName)
    }
//provera mejla
if(!regEmail.test(objEmail.value)) {
      
    objEmail.parentElement.nextElementSibling.classList.add('prikaz');
    objEmail.classList.add('greska');
    brGresaka++;
    objEmail.parentElement.nextElementSibling.nextElementSibling.classList.remove('prikaz2');
  }
    else {
        objEmail.parentElement.nextElementSibling.classList.remove('prikaz');
        objEmail.classList.remove('greska');
        objEmail.parentElement.nextElementSibling.nextElementSibling.classList.add('prikaz2');
        objEmail = objEmail.value;
        console.log(objEmail)
    }
//provera DDl
    if(objGrad.options.selectedIndex == 0) {
    objGrad[0].parentElement.parentElement.nextElementSibling.classList.add("prikaz");
    objGrad.classList.add('greska');
    brGresaka++;
    objGrad[0].parentElement.parentElement.nextElementSibling.nextElementSibling.classList.remove('prikaz2');
    }
    else {
    objGrad[0].parentElement.parentElement.nextElementSibling.classList.remove("prikaz");
    objGrad.classList.remove('greska');
    objGrad[0].parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add('prikaz2');
    var vrednostGrad = objGrad.value;
    console.log(vrednostGrad);
    } 
//provera radioButton 
    var vrednostPol = "";
    for(let i=0; i<objPol.length; i++){
        if(objPol[i].checked) {
            vrednostPol = objPol[i].value;
            console.log(vrednostPol);
            break;
        }
    }
    if(vrednostPol == ""){
       objPol[0].parentElement.nextElementSibling.classList.add("prikaz");
       brGresaka++;
    }
    else {
        objPol[0].parentElement.nextElementSibling.classList.remove("prikaz");
        objPol[0].parentElement.nextElementSibling.nextElementSibling.classList.add("prikaz2");
    }
//provera checkBox
var vrednostCheck = "";
for(let i=0; i<objCheck.length; i++){
    if(objCheck[i].checked) {
        vrednostCheck = objCheck[i].value;
        console.log(vrednostCheck);
    }
}
if(vrednostCheck == ""){
    objCheck[0].parentElement.parentElement.nextElementSibling.classList.add("prikaz");
   brGresaka++;
   objCheck[0].parentElement.parentElement.nextElementSibling.nextElementSibling.classList.remove("prikaz2");
}
else {
    objCheck[0].parentElement.parentElement.nextElementSibling.classList.remove("prikaz");
    objCheck[0].parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add("prikaz2");
}

//Brojac gresaka:

console.log("Broj gresaka je: " , brGresaka);
    if(brGresaka == 0) {
        document.querySelector("#ispis").innerHTML = "You have successfully sent query!";
    }
    else
    {
        document.querySelector("#ispis").innerHTML = "";
    }
}

