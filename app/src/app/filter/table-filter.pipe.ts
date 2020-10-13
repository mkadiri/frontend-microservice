import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {
  searchTerm: '';
  // keys = [];
  //
  // transform(items: any, args: string): unknown {
  //   if (items != null && items.length > 0) {
  //     let ans = [];
  //
  //     if (this.keys.length === 0) {
  //       this.keys = Object.keys(items[0]);
  //     }
  //
  //     for (let i of items) {
  //       for (let k of this.keys) {
  //         if (i[k].toString().match('^.*' + args + '.*$')) {
  //           ans.push(i);
  //           break;
  //         }
  //       }
  //     }
  //     return ans;
  //   }
  // }

  transform(value: any, keys: string, term: string): any {
    if (!term) {
      return value;
    }

    return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }
}



// transform(items: any, args: string): any {
//
//   if (items != null && items.length > 0) {
//     let ans = [];
//
//     if (this.keys.length == 0) {
//       this.keys = Object.keys(items[0]);
//     }
//
//     for (let i of items) {
//       for (let k of this.keys) {
//         if (i[k].toString().match('^.*' + args +'.*$')) {
//           ans.push(i);
//           break;
//         }
//       }
//     }
//     return ans;
//   }
