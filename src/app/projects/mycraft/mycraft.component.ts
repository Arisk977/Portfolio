import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Craft } from '../../interfaces/craft.interface';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mycraft',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mycraft.component.html',
  styleUrl: './mycraft.component.scss'
})
export class MycraftComponent implements OnInit, OnDestroy{
  @Input() craft!:Craft;
   isGerman = false;
  constructor(private router: Router, private langService: LanguageService) {}

    private langSub!: Subscription;

    ngOnInit(): void {
     this.langService.isGerman$.subscribe(value => {
          this.isGerman = value;
        });
  }

   ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
  
   onHover(){
    let button = document.getElementById(`button-${this.craft.button}`);

    if(button) button?.classList.remove('d_none');
  }

    onLeave(){
    let button = document.getElementById(`button-${this.craft.button}`);

    if(button) button?.classList.add('d_none');
  }

    navigateToProject(projectId: string) {
      this.router.navigate(['/project', projectId]).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })});
  }
}
