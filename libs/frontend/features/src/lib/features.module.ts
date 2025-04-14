import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// User-related components
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { LoginComponent } from './users/user-login/user-login.component';

// Other components
import { ColumnsComponent } from './columns/columns.component';

// Game components
import { GameListComponent } from './games/game-list/game-list.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    // User
    UserDetailsComponent,
    UserListComponent,
    UserEditComponent,
    LoginComponent,

    // Other
    ColumnsComponent,

    // Game
    GameListComponent,
    GameDetailComponent
  ],
  exports: [
    // User
    UserDetailsComponent,
    UserListComponent,
    UserEditComponent,
    LoginComponent,

    // Other
    ColumnsComponent,

    // Game
    GameListComponent,
    GameDetailComponent
  ]
})
export class FeaturesModule { }
