import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, OnDestroy {
  private timeoutId: any;
  isGerman = false;

  constructor(private langService: LanguageService, private router: Router) {
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
  }

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

    const blueLine = document.getElementById('blue-line');

    if (blueLine) {
      const showLine = () => {
        blueLine.classList.remove('hide');
        blueLine.classList.add('show');

        this.timeoutId = setTimeout(() => {
          blueLine.classList.remove('show');
          blueLine.classList.add('hide');
          this.timeoutId = setTimeout(showLine, 800);
        }, 3000);
      };

      showLine();
    }
  }

   scrollToContact() {
  const element = document.getElementById("contact-page");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

germanPTag(){
  return `Hallo, ich bin Aris.
<br><br>Programmieren begeistert mich, weil es Logik und Kreativität vereint. Ich setze Ideen gerne in funktionale, nutzerfreundliche Anwendungen um und schätze es, schnell Ergebnisse zu sehen.
<br><br>Ich lebe in Bad Camberg und arbeite bevorzugt remote, bin aber auch für andere Modelle offen.
<br><br>Ich entwickle meine Fähigkeiten kontinuierlich weiter und halte mich über aktuelle Technologien und Trends auf dem Laufenden. Offenheit, Lernbereitschaft und Anpassungsfähigkeit sind zentrale Eigenschaften, die mich auszeichnen.
<br><br>Ich gehe Herausforderungen analytisch, kreativ und ausdauernd an - immer mit dem Ziel, gemeinsam effiziente und durchdachte Lösungen zu schaffen.`
}

  englishPTag(){
    return `Hi, I'm Aris.
<br><br>Coding excites me because it combines logic and creativity. I enjoy turning ideas into functional, user-friendly applications and appreciate seeing quick results.
<br><br>I'm based in Bad Camberg and prefer remote work, though I'm open to other working models as well.
<br><br>I continuously develop my skills and stay up to date with technologies and trends. Openness, a willingness to learn, and adaptability are key qualities that define me.
<br><br>I approach challenges with analytical thinking, creativity, and persistence - always aiming to develop efficient, well-thought-out solutions in collaboration with others.
    `
  }
}
