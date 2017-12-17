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


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'parcourir', component: ParcourirComponent},
    { path: 'collection', component: CollectionComponent},
    { path: 'envies', component: EnviesComponent},
    {
        path: 'parcourir/albums',
        component: AlbumComponent,
        data: {title: 'Album List'}
    },
    {
        path: 'collection/albums',
        component: AlbumCollectionComponent,
        data: {title: 'Album Collection'}
    },
    {
        path: 'envies/albums',
        component: AlbumWishlistComponent,
        data: {title: 'Album List'}
    },
    {
        path: 'album-detail/:id',
        component: AlbumDetailComponent,
        data: {title: 'Album Details'}
    },
    {
        path: 'album-create',
        component: AlbumCreateComponent,
        data: {title: 'Create Album'}
    },
    {
        path: 'album-edit/:id',
        component: AlbumEditComponent,
        data: {title: 'Edit Album'}
    },
    {
        path: 'parcourir/books',
        component: BookComponent,
        data: {title: 'Book List'}
    },
    {
        path: 'collection/books',
        component: BookCollectionComponent,
        data: {title: 'Book Collection'}
    },
    {
        path: 'envies/books',
        component: BookWishlistComponent,
        data: {title: 'Book Wishlist'}
    },
    {
        path: 'book-detail/:id',
        component: BookDetailComponent,
        data: {title: 'Book Details'}
    },
    {
        path: 'book-create',
        component: BookCreateComponent,
        data: {title: 'Create Book'}
    },
    {
        path: 'book-edit/:id',
        component: BookEditComponent,
        data: {title: 'Edit Book'}
    },
    {
        path: 'parcourir/games',
        component: GameComponent,
        data: {title: 'Game List'}
    },
    {
        path: 'collection/games',
        component: GameCollectionComponent,
        data: {title: 'Album List'}
    },
    {
        path: 'envies/games',
        component: GameWishlistComponent,
        data: {title: 'Album List'}
    },
    {
        path: 'game-detail/:id',
        component: GameDetailComponent,
        data: {title: 'Game Details'}
    },
    {
        path: 'game-create',
        component: GameCreateComponent,
        data: {title: 'Create Game'}
    },
    {
        path: 'game-edit/:id',
        component: GameEditComponent,
        data: {title: 'Edit Game'}
    },
    {
        path: 'parcourir/movies',
        component: MovieComponent,
        data: {title: 'Movie List'}
    },
    {
        path: 'collection/movies',
        component: MovieComponent,
        data: {title: 'Album List'}
    },
    {
        path: 'envies/movies',
        component: MovieComponent,
        data: {title: 'Album List'}
    },
    {
        path: 'movie-detail/:id',
        component: MovieDetailComponent,
        data: {title: 'Movie Details'}
    },
    {
        path: 'movie-create',
        component: MovieCreateComponent,
        data: {title: 'Create Movie'}
    },
    {
        path: 'movie-edit/:id',
        component: MovieEditComponent,
        data: {title: 'Edit Movie'}
    },
    {
        path: 'parcourir/series',
        component: SerieComponent,
        data: {title: 'Serie List'}
    },
    {
        path: 'collection/series',
        component: SerieComponent,
        data: {title: 'Serie List'}
    },
    {
        path: 'envies/series',
        component: SerieComponent,
        data: {title: 'Serie List'}
    },
    {
        path: 'serie-detail/:id',
        component: SerieDetailComponent,
        data: {title: 'Serie Details'}
    },
    {
        path: 'serie-create',
        component: SerieCreateComponent,
        data: {title: 'Create Serie'}
    },
    {
        path: 'serie-edit/:id',
        component: SerieEditComponent,
        data: {title: 'Edit Serie'}
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
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
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
