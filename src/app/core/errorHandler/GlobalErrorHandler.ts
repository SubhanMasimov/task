import { ToastrService } from "ngx-toastr"

export class GlobalErrorHandler {
    constructor(private toastrService: ToastrService) { }

    handle(errorResponse: any) {

         if (errorResponse.error.message) {
            this.toastrService.warning(errorResponse.error.message)
        }
        else if (errorResponse.status == 401) {
            this.toastrService.warning('Auth denied')
        }
        else {
            this.toastrService.error('Internal Server Error')
        }
    }
}