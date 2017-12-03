import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';

import {RouterModule, Routes} from '@angular/router';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {AlbumComponent} from './album/album.component';
import {AlbumDetailComponent} from './album-detail/album-detail.component';
import {AlbumCreateComponent} from './album-create/album-create.component';
import {AlbumEditComponent} from './album-edit/album-edit.component';
import {MovieComponent} from './movie/movie.component';
import {MovieCreateComponent} from './movie-create/movie-create.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MovieEditComponent} from './movie-edit/movie-edit.component';
import { GameComponent } from './game/game.component';
import { SerieComponent } from './serie/serie.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { SerieCreateComponent } from './serie-create/serie-create.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { SerieEditComponent } from './serie-edit/serie-edit.component';


const appRoutes: Routes = [
    {
        path: 'albums',
        component: AlbumComponent,
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
        path: 'books',
        component: BookComponent,
        data: {title: 'Book List'}
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
        path: 'games',
        component: GameComponent,
        data: {title: 'Game List'}
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
        path: 'movies',
        component: MovieComponent,
        data: {title: 'Movie List'}
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
        path: 'series',
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
        redirectTo: '/books',
        pathMatch: 'full'
    }
];


@NgModule({
    declarations: [
        AppComponent,
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
        SerieEditComponent
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
