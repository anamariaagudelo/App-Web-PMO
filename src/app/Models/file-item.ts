/*export class FileItem {
  public archivo: File;
  public nombreArchivo: string;
  public url: string;
  public estaSubiendo: boolean;
  public progrso: number;


  constructor(archivo: File) {
    this.archivo = archivo;
    this.nombreArchivo = archivo.name;

    this.estaSubiendo = false;
    this.progrso = 0;
  }
}*/
export class Upload {
  id: string;
  file: File;
  name: string;
  url: string;
}
