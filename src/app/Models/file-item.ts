export class FileItem {
  public id: string;
  public adjunto: File;
  public nombreAdjunto: string;
  public url: string;
  public estaSubiendo: boolean;
  public progreso: number;
  public descripcion: string;


  constructor(archivo: File) {
    this.adjunto = archivo;
    this.nombreAdjunto = archivo.name;
    this.estaSubiendo = false;
    this.progreso = 0;
  }
}


