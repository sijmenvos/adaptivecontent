angular.module('lego')

.controller('appCtrl', function($rootScope, $http, $stateParams, $state, $mdToast,$mdBottomSheet, uiCalendarConfig){
    $rootScope.friends = [];

    var afdelingen = ['Algemeen Klinisch', 'Chirurgie', 'Eerste Hart Hulp (EHH)', 'Dyspnoe polikliniek', 'Anesthesiologie en pijnbestrijding', 'Buitenpolikliniek', 'Cardiologie', 'Endoscopie', 'Nesselande'];
    var dagen = ["maandag", 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']

    var data = {"results":[{"user":{"gender":"male","name":{"title":"mr","first":"philip","last":"ellis"},"location":{"street":"9996 sunset st","city":"joliet","state":"pennsylvania","zip":"19289"},"email":"philip.ellis65@example.com","username":"silverostrich245","password":"electra","salt":"Qa0gI0GE","md5":"72335416977f8d60a9ac6153957f730e","sha1":"ad39260d6bc947073e63aa489fbd3a98104ba764","sha256":"2b712ea5fbdb879d40e7de8fbd6e91e1e696549218ac3723f1b08776c3c29864","registered":"1147481642","dob":"357405329","phone":"(913)-279-1507","cell":"(927)-847-1485","SSN":"759-82-6786","picture":{"large":"http://api.randomuser.me/portraits/men/29.jpg","medium":"http://api.randomuser.me/portraits/med/men/29.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/29.jpg"},"version":"0.4.1"},"seed":"e6af48f44c943043"},{"user":{"gender":"female","name":{"title":"miss","first":"rose","last":"bailey"},"location":{"street":"6737 adams st","city":"hamsburg","state":"connecticut","zip":"16624"},"email":"rose.bailey18@example.com","username":"crazypanda844","password":"cooter","salt":"xChhNcx4","md5":"ffb131f2749427fa263f148a1298dac8","sha1":"ee86225ea4e5ad13de8d6133f93818b49652877b","sha256":"74d8891719eadcdf97ef0beffe16f71ad5cb9f2d95629efa79f6f0835f353e57","registered":"1161026396","dob":"216382678","phone":"(393)-267-9527","cell":"(814)-735-6349","SSN":"122-75-2295","picture":{"large":"http://api.randomuser.me/portraits/women/63.jpg","medium":"http://api.randomuser.me/portraits/med/women/63.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/63.jpg"},"version":"0.4.1"},"seed":"220124e6344dcf7c"},{"user":{"gender":"male","name":{"title":"mr","first":"henry","last":"long"},"location":{"street":"9922 avondale ave","city":"plano","state":"kansas","zip":"37667"},"email":"henry.long10@example.com","username":"redrabbit727","password":"stars","salt":"F20LYnsN","md5":"47eefb6c9f55dc28468fc2c1861cb4d6","sha1":"95b5394f93fb079b0be4dda7f529ef089e386fb3","sha256":"737ea9c0505347b6f988629cbe7a0d3a6b42f5c06077426c01876ff99e1c6918","registered":"1186156880","dob":"26293286","phone":"(422)-609-3585","cell":"(905)-245-3367","SSN":"554-55-5557","picture":{"large":"http://api.randomuser.me/portraits/men/31.jpg","medium":"http://api.randomuser.me/portraits/med/men/31.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/31.jpg"},"version":"0.4.1"},"seed":"b2439a379e19a08b"},{"user":{"gender":"male","name":{"title":"mr","first":"javier","last":"griffin"},"location":{"street":"6921 rolling green rd","city":"seattle","state":"florida","zip":"59855"},"email":"javier.griffin53@example.com","username":"organiccat513","password":"supra","salt":"3ZUVn2CU","md5":"580c221a4b7997e485ab04a0e5bfc2ac","sha1":"462a2e65d67c407b0b003720e5066c068fb7f648","sha256":"5321839eb34899da141c448992cee042d61bfa87637966be99d3ba58bfe56110","registered":"1058892935","dob":"253336297","phone":"(949)-531-8246","cell":"(379)-144-3056","SSN":"331-97-2772","picture":{"large":"http://api.randomuser.me/portraits/men/68.jpg","medium":"http://api.randomuser.me/portraits/med/men/68.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/68.jpg"},"version":"0.4.1"},"seed":"d91dafa6b7b430c2"},{"user":{"gender":"male","name":{"title":"mr","first":"theodore","last":"hamilton"},"location":{"street":"4055 pockrus page rd","city":"north valley","state":"utah","zip":"19022"},"email":"theodore.hamilton77@example.com","username":"crazywolf652","password":"stranger","salt":"WMuK4q8J","md5":"57d05880a64085ccd0b458411aa26fce","sha1":"118350b464b86a1e44f9342b5a589122fde2f1da","sha256":"1baa71afbb18e4b010629f8244590b4b25f93cd69c67de60f4080e823471880b","registered":"1090212200","dob":"496139689","phone":"(511)-470-4042","cell":"(749)-443-1764","SSN":"534-71-7909","picture":{"large":"http://api.randomuser.me/portraits/men/99.jpg","medium":"http://api.randomuser.me/portraits/med/men/99.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/99.jpg"},"version":"0.4.1"},"seed":"5c51ddc00dcf85e4"},{"user":{"gender":"female","name":{"title":"ms","first":"terri","last":"james"},"location":{"street":"3380 edwards rd","city":"waxahachie","state":"maryland","zip":"42582"},"email":"terri.james68@example.com","username":"crazyladybug818","password":"madison1","salt":"voPfA0zE","md5":"1f71d82ddfdb2a5300ccb0039aa4c249","sha1":"8876a2f926a741d9e01c20570e315b2e61f5a9e5","sha256":"a2bb18a8020b9f32170bc3ea4698d48d2c9d681bd953d699bc533880ca66170c","registered":"1070273282","dob":"282147783","phone":"(409)-682-6686","cell":"(972)-534-1887","SSN":"841-17-6085","picture":{"large":"http://api.randomuser.me/portraits/women/95.jpg","medium":"http://api.randomuser.me/portraits/med/women/95.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/95.jpg"},"version":"0.4.1"},"seed":"67b6e67253ead048"},{"user":{"gender":"female","name":{"title":"mrs","first":"elizabeth","last":"morgan"},"location":{"street":"9813 e north st","city":"provo","state":"new mexico","zip":"41255"},"email":"elizabeth.morgan87@example.com","username":"orangebutterfly234","password":"woodstoc","salt":"n4qoGyLK","md5":"2851ab2136e7623217364d4cc69a756b","sha1":"5248c88081d734da7c899a118c3e153ca143b0e3","sha256":"645e905bccc2e7412431c931edd37faaeeb6b4c5b108859f65f87ed87cddbfb9","registered":"1069901112","dob":"481204315","phone":"(811)-720-2732","cell":"(393)-806-3812","SSN":"222-55-4649","picture":{"large":"http://api.randomuser.me/portraits/women/46.jpg","medium":"http://api.randomuser.me/portraits/med/women/46.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/46.jpg"},"version":"0.4.1"},"seed":"94cae9cb26d3d4aa"},{"user":{"gender":"male","name":{"title":"mr","first":"ian","last":"gardner"},"location":{"street":"8971 taylor st","city":"rochester","state":"indiana","zip":"68146"},"email":"ian.gardner96@example.com","username":"orangefish970","password":"zerocool","salt":"qH8KwVnX","md5":"129e3cf7a212d3725106102994c86c31","sha1":"f0fbcadefbeee528e9fd118e41b817a6762bdf0a","sha256":"47d59cffb9d42743e279b61be2182bf94605e6f1987a1ecd4aab3d721dc138b5","registered":"1133210741","dob":"285757727","phone":"(193)-190-2942","cell":"(738)-940-2120","SSN":"265-81-6223","picture":{"large":"http://api.randomuser.me/portraits/men/57.jpg","medium":"http://api.randomuser.me/portraits/med/men/57.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/57.jpg"},"version":"0.4.1"},"seed":"cff3215682fc8fb1"},{"user":{"gender":"female","name":{"title":"mrs","first":"jessica","last":"lane"},"location":{"street":"4623 w gray st","city":"eugene","state":"texas","zip":"19683"},"email":"jessica.lane32@example.com","username":"crazytiger531","password":"51505150","salt":"gCZUF2Dp","md5":"6beb5861184dc465a462f591ff441421","sha1":"2b0fdefedf76163dbce661e709f10b721d8d6dc3","sha256":"57d33356953d88d45e08ff688deeee29327ccf01641680c57cf1891eef2ab39e","registered":"1386918334","dob":"379980987","phone":"(457)-459-3164","cell":"(597)-504-9108","SSN":"252-66-9805","picture":{"large":"http://api.randomuser.me/portraits/women/63.jpg","medium":"http://api.randomuser.me/portraits/med/women/63.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/63.jpg"},"version":"0.4.1"},"seed":"3b7a93fab650d627"},{"user":{"gender":"male","name":{"title":"mr","first":"bob","last":"ray"},"location":{"street":"1216 miller ave","city":"lancaster","state":"new york","zip":"10856"},"email":"bob.ray14@example.com","username":"smallkoala96","password":"1qazxsw2","salt":"SluYJRKx","md5":"e08989da5fe4b0bbdfe2921240ddfd8a","sha1":"e3909d75c6fae5ce308049752e5fe4e45b19bdfd","sha256":"f746c708d209de64969590b44464586f7d3afe58d01266e5b105e92de410339b","registered":"1169064510","dob":"294959016","phone":"(196)-248-4676","cell":"(855)-671-4752","SSN":"381-38-4827","picture":{"large":"http://api.randomuser.me/portraits/men/7.jpg","medium":"http://api.randomuser.me/portraits/med/men/7.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/7.jpg"},"version":"0.4.1"},"seed":"266e971497a03ec7"},{"user":{"gender":"male","name":{"title":"mr","first":"cory","last":"lawrence"},"location":{"street":"3070 lakeview st","city":"burkburnett","state":"tennessee","zip":"75685"},"email":"cory.lawrence75@example.com","username":"purplesnake4","password":"charity","salt":"M57QcHWD","md5":"cdada33f1dc98ae717adb995061cec9f","sha1":"4321c3001e3109d00a9626d3271b739b2717e477","sha256":"eb7b49189ea77b7f772483294daab52eca1cc21b22f35f8d77b114c7f1f678c1","registered":"1269629190","dob":"187878235","phone":"(101)-396-9764","cell":"(334)-875-4104","SSN":"939-70-6407","picture":{"large":"http://api.randomuser.me/portraits/men/5.jpg","medium":"http://api.randomuser.me/portraits/med/men/5.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/5.jpg"},"version":"0.4.1"},"seed":"f5361e9db5a2b545"},{"user":{"gender":"male","name":{"title":"mr","first":"timmothy","last":"jimenez"},"location":{"street":"9277 thornridge cir","city":"surrey","state":"tennessee","zip":"95483"},"email":"timmothy.jimenez17@example.com","username":"crazykoala909","password":"slayer","salt":"RxcH2BKE","md5":"96b75d5b201fe74715a58efdbaceef5c","sha1":"a7e380948004fac2dc973091a0e5285cd206269c","sha256":"a5b72dae1d36efde351e5bcea4f1e2c90d260ec68743a3f6421d99aa99a2d0d1","registered":"1181861700","dob":"502182643","phone":"(564)-464-9148","cell":"(439)-706-6625","SSN":"806-27-1831","picture":{"large":"http://api.randomuser.me/portraits/men/58.jpg","medium":"http://api.randomuser.me/portraits/med/men/58.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/58.jpg"},"version":"0.4.1"},"seed":"9e4b596fbceb9c0e"},{"user":{"gender":"female","name":{"title":"miss","first":"louella","last":"watkins"},"location":{"street":"9133 dane st","city":"cape fear","state":"vermont","zip":"62761"},"email":"louella.watkins30@example.com","username":"purplegoose833","password":"darwin","salt":"91duPXSb","md5":"a63c30d5cf77522728bb87dd38512898","sha1":"bb4f2842c9a2ea78dba3a7177d60c1a7b6a0594f","sha256":"a4b4da979b34fa85b1263477b06831b4a3870851c05ef6dfb815ab556fdc54d5","registered":"1225668729","dob":"210254742","phone":"(863)-299-3415","cell":"(332)-652-9610","SSN":"555-50-6283","picture":{"large":"http://api.randomuser.me/portraits/women/21.jpg","medium":"http://api.randomuser.me/portraits/med/women/21.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/21.jpg"},"version":"0.4.1"},"seed":"d3ec581ae8530aae"},{"user":{"gender":"female","name":{"title":"ms","first":"madison","last":"meyer"},"location":{"street":"4110 robinson rd","city":"new haven","state":"arkansas","zip":"58394"},"email":"madison.meyer42@example.com","username":"heavykoala963","password":"charger","salt":"BG42VOs1","md5":"ee548a4b9d3774c5a75bc4937b9c19e2","sha1":"8f26572b1cb1625e8cde6eeee4eb73368ed51dce","sha256":"b77541e7683b19c54644495dded602f1916114768dcf3e5096f921108424b772","registered":"1132216193","dob":"367055851","phone":"(786)-792-9046","cell":"(511)-620-9976","SSN":"468-37-6554","picture":{"large":"http://api.randomuser.me/portraits/women/54.jpg","medium":"http://api.randomuser.me/portraits/med/women/54.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/54.jpg"},"version":"0.4.1"},"seed":"f873d33430b8b8af"},{"user":{"gender":"male","name":{"title":"mr","first":"james","last":"perkins"},"location":{"street":"8079 e center st","city":"providence","state":"pennsylvania","zip":"25272"},"email":"james.perkins13@example.com","username":"bigbutterfly554","password":"chocha","salt":"JIcM9GZu","md5":"ff4aee74f5ce0b73fe14669a68674baf","sha1":"6b78a233f2934c9ceb81281d78271af736927ca7","sha256":"43bd7714db757626e5756c52279196633557344ecb3cb978f27deac6d5abcfbf","registered":"1394429908","dob":"140427668","phone":"(133)-703-5699","cell":"(767)-804-7808","SSN":"709-24-7978","picture":{"large":"http://api.randomuser.me/portraits/men/28.jpg","medium":"http://api.randomuser.me/portraits/med/men/28.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/28.jpg"},"version":"0.4.1"},"seed":"17d875a2b2fc68ba"},{"user":{"gender":"female","name":{"title":"miss","first":"nora","last":"gutierrez"},"location":{"street":"4891 e center st","city":"surrey","state":"wyoming","zip":"19214"},"email":"nora.gutierrez47@example.com","username":"bluebutterfly677","password":"clint","salt":"P0Ctx2ag","md5":"25f56c50267c282c68610dc06e66e4c1","sha1":"5b51dd22b3a6264feefa4c88d71a6c9c5a2056d0","sha256":"04ad8024703631e04b226953e3640e5d4563bc1f769b9f7f75796a6552668d59","registered":"1111205586","dob":"92594180","phone":"(832)-617-8662","cell":"(557)-155-2162","SSN":"915-94-4422","picture":{"large":"http://api.randomuser.me/portraits/women/96.jpg","medium":"http://api.randomuser.me/portraits/med/women/96.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/96.jpg"},"version":"0.4.1"},"seed":"1c0c14af7c652fa7"},{"user":{"gender":"female","name":{"title":"miss","first":"connie","last":"bennett"},"location":{"street":"1026 mcclellan rd","city":"memphis","state":"new york","zip":"10692"},"email":"connie.bennett36@example.com","username":"yellowelephant325","password":"helena","salt":"weiYcqdt","md5":"5e667206052c59dbb6cde291492fc30d","sha1":"f19fdf2d67cfd68d00967ecdadbf76c5f726c696","sha256":"99590b3e626c8320c8175b57d08fb21da57f4ac101048932d8d7e242b6b259a0","registered":"1216215467","dob":"19053670","phone":"(655)-803-8557","cell":"(409)-511-9602","SSN":"989-30-4732","picture":{"large":"http://api.randomuser.me/portraits/women/28.jpg","medium":"http://api.randomuser.me/portraits/med/women/28.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/28.jpg"},"version":"0.4.1"},"seed":"2ce90f596e939db8"},{"user":{"gender":"male","name":{"title":"mr","first":"tom","last":"pearson"},"location":{"street":"2588 photinia ave","city":"nashville","state":"oregon","zip":"83764"},"email":"tom.pearson79@example.com","username":"beautifulfrog571","password":"alfred","salt":"6UdjkZMZ","md5":"aa17930de1f8fadfc4d2afe5977a3184","sha1":"56a04f4aac10f484b24258dbb5208d50e77265d9","sha256":"2b43e32db0ed319729dbf2ac7fd9c453c63ab9248429b2be4a8707d38f25deda","registered":"1165025226","dob":"13690217","phone":"(121)-572-7044","cell":"(254)-628-4834","SSN":"812-82-3589","picture":{"large":"http://api.randomuser.me/portraits/men/26.jpg","medium":"http://api.randomuser.me/portraits/med/men/26.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/26.jpg"},"version":"0.4.1"},"seed":"3eab19941fe38302"},{"user":{"gender":"female","name":{"title":"miss","first":"tara","last":"nguyen"},"location":{"street":"1596 w sherman dr","city":"fayetteville","state":"texas","zip":"43267"},"email":"tara.nguyen50@example.com","username":"tinyostrich114","password":"billybob","salt":"TEjZVLvk","md5":"8850492826a2e30130ec2d4b22efa9f1","sha1":"81a29e739889374c97b6b79581967762343872ab","sha256":"d11f6e0f393dedbb9fd6a9a4b1ce29cd5e0f9f2dae0b5e4616f4966ed7a258db","registered":"1122149113","dob":"31830971","phone":"(332)-182-8766","cell":"(103)-894-9356","SSN":"268-62-7509","picture":{"large":"http://api.randomuser.me/portraits/women/96.jpg","medium":"http://api.randomuser.me/portraits/med/women/96.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/96.jpg"},"version":"0.4.1"},"seed":"f87dda31d9ccc7e9"},{"user":{"gender":"male","name":{"title":"mr","first":"greg","last":"carlson"},"location":{"street":"9804 wycliff ave","city":"south valley","state":"minnesota","zip":"67056"},"email":"greg.carlson31@example.com","username":"redswan321","password":"herbie","salt":"010KPDLD","md5":"397ec982a3ad5b5f896705044c129cdc","sha1":"2dab5e0e0e2a04e8eb733881823b48a418c343ba","sha256":"a2f63ebcbd938e1c3e99d5d223184ed0ac93910ba1233ed18623e44363830f4f","registered":"954349656","dob":"16049297","phone":"(877)-744-2991","cell":"(146)-454-6635","SSN":"982-81-1945","picture":{"large":"http://api.randomuser.me/portraits/men/51.jpg","medium":"http://api.randomuser.me/portraits/med/men/51.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/51.jpg"},"version":"0.4.1"},"seed":"f4c5af8eb42d946c"}]};
    data.results.forEach(function(item){
        item = item.user;
        $rootScope.friends.push({
            name: item.name.first + ' ' + item.name.last,
            what: afdelingen[Math.floor(Math.random()*afdelingen.length)],
            until: 'maandag',
            face: item.picture.medium
        })
    });
    $rootScope.current = 0;

    $rootScope.arts = [[{
            title: 'Diagnose Jan Overtoom',
            start: '2015-01-27T09:00:00.000Z',
            end: '2015-01-27T09:20:00.000',
            allDay: false
        },{
            title: 'Behandeling Henk Louwbergs',
            start: '2015-01-27T09:30:00.000Z',
            end: '2015-01-27T10:00:00.000',
            allDay: false
        },{
            title: 'Pauze',
            start: '2015-01-27T10:00:00.000Z',
            end: '2015-01-27T11:00:00.000',
            allDay: false
        },{
            title: 'Verlof',
            start: '2015-01-27T12:00:00.000Z',
            end: '2015-01-27T18:00:00.000',
            allDay: false,
            color: 'grey'
        }]]

    $rootScope.uren = [[{
        title: 'Bezoekslot',
        start: '2015-01-27T16:00:00.000Z',
        end: '2015-01-27T17:00:00.000Z',
        allDay: false
    },{
        title: 'Bezoekslot',
        start: '2015-01-27T17:00:00.000Z',
        end: '2015-01-27T18:00:00.000Z',
        allDay: false
    },{
        title: 'Bezoekslot',
        start: '2015-01-27T18:00:00.000Z',
        end: '2015-01-27T19:00:00.000Z',
        allDay: false
    },{
        title: 'Bezoekslot (reeds 1 bezoeker)',
        start: '2015-01-27T19:00:00.000Z',
        end: '2015-01-27T20:00:00.000Z',
        allDay: false,
        color: 'orange'
    }]];

    $rootScope.nu = new Date().toString();
    $rootScope.locatie = "Kamer 02A034 (huidige)";

    $rootScope.planning = [{
        title: 'Bezoekslot',
        start: '2015-01-27T16:00:00.000Z',
        end: '2015-01-27T17:00:00.000Z',
        allDay: false
    },{
        title: 'Bezoekslot',
        start: '2015-01-27T17:00:00.000Z',
        end: '2015-01-27T18:00:00.000Z',
        allDay: false,
        color: 'red'
    },{
        title: 'Bezoekslot',
        start: '2015-01-27T18:00:00.000Z',
        end: '2015-01-27T19:00:00.000Z',
        allDay: false
    },{
        title: 'Bezoekslot',
        start: '2015-01-27T19:00:00.000Z',
        end: '2015-01-27T20:00:00.000Z',
        allDay: false
    }];

    $rootScope.afspraken = [[
        {
            title: 'Kaakchirurg',
            start: '2015-01-27T10:00:00.000Z',
            end: '2015-01-27T11:00:00.000',
            allDay: false
        },
        {
            title: 'Jan bezoeken',
            start: '2015-01-27T16:00:00.000Z',
            end: '2015-01-27T18:00:00.000',
            allDay: false
        }
    ]];

    $rootScope.patient = [[
        {
            title: 'Diagnose',
            start: '2015-01-27T10:00:00.000Z',
            end: '2015-01-27T11:00:00.000',
            allDay: false
        },
        {
            title: 'Bezoek van Jan',
            start: '2015-01-27T16:00:00.000Z',
            end: '2015-01-27T17:00:00.000',
            allDay: false
        },{
        //     title: 'Bezoekslot',
        //     start: '2015-01-27T16:00:00.000Z',
        //     end: '2015-01-27T17:00:00.000Z',
        //     allDay: false
        // },{
            title: 'Bezoekslot (u wenst geen bezoek)',
            start: '2015-01-27T17:00:00.000Z',
            end: '2015-01-27T18:00:00.000Z',
            allDay: false,
            color: 'red'
        },{
            title: 'Bezoekslot',
            start: '2015-01-27T18:00:00.000Z',
            end: '2015-01-27T19:00:00.000Z',
            allDay: false
        },{
            title: 'Bezoekslot',
            start: '2015-01-27T19:00:00.000Z',
            end: '2015-01-27T20:00:00.000Z',
            allDay: false
        }
    ]];

    $rootScope.uiConfig = {
        calendar:{
            height: 450,
            editable: false,
            header:{
              left: '',
              center: 'prev today next',
              right: ''
            },
            defaultView: 'agendaDay',
            eventClick: function( date, jsEvent, view){
                console.log(date);
                if(date.title.indexOf('Bezoekslot' != -1)){
                    if(date.color != 'red'){
                        date.color="red";
                        date.title = "Bezoekslot (u wenst geen bezoek)";
                    } else {
                        delete date.color; 
                        date.title = "Bezoekslot";
                    }
                }
            }
        }
    }

    $(window).resize(function(){
        if($(window).width() > 900)
            $rootScope.uiConfig.calendar.defaultView = 'agendaWeek';
        else
            $rootScope.uiConfig.calendar.defaultView = 'agendaDay';
    });
});