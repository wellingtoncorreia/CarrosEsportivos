import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule, CarFront, Calendar, Fuel, Users, Gauge, DoorOpen, User, Star, MessageCircle } from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({ CarFront, Calendar, Fuel, Users, Gauge, DoorOpen, User, Star, MessageCircle })
    )
  ]
};