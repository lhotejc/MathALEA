import Ecrire_une_expression_numerique from './_Ecrire_une_expression_numerique.js'
export const titre = 'Traduire une expression par une phrase'

/**
 * @Auteur Jean-Claude Lhote
 * Référence 5L10-3
 */
export default function Traduire_une_expression_litterale_par_une_phrase() {
	Ecrire_une_expression_numerique.call(this)
	this.version = 2
	this.titre = titre;
	this.litteral = true
}

