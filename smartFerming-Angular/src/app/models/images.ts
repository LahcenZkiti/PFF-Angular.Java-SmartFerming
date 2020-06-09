import { MaladiePlante } from './maladies-plant';

export class Image {
    id ?: number;
    image: string;
    etatTraitement: boolean;
    urlImage: string;
    infosCompl: string;
    maladiePlante ?: MaladiePlante;

    // /**
	//  * @return the maladiePlante
	//  */
	//  get MaladiePlante() {
	// 	return this.maladiePlantes;
	// }
	
	
	// /**
	//  * @param maladiePlante the maladiePlante to set
	//  */
	// set MaladiePlante(maladiePlantes: MaladiePlante) {
	// 	this.maladiePlantes = maladiePlantes;
	// }
}
