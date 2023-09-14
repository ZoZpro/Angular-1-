import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  showImg(event: MouseEvent) {
    const clickedLayer = event.currentTarget as HTMLElement;
    const modelElement = document.querySelector('.model') as HTMLElement;
    const imgElement = clickedLayer.previousElementSibling as HTMLImageElement;
    if (modelElement && imgElement) {
      modelElement.querySelector('img')?.setAttribute('src', imgElement.src);
      modelElement.classList.replace('d-none', 'd-flex');
      document.body.addEventListener('click', closeModel);
    }

  }

}

function closeModel(event: MouseEvent) {
  const modelElement = document.querySelector('.model');
  if (modelElement) {
    if (event.target == modelElement) {
      modelElement.classList.add('d-none');
    }
  }
}



