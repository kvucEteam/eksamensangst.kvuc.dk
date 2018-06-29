var questions_Array = [
    ["Tænker du negativt , fx ”Åh, nej, hvordan skal det dog gå”, når du hører læreren nævne ordet eksamen?", 1],
    ["Mærker du kropsreaktioner som fx hamrende hjerte, ondt i maven, åndenød, rystende hænder og varme kinder, når du tænker på eller hører om eksamen?", 1],
    ["Tænker du om dig selv, at du skal være 100 % kompetent og perfekt, før du tør sige noget til eksamen?", 1],
    ["Tænker du katastrofetanker som fx ”Jeg tror ikke jeg klarer eksamen” eller ”Det kommer aldrig til at gå godt”, når eksamen nærmer sig?", 1],
    ["Tænker du: ”Hvis jeg ikke svarer korrekt  og helt perfekt, så vil jeg skuffe andre?", 1],
    ["Tænker du: ”Hvis jeg mener noget andet end andre, vil de sikkert ikke kunne lide mig ”?", 1],
    ["Tænker du: ”Hvis jeg ikke kan forudsige og kontrollere alting, vil der opstå kaos”?", 1],
    ["Tænker du: ”Kan de andre se, at jeg sveder under armene og er rød i hovedet”? ", 1],
    ["Tænker du: “Kan de høre på min stemme, at jeg er nervøs?”", 1],
    ["Er du optaget af, hvad andre tænker om dig og hvordan du klarer eksamen?", 1],
    ["Lærer du udenad, hvad du vil sige?", 1],
    ["Gennemgår du og øver du ”inden i hovedet” alt, hvad du vil sige, lige før du siger det?", 1],
    ["Undgår du øjenkontakt med lærer og censor, når du er til eksamen?", 1],
    ["Prøver du at kontrollere og skjule, at du ryster på hænderne?", 1],
    ["Taler du meget langsomt og meget lavt, fordi du føler dig usikker og angst?", 1],
    ["Taler du  ekstremt hurtigt, og snubler du over ordene for at få det hele overstået?", 1],
    ["Har du oplevet at ”gå helt i sort”, at du ingenting kunne huske, selvom du havde helt tjek på faget?", 1],
    ["Har du oplevet at være meget uligevægtig, sårbar og irritabel i tiden op til eksamen?", 1],
    ["Har du oplevet en følelse af ikke at kunne overskue at gå til eksamen?", 1],
    ["Forestiller du dig, at du også bare kunne droppe eksamen og blive væk?", 1],
    ["Tænker du ofte på de gange, hvor du har været til eksamen og det ikke gik godt?", 1],
    ["Laver du tit  alt muligt andet for at slippe for at læse til eksamen?", 1],
    ["Har du nogensinde tænkt på, om du lider af eksamensangst?", 1]
];

var feedback_Array = [
    ["Du har muligvis eksamensangst", "Ifølge testen tyder det på, at du har eksamensangst og har brug for hjælp. Hjemmesiden om eksamensangst vil være nyttig for dig. Jo før du går i gang med at forberede dig på eksamen, desto bedre.<br/><br/>Du har især brug for at arbejde systematisk med ØVELSER, der hjælper dig med at genkende tanker og følelser, og lærer dig at tænke konstruktivt om eksamen. Du skal erstatte de negative tanker med positive.<br/><br/><a href='http://publ.e-undervisning.net/Kursist/Redskaber/47/Sider/oevelser.aspx' target=‘_blank’ class='btn btn-main btn_feed' role='button'>Skemaøvelser</a> <br/><br/>Du bør også træne visualisering, vejrtrækning og afspænding. Hør øvelserne her: <br/><br/><a href='audio.html' class='btn btn-main btn_feed' role='button'>Lytteøvelser</a><br/><br/>Se også disse “Stop panik” øvelser, som du kan bruge i eksamenssituationen<br/><br/><a href=‘panik.html' class='btn btn-main btn_feed' role='button'>Stop panikken</a>"],
    ["Du har måske mild eksamensangst", "Du kender til følelsen af eksamensangst, men oplever at du kan tackle eksamen. Du ønsker at blive bedre til at gå til eksamen, da angsten stadig er for dominerende. Du har især brug for at træne Stop-panik øvelserne:<br/> <a href='panik.html' class='btn btn-main btn_feed' role='button'>Stop panikken</a> <br/><br/>Du bør også træne vejrtrækning og visualiseringsøvelserne:<br/><br/><a href='index.html' class='btn btn-main btn_feed' role='button'>Lytteøvelser</a> <br/><br/> Læs evt. også de to interviews på websitet<br/><br/><a href='http://publ.e-undervisning.net/Kursist/Redskaber/47/Sider/teori.aspx' target=‘_blank’ class='btn btn-main btn_feed' role='button'>Interviews</a>"],
    ["Du er moderat nervøs.", " Du kan håndtere eksamen og har styr på dig selv, dine tanker og reaktioner. Nervøsiteten kan være lidt generende ind imellem. <br/><br/>At træne vejrtrækning, visualisering og afspænding vil være enkle redskaber for at forbedre din eksamen og få kontrol over dig selv og din anspændthed.<br/><br/><a href='audio.html' class='btn btn-main btn_feed' role='button'>Lytteøvelser</a>"],
    ["Du er cool.", "Du er ikke specielt påvirket og lader dig ikke slå ud, når du går til eksamen. Du har kontrol over situationen, er tilfreds med dine præstationer og klarer dig generelt som du forventer.<br/><br/> Du kan eventuelt bruge nogle af disse afslapningsøvelser: <br/><br/><a href='audio.html' class='btn btn-main btn_feed' role='button'>Lytteøvelser</a>"]
];

