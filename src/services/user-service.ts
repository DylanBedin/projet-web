import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class User {
    _id: string;
    username: string;
    password: string;
    project: [string];
}

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
    var  users;
           this.http.get('/user').subscribe(data => {users = data;
  });;
  return users;
    }

    getById(_id: string) {
        return this.http.get('/' + _id)  .map((response: Response) => {
              let user = response;
                  localStorage.setItem('currentUser', JSON.stringify(user));
              return user;
          });
    }

    create(user: User) {
        return this.http.post('/users', user);
    }


    update(user: User) {
        return this.http.put('/users/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete('/users/' + _id);
    }
}
