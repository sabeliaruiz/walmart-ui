import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public products;
  public productName;
  public walmartForm: FormGroup;
  constructor(private service: ApiService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.walmartForm = this.formBuilder.group({
      productName: [
        '', [
          Validators.required
        ]
      ]
    });
  }

  selectProduct() {
    if (this.productName.length >= 3) {
      this.service.getProducts(this.productName).subscribe(data => {
        for (const d of (data as any)) {
          this.products = data;
        }
      });
    }
  }

}
