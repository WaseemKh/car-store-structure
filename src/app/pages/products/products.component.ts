import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { pipe, Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cars;
  itemType;

  constructor(

  ) {

  }

  ngOnInit() {
    this.getCarList();

  }


  carsfilter(itemType) {
    this.getCarList();
    this.itemType = itemType;
    this.cars = this.cars.filter(a => {
      if (a.Key == itemType || itemType == "All")
        return a;
    })

  }

  search(searchValue) {
    console.log(searchValue);
    console.log(this.itemType);



    if (searchValue) {
      searchValue.valueChanges.pipe(

        debounceTime(1000),


      ).subscribe((v) => {

        this.cars = this.cars.filter(x => x.value.toLocaleUpperCase().includes(searchValue.value.toLocaleUpperCase()))
      }
      );
    }

    else if (searchValue & this.itemType) {
      this.carsfilter(this.itemType);
      searchValue.valueChanges.pipe(

        debounceTime(1000),
      ).subscribe((v) => {

        this.cars = this.cars.filter(x => x.value.toLocaleUpperCase().includes(searchValue.value.toLocaleUpperCase()))
      }
      );
    } else if (this.itemType) {
      this.carsfilter(this.itemType);
    } else {
      this.getCarList();
    }

  }




  getCarList() {
    this.itemType = null;
    this.cars = [{ "Key": "BMW", "value": "A" },
    { "Key": "BMW", "value": "B" }, { "Key": "BMW", "value": "C" }, { "Key": "BMW", "value": "D" }, { "Key": "BMW", "value": "E" },
    { "Key": "VW", "value": "Jetta" },
    { "Key": "VW", "value": "Passat" }, { "Key": "VW", "value": "Polo" }, { "Key": "VW", "value": "touareg" }, { "Key": "VW", "value": "Seat Leaon" }, { "Key": "VW", "value": "Golf" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },
    { "Key": "Mercides", "value": "benz" },

    { "Key": "Mercides", "value": "dane" },
    { "Key": "Mercides", "value": "benz" },];
  }
  trackByFn(index, reaction) {
    return reaction.id; // unique id corresponding to the item
  }
}
