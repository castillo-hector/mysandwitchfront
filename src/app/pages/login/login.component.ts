import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AppSettings, Settings } from "src/app/app.settings";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public hide = true;
  public bgImage: any;
  public settings: Settings;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    private sanitizer: DomSanitizer,
    public appSettings: AppSettings,
    public appUser: UserService
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.bgImage = this.sanitizer.bypassSecurityTrustStyle(
      "url(assets/images/others/login.jpg)"
    );
    this.loginForm = this.fb.group({
      username: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      rememberMe: false,
    });
  }

  public onLoginFormSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.router.navigate(["/"]);
    }
  }

  public onCreateUserFormSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.appUser.createUser(this.loginForm.value).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(["/"]);
      });
    }
  }
}
