import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('page-heading')
export class PageHeading extends LitElement {
  static styles = css`h1 { color: green }`;

  @property()
  pageName:string = 'Page Heading';

  render() {
    return html`
    <h1>${this.pageName}</h1>
    <hr />
    `;
  }
}