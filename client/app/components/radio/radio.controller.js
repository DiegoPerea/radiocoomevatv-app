
class RadioController {
  constructor($interval,$http,ngAudio,$scope) {
    'ngInject';

    var self = this;

    $scope.$on("$destroy",function(){
      $interval.cancel(self.intervalAnimationEq);
      $interval.cancel(self.intervalRadioCheck);
      $interval.cancel(self.intervalPlayingCheck);
    });



    self.name = 'radio';

    self.audioHandle = {
      audio: null,
      source: null,
      metadata: {
        song: null,
        artist: null,
        cover: null,
        next: {
          song: null,
          artist: null,
          cover: null
        }
      },
      ready: false,
      playing: true,
      trackWidth: null,
      master: {},
      useAudioTag: true,
      error: false,
      playerSetButtonClass: function(action){
        if(action==='play'){
          self.playerButtonClass='glyphicon glyphicon-play';
        }else{
          self.playerButtonClass='glyphicon glyphicon-pause';
        }
      },
      currentRadio: null,
      currentSongTop:false

    };

    self.hoverCategory=false;

    self.eqBarsAnimation = function(){
      angular.forEach(angular.element(document.querySelectorAll(".eq-bar")), function(value, key){
        value.style.height = Math.random() * 100 + '%';
      });
    };

    self.eqBarsStop = function(){
      angular.forEach(angular.element(document.querySelectorAll(".eq-bar")), function(value, key){
        value.style.height =  10 + '%';
      });
    };

    self.animationEq = function(){

      if(self.audioHandle.playing===true){
        self.eqBarsAnimation();

      }else{
        self.eqBarsStop();
      }
    };

    self.intervalAnimationEq=$interval(self.animationEq, 100);


    self.startAudio=function(){
      self.audioHandle.playing= true;
      self.playing= true;
      self.audioHandle.playerSetButtonClass('stop');


    };

    self.stopAudio=function(){
      self.audioHandle.playing= false;
      self.playing= false;
      self.audioHandle.playerSetButtonClass('play');
      self.audioHandle.audio.restart();

    };



    self.playPauseButton = function(){
      if(self.audioHandle.playing=== false){
        if(self.audioHandle.audio.currentSongTop===false){
          switch (self.audioHandle.currentRadio) {
            case 'adulto':
              self.getRadio.adultoContemporaneo();
              break;
            case 'instrumental':
              self.getRadio.instrumental();
              break;
            case 'jovenes':
              self.getRadio.jovenes();
              break;
          }
        }else{
          self.audioHandle.audio.play();
        }

       self.startAudio();
      }else{
       self.stopAudio();
      }
    };

    self.top10 = [

      {'song': 'The Hills', 'artist': 'The Weeknd', 'cover': 'http://radio.coomeva.com.co/media/top10/images/the%20hills.jpg', 'audio': 'http://radio.coomeva.com.co/media/top10/player/The%20Weeknd%20-%20The%20Hills.mp3', 'lyrics': '<div id="textoplayer">Your man on the road, he doing promo<br>You said keep our business on the low-low<br>I m just tryna get you out the friend zone<br>Cause you look even better than the photos<br>I can t find your house, send me the info<br>Driving through the gated residential<br>Found out I was coming, sent your friends home<br>Keep on tryna hide it but your friends know<br><br>I only call you when it s half past five<br>The only time that I ll be by your side<br>I only love it when you touch me, not feel me<br>When I m fucked up, that s the real me<br>When I m fucked up, that s the real me, yeah<br>I only fuck you when it s half past five<br>The only time I d ever call you mine<br>I only love it when you touch me, not feel me<br>When I m fucked up, that s the real me<br>When I m fucked up, thats the real me, babe<br><br>I ma let you know and keep it simple<br>Tryna keep it up, don t seem so simple <br>I just fucked two bitches  fore I saw you<br>You gon have to do it at my tempo<br>Always tryna send me off to rehab<br>Drugs start to feeling like it s decaf<br>I m just tryna live life for the moment<br>And all these motherfuckers want a real love<br><br>I only call you when it s half past five<br>The only time that I ll be by your side<br>I only love it when you touch me, not feel me<br>When I m fucked up, that s the real me<br>When I m fucked up, that s the real me, yeah<br>I only fuck you when it s half past five<br>The only time I d ever call you mine<br>I only love it when you touch me, not feel me<br>When I m fucked up, that s the real me<br>When I m fucked up, that s the real me, babe<br><br>Hills have eyes, the hills have eyes<br>Who are you to judge, who are you to judge<br>Hide your lies, girl, hide your lies<br>Only you to trust, only you<br><br>I only call you when it s half past five<br>The only time that I ll be by your side<br>I only love it when you touch me, not feel me<br>When I m fucked up, that s the real me<br>When I m fucked up, that s the real me, yeah<br>I only fuck you when it s half past five<br>The only time I d ever call you mine<br>I only love it when you touch me, not feel me<br>When I m fucked up, that s the real me<br>When I m fucked up, that s the real me, babe</div>'},
      {'song': 'My House', 'artist': 'Flo Rida', 'cover': 'http://radio.coomeva.com.co/media/top10/images/house.jpg', 'audio': 'http://radio.coomeva.com.co/media/top10/player/Flo%20Rida%20-%20My%20House%20.mp3', 'lyrics': '<div id="textoplayer">Open up the champagne, pop<br>It s my house, come on, turn it up<br>Hear a knock on the door and the night begins<br>Cause we done this before so you come on in<br>Make yourself at my home, tell me where you been<br>Pour yourself something cold, baby, cheers to this<br><br>Sometimes you gotta stay in<br>And you know where I live<br>Yeah, you know what we is<br>Sometimes you gotta stay in, in<br><br>Welcome to my house<br>Baby, take control now<br>We can t even slow down<br>We don t like to go out<br>Welcome to my house<br>Play that music too loud<br>Show me what you do now<br>We don t like to go out<br>Welcome to my house<br>Welcome to my house<br><br>Morning comes and you know that you wanna stay<br>Close the blinds, let s pretend that the time has changed<br>Keep our clothes on the floor, open up champagne<br>Let s continue tonight, come on, celebrate<br>Sometimes you gotta stay in<br>And you know where I live<br>Yeah, you know what we is<br>Sometimes you gotta stay in, in<br><br>Welcome to my house<br>Baby, take control now<br>We can t even slow down<br>We don t like to go out<br>Welcome to my house<br>Play that music too loud<br>Show me what you do now<br>We don t like to go out<br>Welcome to my house<br>Welcome to my house<br><br>Welcome to my duck off the crib, the spot, the pad<br>But my house is your house if you throwin  it back<br>Excuse me if my home bringing the sad<br>Soon as these happy faces land you can run with the cash<br>Homerun, slam dunk, touchdown, pass<br>Mi casa es tu casa so it ain t no holding back<br>Another shot of vodka, you know what s in my glass<br>It s my house, just relax<br><br>Welcome to my house<br>Baby, take control now<br>We can t even slow down<br>We don t like to go out<br>Welcome to my house<br>Play that music too loud<br>Show me what you do now<br>We don t like to go out<br>Welcome to my house<br>Welcome to my house<br>Welcome to my house<br>It s my house</div>'},
      {'song': 'Hello', 'artist': 'Adele', 'cover': 'http://radio.coomeva.com.co/media/top10/images/ade3455.jpg', 'audio': 'http://radio.coomeva.com.co/media/top10/player/Adele%20-%20Hello.mp3', 'lyrics': '<div id="textoplayer">Hello, it s me...<br>I was wondering<br>If after all these years you d like to meet<br>To go over everything<br>They say that time s supposed to heal you<br>But ain t done much healing<br>Hello, can you hear me?<br>I m in California dreaming about who we used to be<br>When we were younger and free<br>I ve forgotten how it felt<br>Before the world fell at our feet<br>There s such a difference between us<br>And a million miles<br>Hello from the other side<br>I must have called a thousand times<br>To tell you I m sorry<br>For everything that I ve done<br>But when I call<br>You never seem to be home<br>Hello from the outside<br>At least I can say<br>That I ve tried to tell you<br>I m sorry for breaking your heart<br>But it don t matter<br>It clearly doesn t tear you apart anymore<br>Hello, how are you?<br>It s so typical of me<br>To talk about myself, I m sorry<br>I hope that you re well<br>Did you ever make it out of that town<br>Where nothing ever happened?<br>It s no secret that the both of us<br>Are running out of time<br>Hello from the other side<br>I must have called a thousand times<br>To tell you I m sorry<br>For everything that I ve done<br>But when I call<br>You never seem to be home<br>Hello from the outside<br>At least I can say<br>That I ve tried to tell you<br>I m sorry for breaking your heart<br>But it don t matter<br>It clearly doesn t tear you apart anymore<br>Oh, anymore...<br>Hello from the other side<br>I must have called a thousand times<br>To tell you I m sorry<br>For everything that I ve done<br>But when I call<br>You never seem to be home<br>Hello from the outside<br>At least I can say<br>That I ve tried to tell you<br>I m sorry for breaking your heart<br>But it don t matter<br>It clearly doesn t tear you apart anymore</div>'},
      {'song': 'Ecos de Amor', 'artist': 'Jesse and Joy', 'cover': 'http://radio.coomeva.com.co/media/top10/images/ecosdeamor.jpg', 'audio': 'http://radio.coomeva.com.co/media/top10/player/Jesse%20y%20Joy%20-%20Ecos%20de%20Amor.mp3', 'lyrics': '<div id="textoplayer">Desperté en la oscuridad<br>Sin dejarte de pensar<br>Sigue tu huella en mi almohada<br>Veo tu rostro frente a mi<br>Siento que aún estás aquí<br>Todo mi cuerpo te extraña<br>Puedo ver tu sombra en la luna<br>Cuando mi memoria te alumbra<br><br>Ya están desgastadas<br>Todas las palabras<br>Lo que queda entre tú y yo<br>No le alcanza al corazón<br>Y desde mi pecho<br>Suena tu recuerdo<br>Todo lo que fue de los dos<br>Son ecos de amor<br>Oh, oh, oh, oh, oh, oh<br><br>Estoy perdiendo la razón<br>Me hablas en cualquier canción<br>Tu nombre está en cada palabra<br>Estás tan cerca y tan lejos<br>Me aferro sólo a un reflejo<br>Te pierdo<br><br>Ya están desgastadas<br>Todas las palabras<br>Lo que queda entre tú y yo<br>No le alcanza el corazón<br>Y desde mi pecho<br>Suena tu recuerdo<br>Todo lo que fue de los dos<br>Son ecos de amor, oh, oh<br>Ecos de amor, oh, oh<br><br>Suenan más y cada vez un poco más<br>Suenan tanto y no me puedo acostumbrar<br>Ya están desgastadas<br>Todas las palabras<br>Lo que queda entre tú y yo<br>No le alcanza el corazón<br><br>Y desde mi pecho<br>Suena tu recuerdo<br>Todo lo que fue de los dos<br>Son ecos de amor, oh, oh, oh<br>Ecos de amor, oh, oh, oh<br>Ecos de amor, oh, oh, oh<br>Ecos de amor, oh, oh, oh</div>'},
      {'song': 'La Vida es un Vals', 'artist': 'Diego Torres', 'cover': 'http://radio.coomeva.com.co/media/top10/images/la%20vida%20es%20un%20vals.jpg', 'audio': 'http://radio.coomeva.com.co/media/top10/player/LA%20VIDA%20ES%20UN%20VALS%20_%20DIEGO%20TORRES%20_%20LETRA.mp3', 'lyrics': '<div id="textoplayer">A veces el miedo te hace dudar<br>A pocos segundos antes de saltar<br>No lo dudes, solo abre tus alas<br>Siente el vuelo<br>A veces las metas tardan en llegar<br>Te invade la inercia, te dejas llevar<br>No te olvides, comprarle un traje<br>Nuevo a tus sueñas<br><br>Y veras<br>Que la vida viene y va<br>Como un vals<br>Un paso adelante<br> Y otro paso a tras<br><br>Si cada lagrima te hace más fuerte<br>Muerde la vida con uñas y dientes<br>Hoy puede ser, que todo empiece a cambiar<br>Si cada guerra marca tus rodillas<br>Y la ilusión se convierte en cenizas<br>Hoy puede ser, que todo empiece a cambiar<br>Y lo mejor, lo mejor, esta por llegar<br><br>A veces te aferras de un viejo disfraz<br>Y aquel que no sufre con la soledad<br>Corre el riesgo, amar aunque te duela<br>Siempre es bueno<br>Y veras<br>Como todo viene y va<br>La ida es un vals<br>Un paso adelante<br>Otro paso atrás<br>Si cada lagrima te hace más fuerte<br>Muerde la vida con uñas y dientes<br>Hoy puede ser, que todo empiece a cambiar<br>Si cada guerra marca tus rodillas<br>Y la ilusión se convierte en cenizas<br>Hoy puede ser, que todo empiece a cambiar<br>Y lo mejor, lo mejor, esta por llegar<br>Y lo mejor, lo mejor, esta por llegar<br>Y lo mejor, lo mejor, esta por llegar.</div>'},
      {'song': 'Las Cuatro Estaciones', 'artist': 'Alberto Plazas', 'cover': 'http://radio.coomeva.com.co/media/top10/images/plaza34.jpg', 'audio': 'http://radio.coomeva.com.co/media/top10/player/Alberto%20Plaza%20-%20Las%20Cuatro%20Estaciones.mp3', 'lyrics': '<div id="textoplayer">Tengo una caricia larga, esperando por tu espalda<br>Guardo un beso siempre en la nevera<br>Para cuando llegue al borde de tus labios<br>Colonizarlos y poner banderas<br>Tengo una tarde cualquiera<br>Caminando por la calle<br>Tengo a mano un libro de Kundera<br>Una noche en luna llena<br>Tengo la esperanza de que me acompañes<br>A cruzar la vida, a cruzarla entera.<br>Y es que te amo así como las flores aman el aire de la primavera<br>Amo la forma en que me desespera este silencio si no estas conmigo<br>Quiero que seas tu mi compañera, eres todo lo que yo soñé<br>Quien lo diría quien creyera, yo te amo, como ama el invierno<br>El suave olor de la madera<br>Amo mirarnos sin hablar si quiera<br>Reírnos de nuestros secretos<br>Y es que contigo todo es diferente<br>Es todo como yo quisiera<br>Todo es como yo quisiera<br>Yo te amo.<br><br>Tengo un arpegio en tu pelo, un concierto de sudores<br>Tengo ganas de que te enamores, de mis dedos como yo muero por tu cintura<br>Quiero la locura.<br>De tu piel entera.<br>Quiero esa fortuna.<br>Y es que te amo como en el otoño aman las hojas volar con el viento<br>Amo la estela de este sentimiento, que me libera y me condena<br>Y es que me gustas sin ningún motivo<br>Amo todo lo que me recuerda a ti<br>Te amo desde siempre, yo te amo así como el verano ama salir a caminar desnudo<br>Te amo sin barreras sin escudo, así como la vez primera, y es que contigo todo es diferente<br>Es todo como yo quisiera,<br>Todo es como yo quisiera,<br>Yo te amooo<br>Te amooo <br>quien lo diría, quien creyera<br>es que te amo así como los años pasan el paso de las estaciones<br>Amo el color que tienen mis canciones, desde esa noche azul de mayo<br>Es que contigo todo es diferente<br>Es todo como yo quisiera<br>Todo es como yo quisiera<br>Yo te amoooooooo</div>'},
      {'song': 'The Weeknd', 'artist': 'Can\'t Feel My Face', 'cover': 'http://radio.coomeva.com.co/media/top10/images/0000feel.jpg', 'audio': 'http://radio.coomeva.com.co/media/top10/player/The%20Weeknd%20Can%20t%20Feel%20My%20Face.mp3', 'lyrics': '<div id="textoplayer">And I know she ll be the death of me, at least we ll both be numb<br>And she ll always get the best of me, the worst is yet to come<br>But at least we ll both be beautiful and stay forever young<br>This I know, yeah this I know<br>She told me, Don t worry about it.<br>She told me, Don t worry no more.<br>We both knew we cant go without it<br>She told me you ll never be alone oh oh, whoa<br><br>I can t feel my face when I m with you<br>But I love it, but I love it, oh<br>I can t feel my face when I m with you<br>But I love it, but I love it, oh<br><br>And I know she ll be the death of me, at least we ll both be numb<br>And she ll always get the best of me, the worst is yet to come<br>All the misery was necessary when we re deep in love<br>Yes I know yes I know, yeah, I know<br><br>She told me, Don t worry about it.<br>She told me, Don t worry no more.<br>We both knew we can t go without it<br>She told me you ll never be alone oh oh, whoa<br><br>I can t feel my face when I m with you<br>But I love it, but I love it, oh<br>I can t feel my face when I m with you<br>But I love it, but I love it, oh<br><br>I can t feel my face when I m with you<br>But I love it, but I love it, oh<br>I can t feel my face when I m with you<br>But I love it, but I love it, oh<br><br>She told me, Dont worry about it.<br>She told me, Don t worry no more.<br>We both know we can t go without it<br>She told me you ll never be alone oh oh<br>Whoa<br><br>I can t feel my face when I m with you<br>But I love it, but I love it, oh<br>I can t feel my face when I m with you<br>But I love it, but I love it, oh<br><br>I can t feel my face when I m with you<br>But I love it, but I love it, oh<br>I can t feel my face when I m with you<br>But I love it, but I love it, oh</div>'},
      {'song': 'No Nos Digamos Mentiras', 'artist': 'Santiago Cruz', 'cover': 'http://radio.coomeva.com.co/media/top10/images/4567.jpg', 'audio': 'http://radio.coomeva.com.co/media/top10/player/Santiago%20Cruz-%20No%20Nos%20Digamos%20Mentiras.mp3', 'lyrics': '<div id="textoplayer">Tu lo sabes también no estoy solo en este frío en que nos convertimos.<br> No supimos leer las señales que advertían que venia un abismo.<br>No es hora de buscar que nos falto, que se perdió, quien renunció cuando los dos lo hicimos; si los dos lo hicimos..<br><br>Tu lo sabes también no estoy solo en este frío en que nos convertimos.<br>No supimos leer las señales que advertían que venia un abismo.<br>No es hora de buscar que nos falto, que se perdió, quien renunció cuando los dos lo hicimos; si los dos lo hicimos..<br><br>Las cartas sobre la mesa sabes bien que no hay sorpresas aceptemos que no hay vuelta atrás..<br>Basta no nos digamos mentiras en honor a nuestra vida aunque duela ver la realidad..<br><br>No nos digamos mentiras..<br>Tu lo sabes también ya no hay ganas ni siquiera de engañarnos..<br>Para que pretender si esta claro que nos cuesta un mundo cada abrazo..<br>Yo se que esta derrota tiene parte de los dos no hay vencedores si tu y yo perdimos.<br><br>Y tu y yo perdimos..<br>Las cartas sobre la mesa sabes bien que no hay sorpresas aceptemos que no hay vuelta atrás..<br>Basta no nos digamos mentiras en honor a nuestra vida aunque duela ver la realidad..<br>No nos digamos mentiras..<br>Podemos darle vuelta sin parar y hacer heridas que al final ya no tendrá sentido..<br>Las cartas sobre la mesa sabes bien que no hay sorpresas aceptemos que no hay vuelta atrás..<br><br>Basta no nos digamos mentiras en honor a nuestra vida aunque duela ver la realidad..<br>Las cartas sobre la mesa sabes bien que no hay sorpresas aceptemos que no hay vuelta atrás..<br>Y basta no nos digamos mentiras en honor a nuestra vida aunque duela ver la realidad..<br><br>No nos digamos mentiras este adiós merece mas..<br>No nos digamos mentiras este adiós merece más..</div>'},
      {'song': 'Sax', 'artist': 'Fleur East', 'cover': 'http://radio.coomeva.com.co/media/top10/images/sax.jpg', 'audio': 'http://radio.coomeva.com.co/media/top10/player/Sax-%20Fleur%20East%20lyrics%20with%20music.mp3', 'lyrics': '<div id="textoplayer">Give it to me <br>Give it to me<br>I met a boy last week tryna run that game<br>Made it sound so sweet when he say my name<br>I said boy, stop, run it back<br>You can talk that talk but can you play that sax?<br>I met a boss last night buyin out the bar<br>Said I can ride top-down in his Jaguar<br>I m like boy, stop, run that back<br>You can drive all night but can you play that sax?<br>Baby baby Ive been waitin for the one to blow my mind<br>Baby maybe you can get it if you got that thang I like<br>I need to stick around the way you chase round south<br>The type of red hot love that got me freezin cause<br>Say you can go all night the way you lay that track<br>But if you wanna hear me sing you better play that sax<br>Give it to me<br>You better play that sax, uh<br>Okay Play it<br>You better play that sax<br>I met a dude last week honey he s so vain<br>Yeah he be lovin himself more than Kim and Ye<br>I m like boy stop, run that back<br>God damn you fine but can you play that sax?<br>Met a smart ass dude, mister know it all<br>Think you got Fleur down to a formula<br>I m like boy stop, run it back<br>Pick a big IQ but can you play that sax?<br>Baby baby I ve been waitin for the one to blow my mind, allll right<br>Baby maybe you can get it if you got that thang I like<br>I need to stick around the way you chase round south<br>The type of red hot love that got me freezin cause<br>Say you can go all night the way you lay that track<br>But if you wanna hear me sing you better play that sax<br>Give it to me<br>Uh, okay, yeah<br>You better play that sax<br>Okay Play it<br>No fancy cars or bass guitars<br>Fellas in suits smoking on cigars<br>Those little boys making all that noise<br>But you ain t gon steal the show<br>No fancy cars or bass guitars<br>Fellas in suits smoking on cigars, uh<br>Just play that song I know<br>Take a deep breath and blow<br>Get loose, get right<br>Get a grip and rock me all night<br>Hold tight, lean back<br>Play one on one with that sax<br>Get loose, get right<br>Get a grip and rock me all night<br>Hold tight, lean back<br>Play one on one with that sax<br>I need to stick around the way you chase round south<br>The type of red hot love that got me freezin cause<br>Say you can go all night the way you lay that track<br>But if you wanna hear me sing<br>If you wanna hear me sing<br>If you wanna hear me sing you better play that sax<br>Give it to me<br>You better play that sax<br>You better play that sax<br>Get loose, get right<br>Get a grip and rock me all night<br>Hold tight, lean back, play what I want<br>You better play that sax<br>Get loose, get right<br>Get a grip and rock me all night<br>Hold tight, lean back, play what I want<br>You better play that sax<br>Get loose, get right<br>Get a grip and rock me all night<br>Hold tight, lean back, play what I want with that sax</div>'},
      {'song': 'Bajo el Agua', 'artist': 'Manuel Medrano', 'cover': 'http://radio.coomeva.com.co/media/top10/images/manuelmdno.jpg', 'audio': 'http://radio.coomeva.com.co/media/top10/player/Manuel%20Medrano%20-%20Bajo%20El%20Agua.mp3', 'lyrics': '<div id="textoplayer">Quiero volar contigo, muy alto en algún lugar<br>Quisiera estar contigo viendo las estrellas sobre el mar<br>Quiero encontrar otro camino ponerme mi vestido<br>y salir a caminar contigo<br>Quiero decirle al mundo que no somos amigos<br>Decirle a la tristeza<br>Que no se cruce en mi camino...<br>Ho nooo nono<br><br>Quiero volar contigo, muy alto en algún lugar<br>Quisiera estar contigo viendo las estrellas sobre el mar<br>Quiero encontrar otro camino ponerme mi vestido<br>y salir a caminar contigo quiero<br>Decirle al mundo que no somos amigos<br>Decirle a la tristeza<br>Que no se cruce en mi camino..ohhhh, Hoy por que voy con la fuerza de un submarino<br>A conquistar a esa dama que tanto juega conmigo<br>Voy por el mundo solo y sin amigos<br>Voy dando tantas vuelas sin ningún sentido<br> Pero tu ayer cambiaste mi destino<br>Me diste vida mucha mas vida que le vino<br>Me diste fuerza en los días fríos<br>Me diste ganas de extrañarte sin ningún motivo<br>Ho nooo nono<br><br>Quiero volar contigo, muy alto en algún lugar<br>Quisiera estar contigo viendo las estrellas sobre el mar<br>Quiero encontrar otro camino ponerme mi vestido<br>Y salir a caminar contigo quiero<br>Decirle al mundo que no somos amigos<br>Decirle a la triste se que<br>Que no se crece en tu camnioooo<br>Que no se cruces no<br>Que no se<br>Que no se cruce no...</div>'},
    ];

    self.selectTop10 = function(item){
      self.lyricsTop10 = '<div class="title-top10-lyrics">';
      self.lyricsTop10 += '<figure class="lyric-close" close-lyrics>';
      self.lyricsTop10 += '<i class="glyphicon glyphicon-remove"></i>';
      self.lyricsTop10 += '</figure>';
      self.lyricsTop10 += '<strong>' + item.song + '</strong>';
      self.lyricsTop10 += '<span>' + item.artist + '</span>';
      self.lyricsTop10 += '</div>';
      self.lyricsTop10 += item.lyrics;
      self.restartAudio();

      self.audioHandle.source = item.audio;
      self.audioHandle.audio = ngAudio.load(self.audioHandle.source);
      self.audioHandle.metadata.song = item.song;
      self.audioHandle.metadata.artist = item.artist;
      self.audioHandle.metadata.cover = item.cover;
      self.audioHandle.currentRadio=null;
      self.audioHandle.currentSongTop=true;
      self.audioHandle.playerSetButtonClass('stop');
      self.audioHandle.playing=true;
      self.playing= true;


      self.audioHandle.audio.play();
    };

    self.radioClass='adulto-contemporaneo';

    self.setRadio = function(src,radio){
        self.restartAudio();
        self.audioHandle.source = src;
        self.audioHandle.audio = ngAudio.load(src);
        self.audioHandle.audio.play();
        self.audioHandle.playerSetButtonClass('pause');
        self.audioHandle.currentRadio=radio;

        if(radio==='adulto'){
          self.currentRadio = 'Adulto Contemporaneo';
          self.radioClass = 'adulto-contemporaneo';
        }else if(radio==='instrumental'){
          self.currentRadio = 'Instrumental';
          self.radioClass = 'instrumental';
        }else{
          self.currentRadio = 'Jovenes';
          self.radioClass = 'jovenes';
        }
        return src;

    };



    self.setInfoMetadata = function(response){
      self.audioHandle.metadata.song = response.data.current.title;
      self.audioHandle.metadata.artist = response.data.current.artist;
      self.audioHandle.metadata.cover = response.data.current.album_art;
      self.audioHandle.metadata.next.song = response.data.next.title;
      self.audioHandle.metadata.next.artist = response.data.next.artist;
      self.audioHandle.metadata.next.cover = response.data.next.album_art;
    };

    self.infoMetadata = {
      adultoContemporaneo: function(){
        $http.get('http://108.163.147.73/radio-new/public/api/v1.0/adulto/get-xml')
          .then(function(response){
            self.setInfoMetadata(response);
          });
      },
      instrumental: function(){
        $http.get('http://108.163.147.73/radio-new/public/api/v1.0/instrumental/get-xml')
          .then(function(response){
            self.setInfoMetadata(response);
          });
      },
      jovenes: function(){
        $http.get('http://108.163.147.73/radio-new/public/api/v1.0/jovenes/get-xml')
          .then(function(response){
            self.setInfoMetadata(response);
          });
      }
    };


    self.restartAudio=function(){
      if(self.audioHandle.audio!=null){
        self.audioHandle.audio.restart();
      }
      //self.audioHandle.audio=null;

    };

    self.getRadio = {
      adultoContemporaneo: function(){
        self.setRadio('http://radio.coomeva.com.co:8090/adulto.mp3','adulto');
        self.infoMetadata.adultoContemporaneo();
        self.audioHandle.currentSongTop=false;
      },
      instrumental: function(){
        self.setRadio('http://radio.coomeva.com.co:8090/instrumental.mp3','instrumental');
        self.infoMetadata.adultoContemporaneo();
        self.audioHandle.currentSongTop=false;
      },
      jovenes: function(){
        self.setRadio('http://radio.coomeva.com.co:8090/jovenes.mp3','jovenes');
        self.infoMetadata.adultoContemporaneo();
        self.audioHandle.currentSongTop=false;
      }
    };



    self.radioCheck = function(){
      if(self.audioHandle.playing===true && self.audioHandle.currentSongTop===false){
        switch (self.audioHandle.currentRadio) {
          case 'adulto':
            self.infoMetadata.adultoContemporaneo();
            return true;
            break;
          case 'instrumental':
            self.infoMetadata.instrumental();
            return true;
            break;
          case 'jovenes':
            self.infoMetadata.jovenes();
            return true;
            break;
          default:
            self.infoMetadata.adultoContemporaneo();
            return false;
        }
      }
    };

    self.intervalRadioCheck=$interval(self.radioCheck, 2000);

    self.initRadio = function(){
      self.getRadio.adultoContemporaneo();

    };

    self.playingCheck=function(){

      if(self.playing===false){
        self.stopAudio();
      }else{
        self.startAudio();
      }
    };

    self.intervalPlayingCheck=$interval(self.playingCheck, 10);

    self.initRadio();

  };
}

export default RadioController;
