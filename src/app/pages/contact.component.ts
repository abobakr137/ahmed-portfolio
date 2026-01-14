import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;
  loading: boolean = false;

  submit() {
    if (!this.name || !this.email || !this.message) return;

    this.loading = true;

    emailjs
      .send(
        'service_s4iy7dd',        // SERVICE_ID
        'template_jmwrcuc',       // TEMPLATE_ID
        {
          from_name: this.name,
          from_email: this.email,
          message: this.message,
        },
        'eLNjnXHJKuvlMBdJw'        // PUBLIC_KEY
      )
      .then(
        () => {
          this.submitted = true;
          this.loading = false;

          // Reset form
          this.name = '';
          this.email = '';
          this.message = '';
        },
        (error) => {
          this.loading = false;
          console.error('EmailJS Error:', error);
          alert('Error sending message ❌');
        }
      );
  }
}
