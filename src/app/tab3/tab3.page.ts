import { Component, OnInit } from "@angular/core";
import { StorageService } from "../shared/storage.service";
import { User } from '../models/user';

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  x: boolean = true;
  user:User;
  constructor(private storage: StorageService) {}
  ngOnInit() {
    this.user=this.storage.getUserData();
  }
}
