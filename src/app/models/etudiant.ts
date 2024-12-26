export class Etudiant {
    constructor(
      public id: number,
      public nom: string,
      public prenom: string,
      public numeroEtudiant: string,
      public idEtablissement?: number
    ) {}
  }
  