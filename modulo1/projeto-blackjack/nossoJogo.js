function Blackjack() {


   if(confirm("Quer iniciar uma rodada?")) {


      console.log("Boas vindas ao jogo de Blackjack")

      // comprar primeira carta

         const danielCarta1 = comprarCarta();
         let daniel = danielCarta1.valor
         console.log(`Daniel comprou a carta ${danielCarta1.texto} e está com ${daniel} pontos`)

         const pilarCarta1 = comprarCarta();
         let pilar = pilarCarta1.valor
         console.log(`Pilar comprou a carta ${pilarCarta1.texto} e está com ${pilar} pontos`)


      // comprar segunda carta


         if (confirm("Daniel quer comprar a segunda carta?")) {

            let danielCarta2 = comprarCarta()
            daniel = daniel + danielCarta2.valor
            console.log(`Daniel comprou a carta ${danielCarta2.texto} e está com ${daniel} pontos`)
         } 

         if (confirm("Pilar quer comprar a segunda carta?")) {

            let pilarCarta2 = comprarCarta()
            pilar = pilar + pilarCarta2.valor
            console.log(`Pilar comprou a carta ${pilarCarta2.texto} e está com ${pilar} pontos`)
         } 

         // comprar terceira carta

         if (confirm("Daniel quer comprar a terceira carta?")) {

            let danielCarta2 = comprarCarta()
            daniel = daniel + danielCarta2.valor
            console.log(`Daniel comprou a carta ${danielCarta2.texto} e está com ${daniel} pontos`)
         } 

         if (confirm("Pilar quer comprar a terceira carta?")) {

            let pilarCarta2 = comprarCarta()
            pilar = pilar + pilarCarta2.valor
            console.log(`Pilar comprou a carta ${pilarCarta2.texto} e está com ${pilar} pontos`)
         }

         // Condições de vitória

         if (daniel > 21) {
            console.log("Daniel estourou e perdeu")
            console.log("Pilar ganhou")
         } else if (pilar > 21) {
            console.log("Pilar estourou e perdeu")
            console.log("Daniel ganhou")
         } else if (daniel > pilar && daniel == 21) {
            console.log("Blackjack! Daniel ganhou")
         } else if (daniel > pilar) {
            console.log("Daniel fez mais pontos e ganhou")
         } else if (pilar > daniel && pilar == 21) {
            console.log("Blackjack! Pilar ganhou")
         } else if (pilar > daniel) {
            console.log("Pilar fez mais pontos e ganhou")
         } else 
         console.log("Empate")

      }
         console.log("Até a próxima!")
}

Blackjack()