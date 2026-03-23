import { Component, Signal, signal } from '@angular/core';
import {
  ApiResonse,
  Product,
  ProductsService,
} from '../../services/products-service';
import { Header } from '../../shared/header/header';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Cart1, CartService } from '../../services/cart-service';

@Component({
  selector: 'app-home',
  imports: [Header, RouterOutlet, RouterLinkWithHref],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  productsArr = signal<Product[]>([]);
  total!: number;
  itemPerPage = signal(9);
  totalPages!: number;
  pages!: number[];
  currPage = signal(1);
  loading: boolean = false;
  loadedPages = new Set<number>();
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.displayProducts(1);
  }

  displayProducts(page: number) {
    const skip = (page - 1) * this.itemPerPage();
    this.loading = true;
    this.loadedPages.add(page);
    this.currPage.set(page);
    this.productService.getProducts(this.itemPerPage(), skip).subscribe({
      next: (res: ApiResonse) => {
        this.loading = false;
        console.log(res);
        this.productsArr.update((d) => [...d, ...(res?.products || [])]);
        this.total = res?.total;

        const totalPages = Math.ceil(this.total / this.itemPerPage());

        this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);

        //  this.productsArr = res.products
        console.log(this.productsArr);
        console.log(this.total);

        console.log(this.loading);
      },
      error: (err) => {
        console.log('Error', err);
        this.loading = false;
      },
    });
  }
  cartServiceM(product: Product) {
    let obj: Cart1 = {
      id: product.id,
      price: product.price,
      thumbnail: product.thumbnail,
      count: 1,
      title: product.title,
    };
    this.cartService.addData(obj);
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;

    const scrollHeight1 =
      element.scrollHeight - element.scrollTop - element.clientHeight;

    // console.log(scrollHeight1);
    console.log('Client height', element.clientHeight);
    console.log('Scroll Height', element.scrollHeight);

    if (Math.ceil(scrollHeight1) <= 0 && !this.loading) {
      const maxValue: number = Math.max(...this.loadedPages);
      // If there are more pages left, load the next one!
      if (maxValue < this.total) {
        this.displayProducts(maxValue + 1);
      }
    }
    const totalLoadedPages = this.loadedPages.size;
    console.log(totalLoadedPages);
    if (this.total > 0) {
      const estimatedHeight = element.scrollHeight / totalLoadedPages;
      const middleOfViewPort = element.scrollTop + element.clientHeight / 2;
      const pageInView = Math.ceil(middleOfViewPort / estimatedHeight);
      const safePageInView = Math.min(Math.max(pageInView, 1), this.total);
      if (this.currPage() !== safePageInView) {
        this.currPage.set(safePageInView);
      }
    }
  }
  handlePagination(page: number) {
    console.log(page);
    if (this.loadedPages.has(page)) {
      this.currPage.set(page);
    } else {
      this.displayProducts(page);
    }
  }
  handlePerPageProduct(event: any) {
    // console.log(event?.target);
    console.log(event?.target?.value);
    this.itemPerPage.set(event.target.value);
    this.displayProducts(1);
  }
}
