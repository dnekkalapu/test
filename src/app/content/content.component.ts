import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  posts: Observable<any>;
  @Input() contentQuery = "princess bride";
  @Output() contentQueryChange = new EventEmitter<string>();

  constructor(private _posts: PostsService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.getPosts();
    this.contentQueryChange.emit(value);
  }

  private getPosts() {
    this._posts.getPosts(this.contentQuery)
    .subscribe(resp => {
      this.post = resp;
    });
  }

}