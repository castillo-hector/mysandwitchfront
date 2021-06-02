import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { ResponseUser, User } from "src/app/models/user";
import { AppSettings } from "src/app/app.settings";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public url = "https://jvproductservices.azurewebsites.net";

  constructor(
    public http: HttpClient,
    public dialog: MatDialog,
    public appSettings: AppSettings,
    public translateService: TranslateService
  ) {}

  private createRequestOptions() {
    const options = {
      headers: new HttpHeaders()
        .append("Ocp-Apim-Subscription-Key", "d43316a26f4b479e9dba1ac996cf11ad")
        .append("Access-Control-Allow-Origin", "http://localhost:4200")
        .append("Accept", "application/json, text/plain, */*")
        .append("Accept-Encoding", "gzip, deflate, br")
        .append("Accept-Language", "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3"),
    };

    return options;
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url + "/CreateUser", JSON.stringify(user));
  }

  public deleteUserById(id: number): Observable<User> {
    return this.http.get<User>("");
  }

  public getUser(): Observable<User[]> {
    return this.http.get<User[]>("");
  }

  public getAllUser(): Observable<ResponseUser> {
    return this.http.get<ResponseUser>(this.url + "/GetAllProduct");
  }
}
