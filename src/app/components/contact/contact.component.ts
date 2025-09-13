import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  // Remember to put your WhatsApp number here
  phoneNumber = '5515988442953'; 
  
  // Formatted URL for the link
  whatsappUrl = `https://wa.me/${this.phoneNumber}`;
}
