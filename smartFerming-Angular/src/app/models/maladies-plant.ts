export class MaladiesPlant {
    id ?: number;
    nomMaladie : string;
    symptomes : string;
    causes : string;
    traitement : string;
    actionsPreventives : string

    constructor(id:number, nomMaladie:string, symptomes:string, causes:string, traitement:string, actionsPreventives: string){
        this.id = id;
        this.nomMaladie = nomMaladie;
        this.symptomes = symptomes;
        this.causes = causes;
        this.traitement = traitement;
        this.actionsPreventives = actionsPreventives;
    }

}