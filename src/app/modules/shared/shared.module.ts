import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { HttpService } from './services/http.service';
import { SecurityService } from './services/security.service';
import { ConfigurationService } from './services/configuration.service';
import { StorageService } from './services/storage.service';


// Components:
import { IdentityComponent } from './components/identity/identity.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header';

// Pipes:
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
//        NgbModule.forRoot(),
        NgbModule,
        // No need to export as these modules don't expose any components/directive etc'
        // tslint:disable-next-line: deprecation
        HttpModule,
        // tslint:disable-next-line: deprecation
        JsonpModule
    ],
    declarations: [
        HeaderComponent,
        IdentityComponent,
        PageNotFoundComponent,
        UppercasePipe
    ],
    exports: [
        // Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgbModule,
        // Providers, Components, directive, pipes
        HeaderComponent,
        IdentityComponent,
        PageNotFoundComponent,
        UppercasePipe
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // Providers
                HttpService,
                SecurityService,
                ConfigurationService,
                StorageService
            ]
        };
    }
}
