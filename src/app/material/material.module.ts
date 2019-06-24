import { NgModule } from '@angular/core';
import { MatButtonModule, MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatCardModule} from "@angular/material"

const MaterialComponents=[
  MatButtonModule, 
  MatTabsModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
];
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents],
})
export class MaterialModule { }
