import bg from '../assets/img/bg_games/game_1.png'

export const scenario =
   {
   title: "Le donjon abandonné",
   id: 12,
   isWon: false,
   isGameOver: false,
   duration: 3000,
   currentTime: 0,
   bg: bg,
   item: [
      {
         id: 0,
         name: "clef",
         isOwned: false
      }
   ],
   views: [
      {
         id: 0,
         text: "C’est votre premier date et vous avez choisi le Donjon abandonne. Que voulez vous explorer ?",
         actions: [
            {
               text: "Tour ouest",
               goToView: 1,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Jardin",
               goToView: 2,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Salle du trone",
               goToView: 3,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Le cachot",
               goToView: 4,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 1,
         text: "Un dragon se tient au sommet de la tour. Il vous demande du feu ?",
         actions: [
            {
               text: "Tu te foutrais pas un peu de ma gueule ?",
               goToView: 1.1,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Desole je ne fume pas",
               goToView: 1.2,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Je te prete mon briquet mais il s’apelle revient",
               goToView: 1.3,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 1.1,
         text: "Bien vu frerot ! Jsuis un dragon en fait ! Tiens jte file une clef que j’ai trouve dans le couloir. Ca doit surement ouvrir une porte...",
         actions: [
            {
               text: "Prendre la clef",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 1.2,
         text: "Cool pour tes poumons frérot ! Par contre j’ai un petit croc ...",
         actions: [
            {
               text: "Lui donner votre sandwich au thon",
               goToView: 1.21,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Lui donner votre tarte aux fraises",
               goToView: 1.22,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 1.3,
         text: "Tu m’as pris pour qui ? je suis pas un crevard !",
         actions: [
            {
               text: "Vous perdez 10 secondes",
               goToView: 0,
               isDisabled: true,
               type: "malus"
            }
         ]
      },
      {
         id: 1.22,
         text: "Jsuis alergique aux fraises espece de raclure de bidet !",
         actions: [
            {
               text: "Vous êtes mort",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 2,
         text: "Vous entendez un bruit venant du puit.",
         actions: [
            {
               text: "Vous vous penchez pour ecouter",
               goToView: 2.1,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Vous jeter un caillou dedans",
               goToView: 2.1,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 2.1,
         text: "Un poulpe sort du puit et entraine votre date vers le fond",
         actions: [
            {
               text: "Lui tendre une corde",
               goToView: 2.11,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Le laisser se noyer",
               goToView: 2.21,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 2.11,
         text: "Votre date est reconnaissant",
         actions: [
            {
               text: "Infos du profil",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 2.21,
         text: "...",
         actions: [
            {
               text: "Vous êtes mort",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 3,
         text: "Un squelette avec une couronne est sur le trone.",
         actions: [
            {
               text: "Voler la couronne",
               goToView: 3.1,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Lui serrer la main",
               goToView: 3.2,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Jouer une piece de Shakespear avec son crane",
               goToView: 3.3,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Twerker sur ses genoux",
               goToView: 3.4,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 3.1,
         text: "Vous declenchez une malediction sur le donjon",
         actions: [
            {
               text: "Vous perdez 10 secondes",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 3.2,
         text: "Vous echanger votre ame contre une information precieuse",
         actions: [
            {
               text: "Infos du profil",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 3.3,
         text: "Le squelette applaudi",
         actions: [
            {
               text: "Vous gagnez 10 secondes",
               goToView: 0,
               isDisabled: true,
               type: "bonus"
            }
         ]
      },
      {
         id: 3.4,
         text: "Le skelette se reveille “Joli petit cul ;)”",
         actions: [
            {
               text: "Faire une crise de jalousie",
               goToView: 3.41,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Proposer un plan a trois",
               goToView: 3.42,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 3.41,
         text: "Tu perds ton temps",
         actions: [
            {
               text: "Vous perdez 10 secondes",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 3.42,
         text: "Ça va pas bien non ?",
         actions: [
            {
               text: "Vous êtes mort",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 4,
         text: "La porte est fermee il faut une clef",
         actions: [
            {
               text: "Utiliser la clef",
               goToView: 4.1,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Crocheter la serrure",
               goToView: 4.2,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 4.1,
         text: "Un troll dans les cachots ! Il vous propose 2 places dans le jacuzzi",
         actions: [
            {
               text: "Vous payez votre place",
               goToView: 4.11,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Vous payez pour les deux",
               goToView: 4.12,
               isDisabled: true,
               type: "default"
            },
            {
               text: "Vous ne payez pas",
               goToView: 4.13,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 4.2,
         text: "Vous déclenchez un piège",
         actions: [
            {
               text: "Vous êtes mort",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 4.11,
         text: "C'est honnête ! Vous passez un bon moment dans le jacuzzi",
         actions: [
            {
               text: "Photo de profil",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 4.12,
         text: "Quelle générosité ! Vous passez un bon moment dans le jacuzzi",
         actions: [
            {
               text: "Photo de profil",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
      {
         id: 4.13,
         text: "Michto ! Vous passez un bon moment dans le jacuzzi",
         actions: [
            {
               text: "Photo de profil",
               goToView: 0,
               isDisabled: true,
               type: "default"
            }
         ]
      },
   ]
}
