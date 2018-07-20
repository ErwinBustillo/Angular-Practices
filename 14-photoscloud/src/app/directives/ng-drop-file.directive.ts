import { FileItem } from './../models/file-item';
import { Directive, EventEmitter, ElementRef,HostListener,Input, Output } from '@angular/core';

@Directive({
  selector: '[appNgDropFile]'
})
export class NgDropFileDirective {

  @Input() files:FileItem[] = [];
  @Output() mouseOver:EventEmitter<boolean>= new EventEmitter();
  constructor() { }

  @HostListener('dragover',['$event'])
  public onDragEnter(event:any){
    this.mouseOver.emit(true);
    this._prevent(event);

  }

  //cuando el mouse ya no esta encima de la drop zone
  @HostListener('dragleave',['$event'])
  public onDragLeave(event:any){
    this.mouseOver.emit(false);

  }

  @HostListener('drop',['$event'])
  public onDrop(event:any){
    const transfer = this._getTranfer(event);
    
    if (!transfer) {
      return;
    }
    this._extractFiles(transfer.files);
    this._prevent(event);

    this.mouseOver.emit(false);
  }

  //for compatibility with web browsers
  private _getTranfer(event:any){
      return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTranfer;
  }


  private _extractFiles(filesList:FileList){
      //console.log(filesList);

      for(const prop in Object.getOwnPropertyNames(filesList)){
        const fileTemp = filesList[prop];
        if (this._fileCanBeDropped(fileTemp)) {
          const newFile = new FileItem(fileTemp);
          this.files.push(newFile);
        }
      }

  }
  //validation

  private _fileCanBeDropped(file:File):boolean{
    if (!this._fileIsDropped(file.name) && this._isImage(file.type)) {
      return true;
    }else{
      return false;
    }
  }

  private _prevent(event){
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileIsDropped(name:string):boolean {
    for(const file of this.files){
      if (file.name_file === name) {
        console.log('FILE EXIST');
        return true;
      }
    }

    return false;
  }

  private _isImage(fileType:string):boolean{
      return (fileType === '' || fileType === undefined) ? false:fileType.startsWith('image');
  }
}
