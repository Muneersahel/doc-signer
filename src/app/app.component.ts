import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PdfEditorComponent } from './pdf-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, PdfEditorComponent],
})
export class AppComponent {
  pdfFileSrc = signal<string | null>(null);

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e: Event) => {
        const target = e.target as FileReader;
        const content: string = target.result as string;
        this.pdfFileSrc.set(content);
      };
    }
  }

  confirmClose() {
    return confirm('Are you sure you want to close the editor?');
  }
}
