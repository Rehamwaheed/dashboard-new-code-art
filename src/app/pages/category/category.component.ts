import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryModel } from './model/category-model';
import { CategoryService } from './service/category.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categories: any[]=[];
  pageSize = 10;
  pageNumber = 1;
name:string;
newCategory: CategoryModel=new CategoryModel();

  constructor(private Service: CategoryService, private route: ActivatedRoute , private fb: FormBuilder) { }

  createcategoryForm() {
    this.categoryForm = this.fb.group({
      name: '',
    });
  }
  
  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'Done!',
    });
  }
  ngOnInit() {
    this.createcategoryForm();

   this.Service.getcategory().subscribe(
     response=>{
       console.log(response)
       this.categories=response["data"]
     }
   )

}

pageChanged(pN: number): void {
  this.pageNumber = pN;
}


addcategory()
{
  Object.assign(this.newCategory,this.categoryForm.value)
 console.log(this.newCategory)
  this.Service.postcategory(this.newCategory).subscribe(
    response=>{
      console.log(response)
     this.onClose();
     location.reload()
    }
  )
}


}
