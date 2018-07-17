import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss']
})
export class ImageInputComponent {
  @Input() data: string;
  @Input() alt: string;
  @Output() dataChange = new EventEmitter<string>();

  @ViewChild('image')
  private imageFile: ElementRef;
  private fileReader: FileReader;

  constructor() {
    this.fileReader = new FileReader();
  }

  imageChange() {
    const element = this.imageFile.nativeElement as HTMLInputElement;
    this.fileReader.readAsDataURL(element.files.item(0));

    this.fileReader.onload = () => this.emitData(this.fileReader.result);
    this.fileReader.onerror = () => this.emitData(undefined);
  }

  emitData(data: string) {
    this.data = data;
    this.dataChange.emit(data);
  }
}
