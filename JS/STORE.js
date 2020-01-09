const STORE = [
    {
      question: 'Where did George Friedrich Handel spend most his life?',
      answers: [
        'Germany',
        'England',
        'Italy',
        'France'
      ],
      correctAnswer:1,
      correctResponse: `<p><img class="imgBank" src="images/GFHandel.jpg" alt="George F Handel in a powdered wig"></p><p>That's correct! Handel was born in Germany, spent time in Italy, but eventually moved to England, gained citizenship and was subsequently hired as composer for The Chapel Royal!<p>`,
      incorrectResponse: '<p><img class="imgBank" src="images/GFHandel.jpg" alt="George F Handel in a powdered wig"></p><p>That\'ts not correct. Handel was born in Germany, spent time in Italy, but eventually moved to England.</p>',
    },
    {
      question:
        'Haydn, Mozart, and Beethoven together make up what historians call "The First Viennese School." What composer is credited with spearheading the "Second" Viennese School?',
      answers: [
        'Arnold Schoenberg',
        'John Williams',
        'David Hasselhoff',
        'Lou Bega'
      ],
      correctAnswer:0,
      correctResponse: 'Yes, Arnold Schoenberg was concidered "The Father of Atonality." Along with Alban Berg and Aton Webern he is concidered a member of the "Second Viennese School"',
      incorrectResponse: 'John Williams composed film music like Star Wars. Lou Bega is a meme, and David Hasselhoff is a lifeguard...I can\'t beleve you got this one wrong'
    },
    {
      question:
        'What year did JS Bach die?',
      answers: [
        '1760',
        '2000 B.C.E.',
        '1789',
        '1750'
      ],
      correctAnswer:3,
      correctResponse: `<p>Yes, he died in 1750 in Leipzig.</p><p><img class="imgBank" src="images/jsbach.jpg" alt="JS Bach at an Organ"></p> `,
      incorrectResponse: '<p>No, he died in 1750 in Leipzig</p><p><img class="imgBank" src="images/jsbach.jpg" alt="JS Bach at an Organ"></p> ',
    },
    {
      question: 'In 1889 the "Paris Exposition Universelle" World Fair brought music from all over the world. One particular style of music influenced young composers like Claude Debussy. What style of music was it?' ,
      answers: [
        'Gamelan',
        'Carnatic Music',
        'Griots',
        'JS Bach'
      ],
      correctAnswer: 0,
      correctResponse: 'Yes! It\'s said that the 1889 world fair was the first public venue that used electricity. People from all over the world were brought over to share their culture. Balinese Gamalan stunned a young Debussy and you can hear references to gamalan colotamy',
      incorrectResponse: 'No. Interestingly, it\'s said that the 1889 world fair was the first public venue that used electricity. People from all over the world were brought over to share their culture. But it was Balinese Gamalan that stunned a young Debussy and you can hear references to gamalan colotamy'
    },
    {
      question:
        'Who from the composers below is known for prepaired-piano works?',
      answers: [
        'Juliette Clements',
        'John Adams',
        'John Cage',
        'Aaron Copland'
      ],
      correctAnswer: 2,
      correctResponse: `<p><img class=imgBank src="images/johnCage.jpg" alt="John Cage at a prepaired piano"></p><p>Correct! John Cage called for balls, books, metal, and all manner of every-day items be put into the piano to turn it into a completely different sounding instrument.</p>`,
      incorrectResponse: 'Sorry, that is not correct! John Cage called for balls, books, metal, and all manner of every-day items be put into the piano to turn it into a completely different sounding instrument.'
    },
    {
      question: 'Robert Schumann is a well known composer of many works, but it was said his wife was equally as gifted as a composer, and possibly an even better pianist. What is her name?',
      answers: [
        'Bjork',
        'Lisa Simpson',
        'Clara Wieck',
        'Michelle Schumann'
      ],
      correctAnswer: 2,
      correctResponse: 'Correct! Clara Weick Schuman was a brilliant composer and pianist, but her productivness was held back by societies views on gender. Her Husband Robert Schumann was much more prolific.',
      incorrectResponse: 'Lisa is a great Saxophonist, and Bjork is an amazing singer, but Clara Schumann (née Wieck) was the gifted composer, pianist, and also wife of Robert Schuman'
    },
    {
      question:
        'This pianist/composer is known for having large hands, and his compositions have to be some-what adapted for people with smaller hands',
      answers: [
        'Sergei Rachmaninoff',
        'Mstislav Rostripovich',
        'Gregor Piatigorsky',
        'Pablo Casals'
      ],
      correctAnswer: 0,
      correctResponse: 'Yes! Rachmaninoff had huge hands. He could reach a major 13th on the piano!',
      incorrectResponse: 'Not quite! A couple of these guys did, in fact, have big hands, but Rachmoninoff is the pianist, while the others were actually cellists.'
    },
    {
      question: 'It was legend that because this violinist was so increidble, they must have sold their soul to the devil',
      answers: [
        'Nadja Salerno-Sonnenberg',
        'Hilary Hahn',
        'Friedrich "Fritz" Kreisler',
        'Niccolò Paganini'
      ],
      correctAnswer: 3,
      correctResponse: 'Yes, Paganini was a pretty insane violinist as evidence by first-hand written accounts and the 24 Caprices he composed, which are incredibly virtuosic and require tremendous quickness, percision, and endurance. I tried selling my soul to the devil and I still can\'t play it.',
      incorrectResponse: 'All these are fantastic violinists, but Paganini is said to have sold his soul to the devil to gain his level of virtuosity. I don\'t think that\'s true, because I\'d remember somebody with a silly name like Paganini making a deal with me.'
    },
    {
      question: 'Historically, strings on violins, celli, etc were made out of what material?',
      answers: [
        'Ice',
        'Lamb intestine',
        'Horse hair',
        'cats'
      ],
      correctAnswer: 1,
      correctResponse: 'That\'s correct! Though it\'s called "catgut," it has nothing to do with cats and is made from the fibers of lamb or sheep intestine. Strings these days are made of metals, but there has been a resurgance of these catgut strings in recent decades in an attempt to recreate pre-19th century music in a more historically acurate way.',
      incorrectResponse: 'Nope! It\'s true that to this day bowed stringed instruments like violin, viola, and cello are played with a bow that uses horse hair, but the strings were at one time made of lamb intestine.'
    },
    {
      question:
        'This Composer was "gently" threatened by Josef Stalin via a newspaper article about one of his new compositions. The accusation being that it was not supportive enough of communism.',
      answers: [
        'Igor Stravinsky',
        'Alexander Scriabin',
        'Alexander Borodin',
        'Dimitri Shostakovich'
      ],
      correctAnswer: 3,
      correctResponse: '<p><img class="imgBank" src="images/gpds.jpg" alt="A side-by-side comparrison of Harry Potter and Dimitri Shostakovich"></p><p>Yes, that\'s correct! Stalin thought it "might be best for Dimitir Sh. to compose differently next time." Fun fact, it\'s a joke amung musicians that Shostakovich looks similar to Harry Potter.</p>',
      incorrectResponse: 'No, it is Shostakovich who was called out by Stalin. He thought it "might be best for D.Sh. to compose differently next time."' 
    }
  ];