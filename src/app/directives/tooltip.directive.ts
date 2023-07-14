import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {

  @Input() appTooltip = '';

  wrapper: HTMLDivElement = this.renderer.createElement('div');
  tooltip: HTMLDivElement = this.renderer.createElement('div');

  constructor(
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    console.log(this.host, this.appTooltip);
    this.renderer.setAttribute(
      this.host.nativeElement,
      'title',
      this.appTooltip
    );

    this.renderer.setStyle(this.wrapper, 'position', 'relative');
    this.renderer.setStyle(this.wrapper, 'display', 'none');

    this.renderer.appendChild(this.host.nativeElement, this.wrapper);
    this.renderer.appendChild(this.wrapper, this.tooltip);

    this.renderer.setStyle(this.tooltip, 'position', 'absolute');
    this.renderer.setStyle(this.tooltip, 'top', '0');
    this.renderer.setStyle(this.tooltip, 'left', '20px');

    this.renderer.setStyle(this.tooltip, 'background', '#ccc');
    this.renderer.setStyle(this.tooltip, 'border', '1px solid black');
    this.renderer.setStyle(this.tooltip, 'padding', '5px');

    this.renderer.appendChild(this.tooltip, this.renderer.createText(this.appTooltip));

    this.renderer.listen(this.host.nativeElement, 'mouseenter', () => {
      this.renderer.setStyle(this.wrapper, 'display', 'block');
    });

    this.renderer.listen(this.host.nativeElement, 'mouseleave', () => {
      this.renderer.setStyle(this.wrapper, 'display', 'none');
    });
  }

}
