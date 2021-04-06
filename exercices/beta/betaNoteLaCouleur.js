import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,combinaison_listes,randint} from "/modules/outils.js";
import {mathalea2d,scratchblock } from "/modules/2d.js";

class NoteLaCouleur{
    constructor(){
        this.plateau=[['Noir','Jaune','Bleu','Vert','Orange','Rouge','Orange','Noir','Jaune','Gris','Vert','Rose','Noir'],
        ['Rouge','Bleu','Orange','Jaune','Rose','Gris','Jaune','Rose','Gris','Jaune','Bleu','Rouge','Gris'],
        ['Rose','Vert','Gris','Rouge','Noir','Bleu','Vert','Noir','Vert','Bleu','Rose','Gris','Vert'],
        ['Vert','Bleu','Rose','Vert','Bleu','Orange','Gris','Rouge','Orange','Jaune','Gris','Rouge','Rose'],
        ['Noir','Orange','Rouge','Orange','Jaune','Rouge','Blanc','Blanc','Noir','Gris','Orange','Noir','Jaune'],
        ['Rose','Gris','Noir','Bleu','Vert','Bleu','Blanc','Blanc','Rouge','Bleu','Gris','Vert','Rouge'],
        ['Noir','Rouge','Rose','Vert','Orange','Rose','Noir','Orange','Vert','Jaune','Rose','Noir','Rose'],
        ['Orange','Gris','Rouge','Jaune','Noir','Vert','Rouge','Rose','Noir','Bleu','Vert','Jaune','Orange'],
        ['Bleu','Jaune','Orange','Vert','Gris','Jaune','Gris','Orange','Gris','Rose','Bleu','Rouge','Bleu'],
        ['Rose','Bleu','Jaune','Rose','Orange','Rouge','Bleu','Noir','Jaune','Gris','Vert','Jaune','Noir']];
        this.currentPos={x:15,y:15};
        this.nextStepLatex='';
        this.nlc = function(){
          return this.plateau[Math.ceil((135-this.currentPos.y)/30)][Math.ceil((195+this.currentPos.x)/30)];
        };
    }
}

export default function Note_la_couleur() {
    "use strict";
    Exercice.call(this);
    this.titre = "Note la couleur";
    this.nb_questions = 1; 
    this.nb_questions_modifiable=true ;
    this.nb_cols = 1; 
    this.nb_cols_corr = 1;
    this.pas_de_version_LaTeX=false ;
    this.pas_de_version_HMTL=false ;
    this.type_exercice = "Scratch";
    this.liste_packages = `scratch3`;

  
 
    this.nouvelle_version = function () {

    let dansLaGrille=function(instruction,pion){



    };

    this.liste_questions = [] ;
    this.liste_corrections = [];
    let type_de_questions_disponibles=[2];
    let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions);

      let objets_enonce,objets_correction,params_enonce,params_correction;
      let commandes_disponibles,nb_couleurs,instruction;
      let pion=new NoteLaCouleur();
      for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
        objets_enonce = [];
        objets_correction = [];
  
        texte = ``;
        texte_corr = ``;
        switch (liste_type_de_questions[i]) { 
          case 1:
              nb_couleurs=4;
              commandes_disponibles=[`AV30`,'AV60','AV90',`TD90`,`TG90`,`TD180`,`TG180`,`NLC`]
              pion.currentPos.x=15;
              pion.currentPos.y=15;
              while (nb_couleurs>0){
                instruction=choice(commandes_disponibles)
                while (dansLaGrille(instruction,pion)[0]){

                }
              }
              
               texte=scratchblock(`\\begin{scratch}
              \\initmoreblocks{définir \\nameblocks{trace_carré \\ovalmoreblocks{coté_carré}}}
              \\blockrepeat{répéter \\ovalnum{4} fois}
              {
                \\blockmove{avancer de \\ovalmoreblocks{coté_carré} pas }
                \\blockmove{tourner \\turnleft{} de \\ovalnnum{90} degrés}
              }
                \\end{scratch}`);

                /* dépotoir à instructions scratch
              \\blockif{si \\booloperator{\\ovalvariable{a} < \\ovalvariable{b}} alors}
                {
                  \\blockmove{tourner \\turnleft de \\ovalnum{90} degrés} 
                  \\blockmove{glisser en \\ovalnum{5} secondes à x: \\ovalvariable*{Xlutin} y: \\ovalnum{93} } 
                  \\blockmove{glisser en \\ovalnum{5} secondes à \\ovalvariable{position aléatoire}} 
                  \\blockmove{ajouter \\ovalnum{25} à x} 
                }
               \\end{scratch}
                `);
               
   */
          break;
  
          case 2:
              texte=scratchblock(`\\begin{scratch}[print,fill,blocks]
              \\initmoreblocks{définir \\nameblocks{trac_carré \\ovalmoreblocks{coté_carré}}}
              \\blockrepeat{répéter \\ovalnum{4} fois}
              {
                \\blockmove{avancer de \\ovalmoreblocks{coté_carré} pas}
                \\blockmove{tourner \\turnleft{} de \\ovalnnum{90} degrés}
              }
              \\end{scratch}
              `);
          break;
  
          case 3:
          /*  


          \\blockmove{tourner \\turnleft{} de \\ovalnum{90} degrés}
          \\blockmove{aller à x: \\ovalnum{10} y: \\ovalnum{15}}
          \\blockrepeat{répéter jusqu'à ce que \\boolsensing{\\ovalvariable{x} > \\ovalnum{10}}}
          {
          \\blockmove{glisser en \\ovalnum{2} secondes à x: \\ovaloperator{\\ovaloperator{\\ovalvariable{xLutin} + \\ovalnum{5}} / \\ovalnum{5}} y: \\ovaloperator{\\ovalnum{12} - \\ovalnum{7}}}
            \\blockmove{ajouter \\ovaloperator{nombre aléatoire entre \\ovalnum{-2} et \\ovalnum{2}} à x}
        }
        \\blockmove{avancer de \\ovalnum{5} pas}
        \\blockrepeat{répéter \\ovalnum{10} fois}
        {
          \\blocklook{dire \\ovalnum{Bonjour} pendant \\ovalnum{7} secondes}
          \\blockmove{ajouter \\ovalnum{25} à x}
          \\blocksound{jouer le son \\ovalsound*{Meow}}
        }
        \\blockmove{ajouter \\ovalnum{25} à x}
        \\blockrepeat{répéter indéfiniment}
        {
          \\blockmove{glisser en \\ovalnum{5} secondes à x: \\ovalvariable*{Xlutin} y: \\ovalnum{93}}
          \\blockmove{glisser en \\ovalnum{5} secondes à \\ovalvariable{position aléatoire}}
        }
        \\blockstop{stop \\selectmenu{ce script}}

          */
 
          break;
            
          case 4:
          
          break ; 
            
        }
  //  objets_enonce.push ();
    //objets_correction.push();
  

  //      params_enonce = { xmin:-10, ymin: -10, xmax: 10, ymax: 10, pixelsParCm: 20, scale: 1, mainlevee: false};
    //    params_correction = { xmin: -10, ymin: -10, xmax: 10, ymax: 10, pixelsParCm: 20, scale: 1 };
    //    texte += mathalea2d(params_enonce, objets_enonce);
      //  texte_corr += mathalea2d(params_correction, objets_correction);
        if (this.liste_questions.indexOf(texte) == -1) {
          this.liste_questions.push(texte);
          this.liste_corrections.push(texte_corr);
          i++;
        }
        cpt++;
      }
      liste_de_question_to_contenu(this); 
    };

  
  }
  