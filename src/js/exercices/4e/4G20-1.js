import Pythagore2D from './4G20.js'
// 4G20-1
export const titre = 'Donner ou compléter une égalité de Pythagore'

export default function Egalite_Pythagore2D() {
  Pythagore2D.call(this);
  this.titre = titre;
  this.sup = 1;
  this.type_exercice = '';
  this.besoin_formulaire_numerique = ['Niveau de difficulté', 2, "1 : Donner l'égalité de Pythagore\n2 : Compléter l'égalité de Pythagore"];
}
