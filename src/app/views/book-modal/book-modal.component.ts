import { Component, EventEmitter, Input, Output } from '@angular/core';

const body = document.querySelector("body");

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css']
})
export class BookModalComponent {

  constructor() { }

  @Input() book: Object;
  modalStatus: boolean = true;
  @Output() modalChange = new EventEmitter()

  closeModal() {
    this.modalStatus = false
    this.modalChange.emit(this.modalStatus)
    body.style.overflow = "scroll"
  }

  hideScroll(){
    if(this.modalStatus == true ) {
      body.style.overflow = "hidden";
    }
  }

  readPreview() {
    window.open( '_blank');
  }
}
