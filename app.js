//lorem text
const text = [
    `Quod studiis finibus ea philosophiae altera nec. In tractatos est et privamur rebus! Profecto enim victi et copiosae argumentum nec. Veritatis veterum quo dicere qua. Nullo ne propter inquam et improborum nostra declarant. Impendere inflammat stabilique enim bonarum causa perpessio duxit non. Efficiat posse pro illa quos fallare propter. Praesertim videtur multis deinde et. Quod referenda perspicuum multam.`,
    `Contenta dixi istam sed necessariae? Persequeretur enim tempora momenti suapte sentiamus. Veterum in disputando esse fortitudo quam eum? Ipsam sit non est animo illud modum. Fortibus mollitia ut aliqua nobis metu voluptatibus si fuisse. Hoc et quibus existimant te unde dicturam maluisti. T hanc volunt non quibus. Si non altera modo. Temperantiamque animum non ne.`,
    `Romanes eunt domus! Efficere nihil euripidis graecum. Octavio amicitia sed ille diceret? Qui successionem ad. Corpore te se. Suo clarorum sententia quaerendi explicabo impeditur ulla in omnino. Voluptatem sin e aliae sic. Melius sine periculum! Isdem modus ipsa voluptatem continens scribi. Sed interesset quo. Laboribus quod autem litteras ea severitatem probaretur hominum? Honestatis certe de possit fieri et. Et facio ferreum unam etiam.`,
    `Esset voluptatibus quamvis iudicia ipso. Non quid enim tota id tribuat aiunt illum. Perspecta ipsa epicuro ego semper adversa vendibiliora ignoratione. Etiam epicuro eo et bonum. Videtur esse pleniorem si? Malum videatur expetendam desiderare dicitur eorum confirmat canes enim. Eius et quae familiarem maximasque efficiatur maioribus se. Voluerint ne ipso ad eo cognitione cum se. A multo de voluptatem nullus? Intellegitur percipit ob.`,
    `Nostri inesse et. Disputationi non levius quam. Evolvendis non est praeterea sine. Maxime afferat atomis. Tamen res id quocirca dicta enim in rerum. Qui quamquam cur vitae non puto atque quicquam nec. Opinionum nemo delicatissimi disserendum vellem at a illum fortunae.`,
    `Iucunda esse quia cupiditates. Ut quo in feramus. Studia comprehenderit accedit linguam labor liberemus fruenda est. Sapientia quem manus amicitia ponit morbis. Sed semper pellat vivendum nihil. Et quippiam ipsum se modo nullo aperiri non. Nos corrupte exercendi voluptate sum haec nihil. Aptior copulatas ante. Contra et et propter. Iis et fere omnium admonere amicitiae quin a vero. Ipsam est videbitur error levis videamus dolores e. Non invidus quo erit sine contereret probabis est indoctum. Si natura non de ut dissensio potest nisi. Democriti foedus quodsi earum aut debent per tam.`,
    `Sic deterret familiarem hoc consuetudine percipiatur nonne. Falsis inquit suam conferebamus afficit locos litteris. Spernat habemus et efficiatur multa aequo. Filium in non quo! Sanos ipsa incurrunt vita cum esse. Hominum quae videatur amicitiae relinqueret homines quam occulta talem? In quidem equidem nam igitur neque. Numquam recusandae plusque aut.`,
    `Tum se quisquam posteri. Cum militaris non. Et verum quos. Iracundiae liberemus infinito dignitatis. Rem in fere non qui afficit sed rerum hoc. Ad cognita incidant dolore de didicisse malle rerum. Et vel numeris aut bonorum aliquid et? Probo nostra quosdam rationem malum id nobis istis. Tamque quod est tantum vera. Et tu modo. Est ornatus tu sublata animo sic. Voluptatem dolores dolores tamen. Libenter quietus neque sensu habet sit nam puerilis fortitudo. Medium suo in quae.`,
    `Inquam ipsa voluptatem cum poetis qui alteram? Paulo et eius est? Dicit metu saepti. Adoptionem quiddam tamen. Aspernatur est quid non sed eo inquam sit? Confirmavit saxum iucunditatem una pauca legere convicia quod qui. Quasi nam ab nudus quaeque praetermittenda illa! Sunt sit aut esse suscipiet non manum maximos a. Magni enim peccant nec. Adquiescere minus non morati rerum tantum is si ratio. Ob morborum bene ne aut de sit fames dicta. Autem incurreret cum esse idque ut quidem tranquillitate.`,
    `Putant explicari ratio qui dicantur ea. Renovata latinis potest? Non placeat natura improbis philosophia cupiditates illa quam certa. Magis etiam desiderat si. Inimicus fere istis exitum opus scripta isdem situm ut. Istam magistra se. Iis illis omne gravitate quoddam nobis nulli. Sed dixissem praesentibus id nihil nec. Recte intellegaturque rem tollit quis ab sumus eumque et. Corpore id sed id iam nobis rationibus qua theophrasti.`,
    `Nostris scribi paene. Hanc si e. Similia enim ex neque ut sed aut. Hoc non enim. Seiunctum neque diceret loquuntur habuit graviterque.`,
    `Quae et dolorum igitur et vendibiliora! De et initiis? Paulo ulla tu existimo. Quae disciplinam tua. Ad veserim ad inter non esse probabo sibi. Tot oblique quidem naturalem modum sollicitudines si. Libidinosarum choro facimus enim quibus alia. Cum ut solam libro? Voluptates aut est enim. Praesentium deserunt desiderent ferantur cum recordatione maximam sed athenis. Oderit rationem si. Et quidem reperiri iniuria molestiam consequentis tantis esse.`,
    `Altera animo dicemus inclusae. Ac loco res opibus notissima nec qui iudicio quae. Sola esse nec quantum a quod. Quidam aliquam haec propter res. Disputationi voluptatis quod sed atomi et inquit. Maximam duxit autem potest delectari quaerimus omnesque causa. Secumque everti exquisitaque adiungimus etiam tranquillitatem qui quibus. Intellegam modo sine quid oriantur. Quam quidem terroribus laudem leniat et dicit polyaeno. Ut quia quoque.`,
    `Corpore numeranda allevatio minimum ut suscipit eo mihi quamquam. Et idem ab is a satis enim docet in. Omnium concursionibus homini nec metu c. Non didicisse vis. Etiam erimus permulta nisi insitam plura modo. Summa eo fames. Quid unum ferri nostra sumus fugiamus? Sit rerum a natura cura coerceri ponunt. Utilitas et convincere nec vivendi. Tam responsum autem. Idcirco aut sapienter filio vita sensibus fuisse sine esse. Nobis esse finibus quo omne qui hoc? Aristotelem iucunda omnes sis restincto si possit quasi. Voluptatem hanc praetereat dediti.`,
    `In aut epicurus consentientis choro opera in quantum. Plurimum commenticiam id afficit alii saepti arbitrantur possit qui. Nasci adversantur corpus ut. Et se est alia solam gustare et ultima cotidieque? Superstitione multoque discedere. Videatur ad iuste? Defensa philosopho culpa ad ad latina. Quia sint te et.`,
    `Fugit cum quaeritur cum. Possumus prima eum ne. Dicas conscientiam quo satis ab quo autem. Omne vivendi hoc aut manu de? Ut vult infinitis ut et nihil nam putat. Corpus ruant hanc semper nisi et poterit et voluptate. Ergo quid non. Semel cupiditates cetero omnium. Te beatae a dices.`,
    `Non nec ne stultus corporis malo. Et enim in fugiat id. In etiam graeca natura ad amicum. Alliciat ea statue neglegentur. Plerique nihil qui voluptatem fore minuti civium. Quem se sit tot laetetur inquam. Constituto graecis sunt amicitia. Solum fore perpauca voluptatis quod praesertim et autem. Philosophari ignoratione inhumanus perspecta audire blanditiis illa.`,
    `Athenis enim sunt. Saluto ostendit adiuvet non est voluptatem deserere intellegunt. Qui deinde tamen ad dici. Quale studio vel in sententiam etiam inquit provident. Tum est in nec impetus omnia. Beate omnes dignitatis. Quia vero aliae? Enim rebus putant praesertim semper inmortalibus. Perspecta putant quia quod.`,
    `Commemorandis lineam afferat nobis. Sine magnis potuimus nec ad confidam perveniri. Nihil praesertim autem quo nec oratione ipsius non autem. Distrahi perdiderunt eadem perspicuum viam amicitiae dedocere aspernari. Qui historiae potest sapienter? Fieri aequitate seditiones menandro etiam efficiatur modo! Neque sane servire?`,
    `Potest laetetur videamus quaerendi enim ultimum terrore transferrem. Esse videtisne seque qui. Triarius dolores multi nostri. Rem optari tum ratio sed enim desideraturam ad ita? Per elaborare ad bonum solvantur laetetur ulla omnium laus. Qui qui cur animi in. Cum vis eam bene expectat sed modum intellegam.`
]


const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = parseInt(amount.value); //without parse it will be string
    const random = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value <= 0 || value > 20) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function (item) {
            return `<p class ="result">${item}</p>`;
        }).join("");
        result.innerHTML = tempText;
    }
});

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
})


// import readFileSync from 'fs';
// //const {readFileSync, promises: fsPromises} = require('fs');

// // ??? read file SYNCHRONOUSLY
// function syncReadFile(filename) {
//     const contents = readFileSync(filename, 'utf-8');

//     const arr = contents.split(/\r?\n/);

//     console.log(arr); // ??????? ['One', 'Two', 'Three', 'Four']

//     return arr;
// }

// syncReadFile('./cicero.txt');