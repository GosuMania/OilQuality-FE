import {Component, ViewChild} from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oilQuality';
  name = 'This is XLSX TO JSON CONVERTER';
  loading = false;
  willDownload = false;
  oilResult = {
    rating: '',
    probability: 0
  };
  @ViewChild('fileInput') fileInput: any;
  outputJson = '';
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }
  onFileChange(event: any) {
    this.loading = true;
    let jsonData = null;
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = () => {
      const data = reader.result;
      const workBook = XLSX.read(data, {type: 'binary'});
      jsonData = workBook.SheetNames.reduce((initial: any, name: string) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.outputJson = jsonData;

      const dataString = JSON.stringify(jsonData);
      // this.outputJson = dataString.slice(0, 300).concat("...");
      this.setDownload(dataString);
    }
    reader.readAsBinaryString(file);
  }


  setDownload(data: string | number | boolean) {
    setTimeout(() => {
      const el = document.querySelector("#download");
      if (el) {
        el.setAttribute("href", `data:text/json;charset=utf-8,${encodeURIComponent(data)}`);
        el.setAttribute("download", 'xlsxtojson.json');
      }
      this.oilResult.rating = 'GOOD';
      this.oilResult.probability = 99.1916;
      this.loading = false;
      this.willDownload = true;
    }, 1000)
  }


}
