import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';1

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  responseMessage: string;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      email: [""],
      subject: [""],
      message: ["", Validators.required]
    })
  }

  onSubmit() {
    var formData: any = new FormData();
    formData.append("name", this.contactForm.get("name").value);
    formData.append("email", this.contactForm.get("email").value);
    formData.append("phone", this.contactForm.get("phone").value);
    formData.append("subject", this.contactForm.get("subject").value);
    formData.append("message", this.contactForm.get("message").value);
    this.http.post("https://script.google.com/macros/s/AKfycbxz9eooLLE5pZpS2nlXkxZsL1zMFLYfLkHe3QHQOBSucm-R5GfhGSpH/exec", formData).subscribe(
      (response) => {
        if (response["result"] == "success") {
          this.responseMessage = "Thanks for the message! I'll get back to you soon!";
        } else {
          this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
        }
        console.log(response);

      },
      (error) => {
        console.log(error);
      }
    )

  }

}
