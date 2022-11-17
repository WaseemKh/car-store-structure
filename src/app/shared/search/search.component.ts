import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searcher = new EventEmitter();
  groupForm: FormGroup;
  constructor(
    private fb: FormBuilder,

  ) {
    this.initForm();
    //this.groupForm.get('search').valueChanges.pipe(debounceTime(1000)).subscribe

  }

  ngOnInit() {
  }
  initForm() {
    this.groupForm = this.fb.group({
      search: [null],
      // typeId: [null, [Validators.required]],
    });
  }

  search() {
    this.searcher.emit(this.groupForm.get('search'));
  }
  search2() {
    this.searcher.emit(null);
  }
}


