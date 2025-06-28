import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { LegalNoticeComponent } from './shared/components/footer/legal-notice/privacy-policy.component';

export const routes: Routes = [
      { path: '', component: MainComponent },
      { path: 'project/:id', component: SingleProjectComponent },
      { path: 'privacy-policy', component: LegalNoticeComponent },
];
