import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './pipe.safehtml';

@NgModule({
    declarations: [SafeHtmlPipe],
    imports: [],
    exports: [SafeHtmlPipe],
    providers: [],
})
export class SafeHtmlModule {}