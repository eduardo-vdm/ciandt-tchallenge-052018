export class MainController {
  constructor ($timeout, toastr) {
    'ngInject';

    this.classAnimation = '';
    this.creationDate = 1527438629728;
    this.toastr = toastr;
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
