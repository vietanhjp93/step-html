import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-html',
  templateUrl: './step-html.component.html',
  styleUrls: ['./step-html.component.scss']
})
export class StepHtmlComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      list: this.formBuilder.array([])
    })
   }

  
  checkbox: any;

  ngOnInit(): void {
    let arr: Array<{id : number, name : string, check: boolean, disabled: boolean}> = [ 
      {id:1, name : "a", check: true, disabled: false},
      {id:2, name : "b", check: false, disabled: false},
      {id:3, name : "c", check: false, disabled: false},
      {id:4, name : "d", check: false, disabled: false},
      {id:5, name : "e", check: false, disabled: false},
      {id:6, name : "f", check: false, disabled: false},
      {id:7, name : "g", check: true, disabled: false},
      {id:8, name : "h", check: true, disabled: false},
      {id:9, name : "i", check: true, disabled: false},
    ]
    const list = this.formGroup.controls.list as FormArray;
    arr.forEach((value, index) => {
      list.push(this.formBuilder.group({
        'isChecked': new FormControl({value: value.check, disabled: false})
      }))
    })
    this.formGroup.controls.list.valueChanges.subscribe((a) => {
      console.log(a)
      let count = 0;
      for (let i = 0 ; i< a.length; i++) {
        if(a[i].isChecked) {
          count++;
        }
        arr[i].check = a[i].isChecked;
      };
      
      console.log(count)
      if (count >= 6) {
        for (let i = 0 ; i< a.length; i++) {
          if (!a[i].isChecked) {
            const list = this.formGroup.controls.list as FormArray;
            list.setControl(i,new FormControl({value: false, disabled: false}))
            // arr[i].disabled = true;
          }
        }
      }
    })
    this.checkbox = document.querySelectorAll('input[type="checkbox"]').forEach((value, key, parent) => {
      value.addEventListener("click", () => {
        if(document.querySelectorAll('input[type="checkbox"]:checked').length >= 10) {
          document.querySelectorAll('input[type="checkbox"]')
        }
      });
    });
  }

  private updateDisplay() {
    let a = document.querySelectorAll('input[type="checkbox"]');
    let b = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(a.length);
    for(let checkbox in a) {
    }
  }
}
