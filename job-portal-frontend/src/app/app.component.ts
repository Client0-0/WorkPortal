import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.styles.scss']
})
export class AppComponent {
  title = 'SkillLink';
  showNavigation = false;

  constructor(private router: Router, public authService: AuthService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Hide navigation on role-selection page
      // Use urlAfterRedirects to account for the redirect from '' to '/role-selection'
      this.showNavigation = !event.urlAfterRedirects.includes('/role-selection');
    });
  }
}
