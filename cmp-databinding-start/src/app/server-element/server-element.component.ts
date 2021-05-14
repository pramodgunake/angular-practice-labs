import { AfterContentChecked, 
          AfterContentInit, 
          AfterViewChecked, 
          AfterViewInit, 
          Component, 
          ContentChild, 
          DoCheck, 
          ElementRef, 
          Input, 
          OnChanges, 
          OnDestroy, 
          OnInit, 
          SimpleChanges, 
          ViewChild, 
          ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, 
    OnChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  @Input('srvElement') element : {type: string, name: string, content: string};
  @Input() name : string;
  @ViewChild('panelHeader') headerElement: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log("constructor called!");
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
    console.log("Header Text: " + this.headerElement);
    console.log("Paragraph Text: " + this.paragraph);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngDoCheck()
  {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
    console.log("Paragraph Text: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!")
    }

    ngAfterViewChecked() {
      console.log("ngAfterViewChecked called!")
    }

    ngAfterViewInit() {
      console.log("ngAfterViewInit called!")
      console.log("Header Text: " + this.headerElement.nativeElement.textContent);
    }

    ngOnDestroy() {
      console.log("ngOnDestroy called!")
    }
}
