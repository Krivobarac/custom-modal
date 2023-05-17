import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('dialog') dialog?: ElementRef<HTMLDialogElement>;

  @Input() set backdropClose(isBackdropClose: boolean | '') {
    this.isBackdropClose = isBackdropClose === '' ? true : isBackdropClose;
  }

  isBackdropClose = false;

  ngOnInit() {
   if (this.isBackdropClose) {
    window.addEventListener('click', (event) => {
      if (event.target === this.dialog?.nativeElement) {
        this.dialog.nativeElement.close();
      }
    });
   }
  }
  
  close() {
    this.dialog?.nativeElement.close();
  }

  open() {
    this.dialog?.nativeElement.showModal();
  }
  
}
