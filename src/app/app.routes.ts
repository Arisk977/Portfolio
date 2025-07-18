import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { PrivacyPolicyComponent } from './shared/components/footer/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './shared/components/footer/legal-notice/legal-notice.component';

export const routes: Routes = [
      { path: '', component: MainComponent },
      { path: 'project/:id', component: SingleProjectComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'legal-notice', component: LegalNoticeComponent },
];
