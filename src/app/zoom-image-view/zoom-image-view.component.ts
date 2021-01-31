import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom-image-view',
  templateUrl: './zoom-image-view.component.html',
  styleUrls: ['./zoom-image-view.component.scss']
})
export class ZoomImageViewComponent implements OnInit {
  @Input() isClicked = false;
  constructor() { }

  ngOnInit(): void {
  }

}
