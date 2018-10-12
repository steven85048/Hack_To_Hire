// module for the post list

// MODULES
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// COMPONENTS
import { BasicPostContainerComponent } from './components/basic_post_container.component';
import { BasicPostComponent } from './components/basic_post.component';

// SERVICES
import { PostRequestService } from './services/post_retrieval.service';

@NgModule({
  declarations: [
    BasicPostContainerComponent,
    BasicPostComponent
  ],
  imports: [
    HttpModule
  ],
  providers: [
    PostRequestService
  ]
})
export class BasicPostModule { }