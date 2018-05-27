export class MainController {
  constructor ($timeout, toastr, LegacyDataApi) {
    'ngInject';

    this.classAnimation = '';
    this.creationDate = 1527438629728;
    this.toastr = toastr;

    // LegacyDataApi.isOnline()
    //   .then((response) => {
    //     console.log(`LegacyDataApi.isOnline OK:`, response);
    //   })
    //   .catch((error) => {
    //     console.log(`LegacyDataApi.isOnline ERR:`, error);
    //   })
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
