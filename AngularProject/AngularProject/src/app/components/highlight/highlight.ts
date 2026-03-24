import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  constructor( private el:ElementRef,
    private renderer:Renderer2) {
   
    console.log("Highlight directive initiation")
   }
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor',"red");
     this.renderer.setStyle(this.el.nativeElement, 'border',"2px solid black");
      this.renderer.setStyle(this.el.nativeElement, 'borderRadius',"15px");
        this.renderer.setStyle(this.el.nativeElement, 'padding',"5px");
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor')
     this.renderer.removeStyle(this.el.nativeElement, 'border');
      this.renderer.removeStyle(this.el.nativeElement, 'borderRadius' );
        this.renderer.removeStyle(this.el.nativeElement, 'padding');
  }
}
