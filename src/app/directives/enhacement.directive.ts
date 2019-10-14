import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEnhacement]'
})
export class EnhacementDirective {

  constructor( private el:ElementRef ) { }

   @Input("appEnhacement") newColor:string | "yellow";
   @HostListener('mouseenter') mouseEnter(){
    this.el.nativeElement.style.backgroundColor=this.newColor;
   };

   @HostListener('mouseleave') mouseLeave(){
    this.el.nativeElement.style.backgroundColor="transparent";
   };

}
