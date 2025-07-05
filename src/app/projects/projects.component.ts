import { Component, OnDestroy, OnInit } from '@angular/core';
import { Craft } from './../interfaces/craft.interface';
import { MycraftComponent } from './mycraft/mycraft.component';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-projects',
  imports: [MycraftComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private timeoutId: any;
   isGerman = false;
    
  constructor(private router: Router, private langService: LanguageService) {
   }

  sharkie: Craft = {
    h2: 'Sharkie',
    deu: 'Spring-, Lauf- und Wurfspiel basierend auf objektorientiertem Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den großen Boss zu kämpfen.',
    eng: 'Jump, run and throw game based on object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the big boss.',
    img: 'assets/sharky.jpg',
    button: '2',
    routeId: 'sharkie'
  };

   bestellApp: Craft = {
    h2: 'Bestell-App',
    deu: 'Diese App ist eine Slack-Klon-App. Sie revolutioniert die Teamkommunikation und Zusammenarbeit durch ihre intuitive Benutzeroberfläche, Echtzeit-Nachrichtenfunktion und eine robuste Kanalorganisation.',
    eng: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    img: 'assets/bestell-app.jpg',
    button: '3',
    routeId: 'bestellApp'
  };

  daBubble: Craft = {
    h2: 'DABubble',
    deu: 'Diese App ist eine Slack-Klon-App. Sie revolutioniert die Teamkommunikation und Zusammenarbeit durch ihre intuitive Benutzeroberfläche, Echtzeit-Nachrichtenfunktion und eine robuste Kanalorganisation.',
    eng: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    img: 'assets/da-bubble.jpg',
    button: '4',
    routeId: 'daBubble'
  };

  ngOnInit(): void {
    this.lineAnimation();
     this.langService.isGerman$.subscribe(value => {
          this.isGerman = value;
        });
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
  lineAnimation() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    const line = document.getElementById('line');

    if (line) {
      const showLine = () => {
        line.classList.remove('hide');
        line.classList.add('show');

        this.timeoutId = setTimeout(() => {
          line.classList.remove('show');
          line.classList.add('hide');
          this.timeoutId = setTimeout(showLine, 800);
        }, 3000);
      };

      showLine();
    }
  }

  onHover() {
    let button = document.getElementById('button');

    if (button) button?.classList.remove('d_none');
  }

  onLeave() {
    let button = document.getElementById('button');

    if (button) button?.classList.add('d_none');
  }

  navigateToProject(projectId: string) {
    this.router.navigate(['/project', projectId]);
  }

  englishText(){
    return `Through both collaborative and individual work, I've developed real-world applications ranging from a
                Kanban project management tool and a 2D jump and run game, to a chatting platform which is currently in progress. Each project
                reflects my focus on user experience, structured code, and effective teamwork.`
  }

  germanText(){
    return `Durch gemeinsame Teamarbeit und eigenständige Projekte habe ich praxisnahe Anwendungen entwickelt - von einem Kanban-Tool für Projektmanagement über ein 2D-Jump-and-Run-Spiel bis hin zu einer Chat-Plattform, die sich derzeit in Entwicklung befindet.
 Jedes dieser Projekte spiegelt meinen Fokus auf optimale Nutzererfahrung, sauberen Code und effiziente Zusammenarbeit wider.`
  }
}
