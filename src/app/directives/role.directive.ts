import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {
  private currentRole = 'admin';

  @Input() appRoleSkipFirst = false;

  @Input()
  set appRole(role: string) {
    console.log(role);
    this.viewContainer.clear();
    if (role === this.currentRole) {
      this.appRoleSkipFirst || this.viewContainer.createEmbeddedView(this.template, {first: true, last: false});
      this.viewContainer.createEmbeddedView(this.template, {first: false, last: false});
      this.viewContainer.createEmbeddedView(this.template, {first: false, last: true});
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
