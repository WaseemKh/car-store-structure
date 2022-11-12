import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cars;
  constructor() { }

  ngOnInit() {
    this.getCarList();

  }


  carsfilter(itemType) {
    this.getCarList();
    this.cars = this.cars.filter(a => {
      if (a.Key == itemType || itemType=="All")
        return a;
    })

  }


  getCarList() {
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
