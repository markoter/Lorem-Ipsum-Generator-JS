//lorem text
const text = [
`Non eram nescius, Brute, cum, quae summis ingeniis exquisitaque doctrina philosophi Graeco sermone tractavissent, ea Latinis litteris mandaremus, fore ut hic noster labor in varias reprehensiones incurreret. nam quibusdam, et iis quidem non admodum indoctis, totum hoc displicet philosophari. quidam autem non tam id reprehendunt, si remissius agatur, sed tantum studium tamque multam operam ponendam in eo non arbitrantur. erunt etiam, et ii quidem eruditi Graecis litteris, contemnentes Latinas, qui se dicant in Graecis legendis operam malle consumere. postremo aliquos futuros suspicor, qui me ad alias litteras vocent, genus hoc scribendi, etsi sit elegans, personae tamen et dignitatis esse negent.`,
`Contra quos omnis dicendum breviter existimo. Quamquam philosophiae quidem vituperatoribus satis responsum est eo libro, quo a nobis philosophia defensa et collaudata est, cum esset accusata et vituperata ab Hortensio. qui liber cum et tibi probatus videretur et iis, quos ego posse iudicare arbitrarer, plura suscepi veritus ne movere hominum studia viderer, retinere non posse. Qui autem, si maxime hoc placeat, moderatius tamen id volunt fieri, difficilem quandam temperantiam postulant in eo, quod semel admissum coerceri reprimique non potest, ut propemodum iustioribus utamur illis, qui omnino avocent a philosophia, quam his, qui rebus infinitis modum constituant in reque eo meliore, quo maior sit, mediocritatem desiderent.`,
`Sive enim ad sapientiam perveniri potest, non paranda nobis solum ea, sed fruenda etiam [sapientia] est; sive hoc difficile est, tamen nec modus est ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum id, quod quaeritur, sit pulcherrimum. etenim si delectamur, cum scribimus, quis est tam invidus, qui ab eo nos abducat? sin laboramus, quis est, qui alienae modum statuat industriae? nam ut Terentianus Chremes non inhumanus, qui novum vicinum non vult 'fodere aut arare aut aliquid ferre denique' -- non enim illum ab industria, sed ab inliberali labore deterret --, sic isti curiosi, quos offendit noster minime nobis iniucundus labor.`,
`Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. in quibus hoc primum est in quo admirer, cur in gravissimis rebus non delectet eos sermo patrius, cum idem fabellas Latinas ad verbum e Graecis expressas non inviti legant. quis enim tam inimicus paene nomini Romano est, qui Ennii Medeam aut Antiopam Pacuvii spernat aut reiciat, quod se isdem Euripidis fabulis delectari dicat, Latinas litteras oderit?`,
`A quibus tantum dissentio, ut, cum Sophocles vel optime scripserit Electram, tamen male conversam Atilii mihi legendam putem, de quo Lucilius: 'ferreum scriptorem', verum, opinor, scriptorem tamen, ut legendus sit. rudem enim esse omnino in nostris poetis aut inertissimae segnitiae est aut fastidii delicatissimi. mihi quidem nulli satis eruditi videntur, quibus nostra ignota sunt. an 'Utinam ne in nemore . . .' nihilo minus legimus quam hoc idem Graecum, quae autem de bene beateque vivendo a Platone disputata sunt, haec explicari non placebit Latine?`,
`Quid? si nos non interpretum fungimur munere, sed tuemur ea, quae dicta sunt ab iis quos probamus, eisque nostrum iudicium et nostrum scribendi ordinem adiungimus, quid habent, cur Graeca anteponant iis, quae et splendide dicta sint neque sint conversa de Graecis? nam si dicent ab illis has res esse tractatas, ne ipsos quidem Graecos est cur tam multos legant, quam legendi sunt. quid enim est a Chrysippo praetermissum in Stoicis? legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. quid? Theophrastus mediocriterne delectat, cum tractat locos ab Aristotele ante tractatos? quid? Epicurei num desistunt de isdem, de quibus et ab Epicuro scriptum est et ab antiquis, ad arbitrium suum scribere? quodsi Graeci leguntur a Graecis isdem de rebus alia ratione compositis, quid est, cur nostri a nostris non legantur?`,
`Quamquam, si plane sic verterem Platonem aut Aristotelem, ut verterunt nostri poetae fabulas, male, credo, mererer de meis civibus, si ad eorum cognitionem divina illa ingenia transferrem. sed id neque feci adhuc nec mihi tamen, ne faciam, interdictum puto. locos quidem quosdam, si videbitur, transferam, et maxime ab iis, quos modo nominavi, cum inciderit, ut id apte fieri possit, ut ab Homero Ennius, Afranius a Menandro solet. Nec vero, ut noster Lucilius, recusabo, quo minus omnes mea legant. utinam esset ille Persius, Scipio vero et Rutilius multo etiam magis, quorum ille iudicium reformidans Tarentinis ait se et Consentinis et Siculis scribere. facete is quidem, sicut alia; sed neque tam docti tum erant, ad quorum iudicium elaboraret, et sunt illius scripta leviora, ut urbanitas summa appareat, doctrina mediocris.`,
`Ego autem quem timeam lectorem, cum ad te ne Graecis quidem cedentem in philosophia audeam scribere? quamquam a te ipso id quidem facio provocatus gratissimo mihi libro, quem ad me de virtute misisti. Sed ex eo credo quibusdam usu venire; ut abhorreant a Latinis, quod inciderint in inculta quaedam et horrida, de malis Graecis Latine scripta deterius. quibus ego assentior, dum modo de isdem rebus ne Graecos quidem legendos putent. res vero bonas verbis electis graviter ornateque dictas quis non legat? nisi qui se plane Graecum dici velit, ut a Scaevola est praetore salutatus Athenis Albucius.`,
`Sed iure Mucius. ego autem mirari [satis] non queo unde hoc sit tam insolens domesticarum rerum fastidium. non est omnino hic docendi locus; sed ita sentio et saepe disserui, Latinam linguam non modo non inopem, ut vulgo putarent, sed locupletiorem etiam esse quam Graecam. quando enim nobis, vel dicam aut oratoribus bonis aut poetis, postea quidem quam fuit quem imitarentur, ullus orationis vel copiosae vel elegantis ornatus defuit? Ego vero, quoniam forensibus operis, laboribus, periculis non deseruisse mihi videor praesidium, in quo a populo Romano locatus sum, debeo profecto, quantumcumque possum, in eo quoque elaborare, ut sint opera, studio, labore meo doctiores cives mei, nec cum istis tantopere pugnare, qui Graeca legere malint, modo legant illa ipsa, ne simulent, et iis servire, qui vel utrisque litteris uti velint vel, si suas habent, illas non magnopere desiderent.`,
`An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Scaevolam Maniumque Manilium, ab iisque M. Brutus dissentiet -- quod et acutum genus est et ad usus civium non inutile, nosque ea scripta reliquaque eiusdem generis et legimus libenter et legemus -- haec, quae vitam omnem continent, neglegentur? nam, ut sint illa vendibiliora, haec uberiora certe sunt. quamquam id quidem licebit iis existimare, qui legerint. nos autem hanc omnem quaestionem de finibus bonorum et malorum fere a nobis explicatam esse his litteris arbitramur, in quibus, quantum potuimus, non modo quid nobis probaretur, sed etiam quid a singulis philosophiae disciplinis diceretur, persecuti sumus.`,
`Ut autem a facillimis ordiamur, prima veniat in medium Epicuri ratio, quae plerisque notissima est. quam a nobis sic intelleges eitam, ut ab ipsis, qui eam disciplinam probant, non soleat accuratius explicari; verum enim invenire volumus, non tamquam adversarium aliquem convincere. accurate autem quondam a L. Torquato, homine omni doctrina erudito, defensa est Epicuri sententia de voluptate, a meque ei responsum, cum C. Triarius, in primis gravis et doctus adolescens, ei disputationi interesset.`
];


const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = parseInt(amount.value); //without parse it will be string
    const random = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value < 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item) {
            return `<p class ="result">${item}</p>`;
        }).join("");
        result.innerHTML = tempText;
    }
});

import readFileSync from 'fs';
//const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

  return arr;
}

syncReadFile('./cicero.txt');