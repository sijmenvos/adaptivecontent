angular.module('lego')

.controller('appCtrl', function($rootScope, $http, $stateParams, $state, $mdToast,$mdBottomSheet, uiCalendarConfig){
    $rootScope.friends = [];

    var afdelingen = ['Algemeen Klinisch', 'Chirurgie', 'Eerste Hart Hulp (EHH)', 'Dyspnoe polikliniek', 'Anesthesiologie en pijnbestrijding', 'Buitenpolikliniek', 'Cardiologie', 'Endoscopie', 'Nesselande'];
    var dagen = ["maandag", 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']

    $http.get('http://api.randomuser.me/?results=20')
    .success(function(data){
        console.log(data);
        data.results.forEach(function(item){
            item = item.user;
            $rootScope.friends.push({
                name: item.name.first + ' ' + item.name.last,
                what: afdelingen[Math.floor(Math.random()*afdelingen.length)],
                until: 'maandag',
                face: item.picture.medium
            })
        });
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