import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BookComponent} from './Book/book.component';

import {RouterModule, Routes} from '@angular/router';
import {BookDetailComponent} from './Book/book-detail/book-detail.component';
import {BookCreateComponent} from './Book/book-create/book-create.component';
import {BookEditComponent} from './Book/book-edit/book-edit.component';
import {AlbumComponent} from './Album/album.component';
import {AlbumDetailComponent} from './Album/album-detail/album-detail.component';
import {AlbumCreateComponent} from './Album/album-create/album-create.component';
import {AlbumEditComponent} from './Album/album-edit/album-edit.component';
import {MovieComponent} from './Movie/movie.component';
import {MovieCreateComponent} from './Movie/movie-create/movie-create.component';
import {MovieDetailComponent} from './Movie/movie-detail/movie-detail.component';
import {MovieEditComponent} from './Movie/movie-edit/movie-edit.component';
import { GameComponent } from './Game/game.component';
import { SerieComponent } from './Serie/serie.component';
import { GameCreateComponent } from './Game/game-create/game-create.component';
import { SerieCreateComponent } from './Serie/serie-create/serie-create.component';
import { GameDetailComponent } from './Game/game-detail/game-detail.component';
import { SerieDetailComponent } from './Serie/serie-detail/serie-detail.component';
import { GameEditComponent } from './Game/game-edit/game-edit.component';
import { SerieEditComponent } from './Serie/serie-edit/serie-edit.component';
import {LoginComponent} from './Connexion/login/login.component';
import {UserService} from "../services/user-service";
import {AuthenticationService} from "../services/authentication-service";
import {RegisterComponent} from "./Connexion/register/register.component";
import { TitleComponent } from './Menus/title/title.component';
import { CatComponent } from './Menus/cat/cat.component';
import { LeftComponent } from './Menus/left/left.component';
import { ParcourirComponent } from './parcourir/parcourir.component';
import { BookCollectionComponent } from './Book/book-collection/book-collection.component';
import { CollectionComponent } from './collection/collection.component';
import { EnviesComponent } from './envies/envies.component';
import {BookWishlistComponent} from "./Book/book-wishlist/book-wishlist.component";
import { AlbumCollectionComponent } from './Album/album-collection/album-collection.component';
import { AlbumWishlistComponent } from './Album/album-wishlist/album-wishlist.component';
import { GameCollectionComponent } from './Game/game-collection/game-collection.component';
import { GameWishlistComponent } from './Game/game-wishlist/game-wishlist.component';
import { MovieCollectionComponent } from './Movie/movie-collection/movie-collection.component';
import { MovieWishlistComponent } from './Movie/movie-wishlist/movie-wishlist.component';
import { SerieCollectionComponent } from './Serie/serie-collection/serie-collection.component';
import { SerieWishlistComponent } from './Serie/serie-wishlist/serie-wishlist.component';
import {AuthGuardConnected, AuthGuardDisconnected} from "../../server/services/authGuard";
import { BookAvisComponent } from './Book/book-avis/book-avis.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [AuthGuardDisconnected] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuardDisconnected]},
    
    
    { path: 'parcourir', component: ParcourirComponent, canActivate: [AuthGuardConnected]},
    { path: 'collection', component: CollectionComponent, canActivate: [AuthGuardConnected]},
    { path: 'envies', component: EnviesComponent, canActivate: [AuthGuardConnected]},
    {
        path: 'parcourir/albums',
        component: AlbumComponent,
        data: {title: 'Album List'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'collection/albums',
        component: AlbumCollectionComponent,
        data: {title: 'Album Collection'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'envies/albums',
        component: AlbumWishlistComponent,
        data: {title: 'Album List'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'album-detail/:id',
        component: AlbumDetailComponent,
        data: {title: 'Album Details'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'album-create',
        component: AlbumCreateComponent,
        data: {title: 'Create Album'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'album-edit/:id',
        component: AlbumEditComponent,
        data: {title: 'Edit Album'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'parcourir/books',
        component: BookComponent,
        data: {title: 'Book List'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'collection/books',
        component: BookCollectionComponent,
        data: {title: 'Book Collection'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'envies/books',
        component: BookWishlistComponent,
        data: {title: 'Book Wishlist'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'book-detail/:id',
        component: BookDetailComponent,
        data: {title: 'Book Details'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'book-create',
        component: BookCreateComponent,
        data: {title: 'Create Book'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'book-edit/:id',
        component: BookEditComponent,
        data: {title: 'Edit Book'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'parcourir/games',
        component: GameComponent,
        data: {title: 'Game List'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'collection/games',
        component: GameCollectionComponent,
        data: {title: 'Game Collection'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'envies/games',
        component: GameWishlistComponent,
        data: {title: 'Games Wishlist'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'game-detail/:id',
        component: GameDetailComponent,
        data: {title: 'Game Details'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'game-create',
        component: GameCreateComponent,
        data: {title: 'Create Game'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'game-edit/:id',
        component: GameEditComponent,
        data: {title: 'Edit Game'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'parcourir/movies',
        component: MovieComponent,
        data: {title: 'Movie List'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'collection/movies',
        component: MovieCollectionComponent,
        data: {title: 'Movie Collection'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'envies/movies',
        component: MovieWishlistComponent,
        data: {title: 'Movie Wishlist'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'movie-detail/:id',
        component: MovieDetailComponent,
        data: {title: 'Movie Details'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'movie-create',
        component: MovieCreateComponent,
        data: {title: 'Create Movie'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'movie-edit/:id',
        component: MovieEditComponent,
        data: {title: 'Edit Movie'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'parcourir/series',
        component: SerieComponent,
        data: {title: 'Serie List'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'collection/series',
        component: SerieCollectionComponent,
        data: {title: 'Serie List'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'envies/series',
        component: SerieWishlistComponent,
        data: {title: 'Serie List'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'serie-detail/:id',
        component: SerieDetailComponent,
        data: {title: 'Serie Details'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'serie-create',
        component: SerieCreateComponent,
        data: {title: 'Create Serie'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'serie-edit/:id',
        component: SerieEditComponent,
        data: {title: 'Edit Serie'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: 'book-avis/:id',
        component: BookAvisComponent,
        data: {title: 'Book avis'},
        canActivate: [AuthGuardConnected]
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'parcourir',
        pathMatch: 'full',
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        redirectTo: 'parcourir',
        pathMatch: 'full',
    }
];


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        BookComponent,
        BookDetailComponent,
        BookCreateComponent,
        BookEditComponent,
        AlbumComponent,
        AlbumDetailComponent,
        AlbumCreateComponent,
        AlbumEditComponent,
        MovieComponent,
        MovieCreateComponent,
        MovieDetailComponent,
        MovieEditComponent,
        GameComponent,
        SerieComponent,
        GameCreateComponent,
        SerieCreateComponent,
        GameDetailComponent,
        SerieDetailComponent,
        GameEditComponent,
        SerieEditComponent,
        TitleComponent,
        CatComponent,
        LeftComponent,
        ParcourirComponent,
        BookCollectionComponent,
        CollectionComponent,
        EnviesComponent,
        BookWishlistComponent,
        AlbumCollectionComponent,
        AlbumWishlistComponent,
        GameCollectionComponent,
        GameWishlistComponent,
        MovieCollectionComponent,
        MovieWishlistComponent,
        SerieCollectionComponent,
        SerieWishlistComponent,
        BookAvisComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        )
    ],
    providers: [
        AuthenticationService,
        AuthGuardConnected,
        AuthGuardDisconnected,
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
