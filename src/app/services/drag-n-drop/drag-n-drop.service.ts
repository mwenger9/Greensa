import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragNDropService {
  public uploadedFile: File | null = null;
  public isDragging = false;

  constructor() { }

  getFileName() : string {
    if (this.uploadedFile)
      return this.uploadedFile.name;

    return "";
  }

  // File input change event
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0])
      this.uploadedFile = input.files[0];
  }

  // Drag & Drop events
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.uploadedFile = event.dataTransfer.files[0];
      event.dataTransfer.clearData();
    }
  }
}
