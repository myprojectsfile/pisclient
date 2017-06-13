import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GcomsApiService } from './api/gcoms-api/gcoms-api.service'
import { DxDataGridComponent } from 'devextreme-angular'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  constructor(private gcomsApi: GcomsApiService) { }
  ghabzAnbar = [];
  errorMessage: string;
  nameSahebGhabz: string;

  ghabzGridOptions = {
    columns: [
      { dataField: 'shomarehGhabz', caption: 'شماره قبض', width: 90 },
      { dataField: 'nameKharidar', caption: 'نام خریدار', width: 300 },
      { dataField: 'toozihatKala', caption: 'توضیحات کالا', width: 150 },
      { dataField: 'tarikhSodur', caption: 'تاریخ صدور', width: 90 },
      { dataField: 'tarikhTakhlieh', caption: 'تاریخ تخلیه', width: 90 },
      { dataField: 'tedadDarGhabz', caption: 'تعداد', width: 60 },
      { dataField: 'vaznDarGhabz', caption: 'وزن', width: 60 },
      { dataField: 'shomarehGhabzGhabli', caption: 'قبض قبلی', width: 110 },
      { dataField: 'nameFerestandeh', caption: 'نام فرستنده', width: 110 },
      { dataField: 'nameNamayandeh', caption: 'نام نماینده', width: 110 },
      { dataField: 'shomarehRadif', caption: 'ردیف', width: 50 },
      { dataField: 'shomarehSabtNobat', caption: 'ثبت نوبت', width: 90 },
      { dataField: 'nameKeshtirani', caption: 'نام کشتیرانی', width: 200 },
      { dataField: 'nameShenavar', caption: 'نام شناور', width: 150 },
      { dataField: 'vazeiatGhabz', caption: 'وضعیت قبض', width: 90 },
      { dataField: 'itemManifest', caption: 'آیتم مانیفیست', width: 90 },
      { dataField: 'toozihat', caption: 'توضیحات', width: 200 },
    ],
    paging: {
      pageSize: 10
    },
    pager: {
      showPageSizeSelector: true,
      allowedPageSizes: [5, 10, 20],
      showInfo: true
    },
    showBorders: true,
    rtlEnabled: true,
    allowColumnResizing: true,
    export: {
      enabled: true,
      fileName: 'مشخصات قبض انبار',
      excelWrapTextEnabled:true
    }
  };

  findGhabz(): void {
    this.errorMessage = "";

    this.gcomsApi.getLikeOwner(this.nameSahebGhabz)
      .subscribe(ghabz => {
        this.ghabzAnbar = ghabz;
        if (this.ghabzAnbar.length==0) {
          this.errorMessage="هیچ قبض انباری با این مشخصات وجود ندارد";
        }        
      },
      error => this.errorMessage = error
      );
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataGrid.instance.option(this.ghabzGridOptions);
  }
  title = 'app';
  clickMe(){
    console.log("this is me");
    alert("this is me");
  }
}
