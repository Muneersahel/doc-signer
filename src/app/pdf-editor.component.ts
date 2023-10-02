import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf-editor',
  template: `
    <ngx-extended-pdf-viewer [src]="pdfFileSrc" [useBrowserLocale]="true" />
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgxExtendedPdfViewerModule],
})
export class PdfEditorComponent {
  @Input() pdfFileSrc!: string;

  constructor() {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }
}