var color_Array = [
    ["#03a9f4", "#35baf6", "#0a91ce"],
    ["#009688", "#33aba0", "#088278"],
    ["#7dae25", "#97be51", "#6c9529"],
    ["#c1cf3b", "#cdd962", "#a2b03a"]
];

var runde = 0;
var score = 0;

$(document).ready(function() {

    init();

    $(".btn").hover(
        function() {
            $(this).css("background-color", color_Array[runde % 4][2]);
        },
        function() {
            $(this).css("background-color", color_Array[runde % 4][1]);
        }
    );

    $(".btn").click(function() {
        var num = $(".btn_question").index(this);
        clicked_answer(num);

        $(this).css("color", "white");

    });

});


function init() {

    $(".header_h4").html("<span class ='spm_tal'>Spørgsmål " + (runde + 1) + " ud af " + questions_Array.length + "</span><br/>" + questions_Array[runde][0]);


    for (var i = 0; i < questions_Array.length; i++) {
        $(".minified_btm").append("<div class='question question_min col-xs-12'></div>");

        $(".question").eq(i).css("background-color", color_Array[i % 4][0]);
        console.log("modulus" + i % 4);
        $(".question").eq(i).css("z-index", questions_Array.length - i);
        //console.log($('.question').eq(i).offset().top);
    }

    $(".question_min").each(function(index) {
        console.log(index + ": " + $(this).text());
        if (index > runde) {
            var int = Math.abs(index - runde);

            $(this).css("height", 100 - (int * 10));
        }
    });
}

function clicked_answer(num) {


    if (runde < questions_Array.length - 1) {
        console.log("Der er endnu runder tilbage!");


        $(".question").eq(runde).animate({
            height: "5px"
        }, 400, function() {
            // Animation complete.
        });

        //$(".question").eq(runde + 1).removeClass("question_min");
        $(".question").eq(runde).addClass("question_min");
        runde++;
        $(".header_h4").html("<span class ='spm_tal'>Spørgsmål " + (runde + 1) + " ud af " + questions_Array.length + "</span><br/>" + questions_Array[runde][0]);
        $(".question").eq(runde).html($(".buttons"));
        $(".question").eq(runde).animate({
            height: "100%"
        }, 400, function() {
            // Animation complete.
        });
        $(".btn_question").css("background-color", color_Array[runde % 4][1])

        if (num == 0) {
            score = score + 10;
        } else if (num == 1) {
            score = score + 6;
        } else if (num == 2) {
            score = score + 2;
        }
    } else {
        console.log("NU stopper festen!")
            //alert ("quiz er slut - din score er: " + score);

        var feed_num;

        if (score > 139) {
            feed_num = 0;
        } else if (score > 99 && score < 140) {
            feed_num = 1;
        } else if (score > 59 && score < 100) {
            feed_num = 2;
        } else {
            feed_num = 3;
        }


        $(".row").slideToggle('slow', function() {

            $(".row").html("<div class='resultat_wrapper'><div class='h1'>RESULTAT: " + feedback_Array[feed_num][0] + "<br/></div><div class='tagline'>" + feedback_Array[feed_num][1] + "</div></div>")
            $(".row").fadeToggle('slow');
        });

        //alert("quizzen er slut - din score er: " + score);

    }

    console.log("din score er: " + score);

    $(".question_min").each(function(index) {
        console.log(index + ": " + $(this).text());
        if (index > runde) {
            var int = Math.abs(index - runde);

            $(this).css("height", 100 - (int * 10));
        }
    });

}

function generate_menu(navn) {
    var nav = "<nav class='navbar navbar-inverse' role='navigation'> <div class='container'> <!-- Brand and toggle get grouped for better mobile display --> <div class='navbar-header'> <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'> <span class='sr-only'>Toggle navigation</span> <span class='icon-bar'></span> <span class='icon-bar'></span> <span class='icon-bar'></span> </button> <a class='navbar-brand' href='index.html'>Eksamensangst</a> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'> <ul class='nav navbar-nav'><li><a href='test.html'>Test dig selv</a> </li><li><a href='audio.html'>Lytteøvelser</a> </li> <li><a href='panik.html'>Stop panikken</a> </li>  <li><a href='video.html'>En personlig historie </a> </li> <li><a href='index.html'>Forside</a> </li>  </ul> </div> <!-- /.navbar-collapse --> </div> <!-- /.container-fluid --> </nav>";
    $(".nav_container").html(nav);
}
