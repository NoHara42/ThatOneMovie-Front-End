import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import {take} from 'rxjs/operators';

export interface CriticTextInputData {
  textInputData: string;
}

@Component({
  selector: 'app-critic-mode-modal',
  templateUrl: './critic-mode-modal.component.html',
  styleUrls: ['./critic-mode-modal.component.scss']
})
export class CriticModeModalComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @Output() public criticModeTextEmitter = new EventEmitter<string>();

  public criticModeTextDataControl: FormControl;

  constructor(private ngZone: NgZone) {
    this.criticModeTextDataControl = new FormControl();
  }


  ngOnInit() {
    // For debugging purposes:

    // this.criticModeTextDataControl.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.criticModeTextEmitter.subscribe((value) => {
    //   console.log(value);
    // });

  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  handleSubmitData() {
    console.log("Emitting:", this.criticModeTextDataControl.value);
    this.criticModeTextEmitter.emit(this.criticModeTextDataControl.value);
  }

}
